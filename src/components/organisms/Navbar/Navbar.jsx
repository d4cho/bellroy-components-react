import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../../atoms/Button/Button';
import './Navbar.scss';
import { IoClose, IoMenu } from 'react-icons/io5';
import { BsArrow90DegUp } from 'react-icons/bs';

const LINKS = [
    {
        route: '/',
        label: 'Home',
    },
    {
        route: '/alert-banner',
        label: 'Alert Banner',
    },
    {
        route: '/image-gallery-hero',
        label: 'Image Gallery (Hero)',
    },
    {
        route: '/info-card',
        label: 'Info Card',
    },
    {
        route: '/expandable-list',
        label: 'Expandable List',
    },
    {
        route: '/product-card',
        label: 'Product Card',
    },
    {
        route: '/filter',
        label: 'Filter (Accordion)',
    },
    {
        route: '/shopping-cart',
        label: 'Shopping Cart',
    },
    {
        route: '/menu-navbar',
        label: 'Menu NavBar',
    },
    {
        route: '/modal',
        label: 'Modal',
    },
    {
        route: '/product-detail-page',
        label: 'Product Detail Page',
    },
];

const Navbar = () => {
    const location = useLocation();
    const [isSideDrawerOpen, setIsSideDrawerOpen] = useState(false);
    const [showMsg, setShowMsg] = useState(true);

    useEffect(() => {
        if (isSideDrawerOpen) {
            setShowMsg(false);
        }
    }, [isSideDrawerOpen]);

    const toggleButtonStyle = {
        backgroundColor: 'transparent',
        color: '#e15a1d',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '4px',
        width: 'fit-content',
    };

    return (
        <div className='Navbar_container_mobile'>
            <Button
                content={<IoMenu size={30} />}
                styleOverride={toggleButtonStyle}
                onButtonClick={() => setIsSideDrawerOpen(true)}
            />
            {showMsg && (
                <div className='Navbar_start-here'>
                    <BsArrow90DegUp /> See components here
                </div>
            )}
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
                                {LINKS.map((link, idx) => {
                                    const { route, label } = link;
                                    return (
                                        <Link to={route} key={idx}>
                                            <div
                                                className={`Navbar_link ${
                                                    location.pathname === route
                                                        ? 'Navbar_link--current'
                                                        : ''
                                                }`}
                                            >
                                                {label}
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Navbar;
