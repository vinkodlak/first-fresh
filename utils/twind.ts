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
        jura: "jura, sans-serif",
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
};
if (IS_BROWSER) setup(config);
