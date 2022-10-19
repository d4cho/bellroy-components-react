import React, { useState } from 'react';
import Button from '../../atoms/Button/Button';
import './ExpandableList.scss';

const ExpandableList = ({ title, listItems, collapsedItemsToShow }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const collapsedHeight = collapsedItemsToShow * 24.51;

    const showButtonStyle = {
        fontSize: '13px',
        fontWeight: 'bold',
        border: '2px solid #e15a1d',
        borderRadius: '4px',
        color: '#e15a1d',
        backgroundColor: 'transparent',
        cursor: 'pointer',
    };

    const renderListItems = () => {
        return listItems.map((item, idx) => {
            const collapsedOpacity = !isExpanded
                ? (collapsedItemsToShow - idx) * 0.15
                : 1;

            return (
                <li
                    key={idx}
                    style={{
                        '--opacity': `${collapsedOpacity}`,
                    }}
                >
                    {item}
                </li>
            );
        });
    };

    return (
        <div className='ExpandableList_container'>
            <div className='ExpandableList_title'>{title}</div>
            <ul
                className='ExpandableList_list'
                style={{
                    '--height': isExpanded
                        ? 'fit-content'
                        : `${collapsedHeight}px`,
                }}
            >
                {renderListItems()}
            </ul>
            <div className='ExpandableList_button'>
                <Button
                    content={isExpanded ? 'Show less -' : 'Show more +'}
                    styleOverride={showButtonStyle}
                    onButtonClick={() => setIsExpanded(!isExpanded)}
                />
            </div>
        </div>
    );
};

export default ExpandableList;
