import React from 'react';
import './Button.scss';

const Button = ({ content, styleOverride, onButtonClick, outlined }) => {
    if (outlined) {
        return (
            <button
                className='Button_container-outlined'
                style={styleOverride}
                onClick={onButtonClick ? onButtonClick : () => {}}
            >
                {content}
            </button>
        );
    }

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
