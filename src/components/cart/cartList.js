import React,{useContext} from 'react';
import {ProductContext} from '../../context';
import CartItem from './cartItem';

const CartList = () => {
    const context=useContext(ProductContext);


    return (
        <div className="container-fluid">
            {   context.cart.map(item=>{
                    return <CartItem key={item.id} item={item}/>
                })
            }

        </div>
    );
};

export default CartList;
