import React, { useEffect } from 'react'
import GlobalAPI from '../Services/GlobalAPI'

function Slider() {

    useEffect(() =>{
        getTrendingMovies();

    },[])

    const getTrendingMovies = ()=>{
        GlobalAPI.getTrendingVideos.then(resp =>{
            console.log(resp)
        })
    }
  return (
    <div>Slider</div>
  )
}

export default Slider