import React from 'react';
import './Cart.scss';
import { GrClose } from 'react-icons/gr';
import { BsCart } from 'react-icons/bs';
import Badge from '../../atoms/Badge/Badge';
import Button from '../../atoms/Button/Button';
import CartItem from '../../molecules/CartItem/CartItem';
import { useAppContext } from '../../../context/AppContext';
import { numberWithCommas } from '../../../utils/functions';
import {
    gpaySvg,
    mastercardSvg,
    paypalSvg,
    visaSvg,
} from '../../../assets/images/svgs';

const Cart = ({ setIsCartOpen }) => {
    const { cartData } = useAppContext();

    const paypalButtonStyle = {
        backgroundColor: '#ffc439',
        letterSpacing: '1px',
        border: 'none',
        borderRadius: '7px',
        boxShadow: '0 17px 9px -15px rgb(0 0 0 / 50%)',
        cursor: 'pointer',
    };

    const checkoutButtonStyle = {
        backgroundColor: '#e15a1d',
        color: '#FFF',
        letterSpacing: '1px',
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '7px',
        boxShadow: '0 17px 9px -15px rgb(0 0 0 / 50%)',
        cursor: 'pointer',
    };

    const getSubTotal = () => {
        let subTotal = 0;
        cartData.forEach((item) => {
            subTotal = subTotal + item.quantity * item.price;
        });
        return numberWithCommas(subTotal);
    };

    return (
        <div className='Cart_container'>
            <div className='Cart_header'>
                <GrClose
                    className='Cart_close'
                    onClick={() => setIsCartOpen(false)}
                />
                <div className='Cart_icon'>
                    <BsCart size={24} />
                    {cartData.length > 0 && <Badge content={cartData.length} />}
                </div>
                <div className='Cart_heading'>Your shopping cart</div>
            </div>

            {cartData.length > 0 ? (
                <div className='Cart_content'>
                    {cartData.map((item, idx) => {
                        return (
                            <React.Fragment key={idx}>
                                <CartItem index={idx} cartItemInfo={item} />
                            </React.Fragment>
                        );
                    })}
                </div>
            ) : (
                <div className='Cart_empty'>
                    You have no items in your shopping cart.
                </div>
            )}

            <div className='Cart_footer'>
                {cartData.length > 0 ? (
                    <>
                        <div className='Cart_shipping'>
                            <div>Regular shipping CA</div>
                            <div className='Cart_free'>FREE</div>
                        </div>
                        <div className='Cart_subtotal'>
                            <div>SUBTOTAL</div>
                            <div>${getSubTotal()} CAD</div>
                        </div>
                        <div className='Cart_button'>
                            <Button
                                content={'Pay with PayPal'}
                                styleOverride={paypalButtonStyle}
                            />
                        </div>
                        <div className='Cart_button'>
                            <Button
                                content={'GO TO CHECKOUT'}
                                styleOverride={checkoutButtonStyle}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div className='Cart_accept'>We accept:</div>
                        <div className='Cart_svgs'>
                            <span>{visaSvg}</span>
                            <span>{mastercardSvg}</span>
                            <span>{paypalSvg}</span>
                            <span>{gpaySvg}</span>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
