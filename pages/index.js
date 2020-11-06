import React from 'react'
import Article from '../components/Article'
import Format from '../components/Format.js'
import HomeAnimation from '../components/HomeAnimation.js'
import { Divider, Box } from '@material-ui/core'
import navStyle from "../styles/navStyle";

// displays homepage

const Home = () => {

  // styles from navStyle file

  const classes = navStyle();
  
  return (
    <Format>
     <HomeAnimation/>
     <h1 className={classes.heading}>Top Headlines</h1>
    <Divider/>
    <Box padding="25px"/>
      <Article      
        category="Entertainment"
        linkText="More about Entertainment"
        results="20"/>
      <Article      
        category="Sports"
        linkText="More about Sports"
        results="20"/>
      <Article      
        category="Technology"
        linkText="More about Technology"
        results="20"/>
    </Format>
  )
}

export default Home