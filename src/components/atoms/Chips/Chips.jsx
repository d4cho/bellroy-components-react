import React from 'react';
import './Chips.scss';
import { IoClose } from 'react-icons/io5';

const Chips = ({ content, onChipClick, styleOverride }) => {
    return (
        <div
            className='Chips_container'
            onClick={onChipClick}
            style={styleOverride}
        >
            {content}
            <IoClose />
        </div>
    );
};

export default Chips;
