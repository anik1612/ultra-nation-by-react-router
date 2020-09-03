import React from 'react';
import { Link } from 'react-router-dom';
import Countries from '../Countries/Countries';
import Header from '../Header/Header';


const Home = () => {
    return (
        <div>
            <Header/>
            <Countries/>
        </div>
    );
};

export default Home;