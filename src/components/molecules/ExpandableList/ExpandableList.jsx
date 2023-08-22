import React, { useState } from 'react';
import Button from '../../atoms/Button/Button';
import './ExpandableList.scss';

const HEIGHT_OF_EACH_ITEM = 25.5;

const ExpandableList = ({ title, listItems, collapsedItemsToShow }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const expandedHeight = (listItems.length + 1) * HEIGHT_OF_EACH_ITEM;
    const collapsedHeight = collapsedItemsToShow * HEIGHT_OF_EACH_ITEM;

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
            {title && <div className='ExpandableList_title'>{title}</div>}
            <ul
                className='ExpandableList_list'
                style={{
                    '--height': isExpanded
                        ? `${expandedHeight}px`
                        : `${collapsedHeight}px`,
                }}
            >
                {listItems && renderListItems()}
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
