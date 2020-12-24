import React, { useState } from 'react'
import { getCity } from '../../actions/weather'
import { useDispatch, useSelector } from 'react-redux'
import useStyles from './styles'
import { InputBase } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

const Search = () => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const units = useSelector(state => state.units).substring(1).toLowerCase()
    const cities = useSelector(state => state.cities)
    const [search, setSearch] = useState('')

    const handleInput = ({ target }) => setSearch(target.value)

    const handleSearch = (e) => {
        if (e.keyCode === 13) {
            dispatch(getCity(search, units))
            setSearch('')
            console.log(cities)
        }
    }

    return (
        <div className={classes.search}>
            <div className={classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search…"
                value={`${search}`}
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                onChange={handleInput}
                onKeyDown={handleSearch}
            />
        </div>
    )
}

export default Search