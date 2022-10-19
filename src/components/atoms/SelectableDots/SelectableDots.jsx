import React from 'react';
import './SelectableDots.scss';

const SelectableDots = ({
    colorsArr,
    selectedIdx,
    size,
    onDotClick,
    maxDots,
}) => {
    return (
        <div className='SelectableDots_container'>
            {colorsArr.map((colorCode, idx) => {
                if (idx + 1 > maxDots) return;
                return (
                    <div
                        className={`SelectableDots_dot ${
                            selectedIdx === idx && 'SelectableDots_selected'
                        }`}
                        key={colorCode}
                        style={{
                            '--color': `${colorCode}`,
                            '--size': `${size}px`,
                        }}
                        onClick={() => onDotClick(idx)}
                    />
                );
            })}

            {colorsArr.length > maxDots && (
                <div className='SelectableDots_more'>{`+ ${
                    colorsArr.length - maxDots
                } more`}</div>
            )}
        </div>
    );
};

export default SelectableDots;
