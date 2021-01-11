import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Slide, Snackbar } from '@material-ui/core'
import { resetPopUp } from '../../actions/user'
import useStyles from './styles'

const PopUp = () => {
    const popUp = useSelector(state => state.popUp)
    const dispatch = useDispatch()
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const [transition, setTransition] = useState(undefined)

    const TransitionUp = (props) => <Slide {...props} direction="up" />

    const handleClose = () => {
        setOpen(false)
        dispatch(resetPopUp())
    }

    useEffect(() => {
        setTransition(() => TransitionUp)
        setOpen(true)
    }, [])

    return (
        <>
            {popUp.popUp
                && <Snackbar
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={transition}
                    message={popUp.message}
                    autoHideDuration={5000}
                    ContentProps={{
                        classes: {
                            root: classes.root
                        }
                    }}
                />
            }
        </>
    )
}

export default PopUp