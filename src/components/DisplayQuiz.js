import React, { useState, useEffect } from 'react'
import { Typography, Box, Button } from '@mui/material'
import { useStyles } from './DisplayQuizStyles'
import Results from './Results'

const DisplayQuiz = ({ questions }) => {
    const classes = useStyles()
    const length = questions.length

    const [questionNumber, setQuestionNumber] = useState(0)
    const [score, setScore] = useState(0)
    // const [changeButtonColor, setChangeButtonColor] = useState(false)
    const [showResults, setShowResults] = useState(false)
    // const [abc, setAbc] = useState('')


    // useEffect(() => {
    //     questions[questionNumber].possibleAnswers.filter(a => {
    //         if (a.isCorrect) setCorrectAnswer(a.answer)
    //     })
    // }, [questionNumber])

    const handleClick = async (obj, e, arr) => {
        const { isCorrect, answer } = obj

        if (isCorrect) {
            setScore(score + 1)
            e.target.style.backgroundColor = 'green'
            await delay(500)
            e.target.style.backgroundColor = ''
        } else {
            e.target.style.backgroundColor = 'red'

            /*TO IMPLEMENT LATER, TO MAKE THE CORRECT BUTTON TURN GREEN

            let temp = ''
            arr.forEach(el => {
                if (el.isCorrect) temp = el.answer
            })


            console.log(e.target.textContent);
            console.log(temp);

            */

            await delay(500)
            e.target.style.backgroundColor = ''
        }

        nextQuestion()

    }

    // const handleClick = async (obj, e, arr) => {
    //     console.log(arr);
    //     const { isCorrect, answer } = obj

    //     if (isCorrect) {
    //         setScore(score + 1)
    //         setMyClassName({
    //             [answer]: isCorrect ? classes.green : classes.red
    //         })
    //         await delay(1500)
    //         // e.target.style.backgroundColor = ''
    //     } else {
    //         e.target.style.backgroundColor = 'red'

    //         /*TO IMPLEMENT LATER, TO MAKE THE CORRECT BUTTON TURN GREEN

    //         let temp = ''
    //         arr.forEach(el => {
    //             if (el.isCorrect) temp = el.answer
    //         })


    //         console.log(e.target.textContent);
    //         console.log(temp);

    //         */

    //         await delay(1500)
    //         e.target.style.backgroundColor = ''
    //     }

    //     nextQuestion()

    // }

    const delay = milliseconds => {
        return new Promise(resolve => {
            setTimeout(resolve, milliseconds);
        });
    }


    const nextQuestion = () => {
        if (questionNumber + 1 === questions.length) {
            // setQuestionNumber(0)
            setShowResults(true)
        } else {
            setQuestionNumber(questionNumber + 1)
        }
    }

    const startGame = () => {
        setShowResults(false)
        setQuestionNumber(0)
        setScore(0)
    }


    const listOfAnswers = questions[questionNumber].possibleAnswers.map((obj, i, arr) => {
        return (
            <Button
                key={i}
                style={
                    {
                        margin: '15px 0',
                        // backgroundColor: changeButtonColor ? 'green' : ''
                    }
                }
                variant='contained'
                onClick={e => handleClick(obj, e, arr)}
            >
                {obj.answer}
            </Button>
        )
    })


    return (
        <>
            {
                !showResults && (
                    <Box className={classes.main}>
                        <Box className={classes.question}>
                            <Box style={{ marginBottom: '20px' }}>
                                <Typography>
                                    Question {questionNumber + 1}/{questions.length}
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
                        {/* <Box className={classes.next}>
                        <Button >
                            <Typography style={{ color: 'white' }} variant='h7'>
                                Next
                            </Typography>
                        </Button>
                    </Box> */}
                        <Box className={classes.score}>
                            <Typography variant='h6' style={{ color: 'white' }}>Score: {score}</Typography>
                        </Box>
                    </Box >
                )
            }

            {
                showResults && (
                    <Results
                        score={score}
                        length={length}
                        startGame={startGame}
                    />
                )
            }
        </>
    )
}

export default DisplayQuiz