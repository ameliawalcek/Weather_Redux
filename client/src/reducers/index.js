import { combineReducers } from 'redux'

import weather from './weather'
import user from './user'
import units from './units'

export default combineReducers({
    // weather, 
    user,
    units
})