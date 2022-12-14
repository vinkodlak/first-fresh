import { Handlers, PageProps } from "$fresh/server.ts";
// import { Client } from "https://deno.land/x/postgres@v0.16.1/mod.ts";
import { tw } from "../../utils/twind.ts";
import { getQuery } from "../../utils/cache.ts";

// const PGDATABASE = "railway";
// const PGHOST = "containers-us-west-68.railway.app";
// const PGPASSWORD = "sHG7cxerKoA5TxA7XU2X";
// const PGPORT = 5620;
// const PGUSER = "postgres";

interface Post {
  id: number;
  title: string;
  slug: string;
  date: string;
}

export const handler: Handlers<Post[] | null> = {
  async GET(_, ctx) {
    // console.time("client");
    // const client = new Client(
    //   "postgresql://postgres:changeme@94.250.202.137:5432/ta?schema=public",
    // );
    // await client.connect();
    // console.timeEnd("client");
    console.time("query");
    const object_result = await getQuery({
      query:
        `SELECT id,title,slug,date FROM "Post" ORDER BY date DESC LIMIT 10`,
    });
    console.timeEnd("query");
    // console.log(object_result.rows);

    // await client.end();
    return ctx.render(object_result as Post[]);
  },
};

export default function Category({ data }: PageProps<number | null>) {
  if (!data) {
    return <h1>User not found</h1>;
  }

  return <div class={tw`col-span-full`}>Category: {JSON.stringify(data)}</div>;
}
