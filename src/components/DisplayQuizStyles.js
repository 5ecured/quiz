import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles(() => ({
    main: {
        textAlign: 'center',
        backgroundColor: '#154c79',
        margin: 'auto',
        marginTop: '50px',
        width: '80%',
        borderRadius: '25px',
        padding: '20px 35px 20px 35px'
    },
    question: {
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
    },
    answers: {
        color: 'white',
        display: 'flex',
        flexDirection: 'column'
    },
    results: {
        textAlign: 'center',
        backgroundColor: '#154c79',
        margin: 'auto',
        marginTop: '200px',
        width: '45%',
        height: '200px',
        borderRadius: '25px',
        padding: '50px',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    reset: {
        color: 'white',
        padding: '5px 50px'
    }
}))