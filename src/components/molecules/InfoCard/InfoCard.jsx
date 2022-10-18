import React from 'react';
import './InfoCard.scss';
import { Link } from 'react-router-dom';

const InfoCard = ({ imageUrl, title, ctaText, ctaRoute }) => {
    return (
        <Link to={ctaRoute}>
            <div className='InfoCard_container'>
                <span className='InfoCard_overlay' />
                <img className='InfoCard_image' alt={title} src={imageUrl} />
                <div className='InfoCard_text'>
                    <div className='InfoCard_title'>{title}</div>
                    <div className='InfoCard_cta'>{ctaText}</div>
                </div>
            </div>
        </Link>
    );
};

export default InfoCard;
