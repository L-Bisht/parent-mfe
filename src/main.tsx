// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import "./root-config"; // this will register apps and start single-spa

export const RootShell: React.FC = () => {
  return (
    <>
      <header style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
        <h1>Root MFE Shell</h1>
      </header>

      {/* Single-spa apps mount directly into DOM; you can provide layout slots */}
      <main id="single-spa-container" style={{ padding: "1rem" }} />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RootShell />
);
