import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#100d28",
      light: "#c484f1",
      dark: "#0a071a",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#8906e6",
      light: "#9947d4",
      dark: "#5c02a3",
      contrastText: "#ffffff",
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#313131",
      secondary: "#0022e0",
    },
  },

  typography: {
    fontFamily: '"Montserrat", sans-serif',
    button: {
      fontWeight: 600,
      textTransform: "none",
    },
  },

  components: {
    /* ========================
       BUTTON
    ======================== */
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          fontSize: "1rem",
          padding: "10px 24px",
          borderRadius: 8,

          "&.Mui-disabled": {
            opacity: 0.5,
            cursor: "not-allowed",
          },
        },
        containedPrimary: {
          backgroundColor: "#8906e6",
          "&:hover": {
            backgroundColor: "#5c02a3",
          },
        },
      },
    },

    /* ========================
        TEXT FIELD
     ======================== */
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,

            "& fieldset": {
              borderColor: "#313131",
            },

            "&:hover fieldset": {
              borderColor: "#8906e6",
            },

            "&.Mui-focused fieldset": {
              borderColor: "#8906e6",
              borderWidth: 2,
            },

            "&.Mui-disabled": {
              opacity: 0.8,
              backgroundColor: "#f0f0f0",
              cursor: "not-allowed",

              "& fieldset": {
                borderColor: "#000000 !important",
              },

              "& input": {
                WebkitTextFillColor: "#313131",
              },
              "& textarea": {
                WebkitTextFillColor: "#313131",
              },
            },
          },

          "& .MuiInputLabel-root.Mui-focused": {
            color: "#8906e6",
          },

          "& .MuiInputLabel-root.Mui-disabled": {
            color: "#313131",
            opacity: 0.7,
          },
        },
      },
    },

    /* ========================
       SWITCH
    ======================== */
    MuiSwitch: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            opacity: 0.5,
          },
        },
        switchBase: {
          "&.Mui-checked": {
            color: "#ffffff",
            "& + .MuiSwitch-track": {
              backgroundColor: "#8906e6",
            },
          },
        },
        track: {
          backgroundColor: "#c484f1",
        },
      },
    },
  },
});

export default theme;