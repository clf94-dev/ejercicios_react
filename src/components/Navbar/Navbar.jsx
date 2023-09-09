import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';


export function Navbar() {
    const location = useLocation();
    const [currentPath, setCurrentPath] = useState();
    useEffect(() => {
        setCurrentPath(location.pathname);
    }, [location]);

    return (
        <div className='bg-blue-500 p-4'>
            <nav className='container mx-auto flex justify-evenly items-center'>
                {/* <ul>
                    <Link to="/">Home</Link>
                </ul> */}
                <ul className="flex space-x-4">
                    <Link to="/firstexercise" className={`text-white hover:text-gray-300 ${currentPath === "/firstexercise" ? "underline" : ""}`}>First Exercise</Link>
                </ul>
                <ul>
                    <Link to="/secondexercise" className={`text-white hover:text-gray-300 ${currentPath === "/secondexercise" ? "underline" : ""}`}>Second Exercise</Link>
                </ul>
                <Outlet/>

            </nav> 
        </div>    
    );
}   