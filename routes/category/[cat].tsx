import { PageProps } from "$fresh/server.ts";

export default function Category(props: PageProps) {
  return <div>Category {props.params.name}</div>;
}
