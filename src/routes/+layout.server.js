import { routeList } from "$lib/routeList";

export function load() {
  return {
    pages: routeList.map((route) => ({
      slug: route.slug,
      title: route.title,
      lol: "asdk",
    })),
  };
}

export const prerender = true;
