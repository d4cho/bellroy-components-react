import React, { useState } from 'react';
import Button from '../../atoms/Button/Button';
import './AlertBanner.scss';
import { IoClose } from 'react-icons/io5';

const AlertBanner = ({ content, styleOverride }) => {
    const [isOpen, setIsOpen] = useState(true);

    const closeButtonStyle = {
        backgroundColor: 'transparent',
        border: 'none',
        color: '#FFF',
        cursor: 'pointer',
    };

    return (
        <div
            className={`AlertBanner_container ${
                !isOpen && 'AlertBanner_removed'
            }`}
            style={styleOverride}
        >
            <div className='AlertBanner_close-button'>
                <Button
                    content={<IoClose size={25} style={{ color: '#FFF' }} />}
                    styleOverride={closeButtonStyle}
                    onButtonClick={() => setIsOpen(false)}
                />
            </div>
            {content}
        </div>
    );
};

export default AlertBanner;
