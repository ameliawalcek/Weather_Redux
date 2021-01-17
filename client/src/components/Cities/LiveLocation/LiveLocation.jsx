import React from 'react'
import useStyles from './styles'
import { useSelector } from 'react-redux'
import Typography from '@material-ui/core/Typography'
import moment from 'moment'

const LiveLocation = () => {
    const classes = useStyles()
    const units = useSelector(state => state.units)
    const liveLocation = useSelector(state => state.liveLocation)
    console.log(liveLocation.weeklyData)
    const city = liveLocation.locationData

    return (
        <div className={classes.cityContainer}>
            <div className={classes.root}>
                <div>
                    <Typography component="h4" variant="h4">
                        {city.name}, {city.country}
                    </Typography>
                    <Typography component="h6" variant="h6">
                        {moment().format('dddd')} {moment().format('LT')}
                    </Typography>
                </div>
                <div className={classes.mainContent}>
                    <div className={classes.details}>
                        <img className={classes.img} src={`http://openweathermap.org/img/wn/${city.weather.icon}@2x.png`} alt={city.weather.description} />
                        <Typography variant="subtitle1" color="textSecondary">
                            {city.current}{units}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {city.weather.description}
                        </Typography>
                    </div>
                    <div>
                        <div className={classes.mainTemp}>
                            <Typography variant="subtitle1" color="textSecondary">
                                {Math.floor(city.max)}{units}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {Math.floor(city.min)}{units}
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveLocation