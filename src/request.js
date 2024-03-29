const API_key ="1795ac3d28a7943cb4f64226420bfa17"

const requests ={

    fetchTrending:`/trending/all/week?api_key=${API_key}&language=en-US`,
    fetchOriginals:`/discover/tv?api_key=${API_key}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_key}&language=en-US`, 
    fetchActioMovies: `/discover/movie?api_key=${API_key}&with_genres=28` ,
    fetchComedyMovies: `/discover/movie?api_key=${API_key}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_key}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_key}&with_genres=10749`,
};

export default requests;