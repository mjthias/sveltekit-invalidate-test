import { c as create_ssr_component, b as escape, f as add_attribute } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title;
  let imageUrl;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  title = data.page.title;
  imageUrl = data.page.imageUrl;
  return `<h1>${escape(title)}</h1> <img${add_attribute("src", imageUrl, 0)} alt="${"A cute dog, " + escape(title, true)}">`;
});
export {
  Page as default
};
