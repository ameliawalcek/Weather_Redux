import React from 'react'
import useStyles from './styles'
import { useSelector } from 'react-redux'

const Weekly = ({ day }) => {
    const classes = useStyles()
    const units = useSelector(state => state.units)

    const timeConverter = (UNIX_timestamp) => {
        const weekDay = { 0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday' }
        const date = new Date(UNIX_timestamp * 1000)
        return weekDay[date.getDay()]
    }

    return (
        <div className={classes.cityContainer}>
            <div className={classes.day}>{timeConverter(day.dt)}</div>
            <div className={classes.temp}>{Math.floor(day.temp.min)}<span className={classes.unit}>{units}</span> | {Math.floor(day.temp.max)}<span className={classes.unit}>{units}</span></div>
            <img className={classes.img} src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt={day.weather[0].description}/>
            <div className={classes.description}>{day.weather[0].description}</div>
        </div>
    )
}

export default Weekly