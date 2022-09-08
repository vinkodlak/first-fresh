/** @jsx h */
import { h, JSX } from "preact";
import { css, tw } from "@twind";

interface FlagProps {
  linkTo: string;
  imgSrc: string;
  alt: string;
}

const Flag = ({ linkTo, imgSrc, alt }: FlagProps): JSX.Element => {
  return (
    <li>
      <a href={linkTo}>
        <img src={imgSrc} width="18" height="12" alt={alt} />
      </a>
    </li>
  );
};

const UlLi = css(
  {
    margin: "0 auto",
    "li": {
      position: "relative",
      height: "60px",
      display: "flex",
      alignItems: "center",
    },
  },
);

export const FlagMenu = (): JSX.Element => {
  return (
    <ul class={tw`hidden md:flex justify-around ${UlLi}`}>
      <Flag linkTo="/" imgSrc="/images/hr.png" alt="Hrvatski" />
      <Flag linkTo="/en/" imgSrc="/images/en.png" alt="English" />
      <Flag linkTo="/sr/" imgSrc="/images/sr.png" alt="Srpski" />
      <Flag linkTo="/mk/" imgSrc="/images/mk.png" alt="Makedonski" />
    </ul>
  );
};
