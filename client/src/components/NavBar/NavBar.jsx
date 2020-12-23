import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import useStyles from './styles'
import Search from '../Search/Search'

export default function SearchAppBar() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer" >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>Material-UI</Typography>
                    <Search />
                </Toolbar>
            </AppBar>
        </div>
    )
}