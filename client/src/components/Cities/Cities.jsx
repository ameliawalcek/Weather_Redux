import React from 'react'
import { useSelector } from 'react-redux'

import City from './City/City'
import useStyles from './styles'

const Cities = () => {
    const classes = useStyles()
    const cities = useSelector(state => state.cities)

    return (
        <div>
            CITIES
            <City />
        </div>
    )
}

export default Cities