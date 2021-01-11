import { NO_CITY, RESET, ADD_MESSAGE, REMOVE_MESSAGE } from '../constants/constants'

const popUp = (popUp = { popUp: false, message: '' }, action) => {
    switch (action.type) {
        case NO_CITY:
            return { popUp: true, message: 'We could not find that city... try again!' }
        case REMOVE_MESSAGE:
            return { popUp: true, message: 'Removed from Favorites' }
        case ADD_MESSAGE:
            return { popUp: true, message: 'Added to Favorites' }
        case RESET:
            return { popUp: false, message: '' }
        default: return popUp
    }

}

export default popUp
