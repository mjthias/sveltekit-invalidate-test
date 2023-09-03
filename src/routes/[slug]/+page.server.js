import { error } from "@sveltejs/kit";
import { routeList } from "$lib/routeList";

export async function load({ params }) {
  // Find pages by params.slug
  const page = routeList.find((page) => page.slug === params.slug);
  if (!page) throw error(404);

  // Get dog image
  const conn = await fetch("https://dog.ceo/api/breeds/image/random");
  if (!conn.ok) throw error(500);
  const image = await conn.json();

  // append image to page-obj
  page.imageUrl = image.message;

  return {
    page,
  };
}

export const config = {
  isr: {
    expiration: false,
    bypassToken: "abc123abcdabc123abcdabc123abcdABabbc123abcdABab",
  },
};
