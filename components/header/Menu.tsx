/** @jsx h */
import { h, JSX } from "preact";
import { tw } from "@twind";

const menuItems = {
  hr: [
    { link: `category/putovanja`, text: `Putovanja` },
    { link: `category/hrvatska`, text: `Hrvatska` },
    { link: `category/wine-gastro`, text: `Wine & gastro` },
    { link: `category/europa`, text: `Europa` },
    { link: `category/vodic-po-skijalistima`, text: `Skijaški vodič` },
  ],
  en: [
    { link: `category/travel`, text: `Travel` },
    { link: `category/photography`, text: `Photography` },
    { link: `category/lifestyle-en`, text: `Lifestyle` },
    { link: `category/business-en`, text: `Business` },
    { link: `category/ski-guide`, text: `Ski guide` },
  ],
  sr: [
    { link: `category/putovanja-sr`, text: `Putovanja` },
    { link: `category/fotografija-sr`, text: `Fotografija` },
    { link: `category/srbija`, text: `Srbija` },
    { link: `category/business-sr`, text: `Business` },
  ],
  mk: [
    {
      link: `category/%D0%BF%D0%B0%D1%82%D1%83%D0%B2%D0%B0%D1%9A%D0%B0`,
      text: `Патувања`,
    },
    {
      link:
        `category/%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D0%B8`,
      text: `Фотографии`,
    },
    {
      link:
        `category/%D0%BC%D0%B0%D0%BA%D0%B5%D0%B4%D0%BE%D0%BD%D0%B8%D1%98%D0%B0`,
      text: `Македонија`,
    },
    { link: `category/%D0%B1%D0%B8%D0%B7%D0%BD%D0%B8%D1%81`, text: `бизнис` },
  ],
};

const language = "hr";

export const Menu = ({ languagePath = "" }): JSX.Element => {
  return (
    <ul class={tw`hidden md:flex text-uppercase font-jura`}>
      {menuItems[language].map((menuItem, index) => (
        <li key={index}>
          <a href={`/${languagePath}${menuItem.link}`}>
            {menuItem.text}
          </a>
        </li>
      ))}
    </ul>
  );
};
