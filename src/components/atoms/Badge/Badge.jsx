import React from 'react';
import './Badge.scss';

const Badge = ({ content }) => {
    return (
        <div>{content && <div className='Badge_container'>{content}</div>}</div>
    );
};

export default Badge;
