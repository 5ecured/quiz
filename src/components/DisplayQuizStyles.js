import { makeStyles } from "@mui/styles"

export const useStyles = makeStyles(() => ({
    // question: {
    //     backgroundColor: 'darkblue',
    //     color: '#ffffff',
    //     width: '30%',
    //     height: '100%',
    //     // marginBottom: '15px'
    //     alignItems: 'center',
    //     justifyContent: 'center'
    // },
    // test: {
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    main: {
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#154c79',
        margin: 'auto',
        marginTop: '150px',
        width: '50%',
        borderRadius: '25px'
    },
    question: {
        // margin: '25px',
        color: 'white',
        paddingTop: '25px',
        display: 'flex',
        flexDirection: 'column',
    },
    answers: {
        color: 'white'
    },
}))