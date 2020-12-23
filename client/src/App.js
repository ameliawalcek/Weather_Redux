import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cities from './components/Cities/Cities'
import NavBar from './components/NavBar/NavBar'
import useStyles from './styles'
import { FAHRENHEIT, CELSIUS } from './constants/constants'

import { fetchCities, setUnits } from './actions/user'

const App = () => {
  const [cities, setCurrentCities] = useState([]) //might not need
  const classes = useStyles()
  const dispatch = useDispatch()
  const units = useSelector(state => state.units)

  const handleUnits = ({ target }) => {
    const { outerText } = target
    console.log('original state:', units, 'user selected:', outerText)
    if (outerText !== units) dispatch(setUnits(outerText))
    console.log('user selected:', outerText, 'updated state:', units)
  }

  useEffect(() => {
    dispatch(fetchCities())
  }, [cities, dispatch])

  return (
    <div className='App'>
      <div className={units === FAHRENHEIT ? 'selected' : 'not-selected'} onClick={handleUnits}>°F</div>
      <div>|</div>
      <div className={units === CELSIUS ? 'selected' : 'not-selected'} onClick={handleUnits}>°C</div>
      <Cities />
      <NavBar />
    </div>
  )
}

export default App