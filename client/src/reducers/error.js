import { NO_CITY } from '../constants/constants'

const cities = (snackbar = [], action) => {
    switch (action.type) {
        case NO_CITY:
            console.log('hello no city')
            return [...snackbar, { snackbar: true, message: 'We Could not Find that City' }]
        default: return snackbar
    }

}

export default cities
