import React from 'react';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import './ProductCardPage.scss';
import { productData } from '../../../assets/data/product-data';

const ProductCardPage = () => {
    return (
        <div className='ProductCardPage_container'>
            {productData.map((product) => {
                const {
                    id,
                    title,
                    price,
                    desc,
                    specialTag,
                    images,
                    insideImage,
                } = product;

                return (
                    <div className='ProductCardPage_productCard' key={id}>
                        <ProductCard
                            title={title}
                            price={price}
                            desc={desc}
                            specialTag={specialTag}
                            images={images}
                            insideImage={insideImage}
                            redirectUrl={'/'}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default ProductCardPage;
