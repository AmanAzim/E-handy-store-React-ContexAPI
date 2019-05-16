import React, {useContext} from 'react';
import {ProductContext} from '../../context';

const CartTotal = (props) => {

    const context=useContext(ProductContext);

    const {cartSubtotal, cartTax, cartTotal}=context;

    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-10 col-sm-8 mt-2 ml-sm-5 ml-md-auto text-capitalize text-right"></div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default CartTotal;
