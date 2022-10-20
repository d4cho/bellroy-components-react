import React, { useState, useMemo } from 'react';
import './ImageGalleryHero.scss';
import Button from '../../atoms/Button/Button';
import { Link } from 'react-router-dom';

const ImageGalleryHero = ({
    leftImages,
    rightImages,
    heading,
    ctaText,
    ctaUrl,
}) => {
    const [currLeftIdx, setCurrLeftIdx] = useState(0);
    const [currRightIdx, setCurrRightIdx] = useState(0);

    const increaseLeft = useMemo(() => {
        let startingIndex = 0;
        setInterval(() => {
            let newCurrIndex = startingIndex % leftImages.length;
            setCurrLeftIdx(newCurrIndex);
            startingIndex++;
        }, 4000);
    }, [leftImages.length]);

    const increaseRight = useMemo(() => {
        let startingIndex = 0;
        setTimeout(() => {
            setInterval(() => {
                let newCurrIndex = startingIndex % rightImages.length;
                setCurrRightIdx(newCurrIndex);
                startingIndex++;
            }, 4000);
        }, 2000);
    }, [rightImages.length]);

    const shopButtonStyle = {
        color: '#FFF',
        backgroundColor: '#e15a1d',
        border: 'none',
        fontSize: '13px',
        fontWeight: 'bold',
        letterSpacing: '2px',
        borderRadius: '4px',
        cursor: 'pointer',
    };

    return (
        <div className='ImageGalleryHero_container'>
            {
                leftImages.map((img, idx) => {
                    return (
                        <div
                            key={'left' + idx}
                            className='ImageGalleryHero_leftImage'
                            style={{ backgroundImage: `url(${img})` }}
                        ></div>
                    );
                })[currLeftIdx]
            }
            {
                rightImages.map((img, idx) => {
                    return (
                        <div
                            key={'right' + idx}
                            className='ImageGalleryHero_rightImage'
                            style={{ backgroundImage: `url(${img})` }}
                        ></div>
                    );
                })[currRightIdx]
            }

            <div className='ImageGalleryHero_content'>
                <div className='ImageGalleryHero_heading'>{heading}</div>
                <div className='ImageGalleryHero_cta'>
                    <Link to={ctaUrl}>
                        <Button
                            content={ctaText}
                            styleOverride={shopButtonStyle}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ImageGalleryHero;
