import axios from 'axios';
import { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import YouTubeIframe from 'react-youtube';



function PlayTrailer2() {

    const { id } = useParams()
    const [movieKey, setMoviekey] = useState([])
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const ifuserisloggedin = () => {
            const userdata = localStorage.getItem("userData")
            if (userdata == null) {
                navigate("/login", {
                    state: { prevLocation: location.pathname },
                });
            }
        }

        ifuserisloggedin()
        const moviesData = async () => {
            const respone = await axios.get(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US&api_key=8ed493abe40fced7a86dfbabff806998`)
            console.log(respone.data)
            setMoviekey(respone.data.results[0])
        }
        moviesData()
    }, [id]);
    console.log(movieKey.key)
    return (
        <div className='bg-gray-900'>
            <p className='mt-20 mx-20'>
                <YouTubeIframe videoId={`${movieKey.key}`} />
            </p>
        </div>
    )
}

export default PlayTrailer2
