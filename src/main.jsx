import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

createRoot(document.getElementById("root")).render(
  <StrictMode>
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
  </StrictMode>
);
