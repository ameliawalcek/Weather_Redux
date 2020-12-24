import { combineReducers } from 'redux'

import cities from './cities'
import favorites from './favorites'
import units from './units'

export default combineReducers({
    cities, 
    favorites,
    units
})