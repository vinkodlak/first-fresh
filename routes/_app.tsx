/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";
import { Header } from "../components/header/Header.tsx";

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
      </Head>
      <Header />
      <props.Component />
    </>
  );
}
