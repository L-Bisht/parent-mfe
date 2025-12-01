import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./root-config";

function App() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: "2rem" }}>
      <header style={{ borderBottom: "1px solid #ccc", paddingBottom: "1rem", marginBottom: "2rem" }}>
        <h1>Parent MFE</h1>
        <p>Root application shell for micro-frontends</p>
      </header>

      <main>
        <div id="single-spa-container" style={{ minHeight: "400px", padding: "1rem", border: "1px solid #ddd" }} />
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
