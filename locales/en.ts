export default {
  common: {
    routes: {
      about: "About Us",
      contact: "Contact Us",
      games: "Games",
      partners: "Partners",
    },
    languages: {
      en: "English",
      vi: "Vietnamese",
    },
    time: {
      "days#zero": "day",
      "days#one": "day",
      "days#other": "days",
      "months#zero": "month",
      "months#one": "month",
      "months#other": "months",
      "years#zero": "year",
      "years#one": "year",
      "years#other": "years",
      "hours#zero": "hour",
      "hours#one": "hour",
      "hours#other": "hours",
      "minutes#zero": "minute",
      "minutes#one": "minute",
      "minutes#other": "minutes",
      "seconds#zero": "second",
      "seconds#one": "second",
      "seconds#other": "seconds",
    },
  },
  pages: {
    home: {
      metadata: {
        title: "Z tech",
        description: "A modern game company",
      },
      hero: {
        title: "Trò chơi sắp ra mắt",
      },
    },
  },
} as const;
