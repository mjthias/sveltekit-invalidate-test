import { c as create_ssr_component, e as each, b as escape } from "../../chunks/ssr.js";
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-rxgznp{margin-right:1rem}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<nav><a href="/" class="svelte-rxgznp" data-svelte-h="svelte-5a0zws">Home</a> ${each(data.pages, (page) => {
    return `<a href="${"/" + escape(page.slug, true)}" class="svelte-rxgznp">${escape(page.title)}</a>`;
  })}</nav> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
