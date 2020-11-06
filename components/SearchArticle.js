import React , {useState, useEffect} from 'react'
import { Grid, Hidden, Typography} from '@material-ui/core'
import ReactHtmlParser from "react-html-parser";
import navStyle from "../styles/navStyle";
import {searchArticles} from  '../api/newsAPI'
import "antd/dist/antd.css";
import Link from 'next/link'

// format for articles that are searched and for the the 3 main categories of news

const SearchArticle = (request) => {

  // declare state for news fetched from News API that relate to search
  
  const [searchSection, setSearchSection] = useState([]);

  // declare state and array for news that will have no repeats

  const [searchNoRepeats, setSearchNoRepeats] = useState([]);
  const noRepeats = [];

  //styles from navStyle file

  const classes = navStyle();

  // counter used to add news to consecutive indexes in noRepeats

  var counter = 0;
    
  // fetches news data when the component mounts and after updates

  useEffect(() => {
    const fetchAPI = async () => {

      // sets state of searchSection to an array of news articles

      setSearchSection(await searchArticles(request));

      // loops through searchSection to add the non-repeated news to an array and then sets state of searchNoRepeats

      for (var i = 0; i < searchSection.length; i++)
      {
        if (i === 0){
          noRepeats.push(searchSection[i]);
          counter++;
        }
        else{
          if (searchSection[i].url != searchSection[i-1].url){
            noRepeats.push(searchSection[i]);
            counter++;
          }
        }
      }
      setSearchNoRepeats(noRepeats);
    };

    // call fetchAPI

    fetchAPI();
  }, [searchNoRepeats]);

  return (
    <div>

      {/* maps through articles in searchNoRepeats and displays news in a grid if the length is greater than one*/}
      {/* news will display in order from most recently published because */}

      {searchNoRepeats.length > 0 ? searchNoRepeats.map((article, key) =>
      article.urlToImage === "" ||
      article.urlToImage === null ? null : (
        <Grid 
          container spacing={4} 
          justify='space-between'>

            {/* grid where news will be displayed */}

            <Grid item xs={8} md={4}>

              {/* displays article title, author, and source which links to article when clicked */}

              <Link href={article.url}>
                <a>
                  <Typography 
                    variant='h5' 
                    component='h1' 
                    className={classes.articleTitle}>
                       {ReactHtmlParser(article.title)}
                  </Typography>
                  <Typography 
                    style={{color:"#368FFD"}} 
                    variant='subtitle2'> 
                      Author: {article.author ? article.author : null} 
                  </Typography>
                  <Typography 
                    style={{color:"#368FFD"}} 
                    variant='subtitle2'> 
                      Source: {article.source.name ?  article.source.name : null} </Typography>
                  <Typography 
                    style={{color:"#368FFD", marginBottom:65}} 
                    variant='subtitle2'> 
                      Date: {article.publishedAt ?  article.publishedAt : null} 
                  </Typography>
                </a>
              </Link>
            </Grid>

            {/* displays description of article, which is hidden when window is too small */}
            {/* links to article when clicked */}

            <Hidden smDown>
              <Grid item md={6}>
                <Link href={article.url}>
                  <a>
                    <Typography 
                      variant='subtitle1' 
                      component='h2' color='textSecondary' 
                      className={classes.description}>
                        {ReactHtmlParser(article.description)}
                    </Typography>
                  </a>
                </Link>
              </Grid>
            </Hidden>

            {/* displays image for article and links to article when clicked */}

            <Grid item xs='auto' md={2}>
              <Link href={article.url}>
                <a>
                  <img 
                    width='200' 
                    height='200' 
                    alt={article.title} 
                    src={article.urlToImage} 
                    loading='lazy' 
                    className={classes.img}/>
                </a>
              </Link>
            </Grid>
        </Grid> )
        ) : " "} {/* display nothing if no posts */}
    </div>
  )
}


export default SearchArticle
