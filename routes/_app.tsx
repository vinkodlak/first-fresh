import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";
import { Header } from "../components/header/Header.tsx";
import { css, screen, tw } from "@twind";

const customStyle = css(
  {
    "--grid-gap": "12px",
  },
  screen(
    "md",
    css({
      "--grid-gap": "40px",
      "--col": "calc((1103px - (11 * var(--grid-gap))) / 12)",
    }),
  ),
);

export default function App(props: AppProps) {
  return (
    <>
      <Head>
        <title>Hello from fresh</title>
        <meta name="description" content="Hello world from fresh!" />
        <link
          rel="dns-prefetch"
          href="https://images-ta.vinko.me"
          crossOrigin="true"
        />
        <link rel="preconnect" href="https://images-ta.vinko.me" />
        <link
          rel="preload"
          href="/fonts/Jura.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="true"
        />
        <link
          rel="preload"
          href="/fonts/OpenSans.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="true"
        />
        <link
          rel="preload"
          href="/fonts/Roboto.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="true"
        />
      </Head>
      <Header />
      <div
        class={tw`grid grid-cols-main_grid gap-x-main md:grid-cols-main_grid_md ${customStyle}`}
      >
        <props.Component />
      </div>
    </>
  );
}
