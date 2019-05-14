import React, {Component} from 'react';
import {ProductContext} from '../../context';
import Title from '../title';
import CartColumns from './CartColumns';

class Cart extends Component {
    static contextType=ProductContext;

    render() {
        return (
            <div className="py-3">

               <Title name="Your" title="Cart"/>
               <CartColumns/>
            </div>
        );
    }
}

export default Cart;
