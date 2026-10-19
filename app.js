/* ============================================================
   Ứng dụng ôn tập CNXHKH — logic chính
   ============================================================ */
(function () {
  "use strict";

  var STORAGE_KEY = "cnxhkh_bank_v2";
  var bank = loadBank();

  var quiz = {
    questions: [],
    index: 0,
    results: [],
    answered: false
  };

  var dragState = { assigned: {}, selected: null, termOrder: [] };
  var editingId = null; // id đang sửa trong form quản lý

  /* ---------------- Dữ liệu ---------------- */
  function loadBank() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length) return parsed;
      }
    } catch (e) { /* bỏ qua, dùng seed */ }
    return JSON.parse(JSON.stringify(window.SEED_QUESTIONS || []));
  }
  function saveBank() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(bank)); } catch (e) { /* bộ nhớ trình duyệt không khả dụng */ }
  }
  function resetBank() {
    bank = JSON.parse(JSON.stringify(window.SEED_QUESTIONS || []));
    saveBank();
  }
  function uid() {
    return "q" + Date.now().toString(36) + Math.floor(Math.random() * 1000).toString(36);
  }

  // Thông báo ngắn (thay cho toast() — không chạy được trong khung bảo mật của Artifact)
  var toastTimer = null;
  function toast(msg) {
    var el = document.getElementById("toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove("show"); }, 2600);
  }

  // Hộp xác nhận trong trang (thay cho confirm())
  function askConfirm(msg, okLabel, onYes) {
    document.getElementById("confirmMsg").textContent = msg;
    var ok = document.getElementById("confirmOk");
    ok.textContent = okLabel || "Xóa";
    document.getElementById("confirmModal").classList.remove("hidden");
    ok.onclick = function () {
      document.getElementById("confirmModal").classList.add("hidden");
      onYes && onYes();
    };
    document.getElementById("confirmCancel").onclick = function () {
      document.getElementById("confirmModal").classList.add("hidden");
    };
  }

  // Sao chép văn bản vào clipboard (có dự phòng khi trình duyệt chặn)
  function copyText(text, cb) {
    function fallback() {
      try {
        var ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        var ok = document.execCommand("copy");
        document.body.removeChild(ta);
        cb && cb(ok);
      } catch (e) { cb && cb(false); }
    }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () { cb && cb(true); }, fallback);
    } else {
      fallback();
    }
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function typeLabel(t) {
    return { mcq: "Trắc nghiệm", multi: "Nhiều đáp án", tf: "Đúng/Sai", drag: "Kéo thả" }[t] || t;
  }

  /* ---------------- Điều hướng tab ---------------- */
  var tabs = document.querySelectorAll("#mainTabs .tab");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) { t.classList.remove("active"); });
      tab.classList.add("active");
      showView(tab.dataset.view);
    });
  });
  function showView(name) {
    document.querySelectorAll(".view").forEach(function (v) { v.classList.remove("active"); });
    document.getElementById("view-" + name).classList.add("active");
    if (name === "manage") renderManage();
  }

  /* ---------------- Trang chọn chủ đề ---------------- */
  function renderHome() {
    var list = document.getElementById("topicList");
    list.innerHTML = "";
    var topics = {};
    bank.forEach(function (q) {
      var t = q.topic || "Chung";
      topics[t] = (topics[t] || 0) + 1;
    });
    var allRow = topicRow("🎯 Tất cả câu hỏi", bank.length, null);
    list.appendChild(allRow);
    Object.keys(topics).forEach(function (t) {
      list.appendChild(topicRow(t, topics[t], t));
    });
  }
  function topicRow(name, count, topic) {
    var div = document.createElement("div");
    div.className = "topic-item";
    div.innerHTML = '<span class="t-name"></span><span class="t-count"></span>';
    div.querySelector(".t-name").textContent = name;
    div.querySelector(".t-count").textContent = count + " câu";
    div.addEventListener("click", function () { startQuiz(topic); });
    return div;
  }

  function startQuiz(topic) {
    var qs = bank;
    if (topic) qs = qs.filter(function (q) { return q.topic === topic; });
    if (document.getElementById("shuffleToggle").checked) qs = shuffle(qs);
    quiz.questions = qs;
    quiz.index = 0;
    quiz.results = [];
    quiz.answered = false;

    document.getElementById("quiz-home").classList.add("hidden");
    document.getElementById("quiz-result").classList.add("hidden");
    document.getElementById("quiz-run").classList.remove("hidden");
    renderQuestion();
  }

  document.getElementById("btnBackHome").addEventListener("click", goHome);
  document.getElementById("btnResultHome").addEventListener("click", goHome);
  function goHome() {
    document.getElementById("quiz-run").classList.add("hidden");
    document.getElementById("quiz-result").classList.add("hidden");
    document.getElementById("quiz-home").classList.remove("hidden");
    renderHome();
  }

  /* ---------------- Render câu hỏi ---------------- */
  function renderQuestion() {
    var q = quiz.questions[quiz.index];
    quiz.answered = false;
    dragState = { assigned: {}, selected: null, termOrder: [] };

    document.getElementById("progressText").textContent =
      "Câu " + (quiz.index + 1) + " / " + quiz.questions.length;
    document.getElementById("progressFill").style.width =
      (quiz.index / quiz.questions.length * 100) + "%";

    var card = document.getElementById("questionCard");
    var tag = '<span class="q-tag">' + escapeHtml(q.topic || "Chung") +
              '<span class="q-type-tag">' + typeLabel(q.type) + "</span></span>";
    var html = tag + '<p class="q-text">' + escapeHtml(q.question) + "</p>";

    if (q.type === "mcq") html += renderMcq(q);
    else if (q.type === "multi") html += renderMulti(q);
    else if (q.type === "tf") html += renderTf(q);
    else if (q.type === "drag") html += renderDrag(q);

    card.innerHTML = html;
    bindQuestionEvents(q);

    document.getElementById("btnCheck").classList.remove("hidden");
    document.getElementById("btnNext").classList.add("hidden");
    var fb = document.getElementById("feedback");
    fb.className = "feedback";
    fb.innerHTML = "";
  }

  function renderMcq(q) {
    var html = "";
    q.options.forEach(function (opt, i) {
      html += '<div class="option" data-i="' + i + '">' +
        '<span class="opt-letter">' + String.fromCharCode(65 + i) + "</span>" +
        "<span>" + escapeHtml(opt) + "</span></div>";
    });
    return html;
  }

  function renderMulti(q) {
    var html = '<p class="q-text" style="font-weight:400;font-size:13.5px;color:var(--muted)">Chọn ' +
      (q.pick || 2) + " đáp án đúng</p>";
    q.options.forEach(function (opt, i) {
      html += '<div class="option" data-i="' + i + '">' +
        '<span class="opt-letter">' + String.fromCharCode(65 + i) + "</span>" +
        "<span>" + escapeHtml(opt) + "</span></div>";
    });
    return html;
  }

  function renderTf(q) {
    var html = "";
    q.statements.forEach(function (st, i) {
      html += '<div class="tf-statement" data-i="' + i + '">' +
        '<div class="tf-text"><strong>' + (i + 1) + ".</strong> " + escapeHtml(st.text) + "</div>" +
        '<div class="tf-btns">' +
        '<button data-val="true">Đúng</button>' +
        '<button data-val="false">Sai</button>' +
        "</div></div>";
    });
    return html;
  }

  function renderDrag(q) {
    dragState.termOrder = shuffle(q.pairs.map(function (_, i) { return i; }));
    var html = '<div class="drag-zone">';
    html += '<div class="drag-pool"><h4>Kéo thả hoặc bấm chọn</h4><p class="drag-hint">Trên điện thoại: bấm chọn một đáp án, rồi bấm vào ô tương ứng.</p>';
    dragState.termOrder.forEach(function (ti) {
      html += '<div class="chip" draggable="true" data-term="' + ti + '">' +
        escapeHtml(q.pairs[ti].term) + "</div>";
    });
    html += "</div><div class='drag-targets'><h4>Thả vào phát biểu tương ứng</h4>";
    q.pairs.forEach(function (p, i) {
      html += '<div class="drag-target" data-target="' + i + '">' +
        '<div class="target-text">' + escapeHtml(p.definition) + "</div>" +
        '<div class="slot" data-slot="' + i + '"><span class="ph">— Thả vào đây —</span></div>' +
        "</div>";
    });
    html += "</div></div>";
    return html;
  }

  /* ---------------- Bind sự kiện câu hỏi ---------------- */
  function bindQuestionEvents(q) {
    var card = document.getElementById("questionCard");

    if (q.type === "mcq") {
      card.querySelectorAll(".option").forEach(function (el) {
        el.addEventListener("click", function () {
          if (quiz.answered) return;
          card.querySelectorAll(".option").forEach(function (o) { o.classList.remove("selected"); });
          el.classList.add("selected");
        });
      });
    }

    if (q.type === "multi") {
      var pick = q.pick || 2;
      card.querySelectorAll(".option").forEach(function (el) {
        el.addEventListener("click", function () {
          if (quiz.answered) return;
          var selected = card.querySelectorAll(".option.selected").length;
          if (el.classList.contains("selected")) { el.classList.remove("selected"); return; }
          if (selected >= pick) return;
          el.classList.add("selected");
        });
      });
    }

    if (q.type === "tf") {
      card.querySelectorAll(".tf-statement").forEach(function (st) {
        st.querySelectorAll("button").forEach(function (btn) {
          btn.addEventListener("click", function () {
            if (quiz.answered) return;
            st.querySelectorAll("button").forEach(function (b) {
              b.classList.remove("on-true", "on-false");
            });
            btn.classList.add(btn.dataset.val === "true" ? "on-true" : "on-false");
          });
        });
      });
    }

    if (q.type === "drag") {
      bindDragEvents(card, q);
    }
  }

  function bindDragEvents(card, q) {
    // HTML5 drag & drop
    card.querySelectorAll(".chip").forEach(function (chip) {
      chip.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("text/plain", chip.dataset.term);
        chip.classList.add("selected-chip");
      });
      chip.addEventListener("dragend", function () { chip.classList.remove("selected-chip"); });
      // click để chọn
      chip.addEventListener("click", function () {
        if (quiz.answered) return;
        var ti = parseInt(chip.dataset.term, 10);
        if (dragState.assigned && Object.values(dragState.assigned).indexOf(ti) !== -1) return;
        card.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("selected-chip"); });
        dragState.selected = ti;
        chip.classList.add("selected-chip");
      });
    });

    card.querySelectorAll(".drag-target").forEach(function (target) {
      target.addEventListener("dragover", function (e) { e.preventDefault(); });
      target.addEventListener("drop", function (e) {
        e.preventDefault();
        var ti = parseInt(e.dataTransfer.getData("text/plain"), 10);
        placeTerm(card, q, ti, parseInt(target.dataset.target, 10));
      });
      target.addEventListener("click", function () {
        if (quiz.answered) return;
        if (dragState.selected == null) return;
        placeTerm(card, q, dragState.selected, parseInt(target.dataset.target, 10));
      });
    });
  }

  function placeTerm(card, q, termIdx, targetIdx) {
    if (quiz.answered) return;
    // trả term cũ trong slot này về pool
    for (var key in dragState.assigned) {
      if (dragState.assigned[key] === termIdx) delete dragState.assigned[key];
    }
    dragState.assigned[targetIdx] = termIdx;
    dragState.selected = null;
    refreshDrag(card, q);
  }

  function removeTerm(card, q, targetIdx) {
    if (quiz.answered) return;
    delete dragState.assigned[targetIdx];
    refreshDrag(card, q);
  }

  function refreshDrag(card, q) {
    card.querySelectorAll(".chip").forEach(function (chip) {
      var ti = parseInt(chip.dataset.term, 10);
      var used = Object.values(dragState.assigned).indexOf(ti) !== -1;
      chip.classList.toggle("used", used);
      chip.classList.remove("selected-chip");
    });
    card.querySelectorAll(".drag-target").forEach(function (target) {
      var i = parseInt(target.dataset.target, 10);
      var slot = target.querySelector(".slot");
      var assigned = dragState.assigned[i];
      if (assigned != null) {
        slot.classList.add("filled");
        slot.innerHTML = '<span>' + escapeHtml(q.pairs[assigned].term) +
          '</span><span class="rm" data-rm="' + i + '">✕</span>';
      } else {
        slot.classList.remove("filled");
        slot.innerHTML = '<span class="ph">— Thả vào đây —</span>';
      }
    });
    card.querySelectorAll(".rm").forEach(function (rm) {
      rm.addEventListener("click", function (e) {
        e.stopPropagation();
        removeTerm(card, q, parseInt(rm.dataset.rm, 10));
      });
    });
  }

  /* ---------------- Kiểm tra đáp án ---------------- */
  function getUserAnswer(q) {
    var card = document.getElementById("questionCard");
    if (q.type === "mcq") {
      var sel = card.querySelector(".option.selected");
      return sel ? parseInt(sel.dataset.i, 10) : null;
    }
    if (q.type === "multi") {
      var idx = [];
      card.querySelectorAll(".option.selected").forEach(function (o) { idx.push(parseInt(o.dataset.i, 10)); });
      return idx.sort(function (a, b) { return a - b; });
    }
    if (q.type === "tf") {
      var arr = [];
      card.querySelectorAll(".tf-statement").forEach(function (st) {
        var on = st.querySelector("button.on-true, button.on-false");
        arr.push(on ? on.dataset.val === "true" : null);
      });
      return arr;
    }
    if (q.type === "drag") {
      var assigned = {};
      for (var k in dragState.assigned) assigned[k] = dragState.assigned[k];
      return assigned;
    }
    return null;
  }

  function isCorrect(q, ans) {
    if (q.type === "mcq") return ans === q.answer;
    if (q.type === "multi") {
      var a = q.answer.slice().sort(function (x, y) { return x - y; });
      return JSON.stringify(ans) === JSON.stringify(a);
    }
    if (q.type === "tf") {
      return q.statements.every(function (st, i) { return ans[i] === st.answer; });
    }
    if (q.type === "drag") {
      return q.pairs.every(function (_, i) { return ans[i] === i; });
    }
    return false;
  }

  document.getElementById("btnCheck").addEventListener("click", function () {
    if (quiz.answered) return;
    var q = quiz.questions[quiz.index];
    var ans = getUserAnswer(q);
    var card = document.getElementById("questionCard");
    var fb = document.getElementById("feedback");

    // kiểm tra đã trả lời đủ chưa
    var incomplete = false;
    if (q.type === "mcq" && ans == null) incomplete = true;
    if (q.type === "multi" && ans.length !== (q.pick || 2)) incomplete = true;
    if (q.type === "tf" && ans.some(function (a) { return a == null; })) incomplete = true;
    if (q.type === "drag" && Object.keys(ans).length !== q.pairs.length) incomplete = true;
    if (incomplete) {
      fb.className = "feedback show no";
      fb.innerHTML = "⚠️ Bạn chưa trả lời đủ. Hãy chọn đầy đủ đáp án.";
      return;
    }

    var ok = isCorrect(q, ans);
    quiz.answered = true;
    quiz.results[quiz.index] = ok;
    markCorrectAnswer(q, ans);

    fb.className = "feedback show " + (ok ? "ok" : "no");
    var msg = ok ? "✅ Chính xác!" : "❌ Chưa đúng.";
    fb.innerHTML = msg + (q.explanation ? '<div class="fb-explain"><strong>Giải thích:</strong> ' + escapeHtml(q.explanation) + "</div>" : "");

    document.getElementById("btnCheck").classList.add("hidden");
    var btnNext = document.getElementById("btnNext");
    btnNext.classList.remove("hidden");
    btnNext.textContent = (quiz.index === quiz.questions.length - 1) ? "Xem kết quả →" : "Câu tiếp theo →";
  });

  function markCorrectAnswer(q, ans) {
    var card = document.getElementById("questionCard");
    card.querySelectorAll(".option").forEach(function (o) { o.classList.add("locked"); });

    if (q.type === "mcq") {
      card.querySelectorAll(".option").forEach(function (o) {
        var i = parseInt(o.dataset.i, 10);
        if (i === q.answer) o.classList.add("correct");
        else if (ans === i) o.classList.add("wrong");
      });
    }
    if (q.type === "multi") {
      card.querySelectorAll(".option").forEach(function (o) {
        var i = parseInt(o.dataset.i, 10);
        if (q.answer.indexOf(i) !== -1) o.classList.add("correct");
        else if (ans.indexOf(i) !== -1) o.classList.add("wrong");
      });
    }
    if (q.type === "tf") {
      card.querySelectorAll(".tf-statement").forEach(function (st, i) {
        st.querySelectorAll("button").forEach(function (b) {
          b.classList.add("locked");
          b.classList.remove("on-true", "on-false");
        });
        var trueBtn = st.querySelector('button[data-val="true"]');
        var falseBtn = st.querySelector('button[data-val="false"]');
        var correctBtn = q.statements[i].answer ? trueBtn : falseBtn;
        correctBtn.classList.add("tf-correct");
        if (ans[i] !== q.statements[i].answer) {
          (ans[i] === true ? trueBtn : falseBtn).classList.add("tf-wrong");
        }
      });
    }
    if (q.type === "drag") {
      card.querySelectorAll(".drag-target").forEach(function (target) {
        var i = parseInt(target.dataset.target, 10);
        target.classList.add(ans[i] === i ? "correct" : "wrong");
      });
    }
  }

  document.getElementById("btnNext").addEventListener("click", function () {
    if (quiz.index < quiz.questions.length - 1) {
      quiz.index++;
      renderQuestion();
    } else {
      showResult();
    }
  });

  function showResult() {
    document.getElementById("quiz-run").classList.add("hidden");
    document.getElementById("quiz-result").classList.remove("hidden");
    var total = quiz.questions.length;
    var score = quiz.results.filter(Boolean).length;
    document.getElementById("scoreBig").textContent = score + " / " + total;
    var pct = total ? score / total : 0;
    var msg = pct === 1 ? "🏆 Xuất sắc! Bạn nắm rất chắc kiến thức."
      : pct >= 0.8 ? "👍 Tốt lắm, ôn thêm phần sai là ổn."
      : pct >= 0.5 ? "📖 Khá. Hãy xem lại các câu sai dưới đây."
      : "💪 Cần ôn kỹ hơn. Xem lại các câu sai nhé.";
    document.getElementById("scoreMsg").textContent = msg;

    var wl = document.getElementById("wrongList");
    wl.innerHTML = "";
    quiz.questions.forEach(function (q, i) {
      if (quiz.results[i]) return;
      var div = document.createElement("div");
      div.className = "wrong-item";
      var ans = correctAnswerText(q);
      div.innerHTML = '<div class="wi-q">' + escapeHtml(q.question) + "</div>" +
        '<div class="wi-a">Đáp án: ' + escapeHtml(ans) + "</div>";
      wl.appendChild(div);
    });
  }

  function correctAnswerText(q) {
    if (q.type === "mcq") return String.fromCharCode(65 + q.answer) + ". " + q.options[q.answer];
    if (q.type === "multi") return q.answer.map(function (i) { return String.fromCharCode(65 + i); }).join(", ") +
      " — " + q.answer.map(function (i) { return q.options[i]; }).join("; ");
    if (q.type === "tf") return q.statements.map(function (s, i) { return (i + 1) + ") " + (s.answer ? "Đúng" : "Sai"); }).join("; ");
    if (q.type === "drag") return q.pairs.map(function (p) { return p.definition.split(" ").slice(0, 4).join(" ") + "… → " + p.term; }).join("; ");
    return "";
  }

  document.getElementById("btnRetry").addEventListener("click", function () {
    var current = quiz.questions;
    if (document.getElementById("shuffleToggle").checked) current = shuffle(current);
    quiz.questions = current;
    quiz.index = 0;
    quiz.results = [];
    quiz.answered = false;
    document.getElementById("quiz-result").classList.add("hidden");
    document.getElementById("quiz-run").classList.remove("hidden");
    renderQuestion();
  });

  /* ---------------- Quản lý câu hỏi ---------------- */
  function renderManage() {
    var list = document.getElementById("manageList");
    list.innerHTML = "";
    if (!bank.length) { list.innerHTML = '<p class="hint">Chưa có câu hỏi nào.</p>'; }
    bank.forEach(function (q, idx) {
      var div = document.createElement("div");
      div.className = "mg-item";
      var meta = typeLabel(q.type) + " · " + (q.topic || "Chung");
      div.innerHTML = '<div class="mg-top"><div><div class="mg-q"></div><div class="mg-meta"></div></div>' +
        '<div class="mg-btns"><button class="edit">Sửa</button><button class="del">Xóa</button></div></div>';
      div.querySelector(".mg-q").textContent = q.question;
      div.querySelector(".mg-meta").textContent = meta;
      div.querySelector(".edit").addEventListener("click", function () { openEdit(idx); });
      div.querySelector(".del").addEventListener("click", function () {
        askConfirm("Xóa câu hỏi này?", "Xóa", function () {
          bank.splice(idx, 1); saveBank(); renderManage(); renderHome();
        });
      });
      list.appendChild(div);
    });
  }

  document.getElementById("btnAdd").addEventListener("click", function () { openEdit(null); });
  document.getElementById("btnReset").addEventListener("click", function () {
    askConfirm("Đặt lại toàn bộ ngân hàng câu hỏi về bản gốc? Mọi thay đổi của bạn sẽ mất.", "Đặt lại", function () {
      resetBank(); renderManage(); renderHome();
    });
  });
  document.getElementById("btnExport").addEventListener("click", function () {
    var json = JSON.stringify(bank, null, 2);
    copyText(json, function (ok) {
      toast(ok ? "Đã sao chép JSON vào bộ nhớ tạm." : "Không thể sao chép tự động. Hãy chọn lại.");
    });
  });
  document.getElementById("btnImport").addEventListener("click", function () {
    document.getElementById("importFile").click();
  });
  document.getElementById("importFile").addEventListener("change", function (e) {
    var file = e.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function () {
      try {
        var data = JSON.parse(reader.result);
        if (!Array.isArray(data)) throw new Error("Định dạng sai");
        bank = data;
        saveBank();
        renderManage(); renderHome();
        toast("Đã nhập " + data.length + " câu hỏi.");
      } catch (err) { toast("Không đọc được file JSON."); }
    };
    reader.readAsText(file);
    e.target.value = "";
  });

  /* ---- Form thêm/sửa ---- */
  var editFormState = { options: [], statements: [], pairs: [], correct: null, correctMulti: [] };

  function openEdit(idx) {
    editingId = idx;
    var q = idx == null ? null : bank[idx];
    document.getElementById("editTitle").textContent = idx == null ? "Thêm câu hỏi" : "Sửa câu hỏi";
    document.getElementById("fTopic").value = q ? (q.topic || "") : "";
    document.getElementById("fQuestion").value = q ? q.question : "";
    document.getElementById("fExplain").value = q ? (q.explanation || "") : "";
    document.getElementById("fType").value = q ? q.type : "mcq";

    editFormState.options = q && q.options ? q.options.slice() : ["", "", "", ""];
    editFormState.correct = q && q.type === "mcq" ? q.answer : 0;
    editFormState.correctMulti = q && q.type === "multi" ? q.answer.slice() : [0];
    editFormState.statements = q && q.type === "tf" ? q.statements.map(function (s) { return { text: s.text, answer: s.answer }; }) : [{ text: "", answer: true }, { text: "", answer: true }];
    editFormState.pairs = q && q.type === "drag" ? q.pairs.map(function (p) { return { term: p.term, definition: p.definition }; }) : [{ term: "", definition: "" }, { term: "", definition: "" }];

    buildFormBody();
    document.getElementById("editModal").classList.remove("hidden");
  }

  document.getElementById("fType").addEventListener("change", buildFormBody);
  document.getElementById("btnCancelEdit").addEventListener("click", function () {
    document.getElementById("editModal").classList.add("hidden");
  });

  function buildFormBody() {
    var type = document.getElementById("fType").value;
    var body = document.getElementById("fBody");
    var html = "";

    if (type === "mcq" || type === "multi") {
      var pick = type === "multi";
      editFormState.options.forEach(function (opt, i) {
        var mark = pick
          ? '<label class="correct-mark" style="margin-left:8px"><input type="checkbox" class="cmark" data-i="' + i + '"' + (editFormState.correctMulti.indexOf(i) !== -1 ? " checked" : "") + '> đúng</label>'
          : '<label class="correct-mark" style="margin-left:8px"><input type="radio" name="mcorrect" class="cmark" data-i="' + i + '"' + (editFormState.correct === i ? " checked" : "") + '> đúng</label>';
        html += '<div class="fbody-row"><input type="text" class="fopt" data-i="' + i + '" value="' + escapeHtml(opt) + '" placeholder="Đáp án ' + String.fromCharCode(65 + i) + '">' + mark + '<span class="rm-row" data-i="' + i + '">✕</span></div>';
      });
      html += '<button type="button" class="btn secondary" id="btnAddOpt">＋ Thêm đáp án</button>';
      if (pick) {
        html += '<label style="margin-top:12px">Số đáp án đúng cần chọn<input type="number" id="fPick" min="1" value="' + (editingId != null && bank[editingId].pick ? bank[editingId].pick : 2) + '"></label>';
      }
    } else if (type === "tf") {
      editFormState.statements.forEach(function (st, i) {
        var checkedTrue = st.answer ? " checked" : "";
        var checkedFalse = st.answer ? "" : " checked";
        html += '<div class="fbody-row"><textarea class="fstmt" data-i="' + i + '" rows="1" placeholder="Phát biểu ' + (i + 1) + '">' + escapeHtml(st.text) + '</textarea>' +
          '<label class="correct-mark" style="margin-left:8px"><input type="radio" name="stmt' + i + '" class="stmtTrue" data-i="' + i + '"' + checkedTrue + '> Đúng</label>' +
          '<label class="correct-mark" style="margin-left:4px"><input type="radio" name="stmt' + i + '" class="stmtFalse" data-i="' + i + '"' + checkedFalse + '> Sai</label>' +
          '<span class="rm-row" data-i="' + i + '">✕</span></div>';
      });
      html += '<button type="button" class="btn secondary" id="btnAddStmt">＋ Thêm phát biểu</button>';
    } else if (type === "drag") {
      editFormState.pairs.forEach(function (p, i) {
        html += '<div class="fbody-row"><input type="text" class="fterm" data-i="' + i + '" value="' + escapeHtml(p.term) + '" placeholder="Khái niệm ' + (i + 1) + '">' +
          '<textarea class="fdef" data-i="' + i + '" rows="1" placeholder="Phát biểu tương ứng">' + escapeHtml(p.definition) + '</textarea>' +
          '<span class="rm-row" data-i="' + i + '">✕</span></div>';
      });
      html += '<button type="button" class="btn secondary" id="btnAddPair">＋ Thêm cặp</button>';
    }

    body.innerHTML = html;
    bindFormBody(type);
  }

  function bindFormBody(type) {
    var body = document.getElementById("fBody");
    body.querySelectorAll(".rm-row").forEach(function (el) {
      el.addEventListener("click", function () {
        var i = parseInt(el.dataset.i, 10);
        if (type === "mcq" || type === "multi") {
          editFormState.options.splice(i, 1);
          editFormState.correctMulti = editFormState.correctMulti.filter(function (x) { return x !== i; }).map(function (x) { return x > i ? x - 1 : x; });
          if (editFormState.correct === i) editFormState.correct = 0;
          else if (editFormState.correct > i) editFormState.correct--;
        } else if (type === "tf") { editFormState.statements.splice(i, 1); }
        else if (type === "drag") { editFormState.pairs.splice(i, 1); }
        buildFormBody();
      });
    });

    var addOpt = body.querySelector("#btnAddOpt");
    if (addOpt) addOpt.addEventListener("click", function () { editFormState.options.push(""); buildFormBody(); });
    var addStmt = body.querySelector("#btnAddStmt");
    if (addStmt) addStmt.addEventListener("click", function () { editFormState.statements.push({ text: "", answer: true }); buildFormBody(); });
    var addPair = body.querySelector("#btnAddPair");
    if (addPair) addPair.addEventListener("click", function () { editFormState.pairs.push({ term: "", definition: "" }); buildFormBody(); });

    body.querySelectorAll(".fopt").forEach(function (inp) {
      inp.addEventListener("input", function () { editFormState.options[parseInt(inp.dataset.i, 10)] = inp.value; });
    });
    body.querySelectorAll(".fstmt").forEach(function (inp) {
      inp.addEventListener("input", function () { editFormState.statements[parseInt(inp.dataset.i, 10)].text = inp.value; });
    });
    body.querySelectorAll(".fterm").forEach(function (inp) {
      inp.addEventListener("input", function () { editFormState.pairs[parseInt(inp.dataset.i, 10)].term = inp.value; });
    });
    body.querySelectorAll(".fdef").forEach(function (inp) {
      inp.addEventListener("input", function () { editFormState.pairs[parseInt(inp.dataset.i, 10)].definition = inp.value; });
    });
    body.querySelectorAll(".cmark").forEach(function (c) {
      c.addEventListener("change", function () {
        var i = parseInt(c.dataset.i, 10);
        if (c.type === "radio") editFormState.correct = i;
        else {
          if (c.checked) { if (editFormState.correctMulti.indexOf(i) === -1) editFormState.correctMulti.push(i); }
          else editFormState.correctMulti = editFormState.correctMulti.filter(function (x) { return x !== i; });
        }
      });
    });
    body.querySelectorAll(".stmtTrue").forEach(function (c) {
      c.addEventListener("change", function () { if (c.checked) editFormState.statements[parseInt(c.dataset.i, 10)].answer = true; });
    });
    body.querySelectorAll(".stmtFalse").forEach(function (c) {
      c.addEventListener("change", function () { if (c.checked) editFormState.statements[parseInt(c.dataset.i, 10)].answer = false; });
    });
  }

  document.getElementById("qForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var type = document.getElementById("fType").value;
    var q = {
      topic: document.getElementById("fTopic").value.trim() || "Chung",
      type: type,
      question: document.getElementById("fQuestion").value.trim(),
      explanation: document.getElementById("fExplain").value.trim()
    };

    if (!q.question) { toast("Vui lòng nhập nội dung câu hỏi."); return; }

    if (type === "mcq") {
      q.options = editFormState.options.map(function (o) { return o.trim(); });
      q.answer = editFormState.correct;
      if (q.options.some(function (o) { return !o; })) { toast("Vui lòng điền đủ các đáp án."); return; }
    } else if (type === "multi") {
      q.options = editFormState.options.map(function (o) { return o.trim(); });
      q.answer = editFormState.correctMulti.slice().sort(function (a, b) { return a - b; });
      q.pick = parseInt(document.getElementById("fPick").value, 10) || 2;
      if (q.options.some(function (o) { return !o; })) { toast("Vui lòng điền đủ các đáp án."); return; }
      if (!q.answer.length) { toast("Hãy đánh dấu ít nhất một đáp án đúng."); return; }
    } else if (type === "tf") {
      q.statements = editFormState.statements.map(function (s) { return { text: s.text.trim(), answer: s.answer }; });
      if (q.statements.some(function (s) { return !s.text; })) { toast("Vui lòng điền đủ các phát biểu."); return; }
    } else if (type === "drag") {
      q.pairs = editFormState.pairs.map(function (p) { return { term: p.term.trim(), definition: p.definition.trim() }; });
      if (q.pairs.some(function (p) { return !p.term || !p.definition; })) { toast("Vui lòng điền đủ khái niệm và phát biểu."); return; }
    }

    if (editingId == null) { q.id = uid(); bank.push(q); }
    else bank[editingId] = q;

    saveBank();
    document.getElementById("editModal").classList.add("hidden");
    renderManage();
    renderHome();
  });

  /* ---------------- Utility ---------------- */
  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  /* ---------------- Khởi động ---------------- */
  renderHome();
})();
