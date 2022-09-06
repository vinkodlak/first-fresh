import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
export * from "twind/css";
export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    extend: {
      fontFamily: {
        jura: "'Jura', sans-serif",
      },
      colors: {
        "ta_blue": "#07819C", //"#0886a3",
        "ta_link_blue": "#1bc1d3",
      },
      spacing: {
        header: "3rem",
      },
      gridTemplateColumns: {
        main_grid: "12px repeat(12, 1fr) 12px",
        main_grid_md:
          "minmax(0px, 1fr) repeat(12, minmax(auto, var(--col))) minmax(0px, 1fr)",
      },
      gap: {
        "main": "var(--grid-gap)",
      },
    },
  },
  preflight: {
    // "@import":
    //   "url(https://fonts.googleapis.com/css2?family=Jura&display=swap)",
    "@font-face": [
      {
        fontFamily: "Jura",
        fontWeight: "400",
        src: 'url(/fonts/Jura.woff2) format("woff2")',
      },
    ],
  },
};
if (IS_BROWSER) setup(config);
