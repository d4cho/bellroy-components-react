import React from 'react';
import Accordion from '../../molecules/Accordion/Accordion';
import './Filter.scss';
import { colorsData, filterData } from '../../../assets/data/filter-data';
import { useAppContext } from '../../../context/AppContext';
import { FaCheck } from 'react-icons/fa';
import Button from '../../atoms/Button/Button';

const Filter = () => {
    const { isMobileView, filters, setFilters, resetFilters } = useAppContext();

    const handleColorClick = (category, itemToAdd) => {
        let newCategory = [...filters[category]];
        if (filters[category].includes(itemToAdd)) {
            newCategory = newCategory.filter((item) => item !== itemToAdd);
        } else {
            newCategory.push(itemToAdd);
        }
        setFilters({ ...filters, [category]: newCategory });
    };

    const renderFilterColorSection = () => {
        if (isMobileView) {
            return colorsData.map((color) => {
                return (
                    <div
                        key={color.colorName}
                        className='Filter_colors'
                        onClick={() =>
                            handleColorClick('Color', color.colorName)
                        }
                    >
                        <div
                            className='Filter_dots'
                            key={color.colorName}
                            style={{
                                backgroundColor: color.colorCode,
                            }}
                        >
                            {filters.Color.includes(color.colorName) && (
                                <FaCheck className='Filter_check' />
                            )}
                        </div>
                        <div className='Filter_color_name'>
                            {color.colorName}
                        </div>
                    </div>
                );
            });
        }
        return (
            <>
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
                                    handleColorClick('Color', color.colorName)
                                }
                            >
                                {filters.Color.includes(color.colorName) && (
                                    <FaCheck className='Filter_check' />
                                )}
                                <div className='Filter_tooltip'>
                                    {color.colorName}
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className='Filter_selectedColors'>{`You've selected: ${
                    filters.Color.length > 0 ? filters.Color.join(', ') : 'All'
                }`}</div>
            </>
        );
    };

    return (
        <div className='Filter_container'>
            {/* color section */}
            <div className='Filter_section'>
                <Accordion
                    heading={'Color'}
                    content={renderFilterColorSection()}
                    showOverflow={true}
                    contentContainerStyleOverride={
                        isMobileView
                            ? {
                                  display: 'grid',
                                  'grid-template-columns': '1fr 1fr',
                                  'column-gap': '10px',
                              }
                            : null
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
                                        className='Filter_items_container'
                                        key={idx}
                                        onClick={() =>
                                            handleColorClick(
                                                filterCategory.heading,
                                                item.text
                                            )
                                        }
                                    >
                                        <div className='Filter_checkbox_container'>
                                            <input
                                                type='checkbox'
                                                checked={filters[
                                                    filterCategory.heading
                                                ].includes(item.text)}
                                                readOnly
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
                            contentContainerStyleOverride={
                                isMobileView
                                    ? {
                                          display: 'grid',
                                          'grid-template-columns': '1fr 1fr',
                                          'column-gap': '10px',
                                      }
                                    : null
                            }
                        />
                    </div>
                );
            })}
            {!isMobileView && (
                <div className='Filter_buttonContainer'>
                    <Button
                        content={'CLEAR ALL FILTERS'}
                        onButtonClick={resetFilters}
                        outlined={true}
                        styleOverride={{
                            fontSize: '11px',
                            width: '162px',
                            padding: '8px',
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default Filter;
