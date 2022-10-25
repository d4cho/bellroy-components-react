import React from 'react';
import './CartItem.scss';
import { GrClose } from 'react-icons/gr';
import Dropdown from '../../atoms/Dropdown/Dropdown';
import { useAppContext } from '../../../context/AppContext';
import { numberWithCommas } from '../../../utils/functions';

const CartItem = ({ index, cartItemInfo }) => {
    const { imgUrl, id, title, color, finish, size, price, quantity } =
        cartItemInfo;

    const { cartData, setCartData } = useAppContext();

    const dropdownStyle = {
        width: '55px',
        height: '26px',
        padding: '0 5px',
    };

    const handleQuantityChange = (val) => {
        let newCartData = [...cartData];
        newCartData[index].quantity = val;
        setCartData(newCartData);
    };

    const handleRemoveItem = (id) => {
        let newCartData = [...cartData].filter((item) => item.id !== id);
        setCartData(newCartData);
    };

    return (
        <div className='CartItem_container'>
            <GrClose
                className='CartItem_remove'
                onClick={() => handleRemoveItem(id)}
            />
            <img
                className='CartItem_image'
                src={imgUrl}
                alt={`${title} ${color} ${finish} ${size}`}
            />
            <div className='CartItem_info'>
                <div className='CartItem_title'>{title}</div>
                <div>Color: {color}</div>
                <div>Finish: {finish}</div>
                {size && <div>Size: {size}</div>}
                <div className='CartItem_qty_price'>
                    <div className='CartItem_qty'>
                        Qty:&nbsp;
                        <Dropdown
                            defaultValue={quantity}
                            options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                            styleOverride={dropdownStyle}
                            onDropdownChange={handleQuantityChange}
                        />
                    </div>
                    <div className='CartItem_price'>
                        ${numberWithCommas(price * quantity)} CAD
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
