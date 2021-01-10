import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Slide, Snackbar} from '@material-ui/core'
import { setPopUp } from '../../actions/user'

const PopUp = () => {
    const popUp = useSelector(state => state.popUp)
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [transition, setTransition] = useState(undefined)

    const TransitionUp = (props) => <Slide {...props} direction="up" />
    
    const handleClose = () => {
        setOpen(false)
        dispatch(setPopUp())
    }

    useEffect(() => {
        setTransition(() => TransitionUp)
        setOpen(true)
    }, [])

    return (
        <>
            {popUp.popUp && <Snackbar
                open={open}
                onClose={handleClose}
                TransitionComponent={transition}
                message={popUp.message}
            />}
        </>
    )
}

export default PopUp