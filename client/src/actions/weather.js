import * as api from '../api'
import { NEW_CITY } from '../constants/constants'
//1

// //action creators 
export const getCity = (cityName, units) => async (dispatch) => {
    try {
        let { data } = await api.getCity(cityName, units)
        console.log(data)
        data = { id: data.id, name: data.name, country: data.sys['country'], main: data.main, weather: data.weather[0], wind: data.wind }

        dispatch({ type: NEW_CITY, payload: data })
    } catch (error) {
        console.error(error)
    }
}