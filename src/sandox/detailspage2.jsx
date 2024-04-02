import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PlayTrailer2 from "./playTrailer2";


function DetailsPage2() {
    const [details, setDetails] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const getDetails = async () => {

            const { data } = await axios.get(`https://api.themoviedb.org/3/tv/${id}?language=en-US&api_key=8ed493abe40fced7a86dfbabff806998`);
            setDetails(data);
            console.log("The datta we need", data);
        }
        getDetails();

    }, [id])


    return (
        <Link to={`/PlayTrailer2/${details.id}`}>
            <div className="bg-gray-900 mt-0"  >

                {details ?
                    <div className='px-4 mb-2  mx-20 flex flex-wrapgit init'>
                        <div className="w/12">
                            <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} className='w-96' />
                        </div>
                        <div className="w-1/2 mx-10 space-y-5 mt-20 sm:w-full">
                            <h6 className="text-bold text-xl text-white">{details.title}</h6>
                            <p className="text-xl text-white">Year: {details.released_date}</p>
                            <p className="text-xl  text-white">Rate: {details.vote_average}</p>
                            <p className="text-xl  text-white">Rate: {details.overview}</p>
                        </div>
                    </div>
                    : <div>Nothing foud</div>
                }

            </div>
        </Link>
    );
}

export default DetailsPage2;