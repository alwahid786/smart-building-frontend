import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    textTransform: "none",
  },
  gradients: {
    customGradient: "linear-gradient(0deg, #7B42F6 0%, #B01EFF 100%)",
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          width: "100%",
          alignItems: "center",
          color: "rgba(0, 0, 0, 0.6)",
        },
        body: {
          fontFamily: "Poppins, sans-serif",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          background: "linear-gradient(95.25deg, #7B42F6 0%, #B01EFF 100%)",
        },
      },
    },
  },
});
