const EN_DAY = "Day";
const EN_DAYS = "Days";
const EN_MONTH = "Month";
const EN_MONTHS = "Months";
const EN_YEAR = "Year";
const EN_YEARS = "Years";
const EN_HOUR = "Hour";
const EN_HOURS = "Hours";
const EN_MINUTE = "Minute";
const EN_MINUTES = "Minutes";
const EN_SECOND = "Second";
const EN_SECONDS = "Seconds";

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
      "days#zero": EN_DAY,
      "days#one": EN_DAY,
      "days#other": EN_DAYS,
      "months#zero": EN_MONTH,
      "months#one": EN_MONTH,
      "months#other": EN_MONTHS,
      "years#zero": EN_YEAR,
      "years#one": EN_YEAR,
      "years#other": EN_YEARS,
      "hours#zero": EN_HOUR,
      "hours#one": EN_HOUR,
      "hours#other": EN_HOURS,
      "minutes#zero": EN_MINUTE,
      "minutes#one": EN_MINUTE,
      "minutes#other": EN_MINUTES,
      "seconds#zero": EN_SECOND,
      "seconds#one": EN_SECOND,
      "seconds#other": EN_SECONDS,
    },
  },
  pages: {
    home: {
      metadata: {
        title: "Z tech",
        description: "A modern game company",
      },
      hero: {
        title: "We're Getting Ready",
        newsletter: {
          description:
            "We will back to something amazing. Getting the latest updates about our games. Please sign up to our newsletter.",
          placeholder: "Enter your email",
        },
      },
    },
  },
} as const;
