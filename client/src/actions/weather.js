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
        let { locationData, weeklyData } = (await api.getLiveCity(lat, lon, units)).data
        locationData = {
            id: locationData.id,
            name: locationData.name,
            country: locationData.sys['country'],
            main: locationData.main,
            max: weeklyData.daily[0].temp.max,
            min: weeklyData.daily[0].temp.min,
            current: weeklyData.current.temp,
            weather: locationData.weather[0]
        }
        weeklyData = weeklyData.daily
        weeklyData.shift()

        dispatch({ type: GET_LIVE_CITY, payload: { locationData, weeklyData } })
    } catch (error) {
        console.log(error)
    }
}