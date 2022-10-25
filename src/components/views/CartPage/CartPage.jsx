import React, { useState } from 'react';
import './CartPage.scss';
import { BsCart } from 'react-icons/bs';
import Badge from '../../atoms/Badge/Badge';
import Cart from '../../organisms/Cart/Cart';
import Modal from '../../molecules/Modal/Modal';
import { useAppContext } from '../../../context/AppContext';

const CartPage = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { cartData } = useAppContext();

    return (
        <div className='CartPage_container'>
            <div className='CartPage_header'>
                <div
                    className='CartPage_cart_button'
                    onClick={() => setIsCartOpen(true)}
                >
                    <BsCart size={30} />
                    {cartData.length > 0 && <Badge content={cartData.length} />}
                </div>
            </div>

            <Modal
                width={'fit-content'}
                position={'right'}
                slideFrom={'right'}
                isModalOpen={isCartOpen}
                setIsModalOpen={setIsCartOpen}
                modalContent={<Cart setIsCartOpen={setIsCartOpen} />}
            />
        </div>
    );
};

export default CartPage;
