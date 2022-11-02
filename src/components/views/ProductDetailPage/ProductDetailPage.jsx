import React from 'react';
import FeaturesSection from '../../organisms/ProductDetailOrgs/FeaturesSection/FeaturesSection';
import ProductSelection from '../../organisms/ProductDetailOrgs/ProductSelection/ProductSelection';
import StorageSection from '../../organisms/ProductDetailOrgs/StorageSection/StorageSection';
import './ProductDetailPage.scss';

const ProductDetailPage = () => {
    return (
        <div className='ProductDetailPage_container'>
            <section className='ProductDetailPage_main'>
                <section>images</section>
                <section>
                    <ProductSelection />
                </section>
            </section>
            <section className='ProductDetailPage_features'>
                <FeaturesSection />
            </section>
            <section className='ProductDetailPage_storage'>
                <StorageSection />
            </section>
        </div>
    );
};

export default ProductDetailPage;
