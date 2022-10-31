import React, { useState } from 'react';
import SelectableDots from '../../atoms/SelectableDots/SelectableDots';
import { useNavigate } from 'react-router-dom';
import './ProductCard.scss';
import { useAppContext } from '../../../context/AppContext';
import { GrClose } from 'react-icons/gr';

const ProductCard = ({
    title,
    price,
    desc,
    specialTag,
    images,
    insideImage,
    redirectUrl,
}) => {
    const navigate = useNavigate();
    const { isMobileView } = useAppContext();
    const [selectedIdx, setSelectedIdx] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isShowInside, setIsShowInside] = useState(false);

    const colors = images.map((image) => {
        return {
            colorCode: image.colorCode,
            colorName: image.colorName,
        };
    });

    const handleDotClick = (idx) => {
        setSelectedIdx(idx);
    };

    const handleCardClick = () => {
        navigate(redirectUrl);
    };

    const handleShowInsideClick = () => {
        setIsShowInside(!isShowInside);
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

    if (isShowInside) {
        return (
            <div
                className='ProductCard_container show-inside'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    className={`ProductCard_button ${isHovered && 'show'}`}
                    onClick={handleShowInsideClick}
                >
                    <span className='ProductCard_close_btn'>
                        CLOSE&nbsp;
                        <GrClose />
                    </span>
                </div>
                <img
                    className='ProductCard_image'
                    src={insideImage}
                    alt={'test'}
                    onClick={handleCardClick}
                />
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
                onClick={handleShowInsideClick}
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
