import React, { useState } from 'react';
import SelectableDots from '../../atoms/SelectableDots/SelectableDots';
import { useNavigate } from 'react-router-dom';
import './ProductCard.scss';
import { useAppContext } from '../../../context/AppContext';

const ProductCard = ({
    title,
    price,
    desc,
    specialTag,
    images,
    redirectUrl,
}) => {
    const navigate = useNavigate();
    const { isMobileView } = useAppContext();
    const [selectedIdx, setSelectedIdx] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const colors = images.map((image) => image.colorCode);

    const handleDotClick = (idx) => {
        setSelectedIdx(idx);
    };

    const handleCardClick = () => {
        navigate(redirectUrl);
    };

    if (isMobileView) {
        return (
            <div className='ProductCard_container'>
                <img
                    className='ProductCard_image'
                    src={images[selectedIdx].url}
                    alt={'test'}
                    onClick={handleCardClick}
                />
                <div className='ProductCard_content'>
                    <div
                        className='ProductCard_title'
                        onClick={handleCardClick}
                    >
                        {title}
                    </div>
                    <div className='ProductCard_price'>{price}</div>
                    <div className='ProductCard_desc'>{desc}</div>
                    <div className='ProductCard_selectable'>
                        <SelectableDots
                            colorsArr={colors}
                            selectedIdx={selectedIdx}
                            size={20}
                            onDotClick={handleDotClick}
                            maxDots={4}
                        />
                    </div>
                    <div className='ProductCard_specialTag-mobile'>
                        {specialTag}
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            className='ProductCard_container'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`ProductCard_button ${isHovered && 'show'}`}
                onClick={handleCardClick}
            >
                SHOW INSIDE +
            </div>
            <img
                className='ProductCard_image'
                src={images[selectedIdx].url}
                alt={'test'}
                onClick={handleCardClick}
            />
            <div className='ProductCard_content'>
                <div className='ProductCard_selectable'>
                    <SelectableDots
                        colorsArr={colors}
                        selectedIdx={selectedIdx}
                        size={20}
                        onDotClick={handleDotClick}
                        maxDots={4}
                    />
                </div>
                <div className='ProductCard_title' onClick={handleCardClick}>
                    {title}
                </div>
                <div className='ProductCard_price'>{price}</div>
                <div className='ProductCard_desc'>{desc}</div>
                <div className='ProductCard_specialTag'>{specialTag}</div>
            </div>
        </div>
    );
};

export default ProductCard;
