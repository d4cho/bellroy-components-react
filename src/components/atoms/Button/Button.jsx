import React from 'react';
import './Button.scss';

const Button = ({ content, styleOverride, onButtonClick }) => {
    return (
        <button
            className='Button_container'
            style={styleOverride}
            onClick={onButtonClick ? onButtonClick : () => {}}
        >
            <span className={`${'Button_overlay'}`}>{content}</span>
        </button>
    );
};

export default Button;
