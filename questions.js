// Ngân hàng câu hỏi ôn tập môn Chủ nghĩa xã hội khoa học
// Được trích xuất từ bộ ảnh đề kiểm tra (question.zip) và bổ sung đáp án + giải thích.
// Các dạng câu hỏi:
//   "mcq"   -> trắc nghiệm 1 đáp án (a/b/c/d)
//   "multi" -> trắc nghiệm nhiều đáp án (chọn N đáp án đúng)
//   "tf"    -> đúng / sai (nhiều phát biểu)
//   "drag"  -> kéo thả (ghép cặp khái niệm - nội dung)
window.SEED_QUESTIONS = [
  // ================== CHƯƠNG 1: NHẬP MÔN CNXHKH ==================
  {
    id: "c1-01",
    topic: "Chương 1: Nhập môn CNXHKH",
    type: "mcq",
    question: "Những nhà tư tưởng tiêu biểu của chủ nghĩa xã hội không tưởng phê phán đầu thế kỷ XIX là ai?",
    options: [
      "Xanh Ximông, Sáclo Phuriê, G. Mably",
      "Xanh Ximông, Sáclo Phuriê, Rôbớt Ôoen",
      "Xanh Ximông, Giăng Mêliê, Rôbớt Ôoen",
      "Grácco Babớp, Xanh Ximông, Sáclo Phuriê"
    ],
    answer: 1,
    explanation: "Ba đại biểu tiêu biểu của CNXH không tưởng phê phán đầu thế kỷ XIX là Xanh Ximông (Saint-Simon), Sáclo Phuriê (Charles Fourier) và Rôbớt Ôoen (Robert Owen)."
  },
  {
    id: "c1-02",
    topic: "Chương 1: Nhập môn CNXHKH",
    type: "mcq",
    question: "Đối tượng nghiên cứu của chủ nghĩa xã hội khoa học là gì?",
    options: [
      "Là những quy luật kinh tế",
      "Là những quy luật văn hóa - xã hội",
      "Là những quy luật hình thành, phát triển và hoàn thiện của các hình thái kinh tế - xã hội",
      "Là những quy luật và tính quy luật chính trị - xã hội của quá trình phát sinh, hình thành và phát triển của hình thái kinh tế - xã hội cộng sản chủ nghĩa"
    ],
    answer: 3,
    explanation: "Đối tượng của CNXHKH là những quy luật, tính quy luật chính trị - xã hội của quá trình phát sinh, hình thành và phát triển của hình thái kinh tế - xã hội cộng sản chủ nghĩa."
  },
  {
    id: "c1-03",
    topic: "Chương 1: Nhập môn CNXHKH",
    type: "mcq",
    question: "Ph.Ăngghen đã đánh giá: “Hai phát hiện vĩ đại này đã đưa chủ nghĩa xã hội trở thành một khoa học”. Hai phát kiến đó là gì?",
    options: [
      "Chủ nghĩa duy vật biện chứng và Chủ nghĩa duy vật lịch sử",
      "Học thuyết giá trị thặng dư và Chủ nghĩa duy vật lịch sử",
      "Sứ mệnh lịch sử của giai cấp công nhân và Chủ nghĩa duy vật lịch sử",
      "Sứ mệnh lịch sử của giai cấp công nhân và Học thuyết giá trị thặng dư"
    ],
    answer: 1,
    explanation: "Hai phát kiến vĩ đại của Mác là Chủ nghĩa duy vật lịch sử và Học thuyết giá trị thặng dư — nhờ đó CNXH từ không tưởng trở thành khoa học."
  },
  {
    id: "c1-04",
    topic: "Chương 1: Nhập môn CNXHKH",
    type: "mcq",
    question: "Phát kiến nào của C.Mác và Ph.Ăngghen chỉ ra sự diệt vong về kinh tế của chủ nghĩa tư bản?",
    options: [
      "Chủ nghĩa duy vật lịch sử",
      "Học thuyết về sứ mệnh lịch sử toàn thế giới của giai cấp công nhân",
      "Chủ nghĩa duy vật biện chứng",
      "Học thuyết về giá trị thặng dư"
    ],
    answer: 3,
    explanation: "Học thuyết giá trị thặng dư vạch rõ bản chất bóc lột của CNTB và quy luật vận động tất yếu dẫn đến sự diệt vong về kinh tế của nó."
  },
  {
    id: "c1-05",
    topic: "Chương 1: Nhập môn CNXHKH",
    type: "mcq",
    question: "Phát kiến nào của C.Mác và Ph.Ăngghen chỉ ra những hạn chế có tính lịch sử của chủ nghĩa xã hội không tưởng?",
    options: [
      "Học thuyết về sứ mệnh lịch sử toàn thế giới của giai cấp công nhân",
      "Học thuyết về giá trị thặng dư",
      "Chủ nghĩa duy vật lịch sử",
      "Chủ nghĩa duy vật biện chứng"
    ],
    answer: 2,
    explanation: "Chủ nghĩa duy vật lịch sử đã giải thích đúng đắn nguyên nhân, động lực của sự vận động lịch sử, khắc phục hạn chế của CNXH không tưởng."
  },
  {
    id: "c1-06",
    topic: "Chương 1: Nhập môn CNXHKH",
    type: "mcq",
    question: "Phạm trù nào được coi là cơ bản nhất và là xuất phát điểm của chủ nghĩa xã hội khoa học?",
    options: [
      "Sứ mệnh lịch sử của giai cấp công nhân",
      "Cách mạng xã hội chủ nghĩa",
      "Chuyên chính vô sản",
      "Giai cấp công nhân"
    ],
    answer: 0,
    explanation: "Sứ mệnh lịch sử của giai cấp công nhân là phạm trù cơ bản nhất, là xuất phát điểm của toàn bộ CNXHKH."
  },

  // ================== CHƯƠNG 2: SỨ MỆNH LỊCH SỬ CỦA GCCN ==================
  {
    id: "c2-01",
    topic: "Chương 2: Sứ mệnh lịch sử của GCCN",
    type: "mcq",
    question: "Theo C.Mác và Ph.Ăngghen thì giai đoạn đầu của hình thái kinh tế - xã hội cộng sản chủ nghĩa là gì?",
    options: [
      "Chủ nghĩa cộng sản",
      "Chủ nghĩa xã hội",
      "Cộng sản chủ nghĩa",
      "Thời kỳ quá độ"
    ],
    answer: 1,
    explanation: "Hình thái kinh tế - xã hội cộng sản chủ nghĩa gồm giai đoạn thấp (chủ nghĩa xã hội) và giai đoạn cao (chủ nghĩa cộng sản)."
  },
  {
    id: "c2-02",
    topic: "Chương 2: Sứ mệnh lịch sử của GCCN",
    type: "mcq",
    question: "Xét về phương thức lao động, phương thức sản xuất, giai cấp công nhân mang thuộc tính cơ bản nào?",
    options: [
      "Là giai cấp tạo ra của cải vật chất làm giàu cho xã hội",
      "Giai cấp có tư liệu sản xuất nhiều nhất",
      "Giai cấp trực tiếp hay gián tiếp vận hành máy móc có tính chất công nghiệp ngày càng hiện đại",
      "Có số lượng đông nhất trong dân cư"
    ],
    answer: 2,
    explanation: "Xét về phương thức lao động, GCCN là những người lao động trực tiếp hay gián tiếp vận hành công cụ sản xuất có tính chất công nghiệp ngày càng hiện đại."
  },
  {
    id: "c2-03",
    topic: "Chương 2: Sứ mệnh lịch sử của GCCN",
    type: "mcq",
    question: "Xét trong quan hệ sản xuất tư bản chủ nghĩa, giai cấp công nhân là:",
    options: [
      "Giai cấp tạo ra của cải cho xã hội",
      "Giai cấp không có tư liệu sản xuất, đi làm thuê cho nhà tư bản, bị nhà tư bản bóc lột giá trị thặng dư",
      "Giai cấp nghèo khổ nhất",
      "Giai cấp lương đông trong dân cư"
    ],
    answer: 1,
    explanation: "Trong quan hệ sản xuất TBCN, GCCN là những người không có tư liệu sản xuất, phải bán sức lao động, bị bóc lột giá trị thặng dư."
  },
  {
    id: "c2-04",
    topic: "Chương 2: Sứ mệnh lịch sử của GCCN",
    type: "mcq",
    question: "Đặc điểm sứ mệnh lịch sử của giai cấp công nhân là:",
    options: [
      "Xóa bỏ triệt để chế độ tư hữu về tư liệu sản xuất",
      "Thay thế chế độ chiếm hữu nô lệ bằng chế độ xã hội chủ nghĩa",
      "Thay thế chế độ sở hữu tư nhân này bằng một chế độ sở hữu tư nhân khác",
      "Thay thế chế độ công hữu này bằng một chế độ công hữu khác"
    ],
    answer: 0,
    explanation: "Sứ mệnh lịch sử của GCCN là xóa bỏ triệt để chế độ tư hữu về tư liệu sản xuất, xây dựng chế độ công hữu về tư liệu sản xuất."
  },
  {
    id: "c2-05",
    topic: "Chương 2: Sứ mệnh lịch sử của GCCN",
    type: "mcq",
    question: "Dấu hiệu đánh dấu sự trưởng thành vượt bậc của giai cấp công nhân với tư cách là giai cấp cách mạng là:",
    options: [
      "Sự trưởng thành về trình độ học vấn, tay nghề",
      "Sự ra đời của Đảng Cộng sản",
      "Sự trưởng thành về trình độ nhận thức",
      "Sự trưởng thành về ý thức chính trị"
    ],
    answer: 1,
    explanation: "Sự ra đời của Đảng Cộng sản đánh dấu sự trưởng thành vượt bậc của GCCN với tư cách là giai cấp cách mạng."
  },
  {
    id: "c2-06",
    topic: "Chương 2: Sứ mệnh lịch sử của GCCN",
    type: "multi",
    pick: 2,
    question: "Theo C.Mác và Ph.Ăngghen thì đặc điểm nổi bật của giai cấp công nhân là: (Chọn 2 đáp án đúng)",
    options: [
      "Giai cấp cách mạng và có tinh thần cách mạng triệt để",
      "Có quyền sở hữu toàn bộ tư liệu sản xuất",
      "Lao động bằng phương thức công nghiệp",
      "Làm việc trong nông nghiệp, sử dụng công cụ thủ công"
    ],
    answer: [0, 2],
    explanation: "GCCN là giai cấp cách mạng triệt để, lao động bằng phương thức công nghiệp, đại diện cho lực lượng sản xuất hiện đại."
  },
  {
    id: "c2-07",
    topic: "Chương 2: Sứ mệnh lịch sử của GCCN",
    type: "multi",
    pick: 2,
    question: "Đặc điểm nào sau đây thể hiện đúng bản chất của giai cấp công nhân? (Chọn 2 đáp án đúng)",
    options: [
      "Không sở hữu tư liệu sản xuất, sống bằng lao động làm thuê",
      "Có trình độ học vấn thấp, chủ yếu làm việc tay chân",
      "Luôn gắn bó với giai cấp địa chủ và tiểu thương",
      "Có tính tổ chức và kỷ luật cao trong lao động sản xuất"
    ],
    answer: [0, 3],
    explanation: "Bản chất GCCN: không sở hữu tư liệu sản xuất, làm thuê; đồng thời có tính tổ chức, kỷ luật cao do lao động công nghiệp rèn luyện."
  },
  {
    id: "c2-08",
    topic: "Chương 2: Sứ mệnh lịch sử của GCCN",
    type: "mcq",
    question: "Tìm đáp án đúng để hoàn thiện luận điểm: Cùng với sự phát triển của khoa học và công nghệ ngày càng hiện đại, giai cấp công nhân:",
    options: [
      "Giảm về số lượng và nâng cao về chất lượng",
      "Tăng về số lượng và giảm về chất lượng",
      "Tăng về số lượng và nâng cao về chất lượng",
      "Giảm về số lượng và có trình độ sản xuất ngày càng cao"
    ],
    answer: 2,
    explanation: "Cùng với sự phát triển của KHCN, GCCN tăng về số lượng và nâng cao về chất lượng (trình độ, tay nghề ngày càng cao)."
  },
  {
    id: "c2-09",
    topic: "Chương 2: Sứ mệnh lịch sử của GCCN",
    type: "mcq",
    question: "Giai cấp công nhân Việt Nam ra đời vào thời gian nào?",
    options: [
      "Trước khi thực dân Pháp xâm lược Việt Nam",
      "Trong cuộc khai thác thuộc địa lần thứ hai của thực dân Pháp",
      "Những năm đầu thế kỷ XX",
      "Trong cuộc khai thác thuộc địa lần thứ nhất của thực dân Pháp"
    ],
    answer: 3,
    explanation: "GCCN Việt Nam ra đời trong cuộc khai thác thuộc địa lần thứ nhất của thực dân Pháp (cuối thế kỷ XIX - đầu thế kỷ XX)."
  },
  {
    id: "c2-10",
    topic: "Chương 2: Sứ mệnh lịch sử của GCCN",
    type: "mcq",
    question: "Điền từ còn thiếu vào chỗ trống: “Giai cấp công nhân Việt Nam thực hiện sứ mệnh lịch sử cách mạng thông qua đội tiên phong của nó là …”",
    options: [
      "Mặt trận Tổ quốc Việt Nam",
      "Tổ chức công đoàn",
      "Đảng Cộng sản Việt Nam",
      "Tổng liên đoàn lao động Việt Nam"
    ],
    answer: 2,
    explanation: "GCCN Việt Nam thực hiện sứ mệnh lịch sử thông qua đội tiên phong của mình là Đảng Cộng sản Việt Nam."
  },
  {
    id: "c2-11",
    topic: "Chương 2: Sứ mệnh lịch sử của GCCN",
    type: "mcq",
    question: "Nội dung trực tiếp về văn hóa tư tưởng thể hiện sứ mệnh lịch sử của giai cấp công nhân Việt Nam là:",
    options: [
      "Xây dựng con người mới xã hội chủ nghĩa",
      "Xây dựng nền giáo dục hiện đại",
      "Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc",
      "Xây dựng giá trị và con người Việt Nam"
    ],
    answer: 2,
    explanation: "Trên lĩnh vực văn hóa tư tưởng, GCCN Việt Nam trực tiếp góp phần xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc."
  },
  {
    id: "c2-12",
    topic: "Chương 2: Sứ mệnh lịch sử của GCCN",
    type: "multi",
    pick: 2,
    question: "Trong thời thuộc địa, giai cấp công nhân Việt Nam chủ yếu làm việc trong: (Chọn 2 đáp án đúng)",
    options: [
      "Nhà máy, hầm mỏ do thực dân Pháp xây dựng",
      "Hợp tác xã nông nghiệp",
      "Xí nghiệp thủ công truyền thống",
      "Đồn điền cao su"
    ],
    answer: [0, 3],
    explanation: "Thời thuộc địa, GCCN Việt Nam chủ yếu làm việc trong các nhà máy, hầm mỏ do thực dân Pháp xây dựng và các đồn điền cao su."
  },
  {
    id: "c2-13",
    topic: "Chương 2: Sứ mệnh lịch sử của GCCN",
    type: "multi",
    pick: 2,
    question: "Giai cấp công nhân Việt Nam chủ yếu xuất thân từ tầng lớp nào? (Chọn 2 đáp án đúng)",
    options: [
      "Tầng lớp tư sản dân tộc",
      "Tầng lớp địa chủ phong kiến",
      "Giai cấp nông dân bị tước đoạt hết ruộng đất",
      "Thợ thủ công bị phá sản"
    ],
    answer: [2, 3],
    explanation: "GCCN Việt Nam chủ yếu xuất thân từ nông dân bị tước đoạt ruộng đất và thợ thủ công bị phá sản."
  },
  {
    id: "c2-14",
    topic: "Chương 2: Sứ mệnh lịch sử của GCCN",
    type: "mcq",
    question: "Hạn chế cơ bản lớn nhất mà giai cấp công nhân Việt Nam hiện nay cần khắc phục là gì?",
    options: [
      "Trình độ khoa học kỹ thuật chưa cao",
      "Tâm lý tiểu nông",
      "Hiệu quả lao động thấp",
      "Số lượng còn ít"
    ],
    answer: 0,
    explanation: "Hạn chế lớn nhất của GCCN Việt Nam hiện nay là trình độ học vấn, tay nghề, khoa học - kỹ thuật chưa cao so với yêu cầu công nghiệp hóa, hiện đại hóa."
  },

  // ================== CHƯƠNG 3: CNXH & THỜI KỲ QUÁ ĐỘ ==================
  {
    id: "c3-01",
    topic: "Chương 3: CNXH & Thời kỳ quá độ",
    type: "mcq",
    question: "Chủ nghĩa xã hội có mấy đặc trưng cơ bản?",
    options: ["6", "7", "8", "9"],
    answer: 2,
    explanation: "Theo giáo trình CNXHKH, chủ nghĩa xã hội có 8 đặc trưng cơ bản."
  },
  {
    id: "c3-02",
    topic: "Chương 3: CNXH & Thời kỳ quá độ",
    type: "mcq",
    question: "Đặc trưng về kinh tế của chủ nghĩa xã hội là gì?",
    options: [
      "Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất",
      "Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ tư hữu về tư liệu sản xuất",
      "Có nền kinh tế phát triển cao",
      "Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại"
    ],
    answer: 0,
    explanation: "Đặc trưng kinh tế của CNXH là nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất."
  },
  {
    id: "c3-03",
    topic: "Chương 3: CNXH & Thời kỳ quá độ",
    type: "mcq",
    question: "Hình thái kinh tế - xã hội cộng sản chủ nghĩa bắt đầu và hoàn thiện khi nào?",
    options: [
      "Bắt đầu từ khi Đảng cộng sản ra đời và xây dựng xong chủ nghĩa xã hội",
      "Bắt đầu từ thời kỳ quá độ cho đến khi xây dựng xong giai đoạn cao của xã hội cộng sản",
      "Bắt đầu từ giai đoạn thấp của xã hội cộng sản và hoàn thiện ở giai đoạn cao của xã hội cộng sản",
      "Bắt đầu từ thời quá độ và hoàn thiện ở giai đoạn thấp của xã hội cộng sản"
    ],
    answer: 1,
    explanation: "Hình thái KTXH CSCN bắt đầu từ thời kỳ quá độ và hoàn thiện khi xây dựng xong giai đoạn cao của xã hội cộng sản."
  },
  {
    id: "c3-04",
    topic: "Chương 3: CNXH & Thời kỳ quá độ",
    type: "mcq",
    question: "Nguyên nhân sâu xa dẫn đến sự thay thế hình thái kinh tế - xã hội tư bản chủ nghĩa bằng hình thái kinh tế - xã hội cộng sản chủ nghĩa là gì?",
    options: [
      "Mâu thuẫn giữa lực lượng sản xuất mang tính xã hội hóa ngày càng cao với quan hệ sản xuất tư bản chủ nghĩa dựa trên chế độ chiếm hữu tư nhân tư bản chủ nghĩa về tư liệu sản xuất chủ yếu",
      "Mâu thuẫn giữa phương thức sản xuất tư bản chủ nghĩa và phương thức sản xuất xã hội chủ nghĩa dựa trên chế độ chiếm hữu tư nhân tư bản chủ nghĩa về tư liệu sản xuất chủ yếu",
      "Mâu thuẫn giữa các giai cấp, tầng lớp trong xã hội dựa trên chế độ chiếm hữu tư nhân tư bản chủ nghĩa về tư liệu sản xuất chủ yếu",
      "Mâu thuẫn giữa lực lượng sản xuất và tư liệu sản xuất dựa trên chế độ chiếm hữu tư nhân tư bản chủ nghĩa"
    ],
    answer: 0,
    explanation: "Nguyên nhân sâu xa là mâu thuẫn giữa lực lượng sản xuất mang tính xã hội hóa ngày càng cao với quan hệ sản xuất TBCN dựa trên chế độ chiếm hữu tư nhân TBCN về tư liệu sản xuất chủ yếu."
  },
  {
    id: "c3-05",
    topic: "Chương 3: CNXH & Thời kỳ quá độ",
    type: "mcq",
    question: "Chọn cụm từ còn thiếu điền vào dấu “…”: “Giữa xã hội tư bản chủ nghĩa và xã hội cộng sản chủ nghĩa là một thời kỳ … từ xã hội nọ sang xã hội kia”.",
    options: [
      "Cải biến cách mạng",
      "Đột phá cách mạng",
      "Cách mạng",
      "Quá độ"
    ],
    answer: 0,
    explanation: "Theo C.Mác: giữa xã hội TBCN và xã hội CSCN là một thời kỳ cải biến cách mạng từ xã hội nọ sang xã hội kia."
  },
  {
    id: "c3-06",
    topic: "Chương 3: CNXH & Thời kỳ quá độ",
    type: "mcq",
    question: "Kiểu quá độ lên chủ nghĩa xã hội ở Việt Nam là kiểu quá độ:",
    options: [
      "Quá độ khách quan",
      "Quá độ chủ quan",
      "Quá độ trực tiếp",
      "Quá độ gián tiếp"
    ],
    answer: 3,
    explanation: "Việt Nam thực hiện quá độ gián tiếp lên CNXH, tức bỏ qua chế độ TBCN."
  },
  {
    id: "c3-07",
    topic: "Chương 3: CNXH & Thời kỳ quá độ",
    type: "mcq",
    question: "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội (Bổ sung và phát triển năm 2011) được Đảng ta thông qua ở đại hội lần thứ mấy?",
    options: [
      "Đại hội X",
      "Đại hội XII",
      "Đại hội IX",
      "Đại hội XI"
    ],
    answer: 3,
    explanation: "Cương lĩnh (bổ sung, phát triển năm 2011) được thông qua tại Đại hội đại biểu toàn quốc lần thứ XI của Đảng."
  },
  {
    id: "c3-08",
    topic: "Chương 3: CNXH & Thời kỳ quá độ",
    type: "mcq",
    question: "Tìm đáp án SAI. Đặc trưng bản chất của chủ nghĩa xã hội Việt Nam theo tinh thần Đại hội XI:",
    options: [
      "Có quan hệ hữu nghị và hợp tác với các nước trên thế giới",
      "Quyền lực thuộc về giai cấp công nhân",
      "Con người có cuộc sống ấm no, tự do, hạnh phúc, có điều kiện phát triển toàn diện",
      "Có nền văn hóa tiên tiến đậm đà bản sắc dân tộc"
    ],
    answer: 1,
    explanation: "Đặc trưng đúng là “do nhân dân làm chủ” chứ không phải “quyền lực thuộc về giai cấp công nhân”. Do đó phương án B là SAI."
  },
  {
    id: "c3-09",
    topic: "Chương 3: CNXH & Thời kỳ quá độ",
    type: "mcq",
    question: "Thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam là bước quá độ:",
    options: [
      "Trực tiếp, từ chế độ tư bản chủ nghĩa lên chế độ xã hội chủ nghĩa",
      "Gián tiếp, bỏ qua chế độ tư bản chủ nghĩa tiến lên chủ nghĩa xã hội",
      "Gián tiếp, bỏ qua chế độ phong kiến tiến lên chế độ xã hội chủ nghĩa",
      "Trực tiếp, từ chế độ phong kiến tiến lên chế độ xã hội chủ nghĩa"
    ],
    answer: 1,
    explanation: "Thời kỳ quá độ ở Việt Nam là quá độ gián tiếp: bỏ qua chế độ TBCN, tiến thẳng lên CNXH."
  },
  {
    id: "c3-10",
    topic: "Chương 3: CNXH & Thời kỳ quá độ",
    type: "mcq",
    question: "Đặc điểm của thời kỳ quá độ lên chủ nghĩa xã hội trên lĩnh vực kinh tế là gì?",
    options: [
      "Tồn tại nhiều thành phần kinh tế",
      "Tồn tại đấu tranh giai cấp",
      "Tồn tại nhiều tàn dư văn hóa của chế độ cũ",
      "Tồn tại giai cấp đối kháng"
    ],
    answer: 0,
    explanation: "Trên lĩnh vực kinh tế, thời kỳ quá độ tồn tại nền kinh tế nhiều thành phần."
  },
  {
    id: "c3-11",
    topic: "Chương 3: CNXH & Thời kỳ quá độ",
    type: "multi",
    pick: 2,
    question: "Đặc điểm về chính trị trong thời kỳ quá độ được thể hiện ở điểm nào? (Chọn 2 đáp án đúng)",
    options: [
      "Thiết lập chuyên chính vô sản",
      "Hoàn toàn không còn vai trò của nhà nước",
      "Xây dựng nền dân chủ xã hội chủ nghĩa",
      "Đa nguyên chính trị, đa đảng đối lập"
    ],
    answer: [0, 2],
    explanation: "Về chính trị, thời kỳ quá độ thiết lập nền chuyên chính vô sản và xây dựng nền dân chủ xã hội chủ nghĩa."
  },
  {
    id: "c3-12",
    topic: "Chương 3: CNXH & Thời kỳ quá độ",
    type: "multi",
    pick: 2,
    question: "Đặc điểm nổi bật của thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam là gì? (Chọn 2 đáp án đúng)",
    options: [
      "Xây dựng nhà nước pháp quyền xã hội chủ nghĩa",
      "Có sự lãnh đạo của Đảng Cộng sản Việt Nam",
      "Từ một nền sản xuất nhỏ tiến lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa",
      "Phát triển chủ nghĩa tư bản trong thời gian ngắn để tích lũy"
    ],
    answer: [1, 2],
    explanation: "Đặc điểm nổi bật của thời kỳ quá độ ở Việt Nam: đi lên từ nền sản xuất nhỏ, bỏ qua chế độ TBCN và có sự lãnh đạo của Đảng Cộng sản Việt Nam."
  },
  {
    id: "c3-13",
    topic: "Chương 3: CNXH & Thời kỳ quá độ",
    type: "multi",
    pick: 2,
    question: "Hai loại quá độ từ chủ nghĩa tư bản lên chủ nghĩa cộng sản đó là: (Chọn 2 phương án đúng)",
    options: [
      "Quá độ không cơ bản",
      "Quá độ trực tiếp",
      "Quá độ gián tiếp",
      "Quá độ cơ bản"
    ],
    answer: [1, 2],
    explanation: "Có hai loại quá độ lên CNXH: quá độ trực tiếp và quá độ gián tiếp."
  },
  {
    id: "c3-14",
    topic: "Chương 3: CNXH & Thời kỳ quá độ",
    type: "multi",
    pick: 2,
    question: "Thời kỳ quá độ lên chủ nghĩa xã hội có những mâu thuẫn nào cần giải quyết? (Chọn 2 đáp án đúng)",
    options: [
      "Mâu thuẫn giữa các tầng lớp lao động và tư sản hoàn toàn biến mất",
      "Mâu thuẫn giữa cái cũ và cái mới trong xã hội",
      "Mâu thuẫn giữa các thành phần kinh tế khác nhau trong xã hội",
      "Mâu thuẫn giữa năng suất lao động và nhu cầu phát triển xã hội"
    ],
    answer: [1, 2],
    explanation: "Trong thời kỳ quá độ tồn tại mâu thuẫn giữa cái cũ và cái mới, giữa các thành phần kinh tế khác nhau."
  },
  {
    id: "c3-15",
    topic: "Chương 3: CNXH & Thời kỳ quá độ",
    type: "mcq",
    question: "Căn cứ vào giáo trình Chủ nghĩa xã hội khoa học, khái niệm đúng để chỉ một chế độ xã hội tốt đẹp, giai đoạn đầu của hình thái kinh tế - xã hội cộng sản chủ nghĩa là:",
    options: [
      "Chủ nghĩa cộng sản",
      "Chủ nghĩa xã hội",
      "Thời kỳ quá độ lên chủ nghĩa xã hội",
      "Thời kỳ quá độ"
    ],
    answer: 1,
    explanation: "Giai đoạn đầu (giai đoạn thấp) của hình thái KTXH CSCN là chủ nghĩa xã hội."
  },
  {
    id: "c3-16",
    topic: "Chương 3: CNXH & Thời kỳ quá độ",
    type: "multi",
    pick: 2,
    question: "Việc “bỏ qua chế độ tư bản chủ nghĩa” ở Việt Nam có nghĩa là: (Chọn 2 đáp án đúng)",
    options: [
      "Tăng cường sở hữu tư nhân để phát triển lực lượng sản xuất",
      "Loại bỏ hoàn toàn tất cả yếu tố tư bản trong nền kinh tế",
      "Tiếp thu, kế thừa những thành tựu nhân loại đã đạt được dưới chủ nghĩa tư bản",
      "Bỏ qua việc xác lập vị trí thống trị quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa"
    ],
    answer: [2, 3],
    explanation: "“Bỏ qua chế độ TBCN” là bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng TBCN, nhưng vẫn tiếp thu, kế thừa thành tựu nhân loại đã đạt được dưới CNTB."
  },
  {
    id: "c3-17",
    topic: "Chương 3: CNXH & Thời kỳ quá độ",
    type: "mcq",
    question: "Chọn phương án SAI. Về quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa:",
    options: [
      "Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa nhưng có sự tiếp thu, kế thừa toàn bộ các lĩnh vực đã tạo ra dưới chế độ tư bản chủ nghĩa",
      "Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa là con đường cách mạng tất yếu chủ quan",
      "Con đường đi lên chủ nghĩa xã hội của nước ta là sự phát triển quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa",
      "Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa tức là bỏ qua việc xác lập vị trí thống trị quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa"
    ],
    answer: 1,
    explanation: "Sai ở chỗ “tất yếu chủ quan” — bỏ qua chế độ TBCN là một tất yếu KHÁCH QUAN, không phải chủ quan."
  },
  {
    id: "c3-18",
    topic: "Chương 3: CNXH & Thời kỳ quá độ",
    type: "mcq",
    question: "Tại sao cho rằng con đường cách mạng Việt Nam là quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa là một tất yếu?",
    options: [
      "Vì không cần tạo ra biến đổi về chất trên tất cả các lĩnh vực",
      "Vì nó phù hợp với đặc điểm của đất nước và xu thế phát triển của thời đại",
      "Vì không cần tiếp thu thành tựu khoa học kỹ thuật dưới chế độ tư bản chủ nghĩa",
      "Vì sự phát triển của lực lượng sản xuất ngày càng cao"
    ],
    answer: 1,
    explanation: "Con đường bỏ qua chế độ TBCN là tất yếu vì nó phù hợp với đặc điểm của đất nước và xu thế phát triển của thời đại."
  },
  {
    id: "c3-19",
    topic: "Chương 3: CNXH & Thời kỳ quá độ",
    type: "tf",
    question: "Chọn Đúng hoặc Sai cho từng phát biểu sau về thời kỳ quá độ lên chủ nghĩa xã hội:",
    statements: [
      { text: "Trong thời kỳ quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội tồn tại nền kinh tế nhiều thành phần.", answer: true },
      { text: "Đặc điểm cơ bản của thời kỳ quá độ lên chủ nghĩa xã hội là thời kỳ cải tạo cách mạng sâu sắc, triệt để trên lĩnh vực kinh tế.", answer: false },
      { text: "Trong thời kỳ quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội tồn tại nhiều giai cấp, tầng lớp.", answer: true },
      { text: "Trong thời kỳ quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội tồn tại chủ yếu là tư tưởng vô sản.", answer: false }
    ],
    explanation: "Cải biến cách mạng diễn ra trên TẤT CẢ các lĩnh vực (không chỉ kinh tế); và trong thời kỳ quá độ còn tồn tại nhiều hệ tư tưởng, không phải chỉ có tư tưởng vô sản."
  },
  {
    id: "c3-20",
    topic: "Chương 3: CNXH & Thời kỳ quá độ",
    type: "tf",
    question: "Chọn Đúng hoặc Sai cho từng phát biểu sau về kinh tế trong thời kỳ quá độ:",
    statements: [
      { text: "Thời kỳ quá độ lên chủ nghĩa xã hội có sự tồn tại song song giữa các yếu tố cũ và mới.", answer: true },
      { text: "Trong thời kỳ quá độ lên chủ nghĩa xã hội, kinh tế tư nhân bị xóa bỏ hoàn toàn.", answer: false },
      { text: "Thời kỳ quá độ lên chủ nghĩa xã hội chỉ có kinh tế nhà nước tồn tại và phát triển.", answer: false },
      { text: "Trong thời kỳ quá độ lên chủ nghĩa xã hội tồn tại nhiều thành phần kinh tế.", answer: true }
    ],
    explanation: "Thời kỳ quá độ tồn tại nền kinh tế nhiều thành phần và có sự đan xen giữa cái cũ và cái mới; không xóa bỏ hoàn toàn kinh tế tư nhân."
  },
  {
    id: "c3-21",
    topic: "Chương 3: CNXH & Thời kỳ quá độ",
    type: "tf",
    question: "Chọn Đúng hoặc Sai cho từng phát biểu sau về quá độ lên chủ nghĩa xã hội ở Việt Nam:",
    statements: [
      { text: "Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa là sự lựa chọn duy nhất đúng, khoa học, phản ánh đúng quy luật phát triển khách quan của cách mạng Việt Nam trong thời đại ngày nay.", answer: true },
      { text: "Chủ nghĩa xã hội Việt Nam không bao gồm việc xây dựng nền kinh tế thị trường.", answer: false },
      { text: "Nước ta thực hiện quá độ trực tiếp đi lên chủ nghĩa xã hội.", answer: false },
      { text: "Phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa là một trong những phương hướng xây dựng chủ nghĩa xã hội Việt Nam.", answer: true }
    ],
    explanation: "Việt Nam thực hiện quá độ GIÁN TIẾP và xây dựng nền kinh tế thị trường định hướng XHCN."
  },
  {
    id: "c3-22",
    topic: "Chương 3: CNXH & Thời kỳ quá độ",
    type: "drag",
    question: "Kéo thả các đáp án khớp với các phát biểu (1–3) dưới đây:",
    pairs: [
      {
        term: "Quá độ gián tiếp",
        definition: "Con đường từ chủ nghĩa tư bản lên chủ nghĩa cộng sản đối với những nước CHƯA trải qua chủ nghĩa tư bản phát triển."
      },
      {
        term: "Quá độ trực tiếp",
        definition: "Con đường từ chủ nghĩa tư bản lên chủ nghĩa cộng sản đối với những nước ĐÃ trải qua chủ nghĩa tư bản phát triển."
      },
      {
        term: "Thời kỳ quá độ",
        definition: "Thực chất của … lên chủ nghĩa xã hội là thời kỳ cải biến cách mạng từ xã hội tiền tư bản chủ nghĩa và tư bản chủ nghĩa sang xã hội xã hội chủ nghĩa."
      }
    ],
    explanation: "Quá độ gián tiếp áp dụng cho nước chưa qua CNTB phát triển; quá độ trực tiếp cho nước đã qua CNTB phát triển; còn “thời kỳ quá độ” là thời kỳ cải biến cách mạng sang xã hội XHCN."
  },

  // ================== CHƯƠNG 4: DÂN CHỦ XHCN & NHÀ NƯỚC XHCN ==================
  {
    id: "c4-01",
    topic: "Chương 4: Dân chủ XHCN & Nhà nước XHCN",
    type: "mcq",
    question: "Theo nguyên nghĩa tiếng Hy Lạp thì “Dân chủ” là gì?",
    options: [
      "Là quyền của con người",
      "Là quyền lực thuộc về nhân dân",
      "Là trật tự xã hội",
      "Là quyền tự do của mọi người"
    ],
    answer: 1,
    explanation: "Theo nguyên nghĩa Hy Lạp, “dân chủ” (demokratia) là quyền lực thuộc về nhân dân."
  },
  {
    id: "c4-02",
    topic: "Chương 4: Dân chủ XHCN & Nhà nước XHCN",
    type: "mcq",
    question: "Bản chất kinh tế của nền dân chủ xã hội chủ nghĩa là:",
    options: [
      "Thực hiện chế độ tư hữu về công cụ sản xuất chủ yếu",
      "Thực hiện chế độ công hữu về tư liệu sản xuất",
      "Thực hiện chế độ phân phối “Làm theo năng lực, hưởng theo nhu cầu”",
      "Thực hiện chế độ công hữu về tư liệu sản xuất chủ yếu và thực hiện chế độ phân phối lợi ích theo kết quả lao động là chủ yếu"
    ],
    answer: 3,
    explanation: "Bản chất kinh tế của dân chủ XHCN là chế độ công hữu về tư liệu sản xuất chủ yếu và phân phối lợi ích theo kết quả lao động là chủ yếu."
  },
  {
    id: "c4-03",
    topic: "Chương 4: Dân chủ XHCN & Nhà nước XHCN",
    type: "mcq",
    question: "Lịch sử loài người đã từng xuất hiện các nền dân chủ nào?",
    options: [
      "Nền dân chủ nguyên thủy, nền dân chủ chủ nô, nền dân chủ phong kiến, nền dân chủ tư sản, nền dân chủ vô sản",
      "Nền dân chủ chủ nô, nền dân chủ tư sản, nền dân chủ xã hội chủ nghĩa",
      "Nền dân chủ chủ nô, nền dân chủ phong kiến, nền dân chủ tư sản",
      "Nền dân chủ chủ nô, nền dân chủ phong kiến, nền dân chủ tư sản, nền dân chủ vô sản"
    ],
    answer: 1,
    explanation: "Lịch sử đã từng có ba nền dân chủ: dân chủ chủ nô, dân chủ tư sản và dân chủ xã hội chủ nghĩa."
  },
  {
    id: "c4-04",
    topic: "Chương 4: Dân chủ XHCN & Nhà nước XHCN",
    type: "mcq",
    question: "Bản chất chính trị của nền dân chủ xã hội chủ nghĩa thể hiện như thế nào?",
    options: [
      "Nền dân chủ tập trung vào phát triển kinh tế tư nhân và bảo vệ lợi ích của tầng lớp giàu có",
      "Nhà nước chủ yếu thực hiện các quyết định chính trị mà không cần sự đồng thuận hoặc tham gia của người dân",
      "Quyền lực và lợi ích thuộc về toàn thể nhân dân lao động, trong đó có giai cấp công nhân, dưới sự lãnh đạo của Đảng Cộng sản",
      "Quyền lực thuộc về một cá nhân duy nhất, không có sự tham gia của quần chúng nhân dân"
    ],
    answer: 2,
    explanation: "Bản chất chính trị của dân chủ XHCN: quyền lực thuộc về nhân dân lao động, do Đảng Cộng sản lãnh đạo."
  },
  {
    id: "c4-05",
    topic: "Chương 4: Dân chủ XHCN & Nhà nước XHCN",
    type: "mcq",
    question: "Đặc điểm của nhà nước pháp quyền xã hội chủ nghĩa là gì?",
    options: [
      "Quản lý xã hội bằng niềm tin",
      "Quản lý xã hội bằng mệnh lệnh hành chính",
      "Quản lý xã hội bằng đường lối",
      "Quản lý xã hội bằng pháp luật"
    ],
    answer: 3,
    explanation: "Nhà nước pháp quyền XHCN quản lý xã hội bằng hiến pháp và pháp luật."
  },
  {
    id: "c4-06",
    topic: "Chương 4: Dân chủ XHCN & Nhà nước XHCN",
    type: "mcq",
    question: "Kiểu nhà nước nào sau đây được V.I. Lênin gọi là nhà nước “nửa nhà nước”?",
    options: [
      "Nhà nước tư sản",
      "Nhà nước chủ nô",
      "Nhà nước phong kiến",
      "Nhà nước xã hội chủ nghĩa"
    ],
    answer: 3,
    explanation: "Lênin gọi nhà nước XHCN là “nửa nhà nước” vì nó là nhà nước đang trong quá trình tự tiêu vong dần."
  },
  {
    id: "c4-07",
    topic: "Chương 4: Dân chủ XHCN & Nhà nước XHCN",
    type: "mcq",
    question: "Căn cứ vào phạm vi tác động của quyền lực nhà nước, chức năng của nhà nước được chia thành:",
    options: [
      "Chức năng giai cấp, xã hội",
      "Chức năng đối nội và chức năng đối ngoại",
      "Chức năng trấn áp và chức năng tổ chức, xây dựng",
      "Chức năng chính trị, kinh tế, văn hóa, xã hội"
    ],
    answer: 1,
    explanation: "Theo phạm vi tác động của quyền lực, chức năng nhà nước gồm chức năng đối nội và đối ngoại."
  },
  {
    id: "c4-08",
    topic: "Chương 4: Dân chủ XHCN & Nhà nước XHCN",
    type: "mcq",
    question: "Bản chất dân chủ xã hội chủ nghĩa ở Việt Nam được thực hiện thông qua:",
    options: [
      "Các hình thức dân chủ không nguyên",
      "Các hình thức dân chủ gián tiếp và trực tiếp",
      "Các hình thức dân chủ tự nguyện",
      "Các hình thức dân chủ cơ bản và không cơ bản"
    ],
    answer: 1,
    explanation: "Dân chủ XHCN ở Việt Nam được thực hiện qua hai hình thức: dân chủ trực tiếp và dân chủ gián tiếp (đại diện)."
  },
  {
    id: "c4-09",
    topic: "Chương 4: Dân chủ XHCN & Nhà nước XHCN",
    type: "mcq",
    question: "Nền dân chủ xã hội chủ nghĩa ở Việt Nam có điểm khác biệt cơ bản nào so với các nền dân chủ trước đây?",
    options: [
      "Là nền dân chủ rộng rãi cho giai cấp công nhân và nhân dân lao động",
      "Là nền dân chủ thuần túy",
      "Còn mang tính giai cấp",
      "Là nền dân chủ phi lịch sử"
    ],
    answer: 0,
    explanation: "Dân chủ XHCN là nền dân chủ rộng rãi, toàn diện cho đông đảo nhân dân lao động."
  },
  {
    id: "c4-10",
    topic: "Chương 4: Dân chủ XHCN & Nhà nước XHCN",
    type: "mcq",
    question: "Tại sao quyền lực nhà nước ở Việt Nam được tổ chức theo nguyên tắc thống nhất?",
    options: [
      "Để kiểm soát chặt chẽ các hoạt động kinh tế",
      "Để giảm thiểu vai trò của các tổ chức phi chính phủ",
      "Đảm bảo sự phối hợp và kiểm soát giữa các cơ quan lập pháp, hành pháp và tư pháp",
      "Để tăng cường kiểm soát của nhà nước"
    ],
    answer: 2,
    explanation: "Quyền lực nhà nước thống nhất để đảm bảo sự phối hợp và kiểm soát lẫn nhau giữa lập pháp, hành pháp và tư pháp."
  },
  {
    id: "c4-11",
    topic: "Chương 4: Dân chủ XHCN & Nhà nước XHCN",
    type: "mcq",
    question: "Mục tiêu chính của việc xây dựng Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam là:",
    options: [
      "Phát triển kinh tế thị trường tự do",
      "Giảm thiểu sự can thiệp của nhà nước",
      "Tăng cường sự kiểm soát của nhà nước",
      "Phục vụ lợi ích của giai cấp công nhân và nhân dân lao động"
    ],
    answer: 3,
    explanation: "Mục tiêu của nhà nước pháp quyền XHCN Việt Nam là phục vụ lợi ích của giai cấp công nhân và nhân dân lao động."
  },
  {
    id: "c4-12",
    topic: "Chương 4: Dân chủ XHCN & Nhà nước XHCN",
    type: "multi",
    pick: 2,
    question: "Dân chủ trong xã hội nguyên thủy được thể hiện như thế nào? (Chọn 2 đáp án đúng)",
    options: [
      "Hình thành cơ chế chính trị phức tạp",
      "Không có sự phân chia giai cấp và quyền lực",
      "Quyền lực tập trung vào một số cá nhân",
      "Mọi người đều bình đẳng trong quyết định các vấn đề chung"
    ],
    answer: [1, 3],
    explanation: "Trong xã hội nguyên thủy chưa có phân chia giai cấp, mọi người bình đẳng trong việc quyết định các vấn đề chung."
  },
  {
    id: "c4-13",
    topic: "Chương 4: Dân chủ XHCN & Nhà nước XHCN",
    type: "multi",
    pick: 2,
    question: "Bản chất của nền dân chủ xã hội chủ nghĩa là: (Chọn 2 đáp án đúng)",
    options: [
      "Nền dân chủ của giai cấp tư sản",
      "Nền dân chủ mang tính cá nhân",
      "Nền dân chủ mang tính tập thể",
      "Nền dân chủ của đa số nhân dân lao động"
    ],
    answer: [2, 3],
    explanation: "Dân chủ XHCN là nền dân chủ của đa số nhân dân lao động, mang tính tập thể."
  },
  {
    id: "c4-14",
    topic: "Chương 4: Dân chủ XHCN & Nhà nước XHCN",
    type: "multi",
    pick: 2,
    question: "Đặc điểm nổi bật của nền dân chủ xã hội chủ nghĩa là gì? (Chọn 2 đáp án đúng)",
    options: [
      "Thực hiện quyền làm chủ tập thể của nhân dân",
      "Phân biệt rõ ràng giữa các tầng lớp xã hội",
      "Đặt quyền lợi của nhân dân lao động lên hàng đầu",
      "Tôn trọng quyền sở hữu tư nhân tuyệt đối"
    ],
    answer: [0, 2],
    explanation: "Dân chủ XHCN thực hiện quyền làm chủ tập thể của nhân dân và đặt quyền lợi nhân dân lao động lên hàng đầu."
  },
  {
    id: "c4-15",
    topic: "Chương 4: Dân chủ XHCN & Nhà nước XHCN",
    type: "multi",
    pick: 2,
    question: "Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam được xây dựng dựa trên những nguyên tắc nào sau đây? (Chọn 2 đáp án đúng)",
    options: [
      "Đảng lãnh đạo nhà nước theo phương thức mệnh lệnh",
      "Quyền lực nhà nước là tối cao, không cần kiểm soát",
      "Nhà nước quản lý xã hội bằng hiến pháp, pháp luật",
      "Quyền lực nhà nước thống nhất, có phân công, phối hợp và kiểm soát"
    ],
    answer: [2, 3],
    explanation: "Nhà nước pháp quyền XHCN Việt Nam quản lý xã hội bằng hiến pháp, pháp luật và tổ chức quyền lực thống nhất, có phân công, phối hợp, kiểm soát."
  }
];
