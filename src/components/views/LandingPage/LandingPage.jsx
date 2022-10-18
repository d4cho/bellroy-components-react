import React from 'react';
import './LandingPage.scss';

const LandingPage = () => {
    return (
        <div className='LandingPage_container'>
            <div>Check out</div>
            <a
                className='LandingPage_logo'
                href='https://bellroy.com/'
                target='_blank'
            />
            <div>components!</div>
        </div>
    );
};

export default LandingPage;
