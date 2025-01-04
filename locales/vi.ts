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
    },
  },
} as const;
