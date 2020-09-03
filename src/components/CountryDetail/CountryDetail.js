import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const CountryDetail = () => {
    let history = useHistory();
    const { countryName } = useParams();
    const [country, setCountry] = useState([]);
    const { name, nativeName, population, region, flag, capital } = country;
    console.log(country);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`
        fetch(url)
            .then(response => response.json())
            .then(data => setCountry(data[0]));
    }, []);

    const goBackBtn = (() => {
        history.push('/country');
    });

    return (
        <div className="d-flex">
            <div className='card p-3 mx-auto my-5'>
                <img style={{ height:'150px'}} src={flag} alt="" />
                <h2>Name: {name}</h2>
                <h3>Native Name: {nativeName}</h3>
                <h4>Region: {region}</h4>
                <h5>Capital City: {capital}</h5>
                <h6>Population: {population}</h6>
                <button className="btn btn-info" onClick={goBackBtn}>Home Page</button>
            </div>

        </div>
    );
};

export default CountryDetail;