import React from 'react'
import PropTypes from 'prop-types'
import { Divider, Box } from '@material-ui/core'

// orange title for each search page including 3 main categories

const Title = ({ name }) => {
  return (
    <div>
    <h1 style={{ 
      fontFamily:'PT sans', 
      fontWeight: 'Medium', 
      fontSize: "35px", 
      color:'#FF6B3A' }}>
        {name}
    </h1>
    <Divider/>
      <Box padding='25px'/>
    </div>
  );
}

// takes name prop to use as title

Title.propTypes = {
  name: PropTypes.string
}

export default Title
