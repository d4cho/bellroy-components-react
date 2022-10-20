import React from 'react';
import Filter from '../../organisms/Filter/Filter';
import './AccordionPage.scss';

const AccordionPage = () => {
    return (
        <div className='AccordionPage_container'>
            <div className='AccordionPage_example'>
                <Filter />
            </div>
        </div>
    );
};

export default AccordionPage;
