import axios from "axios";


const movieBaseUrl = 'https://api.themoviedb.org/3'
const api_key = '83aa1dbd84e44c99a64fa279ae8c6f2a'

const getTrendingVideos = axios.get(movieBaseUrl +`/trending/all/day?api_key=${api_key}`);

export default{
    getTrendingVideos
}