import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    root: {
        display: 'grid',
        gridTemplateColumns: '.18fr .8fr 1fr',
        width: '88%',
        marginBottom: '30px',
        background: 'rgba(255, 255, 255, 0.1)',
        border: 'rgba(255, 255, 255, 0.1) solid 2px',
        padding: '5px'
    },
    icon: {
        color: 'white',
        cursor: 'pointer',
        display: 'grid',
        justifyContent: 'center',
    },
    img:{
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center'
    },
    cityContainer: {
        display: 'grid',
        justifyItems: 'center',
    }
}));
