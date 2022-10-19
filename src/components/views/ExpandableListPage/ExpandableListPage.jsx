import React from 'react';
import ExpandableList from '../../molecules/ExpandableList/ExpandableList';
import './ExpandableListPage.scss';

const ExpandableListPage = () => {
    return (
        <div className='ExpandableListPage_container'>
            <ExpandableList
                title={'DESIGN INSIGHTS'}
                listItems={[
                    'Padded 16” laptop sleeve',
                    'Tablet slip fits iPad',
                    'Ultra-wide zip opening for easy access',
                    'Side water bottle pocket',
                    'Surprisingly spacious main compartment',
                    'Raised mesh sunglasses pocket',
                    'Internal slip pockets',
                    'Divided front pocket with organization and key clip',
                    'Hidden rear document pocket',
                    'Detachable padded shoulder strap',
                    'Soft, rolled-edge webbing handles',
                    'Water-resistant main zipper',
                    'Luggage pass-through slides over a suitcase handle',
                    'Eco-tanned leather accents',
                    'Backed by our 3-year warranty',
                ]}
                collapsedItemsToShow={8}
            />
        </div>
    );
};

export default ExpandableListPage;
