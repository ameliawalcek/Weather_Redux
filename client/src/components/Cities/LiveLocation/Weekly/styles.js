import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(() => ({
    img: {
        height: '50px',
        objectFit: 'cover',
        objectPosition: '-20% 0'
    },
    day: {
        fontSize: '13px',
        color: 'white'
    },
    description: {
        fontSize: '10px',
        color: 'white'
    },
    temp: {
        fontSize: '12px',
        color: 'white'
    },
    unit: {
        fontSize: '10px',
        verticalAlign: 'top'
    },
    cityContainer:{
        textAlign: 'center',
    }
}))
