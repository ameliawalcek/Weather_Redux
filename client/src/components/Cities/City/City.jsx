import React from 'react'
import useStyles from './styles'
import { createFavorite, deleteFavorite } from '../../../actions/user'
import { useDispatch, useSelector } from 'react-redux'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'
import Typography from '@material-ui/core/Typography'

const City = ({ city }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const units = useSelector(state => state.units)
    const favorites = useSelector(state => state.favorites)
    const isFavorite = favorites.length && favorites.some(f => city.id === f)

    const handleClick = () => {
        isFavorite
            ? dispatch(deleteFavorite(city.id))
            : dispatch(createFavorite(city.id))
    }

    return (
        <div className={classes.root}>
            <div className={classes.icon} onClick={handleClick}>
                {isFavorite
                    ? <RemoveCircleIcon style={{color: '#ffffffa8'}}/>
                    : <AddCircleIcon style={{color: '#ffffffa8'}}/>
                }
            </div>
            <div className={classes.details}>
                <Typography component="h5" variant="h5">
                    {city.name}, {city.country}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    {city.main.temp}{units}
                </Typography>
            </div>
            <div>
                <Typography variant="subtitle1" color="textSecondary">
                    {city.weather.description}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    humidity: {city.main.humidity}%
                        </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    pressure: {city.main.pressure}
                </Typography>
            </div>
            <div className={classes.img}>
                <img src={`http://openweathermap.org/img/wn/${city.weather.icon}@2x.png`} alt={city.weather.description} />
            </div>
        </div>
    )
}

export default City