import { Client } from "https://deno.land/x/postgres@v0.16.1/mod.ts";

const client = new Client(
  "postgresql://postgres:changeme@94.250.202.137:5432/ta?schema=public",
);
await client.connect();

type QueryProps = {
  query: string;
};

const cache = new Map<string, any>();

export const getQuery = async ({ query }: QueryProps): Promise<any> => {
  const cachedValue = cache.get(query);
  if (cachedValue) {
    console.log("i have cache");
    return cachedValue;
  }

  console.log("no cache");
  console.time("querydb");
  const object_result = await client.queryObject(query);
  console.timeEnd("querydb");
  // console.log(object_result.rows);
  cache.set(query, object_result.rows);
  return object_result.rows;
};
