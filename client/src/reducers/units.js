import { FAHRENHEIT, CELSIUS } from '../constants/constants'

const units = (units = FAHRENHEIT, action) => {
    switch (action.type) {
        case FAHRENHEIT:
            return FAHRENHEIT
        case CELSIUS:
            return CELSIUS
        default: return units
    }
}
export default units