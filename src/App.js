import React from 'react'
import { CssBaseline, AppBar, Toolbar, Typography } from '@mui/material'
import DisplayQuiz from './components/DisplayQuiz'
import './App.css'
import { questionsData } from './questions'

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position='sticky'>
        <Toolbar >
          <Typography align='center' variant='h4' style={{ flexGrow: 1 }}>
            🐷 English quiz buat mum 🐷
          </Typography>
        </Toolbar>
      </AppBar>

      <DisplayQuiz questions={questionsData} />
    </>
  )
}

export default App