import * as api from '../api'
import { GET_NEW_CITY, GET_LIVE_CITY, NO_CITY } from '../constants/constants'

export const getCity = (cityName, units) => async (dispatch) => {
    try {
        let { data } = await api.getCity(cityName, units)

        data = { id: data.id, name: data.name, country: data.sys['country'], main: data.main, weather: data.weather[0] }
        console.log('creating new city', data)
        dispatch({ type: GET_NEW_CITY, payload: data })

    } catch (error) {
        dispatch({ type: NO_CITY, payload: '' })
        console.log(error)
    }
}

export const getLiveLocation = (lat, lon, units) => async (dispatch) => {
    try {
        let { data } = await api.getLiveCity(lat, lon, units)
        data = { id: data.id, name: data.name, country: data.sys['country'], main: data.main, weather: data.weather[0] }

        dispatch({type: GET_LIVE_CITY, payload: data})
    } catch (error) {
        console.log(error)
    }
}