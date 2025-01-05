const VI_DAY = "Ngày";
const VI_MONTH = "Tháng";
const VI_YEAR = "Năm";
const VI_HOUR = "Giờ";
const VI_MINUTE = "Phút";
const VI_SECOND = "Giây";

export default {
  common: {
    routes: {
      about: "Về chúng tôi",
      contact: "Liên hệ",
      games: "Trò chơi",
      partners: "Đối tác",
    },
    languages: {
      en: "Tiếng Anh",
      vi: "Tiếng Việt",
    },
    time: {
      "days#zero": VI_DAY,
      "days#one": VI_DAY,
      "days#other": VI_DAY,
      "months#zero": VI_MONTH,
      "months#one": VI_MONTH,
      "months#other": VI_MONTH,
      "years#zero": VI_YEAR,
      "years#one": VI_YEAR,
      "years#other": VI_YEAR,
      "hours#zero": VI_HOUR,
      "hours#one": VI_HOUR,
      "hours#other": VI_HOUR,
      "minutes#zero": VI_MINUTE,
      "minutes#one": VI_MINUTE,
      "minutes#other": VI_MINUTE,
      "seconds#zero": VI_SECOND,
      "seconds#one": VI_SECOND,
      "seconds#other": VI_SECOND,
    },
  },
  pages: {
    home: {
      metadata: {
        title: "Z tech",
        description: "Công ty game hiện đại",
      },
      hero: {
        title: "Trò Chơi Sắp Ra Mắt",
        newsletter: {
          description:
            "Chúng tôi sẽ trở lại với một điều tuyệt vời. Để nhận các bản cập nhật mới nhất về trò chơi, vui lòng đăng ký nhận bản tin của chúng tôi.",
          placeholder: "Địa chỉ email của bạn",
        },
      },
      about: {
        description:
          "Duyệt qua tuyển chọn các trò chơi trực tuyến miễn phí của chúng tôi và có một khoảng thời gian tuyệt vời mà không cần rời khỏi trang web! Tùy chọn Trò chơi dành cho Trẻ em của chúng tôi cũng bao gồm các bài đánh giá trò chơi, các trò chơi gian lận và hướng dẫn mở rộng, và nhiều hơn nữa. Chúng tôi cũng có các bản tải xuống, video và bài báo miễn phí độc quyền. Etech đánh giá các trò chơi trẻ em phổ biến nhất từ tất cả các nền tảng trò chơi điện tử phổ biến nhất, vì vậy bạn không cần phải tìm kiếm niềm vui ở bất kỳ nơi nào khác trên Internet. Khám phá một thế giới trò chơi hoàn toàn mới trên Etech.",
        benefits: {
          info_1: {
            title: "Truy Cập 24/7",
            description:
              "24/7 access ensures operators' businesses runs smoothly all year long.",
          },
          info_2: {
            title: "Thiết Kế",
            description:
              "Kết hợp các vũ trụ giàu trí tưởng tượng, động lực chơi và lối chơi chưa từng có, trò chơi của chúng tôi vượt qua ranh giới của thế giới ảo bằng cách tạo ra lối chơi sáng tạo.",
          },
          info_3: {
            title: "Team",
            description:
              "Etech là một studio quốc tế, từng đoạt giải thưởng gồm các nhà thiết kế, nghệ sĩ, họa sĩ hoạt hình và nhà sản xuất chuyên tạo ra nội dung cho những tên tuổi lớn nhất trong lĩnh vực điện ảnh và trò chơi điện tử.",
          },
        },
        stats: {
          info_1: {
            description: "Người dùng",
          },
          info_2: {
            description: "Trò chơi",
          },
        },
      },
      games: {
        title: "Trò chơi",
        description:
          "Là nhà tiên phong trong lĩnh vực trò chơi ứng dụng dành cho thiết bị di động, chúng tôi tự hào về tính độc đáo và cá tính, cung cấp cho người chơi toàn cầu những trò chơi hiện đại có cốt truyện tuyệt vời, hiệu ứng âm thanh giật gân và hoạt ảnh hoành tráng không ngừng gây ấn tượng.",
      },
    },
  },
} as const;
