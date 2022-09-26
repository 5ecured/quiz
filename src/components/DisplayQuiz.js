import React from 'react'
import { AppBar, Toolbar, Typography, Grid, Box } from '@mui/material'
import { useStyles } from './DisplayQuizStyles'

const DisplayQuiz = () => {
    const classes = useStyles()

    return (
        // <Grid container className={classes.test} flexDirection='column' spacing={5}>
        //     <Grid item className={classes.question}>
        //         abcdef
        //     </Grid>
        //     <Grid item className={classes.question}>
        //         babi
        //     </Grid>
        //     <Grid item className={classes.question}>
        //         c
        //     </Grid>
        //     <Grid item className={classes.question}>
        //         d
        //     </Grid>
        // </Grid>
        <Box className={classes.main}>
            <Box className={classes.question}>
                <Box>
                    <Typography>
                        Question 1/100
                    </Typography>
                </Box>
                <Box style={{ marginTop: '15px', marginBottom: '15px' }}>
                    <Typography variant='h4'>
                        Yesterday I ___ to school
                    </Typography>
                </Box>
            </Box>
            <h1></h1>
            <Box className={classes.answers}>
                <Box>
                    <Typography>
                        a
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                        a
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                        a
                    </Typography>
                </Box>
                <Box>
                    <Typography>
                        a
                    </Typography>
                </Box>
            </Box>
        </Box >
    )
}

export default DisplayQuiz