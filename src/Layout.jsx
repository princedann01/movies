import { Outlet } from "react-router-dom";
import logos from './images/logos.png';

const Layout = () => {
    return (
        <>
            <div className="pb-2 bg-black px-10  py-4 w-screen">
                <nav className="flex justify-between items-center px-4 py-4">
                    <div className="text-lg font-bold">
                        <img src={logos} alt="logo" className="h-10" />
                    </div>
                    <ul className="flex space-x-16 ">
                        <li><a href="/" className="text-white hover:text-gray-900">Home</a></li>
                        <li><a href="/explore" className="text-white hover:text-gray-900">Explore</a></li>
                        <li><a href="/genre" className="text-white hover:text-gray-900">Genre</a></li>
                        <li><a href="/news" className="text-white hover:text-gray-900">News</a></li>
                        <li><a href="/movies" className="text-white hover:text-gray-900">Movies</a></li>
                        <li><a href="/tvshows" className="text-white hover:text-gray-900">TV Shows</a></li>
                    </ul>
                </nav>
            </div>

            <Outlet />
        </>
    )
};

export default Layout;