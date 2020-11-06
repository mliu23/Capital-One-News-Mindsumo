import React, {useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import navStyle from "../styles/navStyle"
import Link from 'next/link';
import SearchBar from './SearchBar';
import clsx from 'clsx';
import { AppBar, Typography, List, Hidden, IconButton, Toolbar, Drawer, ListItem, ListItemText } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

// navigation bar component

const NavBar = () => {

  // styles from navStyle file
  
  const classes = navStyle();

  // state for whether or not the menu button in the navbar is open
  
  const [menuClicked, setMenuClicked] = useState(false);

  // opens and closes the menu

  const toggleMenu = () => setMenuClicked(!menuClicked)

  const list = (anchor) => (
    <div
      className={clsx(classes.list,{
      [classes.fullList]: anchor === 'top' || anchor === 'bottom'})}
      role="presentation">
        
        {/* list of menu choices: close, entertainment, sports, or technology*/}
        
        <List>
          <ListItem 
            button 
            color="inherit" 
            onClick={toggleMenu} 
            aria-label="close">
              <CloseIcon />
          </ListItem>
          <ListItem
            button
            component="a"
            href="/">
              <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            component="a"
            href="/search/Entertainment">
              <ListItemText primary="Entertainment" />
          </ListItem>      
          <ListItem
            button
            component="a"
            href="/search/Sports">                                          
              <ListItemText primary="Sports" />
          </ListItem>     
          <ListItem
            button
            component="a"
            href="/search/Technology">                                          
              <ListItemText primary="Technology" />
          </ListItem>
        </List>
    </div>
  );
  
  return (
    <div className={classes.root}>

      {/* create navbar */}

      <AppBar 
        position="sticky" 
        elevation={0}>
          <Toolbar 
            component='nav' 
            style={{ justifyContent: 'space-between',
            overflowX: 'auto'}}>

            {/* menu icon is hidden until you make window small enough */}

            <Hidden mdUp>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick = {toggleMenu}>
                  <MenuIcon/>
              </IconButton>
              <Drawer
                open = {menuClicked}
                onClose = {toggleMenu}
                anchor = "top">
                  {list("top")}
              </Drawer>
            </Hidden>

            {/* Title "NEWS-EST on navbar will link to homepage when clicked" */}

            <Link href="/" as={'/'} >
              <a className={classes.title}>
                <Typography 
                  className={classes.link} 
                  variant="h4" 
                  noWrap>
                    NEWS-EST
                </Typography>
              </a>
            </Link>

            {/* Navbar links (entertainment, sports, tech) will be shown until window is too small */}

            <Hidden smDown>
              <Link 
                href="/search/Entertainment" 
                as={'/search/Entertainment'}>
                  <a className={classes.title}>
                    <Typography 
                      className={classes.link} 
                      variant="h6" 
                      noWrap>
                        Entertainment
                    </Typography>
                  </a>
              </Link>
              <Link 
                href="/search/Sports" 
                as={'/search/Sports'}>
                  <a className={classes.title}>
                    <Typography 
                      className={classes.link} 
                      variant="h6" 
                      noWrap>
                        Sports
                    </Typography>
                  </a>
              </Link>
              <Link 
                href="/search/Technology" 
                as={'/search/Technology'}>
                  <a className={classes.title}>
                    <Typography 
                      className={classes.link} 
                      variant="h6" 
                      noWrap>
                        Technology
                    </Typography>
                  </a>
              </Link>
            </Hidden>

            {/* create search icon and search bar  */}

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <SearchBar/>
            </div>
          </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;