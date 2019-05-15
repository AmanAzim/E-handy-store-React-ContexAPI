import React,{useContext} from 'react';
import {ProductContext} from '../../context';

const CartItem = (props) => {
    const context=useContext(ProductContext);

    const {id, title, img, price, total, count}=props.item;

    return (
        <div className="row my-1 text-center text-capitalize">
            <div className="col-10 col-lg-2 mx-auto">
                <img src={img} style={{width:'5rem',height:'5rem'}} className="img-fluid" alt="Product Image" />
            </div>
            <div className="col-10 col-lg-2 mx-auto">

            </div>
        </div>
    );
};

export default CartItem;
