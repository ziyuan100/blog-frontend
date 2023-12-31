import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import { BrowserRouter } from 'react-router-dom';
  
const theme = createTheme({
  palette: {
    primary: {
      main: "#424242"
    },
    secondary: {
      main: "#e5a5c0"
    },
    background: {
      default: "#e5a5c0"
    }
  },
  typography: {
    body1: {
      fontSize: "1.1em"
    }
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
