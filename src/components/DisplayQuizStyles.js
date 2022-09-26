import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles(() => ({
    main: {
        textAlign: 'center',
        backgroundColor: '#154c79',
        margin: 'auto',
        marginTop: '20px',
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
        marginTop: '-25px',
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
    },
    score: {
        margin: '10px 0',
        paddingTop: '5px'
    },
    // next: {
    //     marginTop: '7px',
    //     padding: '8px',
    //     backgroundColor: '#4fbed6',
    //     width: '50%',
    //     margin: 'auto',
    //     borderRadius: '25px',
    //     marginBottom: '15px',
    //     color: 'white'
    // }
}))