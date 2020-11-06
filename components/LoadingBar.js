import React from 'react'
import { CircularProgress } from '@material-ui/core'

// circular loading bar 

const LoadingBar = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center' }}>
        <CircularProgress color='primary'/>
    </div>
  )
}


export default LoadingBar
