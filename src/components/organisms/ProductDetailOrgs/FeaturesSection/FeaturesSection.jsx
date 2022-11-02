import React from 'react';
import './FeaturesSection.scss';
import pocketOrganizationImg from '../../../../assets/images/ClassicBackpack/Features/pocket-organization.avif';
import laptopProtectionImg from '../../../../assets/images/ClassicBackpack/Features/laptop-protection.avif';
import stabilityAndComfortImg from '../../../../assets/images/ClassicBackpack/Features/stability-and-comfort.avif';
import funFactImg from '../../../../assets/images/ClassicBackpack/Features/fun-fact.avif';
import fromTheDesignerImg from '../../../../assets/images/ClassicBackpack/Features/from-the-designer.avif';

const FeaturesSection = () => {
    return (
        <div className='FeaturesSection_container'>
            <h1>FULL OF FEATURES</h1>
            <div className='FeaturesSection_grid'>
                <div className='FeaturesSection_grid_item reverse'>
                    <div className='p-r-15'>
                        <h2>POCKET ORGANIZATION</h2>
                        <p>
                            Internal storage keeps devices, clothing and more
                            sorted, while external pockets give easy access to
                            other key items.
                        </p>
                    </div>
                    <img
                        src={pocketOrganizationImg}
                        alt={'pocket-organization'}
                    />
                </div>
                <div className='FeaturesSection_grid_item'>
                    <img
                        src={laptopProtectionImg}
                        alt={'pocket-organization'}
                    />
                    <div className='p-l-15'>
                        <h2>LAPTOP PROTECTION</h2>
                        <p>
                            A protective sleeve holds your laptop snug when
                            you're on the move. No bouncing against your back.
                        </p>
                    </div>
                </div>
                <div className='FeaturesSection_grid_item reverse'>
                    <div className='p-r-15'>
                        <h2>STABILITY AND COMFORT</h2>
                        <p>
                            Lumbar support and contoured straps keep you
                            carrying comfortably all day long, even when fully
                            packed.
                        </p>
                    </div>
                    <img
                        src={stabilityAndComfortImg}
                        alt={'pocket-organization'}
                    />
                </div>
                <div className='FeaturesSection_grid_item'>
                    <img src={funFactImg} alt={'pocket-organization'} />
                    <div className='p-l-15'>
                        <h2>FUN FACT</h2>
                        <p>
                            Ever think a backpack could be compared to a font?
                            In <span>this review</span>, Taylor Weldon said of
                            the Classic: "It's Helvetica in a bag; its success
                            is in its simplicity."
                        </p>
                    </div>
                </div>
                <div className='FeaturesSection_grid_item reverse'>
                    <div className='p-r-15'>
                        <h2>FROM THE DESIGNER</h2>
                        <p>
                            "This daypack is for those who know what they want
                            from a bag. A traditional shape with unexpected
                            engineering."
                        </p>
                    </div>
                    <img src={fromTheDesignerImg} alt={'pocket-organization'} />
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;
