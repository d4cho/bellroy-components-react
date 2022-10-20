import React from 'react';
import Accordion from '../../molecules/Accordion/Accordion';
import './Filter.scss';
import { colorsData, filterData } from '../../../assets/data/filter-data';
import { useAppContext } from '../../../context/AppContext';
import { FaCheck } from 'react-icons/fa';

const Filter = () => {
    const { filters, setFilters, resetFilters } = useAppContext();

    const handleColorClick = (category, itemToAdd) => {
        let newCategory = [...filters[category]];
        if (filters[category].includes(itemToAdd)) {
            newCategory = newCategory.filter((item) => item !== itemToAdd);
        } else {
            newCategory.push(itemToAdd);
        }
        setFilters({ ...filters, [category]: newCategory });
    };

    return (
        <div className='Filter_container'>
            {/* color section */}
            <div className='Filter_section'>
                <Accordion
                    heading={'Color'}
                    content={
                        <div className='Filter_colors'>
                            {colorsData.map((color) => {
                                return (
                                    <div
                                        className='Filter_dots'
                                        key={color.colorName}
                                        style={{
                                            backgroundColor: color.colorCode,
                                        }}
                                        onClick={() =>
                                            handleColorClick(
                                                'Color',
                                                color.colorName
                                            )
                                        }
                                    >
                                        {filters.Color.includes(
                                            color.colorName
                                        ) && (
                                            <FaCheck className='Filter_check' />
                                        )}
                                        <div className='Filter_tooltip'>
                                            {color.colorName}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    }
                />
            </div>
            {/* other filters section */}
            {filterData.map((filterCategory) => {
                return (
                    <div
                        className='Filter_section'
                        key={filterCategory.heading}
                    >
                        <Accordion
                            heading={filterCategory.heading}
                            content={filterCategory.items.map((item, idx) => {
                                return (
                                    <div
                                        className='Filter_items'
                                        key={idx}
                                        onClick={() =>
                                            handleColorClick(
                                                filterCategory.heading,
                                                item.text
                                            )
                                        }
                                    >
                                        <div className='Filter_checkboxContainer'>
                                            <input
                                                type='checkbox'
                                                checked={filters[
                                                    filterCategory.heading
                                                ].includes(item.text)}
                                            />
                                            {filters[
                                                filterCategory.heading
                                            ].includes(item.text) && (
                                                <span className='Filter_checkbox'>
                                                    <FaCheck color={'#FFF'} />
                                                </span>
                                            )}
                                        </div>
                                        <div>{item.text}</div>
                                    </div>
                                );
                            })}
                        />
                    </div>
                );
            })}
            <div className='Filter_buttonContainer'>
                <button className='Filter_button' onClick={resetFilters}>
                    clear all filters
                </button>
            </div>
        </div>
    );
};

export default Filter;
