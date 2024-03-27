import axios from 'axios';
import  { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import YouTubeIframe from 'react-youtube-iframe';


function PlayTrailer() {
    
    const {id} = useParams()
    const [movieKey,setMoviekey] = useState([])
    useEffect(() =>{
        const moviesData = async()=>{
            const respone = await axios.get(`https://api.themoviedb.org/3/movie/1011985/videos?language=en-US&api_key=8ed493abe40fced7a86dfbabff806998`)
            console.log(respone.data.results[0])
            setMoviekey(respone.data.results[0])
        }
        moviesData()
    },[]);
    console.log(movieKey.key)
    return (
        <p>
            <YouTubeIframe videoId={`${movieKey.key}`} />
        </p>
    )
}

export default PlayTrailer
