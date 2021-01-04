import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cities from './components/Cities/Cities'
import NavBar from './components/NavBar/NavBar'
import LiveLocation from './components/Cities/LiveLocation/LiveLocation'
import useStyles from './styles'
import { FAHRENHEIT, CELSIUS } from './constants/constants'

import { fetchFavorites, setUnits } from './actions/user'
import { getLiveLocation } from './actions/weather'

const App = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const units = useSelector(state => state.units)
  const favorites = useSelector(state => state.favorites)
  const liveLocation = useSelector(state => state.liveLocation)


  // console.log(liveLocation)
  const handleUnits = ({ target }) => {
    const { outerText } = target
    if (outerText !== units) {
      dispatch(setUnits(outerText))
    }
  }

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        dispatch(getLiveLocation(position.coords.latitude, position.coords.longitude, units))
        console.log('dispatching live')
      })
    } else {
      console.log("Not Available")
    }
  }, [dispatch, units])

  useEffect(() => {
    dispatch(fetchFavorites(units))
    console.log('dispatching')
  }, [favorites.length, units, dispatch])

  return (
    <>
      {/* {liveLocation  */}
      {/* // && <LiveLocation city={liveLocation}/> */}
      {/* } */}
      <div className={classes.container}>
        <div className={classes.titleContainer}>
          <div className={classes.title}>—Weather Finder—</div>
        </div>
      </div>
      <span className={units === FAHRENHEIT ? classes.selected : classes.notSelected} onClick={handleUnits}>°F</span>
      <span className={classes.notSelected}>|</span>
      <span className={units === CELSIUS ? classes.selected : classes.notSelected} onClick={handleUnits}>°C</span>
      <Cities />
      <NavBar />
    </>
  )
}

export default App