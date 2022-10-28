import React, { useState } from 'react';
import './TextInput.scss';
import { isValid } from '../../../utils/functions';

const TextInput = ({
    value,
    setValue,
    placeholder,
    type,
    regex,
    errorMessage,
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleSubmitClick = () => {
        setHasError(!isValid(regex, value));
    };

    return (
        <>
            <div className='TextInput_container'>
                <input
                    type={type}
                    placeholder={placeholder}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button
                    className={`${isFocused && 'btn-focused'}`}
                    onClick={handleSubmitClick}
                    disabled={!value}
                >
                    SUBMIT
                </button>
            </div>
            {hasError && (
                <div className='TextInput_error'>
                    {errorMessage || 'This value is invalid'}
                </div>
            )}
        </>
    );
};

export default TextInput;
