const VI_DAY = "ngày";
const VI_MONTH = "tháng";
const VI_YEAR = "năm";
const VI_HOUR = "giờ";
const VI_MINUTE = "phút";
const VI_SECOND = "giây";

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
        title: "We're getting ready",
      },
    },
  },
} as const;
