import React from 'react'
import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import useStyles from './styles'
import Search from '../Search/Search'

export default function SearchAppBar() {
    const classes = useStyles()

    return (
        <AppBar style={{ background: 'linear-gradient(to left, #8EC5FC, #E0C3FC)' }} position="sticky">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer" >
                    <MenuIcon />
                </IconButton>
                <Search style={{ width: '100%', position: 'relative' }} />
            </Toolbar>
        </AppBar>
    )
}