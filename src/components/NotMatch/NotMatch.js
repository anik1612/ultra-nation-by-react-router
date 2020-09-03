import React from 'react';
import errorImg from '../../images/error_404.jpg'

const NotMatch = () => {
    return (
        <div>
            <img className="img-fluid w-100" src={errorImg} alt="error-img"/>
        </div>
    );
};

export default NotMatch;