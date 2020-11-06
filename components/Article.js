import React , {useState, useEffect} from 'react'
import { Grid, Typography, Card,CardActionArea,CardActions,CardContent,CardMedia} from '@material-ui/core'
import ReactHtmlParser from "react-html-parser";
import {fetchArticles} from  '../api/newsAPI'
import Link from 'next/link'
import LoadingBar from './LoadingBar';

// format for articles displayed in the homepage

const Article = (request) => {

  // declare state for all news fetched from News API

  const [newsSection, setNewsSection] = useState([]);

  // declare state and array for news that will have no repeats 

  const [newsNoRepeats, setNewsNoRepeats] = useState([]);
  const noRepeats = [];

  // counter used to add news to consecutive indexes in noRepeats

  var counter = 0;

  // fetches news data when the component mounts and after updates

  useEffect(() => {
    const fetchAPI = async () => {

      // sets state of newsSection to an array of news articles

      setNewsSection(await fetchArticles(request));

      // loops through newsSection to add the non-repeated news to an array and then sets state of newsNoRepeats

      for (var i = 0; i < newsSection.length; i++)
      {
        if (i === 0){
          noRepeats.push(newsSection[i]);
          counter++;
        }
        else{
          if (newsSection[i].url != newsSection[i-1].url){
            noRepeats.push(newsSection[i]);
            counter++;
          }
        }
      }
      setNewsNoRepeats(noRepeats);
    };

    // call fetchAPI

    fetchAPI();
  }, [newsNoRepeats]);

  return (
    <div>

      {/* grid container*/}

      <Grid 
        container spacing={10} 
        justify='space-between'>

          {/* maps through articles in newsNoRepeats and displays news cards if the length is greater than one*/}
          {/* news cards will display in order from most recently published because */}

          {newsNoRepeats.length > 1 ? newsNoRepeats.map((article,key) =>
          article.urlToImage === "" ||
          article.urlToImage === null ? null : (
            <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>

              {/* news card that is stored in the grid */}

              <Card styles={{maxWidth:345}}>
                <CardActionArea>

                  {/* card image which is the image taken from the article and links to corresponding article when clicked  */}

                  <CardMedia    
                    styles={{height:200}}
                    title={ReactHtmlParser(article.title)} >
                      <Link href={article.url}>
                        <a>
                          <img 
                              alt={article.title} 
                              src={article.urlToImage}
                              style={{maxHeight:300}}/>
                        </a>
                      </Link>
                  </CardMedia>

                  {/* content of card which includes title and description and links to corresponding article when clicked */}

                  <CardContent>
                    <Link href={article.url}>
                      <a>
                        <Typography 
                            style = {{color:"#fff"}} 
                            gutterBottom variant="h5" 
                            component="h2">
                              {ReactHtmlParser(article.title)}
                        </Typography>
                        <Typography 
                            variant="body2" 
                            color="textSecondary" 
                            component="p">
                              {ReactHtmlParser(article.description)}
                        </Typography>
                      </a>
                    </Link>
                  </CardContent>
                </CardActionArea>

                {/* bottom of news card that displays author, source, and date of publishing */}

                <CardActions>
                  <Typography 
                    variant="subtitle2" 
                    color="textSecondary" 
                    component="p">
                      Author: {ReactHtmlParser(article.author)}
                  </Typography>
                  <Typography 
                    variant="subtitle2" 
                    color="textSecondary" 
                    component="p">
                        Source: {ReactHtmlParser(article.source.name)}
                  </Typography>
                  <Typography 
                    variant="subtitle2" 
                    color="textSecondary" 
                    component="p">
                        Date: {ReactHtmlParser(article.publishedAt)}
                  </Typography>
                </CardActions>
              </Card>
            </Grid>)
            ) : <LoadingBar/>} {/* display loading bar if no posts */}
      </Grid>
    </div>
  )
}

export default Article
