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
        <Toolbar>
          <Typography align='center' variant='h4' style={{ flexGrow: 1 }}>
            🐷 English quiz buat mum 🐷
          </Typography>
        </Toolbar>
      </AppBar>

      <Typography textAlign='center'>
        <span style={{ color: 'white', fontSize: '20px' }}>Remember mam</span>
        <br />
        <span style={{ color: 'black', fontSize: '25px' }}>ACTIVE = MENG~ (mencuci, menyetir, memukul, mengGEBUK, menjual, etc.)</span>
        <br />
        <span style={{ color: 'black', fontSize: '25px' }}>PASSIVE = DI~ (dipukul, diTABOK, diTEMBAK, diTIMPAH)</span>
      </Typography>
      <DisplayQuiz questions={questionsData} />
    </>
  )
}

export default App