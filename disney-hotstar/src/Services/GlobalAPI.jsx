import axios from "axios";


const movieBaseUrl = 'https://api.themoviedb.org/3'
const api_key = '83aa1dbd84e44c99a64fa279ae8c6f2a'

const movieBygenreBaseURL ='https://api.themoviedb.org/3/discover/movie?api_key=83aa1dbd84e44c99a64fa279ae8c6f2a';



const getTrendingVideos = axios.get(movieBaseUrl + 
    "/trending/all/day?api_key=" + api_key);
    const getMovieByGenreId=(id)=>
        axios.get(movieBygenreBaseURL + "&width_genres=" +id)
export default{
    getTrendingVideos,
    getMovieByGenreId
}