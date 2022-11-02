import React, { useRef } from 'react';
import FeaturesSection from '../../organisms/ProductDetailOrgs/FeaturesSection/FeaturesSection';
import PreviewImages from '../../organisms/ProductDetailOrgs/PreviewImages/PreviewImages';
import ProductSelection from '../../organisms/ProductDetailOrgs/ProductSelection/ProductSelection';
import StorageSection from '../../organisms/ProductDetailOrgs/StorageSection/StorageSection';
import './ProductDetailPage.scss';
import { FiChevronUp } from 'react-icons/fi';

const ProductDetailPage = () => {
    const topRef = useRef();

    return (
        <div className='ProductDetailPage_container'>
            <section className='ProductDetailPage_main' ref={topRef}>
                <section>
                    <PreviewImages />
                </section>
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
            <div
                className='ProductDetailPage_backToTop'
                onClick={() =>
                    topRef.current.scrollIntoView({ behavior: 'smooth' })
                }
            >
                <div className='ProductDetailPage_backToTop_text'>
                    BACK TO TOP
                </div>
                <FiChevronUp size={26} />
            </div>
        </div>
    );
};

export default ProductDetailPage;
