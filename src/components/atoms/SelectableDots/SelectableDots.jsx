import React from 'react';
import { useAppContext } from '../../../context/AppContext';
import './SelectableDots.scss';

const SelectableDots = ({
    colorsArr,
    selectedIdx,
    size,
    onDotClick,
    maxDots,
}) => {
    const { isMobileView } = useAppContext();

    return (
        <div className='SelectableDots_container'>
            {colorsArr.map((color, idx) => {
                if (isMobileView && idx + 1 > maxDots) return;
                return (
                    <div
                        className={`SelectableDots_dot ${
                            selectedIdx === idx && 'SelectableDots_selected'
                        }`}
                        key={color.colorName + idx}
                        style={{
                            '--color': `${color.colorCode}`,
                            '--size': `${size}px`,
                        }}
                        onClick={() => onDotClick(idx)}
                    >
                        <div className='SelectableDots_tooltip'>
                            {color.colorName}
                        </div>
                    </div>
                );
            })}

            {isMobileView && colorsArr.length > maxDots && (
                <div className='SelectableDots_more'>{`+ ${
                    colorsArr.length - maxDots
                } more`}</div>
            )}
        </div>
    );
};

export default SelectableDots;
