import React, {useState} from 'react';
import navStyle from "../styles/navStyle";
import InputBase from '@material-ui/core/InputBase';
import Router from 'next/router'

// search bar component

const SearchBar = () =>
{
  //styles from navStyle file

  const classes = navStyle();

  // declaring search state and empty search  

  const [search, setSearch] = useState(' ');
  const emptySearch = Object.keys(search).length === 0;

  // sets the state of search to whatever the user types into search bar

  const handleChange = e => {
    e.preventDefault();
    setSearch(e.target.value);
  }

  // when the user clicks enter they will be brought to a search results page 

  const handleSearch = e => {
    if (e.key === 'Enter') {
      if (emptySearch) {
        return null
      } else {
        setSearch('')
        Router.push('/search/[id]', `/search/${e.target.value}`)
      }
    }
  }
  
  return(
    <InputBase
      placeholder="Search..."
      value ={search}
      onChange = {handleChange}
      onKeyPress={handleSearch}
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput,
      }}
      inputProps={{ 'aria-label': 'search' }}/>
  );
}

export default SearchBar;