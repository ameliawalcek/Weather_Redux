import React, { useState } from 'react'
import { getCity } from '../../actions/weather'
import { useDispatch, useSelector } from 'react-redux'
// import useStyles from './styles'
// import { InputBase } from '@material-ui/core'
// import SearchIcon from '@material-ui/icons/Search'

const PopUp = () => {
    // const classes = useStyles()
    const snackbar = useSelector(state => state.snackbar)
    console.log(snackbar)

    return (
        <div>
           Hello
        </div>
    )
}

export default PopUp