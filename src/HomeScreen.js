import React from 'react';
import './HomeScreen.css';
import Nav from './nav.js';
import Banner from './Banner.js';
import requests from './request.js';
import Row  from './Row.js';

function HomeScreen() {
  return (
   <div className="Banner">
    <Nav/>
    <Banner/>
    <Row
      title='Originals'
      fetchUrl={requests.fetchOriginals}
      isLargeRow
    />
    <Row
      title='Top Rated'
      fetchUrl={requests.fetchTopRated}
      isLargeRow
    />
    <Row
      title='Trending'
      fetchUrl={requests.fetchTrending}
      isLargeRow
    />
    <Row
      title='Action'
      fetchUrl={requests.fetchActioMovies}
      isLargeRow
    />
    <Row
      title='Comedy'
      fetchUrl={requests.fetchComedyMovies}
      isLargeRow
    />
    <Row
      title='Horror'
      fetchUrl={requests.fetchHorrorMovies}
      isLargeRow
    />
    <Row
      title='Romance'
      fetchUrl={requests.fetchRomanceMovies}
      isLargeRow
    />
   </div>
  );
}

export default HomeScreen;
