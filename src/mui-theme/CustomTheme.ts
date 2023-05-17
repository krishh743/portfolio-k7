import { createTheme, responsiveFontSizes } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

let CustomTheme = createTheme({
  palette: {
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    primary: {
      main: "#323a44",
      dark: "#1b1b1b",
    },
    secondary: {
      main: "#363636",
    },
    text: {
      primary: "#17171c",
      secondary: "#1c1c1c",
      disabled: "#9192a0",
    },
    grey: {
      50: "#e1e1e1",
      100: "#f5f5f5",
      200: "#1c1c1c",
      300: "#5a5f62",
    },
    background: {
      paper: "#ffffff",
      default: "#f2f2f2",
    },
    divider: "#eeeeee",
    action: {
      disabled: "#929292",
      disabledBackground: "#ececec",
    },
  },
  typography: {
    fontFamily:
      '"AlbertSans-Regular", "AlbertSans-Medium", "AlbertSans-Bold", "AlbertSans-SemiBold", "AlbertSans-Light"',
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: "large",
        color: "primary",
        variant: "contained",
        disableRipple: true,
        disableElevation: true,
        disableFocusRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          textTransform: "inherit",
          fontFamily: "AlbertSans-Medium",
        },
        outlined: {
          border: "1.5px solid #363636",
          color: "#363636",
        },
        outlinedPrimary: {
          backgroundColor: "#f3f3f3",
        },
        outlinedSecondary: {
          backgroundColor: "#f5f5f5",
        },
        outlinedInherit: {
          backgroundColor: "#ffffff",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        color: "#17171c",
      },
    },
    MuiCheckbox: {
      defaultProps: {
        color: "default",
      },
    },
    MuiLink: {
      defaultProps: {
        color: "inherit",
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        margin: "dense",
        variant: "outlined",
        color: "secondary",
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: "outlined",
        margin: "none",
        IconComponent: ExpandMoreIcon,
        MenuProps: {
          PaperProps: { sx: { maxHeight: 250 } },
          MenuListProps: { sx: { ".MuiMenuItem-root": { minHeight: 35 } } },
        },
      },
      styleOverrides: {
        icon: {
          color: "#363636",
        },
      },
    },
    MuiStack: {
      defaultProps: {
        direction: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
    },
    MuiPaper: {
      styleOverrides: {
        outlined: {
          borderColor: "#979797",
        },
      },
    },
    MuiAvatar: {
      defaultProps: {
        variant: "square",
        sizes: "small",
        alt: "icons",
      },
    },
  },
});

export default CustomTheme = responsiveFontSizes(CustomTheme);
