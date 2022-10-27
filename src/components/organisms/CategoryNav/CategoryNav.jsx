import React from 'react';
import './CategoryNav.scss';
import { Link } from 'react-router-dom';
import { catNavData } from '../../../assets/data/catnav-data';
import { useAppContext } from '../../../context/AppContext';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper';

const CategoryNav = () => {
    const { isTabletView } = useAppContext();
    console.log('isTabletView', isTabletView);

    return (
        <div className='CategoryNav_container'>
            <div className='CategoryNav_title'>SHOP BY CATEGORY</div>
            <nav className='CategoryNav_nav'>
                {isTabletView ? (
                    <Swiper
                        slidesPerView={3}
                        slidesPerGroup={3}
                        pagination={true}
                        modules={[Pagination]}
                        className='CategoryNav_swiper'
                    >
                        {catNavData.map((nav, idx) => {
                            return (
                                <SwiperSlide key={idx}>
                                    <Link className='CategoryNav_link' to={'/'}>
                                        {nav.category === 'New Releases' && (
                                            <strong className='CategoryNav_new'>
                                                NEW
                                            </strong>
                                        )}
                                        <img
                                            className={`CategoryNav_image ${
                                                nav.category ===
                                                    'New Releases' && 'resize'
                                            }`}
                                            src={nav.imgUrl}
                                            alt={nav.category}
                                        />
                                        <div
                                            className={`CategoryNav_category ${
                                                nav.category ===
                                                    'New Releases' &&
                                                'custom_margin'
                                            }`}
                                        >
                                            {nav.category}
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                ) : (
                    <ul>
                        {catNavData.map((nav, idx) => {
                            return (
                                <li key={idx}>
                                    <Link className='CategoryNav_link' to={'/'}>
                                        {nav.category === 'New Releases' && (
                                            <strong className='CategoryNav_new'>
                                                NEW
                                            </strong>
                                        )}
                                        <img
                                            className={`CategoryNav_image ${
                                                nav.category ===
                                                    'New Releases' && 'resize'
                                            }`}
                                            src={nav.imgUrl}
                                            alt={nav.category}
                                        />
                                        <div
                                            className={`CategoryNav_category ${
                                                nav.category ===
                                                    'New Releases' &&
                                                'custom_margin'
                                            }`}
                                        >
                                            {nav.category}
                                        </div>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                )}
            </nav>
        </div>
    );
};

export default CategoryNav;
