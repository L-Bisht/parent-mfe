// src/root-config.ts
import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@org/child-mfe",
  // 👇 IMPORTANT: tell Vite to NOT try to resolve this specifier
  app: () => import(/* @vite-ignore */ "@org/child-mfe"),
  activeWhen: (location) => location.pathname.startsWith("/"),
});

start();
