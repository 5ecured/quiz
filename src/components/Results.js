import React from 'react'
import { Typography, Box, Button } from '@mui/material'
import { useStyles } from './DisplayQuizStyles'

const Results = ({ score, length, startGame }) => {
    const classes = useStyles()

    return (
        <Box className={classes.results}>
            <Typography variant='h4'>
                Mam, you scored {score} out of {length}
            </Typography>
            <Button style={{ marginTop: '25px' }} variant='contained' onClick={startGame}>
                <Typography className={classes.reset}>
                    Start again
                </Typography>
            </Button>
        </Box>
    )
}

export default Results