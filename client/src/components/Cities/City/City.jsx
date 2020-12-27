import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useStyles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle'
import { createFavorite, deleteFavorite } from '../../../actions/user'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';

const City = ({ city }) => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const theme = useTheme();

    const units = useSelector(state => state.units)
    const favorites = useSelector(state => state.favorites)
    const isFavorite = favorites.length && favorites.some(f => city.id === f)

    const handleClick = () => {
        isFavorite
            ? dispatch(deleteFavorite(city.id))
            : dispatch(createFavorite(city.id))
    }

    return (
        <>
            <Card className={classes.root}>
                {isFavorite
                    ? <div onClick={handleClick}><RemoveCircleIcon /></div>
                    : <div onClick={handleClick}><AddCircleIcon /></div>
                }
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {city.name}, {city.country}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {city.main.temp}{units}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {city.weather.description}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            humidity: {city.main.humidity}%
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            pressure: {city.main.pressure}
                        </Typography>
                    </CardContent>
                </div>
                <CardMedia
                    className={classes.cover}
                    image={`http://openweathermap.org/img/wn/${city.weather.icon}@2x.png`}
                    title="Live from space album cover"
                />
            </Card>
        </>
    )
}

export default City