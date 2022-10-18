import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/views/LandingPage/LandingPage';
import AlertBannerPage from './components/views/AlertBannerPage/AlertBannerPage';
import Navbar from './components/organisms/Navbar/Navbar';

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
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
