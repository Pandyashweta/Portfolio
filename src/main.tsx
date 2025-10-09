import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./components/sections/ThemeProvider.tsx";
import { ThemeToggle } from "./components/sections/ThemeToggle.tsx";
import "./index.css";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <ThemeProvider attribute="class" defaultTheme="dark" storageKey="shweta-portfolio-theme">
        <ThemeToggle />
        <App />
      </ThemeProvider>
    </React.StrictMode>,
  );
}
