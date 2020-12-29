import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '75%',
        marginBottom: '30px',
        background: 'rgba(255, 255, 255, 0.1)',
        border: 'rgba(255, 255, 255, 0.1) solid 2px',
    },
    icon: {
        color: 'white',
        cursor: 'pointer'
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 100,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
}));
