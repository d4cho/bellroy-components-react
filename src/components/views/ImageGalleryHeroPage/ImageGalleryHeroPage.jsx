import React from 'react';
import ImageGalleryHero from '../../molecules/ImageGalleryHero/ImageGalleryHero';
import './ImageGalleryHeroPage.scss';

import leftImage1 from '../../../assets/images/HeroImages/Left/Tech-Homepage-MainBanner-Desktop-1A.avif';
import leftImage2 from '../../../assets/images/HeroImages/Left/Tech-Homepage-MainBanner-Desktop-2A.avif';
import leftImage3 from '../../../assets/images/HeroImages/Left/Tech-Homepage-MainBanner-Desktop-3A.avif';
import leftImage4 from '../../../assets/images/HeroImages/Left/Tech-Homepage-MainBanner-Desktop-4A.avif';

import rightImage1 from '../../../assets/images/HeroImages/Right/Tech-Homepage-MainBanner-Desktop-1B.avif';
import rightImage2 from '../../../assets/images/HeroImages/Right/Tech-Homepage-MainBanner-Desktop-2B.avif';
import rightImage3 from '../../../assets/images/HeroImages/Right/Tech-Homepage-MainBanner-Desktop-3B.avif';
import rightImage4 from '../../../assets/images/HeroImages/Right/Tech-Homepage-MainBanner-Desktop-4B.avif';

const ImageGalleryHeroPage = () => {
    const leftImagesArr = [leftImage1, leftImage2, leftImage3, leftImage4];
    const rightImagesArr = [rightImage1, rightImage2, rightImage3, rightImage4];

    return (
        <div className='ImageGalleryHeroPage_container'>
            <ImageGalleryHero
                leftImages={leftImagesArr}
                rightImages={rightImagesArr}
                heading={"Designed for where you're going"}
                ctaText={'SHOP TECH'}
                ctaUrl={'/'}
            />
        </div>
    );
};

export default ImageGalleryHeroPage;
