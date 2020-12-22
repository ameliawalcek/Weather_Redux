import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Search from './components/Search/Search'
import Cities from './components/Cities/Cities'
import useStyles from './styles'

import { fetchCities } from './actions/user'

const App = () => {
  const [cities, setCurrentCities] = useState([]) //might not need
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCities())
  }, [cities, dispatch])

  return (
    <div className='App'>
      <Search />
      <Cities />
    </div>
  )
}

export default App