import React, { useState } from 'react';
import './PreviewImages.scss';
import { previewImages } from '../../../../assets/data/preview-images';
import { useAppContext } from '../../../../context/AppContext';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper';

const PreviewImages = () => {
    const { isMobileView } = useAppContext();
    const [selectedImage, setSelectedImage] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);

    const [offset, setOffset] = useState({
        x: 0,
        y: 0,
    });

    const handleThumbnailClick = (idx) => {
        setIsZoomed(false);
        setSelectedImage(idx);
    };

    const handleMouseMove = (e) => {
        if (!isZoomed) return;

        let newX = offset.x + e.movementX;
        let newY = offset.y + e.movementY;

        setOffset({
            x: newX,
            y: newY,
        });
    };

    const handleImageClick = () => {
        if (isZoomed) {
            setOffset({
                x: 0,
                y: 0,
            });
        }
        setIsZoomed(!isZoomed);
    };

    return (
        <div className='PreviewImages_container'>
            {isMobileView ? (
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                >
                    {previewImages.map((item, idx) => {
                        return (
                            <SwiperSlide key={idx}>
                                <img src={item.imgUrl} alt={item.desc} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            ) : (
                <>
                    <div
                        className='PreviewImages_mainImage_container'
                        onMouseMove={(e) => handleMouseMove(e)}
                        onClick={handleImageClick}
                    >
                        <img
                            className={`${isZoomed && 'isZoomed'}`}
                            src={previewImages[selectedImage].imgUrl}
                            alt={previewImages[selectedImage].desc}
                            style={{
                                '--transX': `${-offset.x}px`,
                                '--transY': `${-offset.y}px`,
                            }}
                        />
                    </div>
                    <div className='PreviewImages_thumbnails'>
                        {previewImages.map((item, idx) => {
                            return (
                                <div
                                    className='PreviewImages_thumbnails_image_container'
                                    key={idx}
                                >
                                    <img
                                        src={item.imgUrl}
                                        alt={item.desc}
                                        onClick={() =>
                                            handleThumbnailClick(idx)
                                        }
                                    />
                                    <div
                                        className={`PreviewImages_underline ${
                                            selectedImage === idx && 'selected'
                                        }`}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </>
            )}
        </div>
    );
};

export default PreviewImages;
