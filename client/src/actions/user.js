import * as api from '../api'
// import { FETCH_ALL, DELETE, UPDATE, CREATE, LIKE } from './constants'

export const fetchCities = () => async (dispatch) => {
    try {
        const { data: { data } } = await api.fetchCities() // database call
        console.log(data)

        // dispatch({ type: FETCH_ALL, payload: data }) // update the ui
    } catch (error) {
        console.error(error)
    }
}
