import React, { useState, useEffect } from 'react'
import { Typography, Box, Button } from '@mui/material'
import { useStyles } from './DisplayQuizStyles'

const DisplayQuiz = ({ questions }) => {
    const classes = useStyles()

    const [questionNumber, setQuestionNumber] = useState(0)
    const [score, setScore] = useState(0)
    const [changeButtonColor, setChangeButtonColor] = useState(null)


    // useEffect(() => {
    //     questions[questionNumber].possibleAnswers.filter(a => {
    //         if (a.isCorrect) setCorrectAnswer(a.answer)
    //     })
    // }, [questionNumber])

    const handleClick = async (isCorrect, e, arr) => {
        console.log(e);
        if (isCorrect) {
            setScore(score + 1)
            e.target.style.backgroundColor = 'green'
            await delay(1500)
            e.target.style.backgroundColor = ''
        } else {
            e.target.style.backgroundColor = 'red'
            await delay(1500)
            e.target.style.backgroundColor = ''
        }

        // setTimeout(() => {
        //     if (isCorrect) {
        //         setChangeButtonColor(true)
        //     } else {
        //         setChangeButtonColor(false)
        //     }
        // }, 1500)

        // console.log('questionNumber', questionNumber);
        // console.log('questions.length', questions.length);

        nextQuestion()

    }

    const delay = milliseconds => {
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }

    const nextQuestion = () => {
        if (questionNumber + 1 === questions.length) {
            setQuestionNumber(0)
        } else {
            setQuestionNumber(questionNumber + 1)
        }
    }

    const listOfAnswers = questions[questionNumber].possibleAnswers.map((q, i, arr) => {
        return (
            <Button
                key={i}
                style={
                    {
                        marginBottom: '35px',
                        // backgroundColor: changeButtonColor ? 'green' : ''
                    }
                }
                variant='contained'
                onClick={e => handleClick(q.isCorrect, e, arr)}>
                {q.answer}
            </Button>
        )
    })



    return (
        <Box className={classes.main}>
            <Box className={classes.question}>
                <Box style={{ marginBottom: '20px' }}>
                    <Typography>
                        Question {questionNumber + 1}/5
                    </Typography>
                </Box>
                <Box style={{ marginTop: '15px' }}>
                    <Typography variant='h4'>
                        {questions[questionNumber].question}
                    </Typography>
                </Box>
            </Box >
            <h1></h1>
            <Box className={classes.answers}>
                {listOfAnswers}
            </Box>
            <Box>
                <Typography style={{ color: 'white' }}>Score: {score}</Typography>
            </Box>
        </Box >
    )
}

export default DisplayQuiz