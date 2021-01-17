import { GET_LIVE_CITY } from '../constants/constants'

const liveLocation = (liveLocation = {}, action) => {
    switch (action.type) {
        case GET_LIVE_CITY:
            return { locationData: action.payload.locationData, weeklyData: action.payload.weeklyData }
        default: return liveLocation
    }
}
export default liveLocation