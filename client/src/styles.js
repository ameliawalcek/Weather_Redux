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
    }
}))