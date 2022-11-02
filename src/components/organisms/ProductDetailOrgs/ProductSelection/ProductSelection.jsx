import React, { useState } from 'react';
import './ProductSelection.scss';
import Button from '../../../atoms/Button/Button';
import Dropdown from '../../../atoms/Dropdown/Dropdown';
import SelectableDots from '../../../atoms/SelectableDots/SelectableDots';
import ExpandableList from '../../../molecules/ExpandableList/ExpandableList';
import { AiOutlineLaptop } from 'react-icons/ai';
import { TfiTablet } from 'react-icons/tfi';
import { MdOutlineBackpack } from 'react-icons/md';
import Accordion from '../../../molecules/Accordion/Accordion';

const COLORS = [
    {
        colorName: 'Black',
        colorCode: '#363636',
    },
    {
        colorName: 'Bronze',
        colorCode: '#b45628',
    },
    {
        colorName: 'Navy',
        colorCode: '#212e41',
    },
    {
        colorName: 'Ranger Green',
        colorCode: '#6c7f4d',
    },
    {
        colorName: 'Saltbush',
        colorCode: '#e4d9cb',
    },
    {
        colorName: 'Slate',
        colorCode: '#5b5b58',
    },
];

const LIST_ITEMS = [
    'Available in Premium Edition',
    'Updated version of our popular Classic Backpack',
    'Holds laptops up to 16"',
    'Padded iPad / A5 document pocket with pen slip',
    'Front pocket and internal mesh zip pocket',
    'Water-resistant top pocket for small phone and keys',
    'Comfort shoulder straps, improved back padding system and quick grab handle',
    'Durable, water-resistant fabric made from 100% recycled PET bottles',
    'Leather-free construction',
    'Backed by our 3 year warranty',
];

const DROPDOWN_OPTIONS = [
    'Classic Backpack Compact 16L',
    'Classic Backpack 20L',
    'Classic Backpack Plus - Second Edition 24L',
];

const FEATURES_DATA = [
    {
        icon: <AiOutlineLaptop size={30} />,
        text: 'Fits laptops up to 16"',
    },
    {
        icon: <TfiTablet size={30} />,
        text: 'Ipad / document slip pocket',
    },
    {
        icon: <MdOutlineBackpack size={30} />,
        text: 'Lumbar support',
    },
];

const ProductSelection = () => {
    const [selectedColorIdx, setSelectedColorIdx] = useState(0);

    const addToCartButtonStyle = {
        display: 'block',
        alignItems: 'center',
        color: '#FFF',
        backgroundColor: '#e15a1d',
        border: 'none',
        fontSize: '16px',
        fontWeight: 'bold',
        lineHeight: '28px',
        letterSpacing: '2px',
        borderRadius: '4px',
        cursor: 'pointer',
    };

    return (
        <div className='ProductSelection_container'>
            <h1 className='ProductSelection_heading_1'>Classic Backpack</h1>
            <div className='ProductSelection_price_shipping'>
                <div className='ProductSelection_price'>
                    $175 <span>CAD</span>
                </div>
                <div className='ProductSelection_shipping'>Free Shipping!</div>
            </div>
            <hr />
            <div className='ProductSelection_desc'>
                For urban adventurers who want a dependable everyday companion.
            </div>
            <h2 className='ProductSelection_heading_2'>SELECT SIZE:</h2>
            <Dropdown options={DROPDOWN_OPTIONS} />
            <h2 className='ProductSelection_heading_2'>
                SELECT COLOR: <span>{COLORS[selectedColorIdx].colorName}</span>
            </h2>
            <div className='ProductSelection_selectableDots'>
                <SelectableDots
                    colorsArr={COLORS}
                    selectedIdx={selectedColorIdx}
                    size={26}
                    onDotClick={(idx) => setSelectedColorIdx(idx)}
                    maxDots={4}
                />
            </div>
            <div className='ProductSelection_button'>
                <Button
                    content={'ADD TO CART'}
                    styleOverride={addToCartButtonStyle}
                />
            </div>
            <div className='ProductSelection_shipppingDays'>
                Ships within <span>2 business days.</span>
            </div>
            <div className='ProductSelection_expandableList'>
                <ExpandableList
                    title={'DESIGN INSIGHTS'}
                    listItems={LIST_ITEMS}
                    collapsedItemsToShow={5}
                />
            </div>
            <hr />
            <div className='ProductSelection_features'>
                {FEATURES_DATA.map((item, idx) => {
                    return (
                        <div
                            className='ProductSelection_features_item'
                            key={idx}
                        >
                            {item.icon}
                            <div className='ProductSelection_features_item_text'>
                                {item.text}
                            </div>
                        </div>
                    );
                })}
            </div>
            <hr />
            <Accordion
                heading={'SPECIFICATIONS'}
                content={
                    <div className='ProductSelection_specifications'>
                        <div className='ProductSelection_grid_content'>
                            <div>
                                <div className='accordion_subheading'>
                                    Capacity
                                </div>
                                <div className='accordion_large_font'>20L</div>
                            </div>
                            <div>
                                <div className='accordion_subheading'>
                                    Weight
                                </div>
                                <div className='accordion_large_font'>750g</div>
                            </div>
                        </div>
                        <div className='ProductSelection_grid_content'>
                            <div>
                                <div className='accordion_subheading'>
                                    Dimensions
                                </div>
                                <div>450 x 320 x 180 mm</div>
                            </div>
                        </div>
                        <div>
                            <div className='accordion_subheading'>
                                Materials
                            </div>
                            <div>
                                This bag features durable, water-resistant woven
                                fabric, made from recycled materials.
                            </div>
                            <div className='ProductSelection_accordionExtra'>
                                {'Learn more >'}
                            </div>
                        </div>
                    </div>
                }
                headingContainerStyleOverride={{ border: 'none' }}
            />
            <hr />
            <Accordion
                heading={'SHIPPING AND RETURNS'}
                content={
                    <div className='ProductSelection_accordionContent'>
                        Free shipping to Canada. Delivery times will be
                        calculated at checkout. Note: P.O. box deliveries will
                        automatically be sent by regular shipping.
                    </div>
                }
                headingContainerStyleOverride={{ border: 'none' }}
            />
            <hr />
            <Accordion
                heading={'3 YEAR WARRANTY'}
                content={
                    <div className='ProductSelection_accordionContent'>
                        Bellroy products are warranted to be free from defects
                        in materials and workmanship for three years from
                        original date of purchase when used under normal
                        conditions and for the purpose intended.
                        <div className='ProductSelection_accordionExtra'>
                            {'View more information >'}
                        </div>
                    </div>
                }
                headingContainerStyleOverride={{ border: 'none' }}
            />
            <hr />
        </div>
    );
};

export default ProductSelection;
