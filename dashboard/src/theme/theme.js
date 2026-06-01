import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#6366f1" },
    background: {
      default: "#020617",
      paper: "#0f172a",
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: ["Inter", "Roboto", "sans-serif"].join(","),
  },
});

export default theme;