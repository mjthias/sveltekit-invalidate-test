import * as server from '../entries/pages/_slug_/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/3.2d28bc43.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.71095f26.js"];
export const stylesheets = [];
export const fonts = [];
