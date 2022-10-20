import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../../context/AppContext';
import Button from '../../atoms/Button/Button';
import './Navbar.scss';
import { IoClose, IoMenu } from 'react-icons/io5';

const Navbar = () => {
    const { isMobileView } = useAppContext();
    const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);

    const toggleButtonStyle = {
        backgroundColor: 'transparent',
        color: '#e15a1d',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '4px',
        width: 'fit-content',
    };

    if (isMobileView) {
        return (
            <div className='Navbar_container_mobile'>
                <Button
                    content={<IoMenu size={30} />}
                    styleOverride={toggleButtonStyle}
                    onButtonClick={() => setIsSideDrawerOpen(true)}
                />
                {isSideDrawerOpen && (
                    <>
                        <div
                            className='Navbar_backdrop'
                            onClick={() => setIsSideDrawerOpen(false)}
                        />
                        <div className='Navbar_side-drawer'>
                            <div className='Navbar_container'>
                                <div className='Navbar_button'>
                                    <Button
                                        content={<IoClose size={30} />}
                                        styleOverride={toggleButtonStyle}
                                        onButtonClick={() =>
                                            setIsSideDrawerOpen(false)
                                        }
                                    />
                                </div>
                                <div
                                    className='Navbar_links'
                                    onClick={() => setIsSideDrawerOpen(false)}
                                >
                                    <Link to={'/'}>
                                        <div className='Navbar_link'>home</div>
                                    </Link>
                                    <Link to={'/alert-banner'}>
                                        <div className='Navbar_link'>
                                            alert banner
                                        </div>
                                    </Link>
                                    <Link to={'/image-gallery-hero'}>
                                        <div className='Navbar_link'>
                                            image gallery hero
                                        </div>
                                    </Link>
                                    <Link to={'/info-card'}>
                                        <div className='Navbar_link'>
                                            info card
                                        </div>
                                    </Link>
                                    <Link to={'/expandable-list'}>
                                        <div className='Navbar_link'>
                                            expandable list
                                        </div>
                                    </Link>
                                    <Link to={'/product-card'}>
                                        <div className='Navbar_link'>
                                            product card
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        );
    }

    return (
        <div className='Navbar_container'>
            <div className='Navbar_links'>
                <Link to={'/'}>
                    <div className='Navbar_link'>home</div>
                </Link>
                <Link to={'/alert-banner'}>
                    <div className='Navbar_link'>alert banner</div>
                </Link>
                <Link to={'/image-gallery-hero'}>
                    <div className='Navbar_link'>image gallery hero</div>
                </Link>
                <Link to={'/info-card'}>
                    <div className='Navbar_link'>info card</div>
                </Link>
                <Link to={'/expandable-list'}>
                    <div className='Navbar_link'>expandable list</div>
                </Link>
                <Link to={'/product-card'}>
                    <div className='Navbar_link'>product card</div>
                </Link>
                <Link to={'/accordion'}>
                    <div className='Navbar_link'>accordion</div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
