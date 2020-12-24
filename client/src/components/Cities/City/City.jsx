import React from 'react'
import useStyles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import RemoveIcon from '@material-ui/icons/Remove'
import { createFavorite, deleteFavorite } from '../../../actions/user'

const City = ({ city }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const units = useSelector(state => state.units)
    const favorites = useSelector(state => state.favorites)
    console.log(favorites)
    const isFavorite = favorites && favorites.some(f => city.id === f)

    const handleClick = (e) => {
        isFavorite
        ? dispatch(deleteFavorite(city.id))
        : dispatch(createFavorite(city.id))
    }

    console.log(city)
    return (
        <div>
            <div onClick={handleClick}><AddCircleIcon /></div>
            <div onClick={handleClick}><RemoveIcon /></div>
            <div>{city.name}, {city.country}</div>
            <div>{city.main.feels_like}{units}</div>
            <div>{city.main.humidity}%</div>
            <div>{city.main.pressure}</div>
            <div>{city.main.temp}{units}</div>
            <div>{city.weather.description}</div>
            <img src={`http://openweathermap.org/img/wn/${city.weather.icon}@2x.png`} alt="" />
            <div>{city.weather.main}</div>
        </div>
    )
}

export default City