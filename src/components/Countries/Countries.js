import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
            .then(response => response.json())
            .then(data => setCountries(data));
    }, []);
    return (
        <div className="row justify-content-center"> 
                {
                    countries.map(country => <Country country={country} key={country.alpha3Code} />)
                }
        </div>
    );
};

export default Countries;