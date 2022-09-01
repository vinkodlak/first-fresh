/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";

export default function App(props: AppProps) {
  return (
    <>
      <Head>
        <title>Hello from fresh</title>
        <meta name="description" content="Hello world from fresh!" />
      </Head>
      <props.Component />
    </>
  );
}
