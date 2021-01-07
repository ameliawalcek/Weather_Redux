import { GET_LIVE_CITY } from '../constants/constants'

const liveLocation = (liveLocation = [], action) => {
    switch (action.type) {
        case GET_LIVE_CITY:
            return [action.payload]
        default: return liveLocation
    }
}
export default liveLocation