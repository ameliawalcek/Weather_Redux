import { combineReducers } from 'redux'

import cities from './cities'
import favorites from './favorites'
import units from './units'
import liveLocation from './liveLocation'
import popUp from './popup'

export default combineReducers({
    cities, 
    favorites,
    units,
    liveLocation,
    popUp
})