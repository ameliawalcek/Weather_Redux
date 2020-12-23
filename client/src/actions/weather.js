import * as api from '../api'
// import { FETCH_ALL, DELETE, UPDATE, CREATE, LIKE } from './constants'
//1

// //action creators 
export const getCity = (cityName, units) => async (dispatch) => {
    try {
        const { data: { data } } = await api.getCity(cityName, units) // database call
        console.log(data)

        // dispatch({ type: FETCH_ALL, payload: data }) // update the ui
    } catch (error) {
        console.error(error)
    }
}