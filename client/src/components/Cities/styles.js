import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    cityContainer: {
        display: 'grid',
        justifyItems: 'center',
        [theme.breakpoints.up('md')]: {
            gridTemplateColumns: '1fr 1fr',
          },
        [theme.breakpoints.up('lg')]: {
            gridTemplateColumns: '1fr 1fr 1fr',
          },
    },
}))