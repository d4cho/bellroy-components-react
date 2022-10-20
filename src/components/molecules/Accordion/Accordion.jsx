import React, { useState } from 'react';
import './Accordion.scss';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Accordion = ({ heading, content, headingContainerStyleOverride }) => {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <div className='Accordion_container'>
            <div
                className='Accordion_headingContainer'
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className='Accordion_headingText'>{heading}</div>
                <div className={`Accordion_icon ${!isExpanded && 'collapsed'}`}>
                    {isExpanded ? (
                        <FiChevronUp color={'#333333'} size={20} />
                    ) : (
                        <FiChevronDown color={'#333333'} size={20} />
                    )}
                </div>
            </div>
            {isExpanded && <div className='Accordion_content'>{content}</div>}
        </div>
    );
};

export default Accordion;
