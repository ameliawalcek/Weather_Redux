import React from 'react'
import { useSelector } from 'react-redux'
import Loading from '../Loading/Loading'
import City from './City/City'
// import useStyles from './styles'

const Cities = () => {
    // const classes = useStyles()
    const cities = useSelector(state => state.cities)

    return (
        !cities.length 
        ?<Loading />
        :<div>
            {cities.map(city => <City key={city.id} city={city} />)}
        </div>
    )
}

export default Cities