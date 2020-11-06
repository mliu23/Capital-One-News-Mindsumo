import axios from 'axios'

// all api calls

// constants for the api number and the beginning of the url
 
const api = "78b9d599c4f94f8fa3afb1a5458928d6";
const url = "https://newsapi.org/v2";

// fetches articles from News API using axios, specifying the category and number of results (Used for Homepage)

export const fetchArticles = async (request) => {
    try {
      const {
        data: { articles },
      } = await axios.get(
        `${url}/top-headlines?category=${request.category}&pageSize=${request.results}&apiKey=${api}`
      );
      return articles.map((article) => article);
    } catch (error) {
      return error;
    }
};

// fetches articles from News API using axios, specifying the category and query (Used for specific searches)

export const searchArticles = async (request) => {
  try {
    const {
      data: { articles },
    } = await axios.get(
      `${url}/top-headlines?category=${request.category}&q=${request.query}&apiKey=${api}`
    );
    return articles.map((article) => article);
  } catch (error) {
    return error;
  }
};

