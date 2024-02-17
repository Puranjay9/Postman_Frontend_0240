import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from './axios.js';
import requests from './request.js';

function Banner() {

    const [movie,setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchOriginals);
            
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length )-1]); 
            return request;
        }
        fetchData();
    },[]);

    console.log(movie);

    function truncate(string , n){
        return string?.length > n ? string.slice(0, n - 1) + "..." : string;
    }
 
  return (
    <header className='banner'
    style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPositionY:"center center",
    }}
    >
        <div className='banner_content'>
            <h1 className='banner_title'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <button className='banner_button'>Play
            </button>
            <h1 className='banner_description'>
                {truncate( movie?.overview
                ,150)}
            </h1>
        </div>
    </header>
  );
}

export default Banner;