import { e as error } from "../../../chunks/index.js";
import { r as routeList } from "../../../chunks/routeList.js";
const BYPASS_TOKEN = "AbcdE12345AbcdE12345AbcdE12345AbcdE12345";
async function load({ params }) {
  const page = routeList.find((page2) => page2.slug === params.slug);
  if (!page)
    throw error(404);
  const conn = await fetch("https://dog.ceo/api/breeds/image/random");
  if (!conn.ok)
    throw error(500);
  const image = await conn.json();
  page.imageUrl = image.message;
  return {
    page
  };
}
const config = {
  isr: {
    expiration: false,
    bypassToken: BYPASS_TOKEN
  }
};
export {
  config,
  load
};
