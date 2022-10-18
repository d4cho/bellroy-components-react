import React from 'react';
import AlertBanner from '../../molecules/AlertBanner/AlertBanner';
import './AlertBannerPage.scss';

const AlertBannerPage = () => {
    return (
        <div className='AlertBannerPage_container'>
            <div className='AlertBannerPage_banner'>
                <AlertBanner content={'Pixel 7 cases are here! SHOP NOW >'} />
            </div>
        </div>
    );
};

export default AlertBannerPage;
