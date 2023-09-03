import { r as routeList } from "../../chunks/routeList.js";
function load() {
  return {
    pages: routeList.map((route) => ({
      slug: route.slug,
      title: route.title,
      lol: "asdk"
    }))
  };
}
export {
  load
};
