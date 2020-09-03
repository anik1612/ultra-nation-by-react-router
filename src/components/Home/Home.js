import React from 'react';
import { Link } from 'react-router-dom';
import Countries from '../Countries/Countries';


const Home = () => {
    return (
        <div>
            <nav className="navbar text-white bg-dark">
                <Link className="navbar-brand mx-auto text-white font-weight-bold" to="/home">Country Details</Link>
            </nav>
            <Countries/>
        </div>
    );
};

export default Home;