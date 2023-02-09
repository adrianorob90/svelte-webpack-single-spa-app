import "systemjs-webpack-interop/auto-public-path/1";

import singleSpaSvelte from "single-spa-svelte";
import App from "./App.svelte";

// const app = new App({
//   target: document.body,
// });

// export default app;

const svelteLifecycles = singleSpaSvelte({
  component: App,
});

export const bootstrap = svelteLifecycles.bootstrap;
export const mount = svelteLifecycles.mount;
export const unmount = svelteLifecycles.unmount;
