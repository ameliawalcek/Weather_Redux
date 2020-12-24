import * as api from '../api'
import { FETCH_ALL_CITIES } from '../constants/constants'
//1

export const fetchFavorites = () => async (dispatch) => {
    try {
        const data = await api.fetchFavorites()
        console.log(data)

        dispatch({ type: FETCH_ALL_CITIES, payload: data })
    } catch (error) {
        console.error(error)
    }
}

export const createFavorite = (cityId) => async (dispatch) => {
    console.log('trying to add')
    const data = await api.createFavorite(cityId)
    console.log('actions', data)
}

export const deleteFavorite = (cityId) => async (dispatch) => {
    await api.deleteFavorite(cityId)
    console.log('trying to delete')
}

export const setUnits = (type) => {
    return {
        type,
        payload: 'string'
    }
}
