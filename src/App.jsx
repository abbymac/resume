// import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.tsx';
import HomePage from './components/pages/HomePage';
import Experience from './components/pages/Experience';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
      <Experience />
    </ThemeProvider>
  )
}

export default App
