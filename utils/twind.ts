import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
export * from "twind";
export * from "twind/css";
export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  theme: {
    colors: {
      "ta_blue": "#0886a3",
      "ta_link_blue": "#1bc1d3",
    },
    extend: {
      spacing: {
        header: "3rem",
      },
    },
  },
};
if (IS_BROWSER) setup(config);
