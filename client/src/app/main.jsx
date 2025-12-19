import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";

import ErrorMessage from "@error/ErrorMessage";

import App from "./App.jsx";
import { ThemeProvider } from "@features/theme/ThemeProvider.jsx";

import "../global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorMessage}
      onError={(error, info) => { console.error("ErrorBoundary caught an error", error, info); }}
    >
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </StrictMode>
);
