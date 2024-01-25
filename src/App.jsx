
// dependencies
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline';
import { useSelector } from 'react-redux';

// Components
import { AppRouter } from './router/router.jsx'

// Material themes
import theme from './assets/materialThemes.js'

function App() {

  const activeTheme = useSelector((state) => state.theme.activeTheme);
  console.log(theme[activeTheme])

  return (
    <ThemeProvider theme={theme[activeTheme]}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  )
}

export default App
