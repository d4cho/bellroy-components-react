import React, { useState, useRef, useEffect } from 'react';
import './Accordion.scss';
import { FiChevronUp } from 'react-icons/fi';

const Accordion = ({
    heading,
    content,
    headingContainerStyleOverride,
    showOverflow,
}) => {
    const [isExpanded, setIsExpanded] = useState(true);

    const [height, setHeight] = useState(240);
    const contentRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            setHeight(contentRef.current.clientHeight);
        }, 300);
    }, [height]);

    return (
        <div className='Accordion_container'>
            <div
                className='Accordion_headingContainer'
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className='Accordion_headingText'>{heading}</div>
                <div
                    className={`Accordion_icon ${
                        !isExpanded && 'collapsed_rotate'
                    }`}
                >
                    <FiChevronUp color={'#333333'} size={20} />
                </div>
            </div>
            <div
                className='Accordion_content'
                ref={contentRef}
                style={{
                    '--maxHeight': isExpanded ? `${height}px` : '0px',
                    overflow: showOverflow && isExpanded ? 'visible' : 'hidden',
                }}
            >
                {content}
            </div>
        </div>
    );
};

export default Accordion;
