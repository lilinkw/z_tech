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
      about: {
        description:
          "Browse our selection of free online games and have a great time without leaving the site! Our Kids Games option also includes game reviews, extensive game cheats and walkthroughs, and much more. We have exclusive free downloads, videos, and articles as well. Etech reviews the most popular kids games from all the most popular video gaming platforms, so you don’t need to search around for fun anywhere else on the Internet. Explore a whole new world of gaming on Etech.",
        benefits: {
          info_1: {
            title: "24 - Hour",
            description:
              "24/7 access ensures operators' businesses runs smoothly all year long.",
          },
          info_2: {
            title: "Design",
            description:
              "Combining imaginative universes, play dynamics, and unprecedented gameplay, our games transcend the boundaries of the virtual world by weaving innovative gameplay.",
          },
          info_3: {
            title: "Team",
            description:
              "Etech is an award-winning, international studio of designers, artists, animators and producers that create content for the biggest names in film and video games.",
          },
        },
        stats: {
          info_1: {
            description: "Users",
          },
          info_2: {
            description: "Games",
          },
        },
      },
      games: {
        title: "Our Games",
        description:
          "As a pioneer of mobile app gamification, we take pride in originality and individuality, providing global players with state-of-the-art games that feature splendid storylines, sensational sound effects and magnificent animation that never cease to impress.",
      },
      partners: {
        title: "Our partners",
      },
    },
  },
} as const;
