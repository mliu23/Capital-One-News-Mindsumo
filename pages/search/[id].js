import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {searchArticles}  from "../../api/newsAPI.js"
import Format from "../../components/Format"
import SearchArticle from '../../components/SearchArticle.js'

// displays articles for searches and for the 3 main categories

const Search = ({query}) => {

  // declare state for searched news 

  const [searchSection, setSearchSection] = useState([]);

  // fetches searched news when the component mounts and after updates
  
  useEffect(() => {
    const fetchAPI = async () => {
      setSearchSection(await searchArticles(query))
    };
    fetchAPI();
    console.log(searchSection);
  }, [query,searchSection]);

  // only news that fall under the 3 main categories and are relevant to the query will be returned 

  return (
    <Format heading={query}>
        <SearchArticle
          category="Entertainment"
          query = {query}/>
        <SearchArticle
          category="Sports"
          query = {query}/>
        <SearchArticle
          category="Technology"
          query = {query}/>
    </Format>
  )
}

// takes query as a prop

Search.propTypes = {
  query: PropTypes.string
}

Search.getInitialProps = async (context) => {
  return { query: context.query.id }
}

export default Search;
