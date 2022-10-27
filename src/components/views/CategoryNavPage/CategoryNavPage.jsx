import React from 'react';
import CategoryNav from '../../organisms/CategoryNav/CategoryNav';
import './CategoryNavPage.scss';

const CategoryNavPage = () => {
    return (
        <div className='CategoryNavPage_container'>
            <div className='CategoryNavPage_top'></div>
            <CategoryNav />
            <div className='CategoryNavPage_bottom'></div>
        </div>
    );
};

export default CategoryNavPage;
