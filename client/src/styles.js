import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    selected: {
        color: 'white',
        fontSize: '20px',
    },
    notSelected: {
        color: 'white',
        fontWeight: 'bolder',
        fontSize: '20px',
        cursor: 'pointer'
    },
    titleContainer:{
        backgroundSize: 'cover',
        position: 'relative',
        height: '40px',
        marginBottom: '15px',
        marginTop: '7px',
    },
    title:{
        backgroundColor: '#ffffffa8',
        color: 'black',
        fontWeight: 'bold',
        fontSize: '44px',
        margin: '0 auto',
        width: '100%',
        textAlign: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        mixBlendMode: 'screen',
    },
}))