/** @jsx h */
import { h, JSX } from "preact";
import { css, theme, tw } from "@twind";
import { FlagMenu } from "./FlagMenu.tsx";
import { Menu } from "./Menu.tsx";

const customStyle = css({
  "--logo_h": "calc(3rem + 72px)",
  position: "sticky",
  top: "calc(-1 * var(--logo_h) - 1px)",
  boxShadow: "0 0px 5px 4px rgba(0, 0, 0, 0.15)",
  zIndex: 150,

  h1: {
    height: "var(--logo_h)",
  },

  li: {
    position: "relative",
    lineHeight: "60px",

    "&:after": {
      content: "''",
      display: "block",
      position: "absolute",
      height: "3px",
      backgroundColor: theme("colors.ta_link_blue"),
      width: "100%",
      bottom: 0,
      transform: "scaleX(0)",
      transition: "transform 0s 0.2s ease",
    },

    "&:hover:after": {
      transition: "transform 0.35s ease",
      transform: "scaleX(1)",
    },

    a: {
      display: "block",
      color: "white",
      padding: "0 14px",
    },
  },
});

export const Header = (): JSX.Element => {
  return (
    <header class={tw`${customStyle}`}>
      <h1 class={tw`invisible md:visible flex items-center justify-center`}>
        <a href="/">
          <img
            src="/images/Travel-Advisor-Logo.png"
            width="272"
            height="72"
            alt="Travel Advisor"
          />
        </a>
      </h1>

      <nav class={tw`grid grid-cols-main_grid_md bg-ta_blue`}>
        <div
          class={tw`col-start-2 col-span-12 flex items-center justify-between flex-wrap`}
        >
          <Menu />
          <FlagMenu />
        </div>
      </nav>
    </header>
  );
};
