import { Handlers, PageProps } from "$fresh/server.ts";
import { Client } from "https://deno.land/x/postgres@v0.16.1/mod.ts";
import { tw } from "../../utils/twind.ts";

const PGDATABASE = "railway";
const PGHOST = "containers-us-west-68.railway.app";
const PGPASSWORD = "sHG7cxerKoA5TxA7XU2X";
const PGPORT = 5620;
const PGUSER = "postgres";

interface Post {
  id: number;
  title: string;
  slug: string;
  date: string;
}

export const handler: Handlers<Post[] | null> = {
  async GET(_, ctx) {
    const client = new Client(
      "postgresql://postgres:changeme@94.250.202.137:5432/ta?schema=public",
    );
    await client.connect();
    const object_result = await client.queryObject(
      "SELECT * FROM 'Post' LIMIT 10",
    );
    console.log(object_result.rows); // [{id: 1, name: 'Carlos'}, {id: 2, name: 'John'}, ...]

    await client.end();
    return ctx.render(object_result.rows as Post[]);
  },
};

export default function Category({ data }: PageProps<number | null>) {
  if (!data) {
    return <h1>User not found</h1>;
  }

  return <div class={tw`col-span-full`}>Category: {JSON.stringify(data)}</div>;
}
