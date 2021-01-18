import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    root: {
        display: 'grid',
        gridTemplateRows: '.9fr 1fr',
        width: '100%',
        marginTop: '25px',
        background: 'rgba(255, 255, 255, 0.1)',
        border: 'rgba(255, 255, 255, 0.1) solid 2px',
    },
    mainContent:{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
    },
    mainTemp:{
        zIndex: '6'
    },
    icon: {
        color: 'white',
        cursor: 'pointer',
        display: 'grid',
        justifyContent: 'center',
    },
    img:{
        position: 'absolute',
        zIndex: '-10'
    },
    cityContainer: {
        display: 'grid',
        justifyItems: 'center',
    }
}));
