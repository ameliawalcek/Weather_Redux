import { FAHRENHEIT, CELSIUS } from '../constants/constants'

//true = F degrees
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