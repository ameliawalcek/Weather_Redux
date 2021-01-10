import { NO_CITY, RESET } from '../constants/constants'

const popUp = (popUp = { popUp: false, message: '' }, action) => {
    switch (action.type) {
        case NO_CITY:
            return { popUp: true, message: 'We could not find that city... try again!' }
        case RESET:
            return { popUp: false, message: '' }
        default: return popUp
    }

}

export default popUp
