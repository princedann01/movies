import { useState, useEffect } from 'react';
import axios from 'axios';
import Cards from '../component/cards';
import trend from '../images/trend.png';
import video1 from '../images/guardian.png';
import video2 from '../images/spider.png';
import { Link } from 'react-router-dom';
import play_circle from '../images/play_circle.svg';

function Home() {
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);

    useEffect(() => {
        fetchNowPlaying();
        getTrendingMovieData();

    }, []);

    const fetchNowPlaying = async () => {
        try {
            const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=d44a93aedf4221b5cc660be611e47d39', {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDRhOTNhZWRmNDIyMWI1Y2M2NjBiZTYxMWU0N2QzOSIsInN1YiI6IjY1ZmE5NDVmNzcwNzAwMDE0OTA1ZDMxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vLeIlhWw95m5PTIfeYbBNY6w_nwtbPtuZwcretb_WN4'
                }
            });
            setMovies(response.data.results);
            console.log(response.data.results);
        } catch (error) {
            console.log(error);
        }
    };

    const getTrendingMovieData = async () => {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/trending/tv/day?api_key=975c7e1c1e681b71428833941632c0fa&media_type=movie`
            );
            console.log(21, response.data.results);
            setSeries(response.data.results);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='bg-black text-white '>
            <div className='py-8 mx-20'>
                <div className="flex mb-48  space-x-4">
                    <div className="flex-1 py-5">
                        <h2 className=" uppercase text-white font-bold">find movies</h2>
                        <h1 className="gradient font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] text-gradient mb-4">
                            TV SHOWS AND MORE
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
                            voluptates accusamus sit nisi, vero et omnis impedit deleniti ipsum
                            voluptate facilis dolorum neque quae dolore quibusdam optio. Totam,
                            ipsum vero.
                        </p>
                        <button className="flex  gap-2 ring-1 space-x-1 ring-white mt-8 w-54 h-12 text-xl rounded-md ">
                            <div className='items-center flex space-x-3 flex-wrap mx-10 py-2'>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    width="30"
                                    height="30"
                                >
                                    <path
                                        d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"
                                        fill="#FFFFFF"
                                    />
                                </svg>
                                <p className='text-center '>Watch Tutorial</p>
                            </div>
                        </button>
                    </div>
                    <div className="hidden sm:flex relative w-[300px] flex-1 mr-[200px]">

                        <div className="absolute w-[250px] top-0 right-0">
                            <img src={video1} alt="Spider-Man: Across the Spider-Verse" />
                        </div>
                        <div className="absolute w-[250px] top-[50px] right-[70px]">
                            <div className="relative w-full h-full">
                                <img
                                    className="absolute top-0 bottom-0 my-auto right-0 left-0 mx-auto w-30 h-30 object-cover"
                                    src={play_circle}
                                    alt=""
                                />
                                <img
                                    className="w-full h-full object-cover"
                                    src={video2}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center text-font-bold mb-20">
                    <div className='flex gap-2 items-center'>
                        <img src={trend} alt="trend" />
                        <h2 className='text-xl font-bold'>Trending</h2>
                    </div>
                    <span className='bg-gray-300 h-[1px] w-full mx-10'></span>
                    <button className='bg-transparent text-xl'>See&nbsp;More</button>
                </div>
                <div className=' grid grid-cols-2  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 space-x-5'>
                    {movies.map((movie, index) => (
                        <Link to={`movie/${movie.id}`} key={index}>
                            <Cards
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                title={movie.original_title}
                                year={movie.release_date.slice(0, 4)}
                                vote={movie.vote_average.toFixed(1)}
                            />
                        </Link>
                    ))}
                </div>

                <div className="flex justify-between items-center mb-20 mt-10">
                    <h2 className='uppercase font-bold text-xl'>you&nbsp;may&nbsp;like&nbsp;this</h2>
                    <span className='bg-gray-500 h-[0.5px] w-full mx-20'></span>
                    <button className='bg-transparent  font-se text-xl'>See&nbsp;More</button>
                </div>
                <div className=' grid grid-cols-2  sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 space-x-5'>
                    {series.map((tv, index) => (
                        <Link to={`movie2/${tv.id}`} key={index}>
                            <Cards
                                key={tv.id}
                                src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
                                title={tv.original_title}
                                year={tv.first_air_date.slice(0, 4)}
                                vote={tv.vote_average.toFixed(1)}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default Home;