import * as api from '../api'
import { GET_NEW_CITY } from '../constants/constants'

export const getCity = (cityName, units) => async (dispatch) => {
    try {
        let { data } = await api.getCity(cityName, units)
    
        data = { id: data.id, name: data.name, country: data.sys['country'], main: data.main, weather: data.weather[0], wind: data.wind }

        dispatch({ type: GET_NEW_CITY, payload: data })
    } catch (error) {
        console.error(error)
    }
}