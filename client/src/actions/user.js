import * as api from '../api'
import { FETCH_ALL_CITIES, FETCH_ALL_FAVORITES, CREATE_FAVORITE, DELETE_FAVORITE, TOGGLE_TRUE, TOGGLE_FALSE } from '../constants/constants'

export const fetchFavorites = (units) => async (dispatch) => {
    try {
        let favorites = await api.fetchFavorites()
        favorites = favorites.data.map(d => parseInt(d.cityId))
        dispatch({ type: FETCH_ALL_FAVORITES, payload: favorites })

        if (favorites.length) {
            const { data } = await api.getCities(favorites, units.substring(1).toLowerCase())
            const newData = data.map(d => {
                return { id: d.id, name: d.name, country: d.sys['country'], main: d.main, weather: d.weather[0], wind: d.wind }
            })

            dispatch({ type: FETCH_ALL_CITIES, payload: newData })
        }
    } catch (error) {
        console.error(error)
    }
}

export const createFavorite = (cityId) => async (dispatch) => {
    try {
        const data = await api.createFavorite(cityId)
        dispatch({ type: CREATE_FAVORITE, payload: data })

    } catch (error) {
        console.log(error)
    }
}

export const deleteFavorite = (cityId) => async (dispatch) => {
    try {
        await api.deleteFavorite(cityId)

        dispatch({ type: DELETE_FAVORITE, payload: cityId })
    } catch (error) {
        console.log(error)
    }
}

export const setUnits = (type) => {
    return {
        type,
        payload: 'string'
    }
}
