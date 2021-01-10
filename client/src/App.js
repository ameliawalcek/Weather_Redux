import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cities from './components/Cities/Cities'
import NavBar from './components/NavBar/NavBar'
import PopUp from './components/SnackBar/PopUp'
import LiveLocation from './components/Cities/LiveLocation/LiveLocation'
import useStyles from './styles'
import { FAHRENHEIT, CELSIUS } from './constants/constants'

import { fetchFavorites, setUnits } from './actions/user'
import { getLiveLocation } from './actions/weather'

const App = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const units = useSelector(state => state.units)
  const cities = useSelector(state => state.cities)
  const favorites = useSelector(state => state.favorites)
  const liveLocation = useSelector(state => state.liveLocation)
  const snackbar = useSelector(state => state.snackbar)
console.log(snackbar)
  const handleUnits = ({ target }) => {
    const { outerText } = target
    if (outerText !== units) {
      dispatch(setUnits(outerText))
    }
  }

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position)
        dispatch(getLiveLocation(position.coords.latitude, position.coords.longitude, units))
        console.log('dispatching live')
      })
    } else {
      console.log("Not Available")
    }
  }, [dispatch, units, liveLocation.length])

  useEffect(() => {
    dispatch(fetchFavorites(units))
    console.log('dispatching')
  }, [units, dispatch])

  return (
    <>
      <NavBar />
      <div className={classes.container}>
        {liveLocation.length
          && liveLocation.map(l => <LiveLocation key={l.id} city={l} />)
        }
        <div className={classes.titleContainer}>
          <div className={classes.title}>—Weather Finder—</div>
        </div>
      </div>
      <span className={units === FAHRENHEIT ? classes.selected : classes.notSelected} onClick={handleUnits}>°F</span>
      <span className={classes.notSelected}>|</span>
      <span className={units === CELSIUS ? classes.selected : classes.notSelected} onClick={handleUnits}>°C</span>
      <Cities />
      {snackbar && <PopUp/>}
    </>
  )
}

export default App