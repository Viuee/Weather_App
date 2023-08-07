import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { deepOrange,teal } from '@mui/material/colors'
import { createTheme } from '@mui/material'



ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
          <App />
      </React.StrictMode>,

)
