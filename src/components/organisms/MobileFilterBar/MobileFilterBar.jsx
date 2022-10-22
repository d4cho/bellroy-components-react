import React, { useState } from 'react';
import './MobileFilterBar.scss';
import Button from '../../atoms/Button/Button';
import { GoSettings } from 'react-icons/go';
import Filter from '../Filter/Filter';
import Modal from '../../molecules/Modal/Modal';
import { useAppContext } from '../../../context/AppContext';
import { GrClose } from 'react-icons/gr';
import Dropdown from '../../atoms/Dropdown/Dropdown';
import Chips from '../../atoms/Chips/Chips';

const MobileFilterBar = () => {
    const { filters, setFilters, resetFilters } = useAppContext();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const noFiltersButtonStyle = {
        fontSize: '13px',
        width: 'fit-content',
        padding: '7px 14px',
    };

    const yesFiltersButtonStyle = {
        fontSize: '13px',
        width: 'fit-content',
        padding: '7px 14px',
        fontWeight: 'bold',
        color: '#FFF',
        backgroundColor: '#333',
    };

    let chipList = [];
    for (const category in filters) {
        filters[category].forEach((item) =>
            chipList.push({
                filterCategory: category,
                item: item,
            })
        );
    }

    const handleRemoveFilterItem = (chip) => {
        let newItems = [...filters[chip.filterCategory]].filter(
            (item) => item !== chip.item
        );

        setFilters({
            ...filters,
            [chip.filterCategory]: newItems,
        });
    };

    return (
        <>
            <div className='MobileFilterBar_container'>
                <div className='MobileFilterBar_topbar'>
                    <div className='MobileFilterBar_left'>
                        <Button
                            content={
                                <div className='MobileFilterBar_button'>
                                    <GoSettings />
                                    <span>{`Filters ${
                                        chipList.length > 0
                                            ? `(${chipList.length})`
                                            : ''
                                    }`}</span>
                                </div>
                            }
                            onButtonClick={() => setIsModalOpen(true)}
                            outlined={true}
                            styleOverride={
                                chipList.length > 0
                                    ? yesFiltersButtonStyle
                                    : noFiltersButtonStyle
                            }
                        />
                        <div className='MobileFilterBar_items'>12 items</div>
                    </div>
                    <Dropdown
                        options={[
                            'Most popular',
                            'Most recent',
                            'Price (low to high)',
                            'Price (high to low)',
                        ]}
                        onDropdownChange={(val) => console.log(val)}
                    />
                </div>
                {chipList.length > 0 && (
                    <div className='MobileFilterBar_chips_container'>
                        {chipList.map((chip) => {
                            return (
                                <div
                                    className='MobileFilterBar_chips'
                                    key={chip.item}
                                >
                                    <Chips
                                        content={chip.item}
                                        onChipClick={() =>
                                            handleRemoveFilterItem(chip)
                                        }
                                    />
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
            <Modal
                isModalOpen={isModalOpen}
                modalHeader={
                    <div className='Filter_Modal_Header_Container'>
                        <button
                            className='Filter_Modal_Header_Clear'
                            onClick={resetFilters}
                        >
                            Clear all
                        </button>
                        <div className='Filter_Modal_Header_Heading'>
                            Filters
                        </div>
                        <GrClose
                            className='Filter_Modal_Header_Close'
                            size={22}
                            onClick={() => setIsModalOpen(false)}
                        />
                    </div>
                }
                modalContent={<Filter />}
                modalFooter={
                    <div className='Filter_Modal_Footer_Container'>
                        <button
                            className='Filter_Modal_Footer_Show'
                            onClick={() => setIsModalOpen(false)}
                        >
                            SHOW 12 RESULTS
                        </button>
                    </div>
                }
            />
        </>
    );
};

export default MobileFilterBar;
