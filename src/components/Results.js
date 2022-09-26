import React from 'react'
import { Typography, Box, Button } from '@mui/material'
import { useStyles } from './DisplayQuizStyles'

const Results = () => {
    const classes = useStyles()


    return (
        <Box className={classes.results}>
            <Typography variant='h4'>
                Mam, you scored 1 out of 5
            </Typography>
            <Button style={{ marginTop: '25px' }} variant='contained'>
                <Typography className={classes.reset}>
                    Start again
                </Typography>
            </Button>
        </Box>
    )
}

export default Results