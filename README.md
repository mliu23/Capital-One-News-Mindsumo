# Capital One Software Engineering Summit Winter 2021
Submission for the second round of the Capital One Software Engineering Summit.

The final project can be found [here](https://mirandaliu-capital-one.herokuapp.com/)

## Running Project Locally

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## List of Frameworks, APIs, and Dependencies Used
* [Next.js](https://nextjs.org/) and [React](https://reactjs.org/) to build web application
* [Next-routes](https://www.npmjs.com/package/next-routes) to navigate pages
* [Material-UI](https://material-ui.com/) for frontend
* [News API](https://newsapi.org/) to fetch news (using the business api key that was given)
* [Axios](https://github.com/axios/axios) to issue GET requests
* [React HTML Parser](https://www.npmjs.com/package/react-html-parser) to parse requests
* [News API](https://newsapi.org/) to fetch news
* [PropTypes](https://www.npmjs.com/package/prop-types) to make sure objects pass the correct types to components
* [clsx](https://www.npmjs.com/package/clsx) to construct className strings conditionally

## Overview of Features

### Search
* Input a term in the search bar and entertainment, sports, and technology news related to the search term will be displayed

### News Category Tabs
* Clicking on the "Entertainment," "Sports," or "Technology" tabs will navigate to a page with the news corresponding to the respective tab that has been clicked
* Clicking on the name of the webapp (NEWS-EST) will navigate back to the homepage

### Category Selection Menu
* When the window is minimized to a small enough size, a menu/drawer icon will appear on the left of the navigation bar, and if clicked the user can select a category of news to look at

## Challenges
* News API has a lot of repeating news, so I had to figure out a way to not display the duplicate news

