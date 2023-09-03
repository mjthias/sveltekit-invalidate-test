import { error } from "@sveltejs/kit";
import { BYPASS_TOKEN } from "$env/static/private";

export async function GET({ url }) {
  const path = url.searchParams.get("path");
  if (!path) throw error(400, "Please provide a 'path' param");

  const urlObject = new URL(url);
  const baseUrl = import.meta.env.DEV ? "http://localhost:5173" : `https://${urlObject.hostname}`;

  await fetch(baseUrl + path, {
    headers: {
      "x-prerender-revalidate": BYPASS_TOKEN,
    },
  });

  return new Response("success");
}
