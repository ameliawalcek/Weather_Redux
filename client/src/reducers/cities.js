import { FETCH_ALL_CITIES, GET_NEW_CITY } from '../constants/constants'

const cities = (cities = [], action) => {
    switch (action.type) {
        case FETCH_ALL_CITIES:
            return action.payload
        case GET_NEW_CITY:
            return [...cities, action.payload]
        default: return cities
    }

}

export default cities
