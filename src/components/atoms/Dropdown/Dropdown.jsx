import React from 'react';
import './Dropdown.scss';

const Dropdown = ({ options, onDropdownChange, styleOverride }) => {
    const handleOnChange = (e) => {
        onDropdownChange(e.target.value);
    };

    return (
        <select
            className='Dropdown_container'
            id='filter-by'
            name='filter-by'
            onChange={handleOnChange}
            style={styleOverride}
        >
            {options.map((option, idx) => {
                return (
                    <option key={idx} value={option}>
                        {option}
                    </option>
                );
            })}
        </select>
    );
};

export default Dropdown;
