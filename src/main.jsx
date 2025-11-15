import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createAppQueryClient } from "./lib/queryClient.js";

const queryClient = createAppQueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        theme={createTheme({
          typography: {
            fontFamily: [
              "Inter",
              "system-ui",
              "Avenir",
              "Helvetica",
              "Arial",
              "sans-serif",
            ].join(", "),
          },
          shape: { borderRadius: 14 },
          palette: {
            background: { default: "#f7f7fb" },
          },
        })}
      >
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <App />
        </LocalizationProvider>
      </ThemeProvider>
      {import.meta.env.DEV && (
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-right"
        />
      )}
    </QueryClientProvider>
  </StrictMode>
);
