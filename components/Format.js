import React from 'react'
import PropTypes from 'prop-types'
import NavBar from './NavBar'
import { Box, Container } from '@material-ui/core'
import Title from './Title'

// format of pages: displays navbar, heading, and children (news articles)

const Format = ({ children, heading }) => {
  return (
    <Container>
        <NavBar/>
        <Box padding='15px' />
        {!heading ? null : <Title name={heading} />}
        {children}
    </Container>
  )
}

// takes children and heading props

Format.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string
}

export default Format
