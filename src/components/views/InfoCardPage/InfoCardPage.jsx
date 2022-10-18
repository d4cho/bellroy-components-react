import React from 'react';
import InfoCard from '../../molecules/InfoCard/InfoCard';
import './InfoCardPage.scss';
import adventureImg from '../../../assets/images/InfoCards/Homepage-SubBanner-1.avif';
import iphoneImg from '../../../assets/images/InfoCards/Homepage-SubBanner-2.avif';
import tomorrowImg from '../../../assets/images/InfoCards/Homepage-SubBanner-3.avif';
import walletImg from '../../../assets/images/InfoCards/Homepage-Subbanner-Apex.v1.avif';
import { BiChevronRight } from 'react-icons/bi';

const InfoCardPage = () => {
    return (
        <div className='InfoCardPage_container'>
            <InfoCard
                imageUrl={adventureImg}
                title={'For the dailiest of adventures'}
                ctaText={
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                        }}
                    >
                        <div>Shop Venture</div>
                        <BiChevronRight size={16} />
                    </div>
                }
                ctaRoute={'/'}
            />
            <InfoCard
                imageUrl={iphoneImg}
                title={'New Iphone 14 cases are here'}
                ctaText={
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                        }}
                    >
                        <div>Shop now</div>
                        <BiChevronRight size={16} />
                    </div>
                }
                ctaRoute={'/'}
            />
            <InfoCard
                imageUrl={tomorrowImg}
                title={'Tomorrow shaped.'}
                ctaText={
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                        }}
                    >
                        <div>Shop new EDC</div>
                        <BiChevronRight size={16} />
                    </div>
                }
                ctaRoute={'/'}
            />
            <InfoCard
                imageUrl={walletImg}
                title={'Designed by the future'}
                ctaText={
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                        }}
                    >
                        <div>Shop Apex wallets</div>
                        <BiChevronRight size={16} />
                    </div>
                }
                ctaRoute={'/'}
            />
        </div>
    );
};

export default InfoCardPage;
