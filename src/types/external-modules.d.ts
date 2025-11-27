/**
 * Type declarations for external micro-frontend modules
 * These modules are loaded dynamically at runtime via single-spa
 * and are not available as npm packages
 */

declare module "@org/child-mfe" {
  export const bootstrap: () => Promise<void>;
  export const mount: (props: any) => Promise<void>;
  export const unmount: (props: any) => Promise<void>;
}
