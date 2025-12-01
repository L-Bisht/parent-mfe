import { registerApplication, start } from "single-spa";

// Use Function to dynamically create import, hiding it from Vite's static analysis
const importMfe = () => new Function('return import("@org/child-mfe")')();

registerApplication({
  name: "@org/child-mfe",
  app: importMfe,
  activeWhen: "/",
});

start();
