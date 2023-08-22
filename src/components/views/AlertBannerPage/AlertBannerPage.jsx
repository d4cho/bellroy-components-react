import React from 'react';
import AlertBanner from '../../molecules/AlertBanner/AlertBanner';
import './AlertBannerPage.scss';

const AlertBannerPage = () => {
    const message = (
        <div className='AlertBannerPage_message'>
            Pixel 7 cases are here!
            <span>
                <button onClick={() => {}}>{'SHOP NOW >'}</button>
            </span>
        </div>
    );

    return (
        <div className='AlertBannerPage_container'>
            <div className='AlertBannerPage_banner'>
                <AlertBanner content={message} />
            </div>
        </div>
    );
};

export default AlertBannerPage;
