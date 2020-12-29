import React from 'react'
import Loader from 'react-loader-spinner'
import { useStyles } from './styles'

function Loading() {
  const classes = useStyles()

  return (
    <div className={classes.loader}>
      <Loader type='ThreeDots' color='white' height={150} width={150} />
    </div>
  )
}

export default Loading