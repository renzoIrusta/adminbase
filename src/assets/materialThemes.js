import { createTheme } from "@mui/material/styles";

const themes = {
  light: createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#2B2D42',
      },
      secondary: {
        main: '#98C1D9',
      },
    },
  }),
  dark: createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#2B2D42',
      },
      secondary: {
        main: '#98C1D9',
      },
    },
  })
}

export default themes