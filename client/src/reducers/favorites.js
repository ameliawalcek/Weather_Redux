import { FETCH_ALL_FAVORITES, DELETE_FAVORITE, CREATE_FAVORITE } from '../constants/constants'

const favorites = (favorites = [], action) => {
    switch (action.type) {
        case FETCH_ALL_FAVORITES:
            return action.payload
        case CREATE_FAVORITE:
            return [...favorites, action.payload]
        case DELETE_FAVORITE:
            return favorites.filter(favorite => favorite === action.payload)
        default: return favorites
    }
}
export default favorites