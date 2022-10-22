import React from 'react';
import { useAppContext } from '../../../context/AppContext';
import Filter from '../../organisms/Filter/Filter';
import MobileFilterBar from '../../organisms/MobileFilterBar/MobileFilterBar';
import './AccordionPage.scss';

const AccordionPage = () => {
    const { isMobileView } = useAppContext();

    return (
        <div className='AccordionPage_container'>
            <div className='AccordionPage_example'>
                {isMobileView ? <MobileFilterBar /> : <Filter />}
            </div>
        </div>
    );
};

export default AccordionPage;
