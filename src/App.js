import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import AlertBannerPage from './components/views/AlertBannerPage/AlertBannerPage';
import Navbar from './components/organisms/Navbar/Navbar';
import ImageGalleryHeroPage from './components/views/ImageGalleryHeroPage/ImageGalleryHeroPage';
import InfoCardPage from './components/views/InfoCardPage/InfoCardPage';
import ExpandableListPage from './components/views/ExpandableListPage/ExpandableListPage';
import ProductCardPage from './components/views/ProductCardPage/ProductCardPage';

const App = () => {
    return (
        <div className='App_container'>
            <BrowserRouter>
                <Navbar />
                <div className={`App_views`}>
                    <Routes>
                        <Route path='/' element={<LandingPage />}></Route>
                        <Route
                            path='/alert-banner'
                            element={<AlertBannerPage />}
                        ></Route>
                        <Route
                            path='/image-gallery-hero'
                            element={<ImageGalleryHeroPage />}
                        ></Route>
                        <Route
                            path='/info-card'
                            element={<InfoCardPage />}
                        ></Route>
                        <Route
                            path='/expandable-list'
                            element={<ExpandableListPage />}
                        ></Route>
                        <Route
                            path='/product-card'
                            element={<ProductCardPage />}
                        ></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
