/** @jsx h */
import { h, JSX } from "preact";
import { css, tw } from "@twind";

const HamburgerStyle = css({
  width: "25px",
  height: "25px",
  fill: "#fff",
  cursor: "pointer",
});

export function Hamburger(): JSX.Element {
  return (
    <svg
      class={tw`md:hidden ${HamburgerStyle}`}
      viewBox="0 0 100 70"
      width="40"
      height="40"
    >
      <rect width="100" height="10" rx="8"></rect>
      <rect y="30" width="100" height="10" rx="8"></rect>
      <rect y="60" width="100" height="10" rx="8"></rect>
    </svg>
  );
}
