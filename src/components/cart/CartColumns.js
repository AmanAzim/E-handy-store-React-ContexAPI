import React from 'react';

const CartColumns=(props)=>{
    return (
        <div className="container-fluid text-center d-none d-lg-block py-2">
            <div className="row">
                <div className="col-10 col-lg-2 mx-auto">
                    <p>PRODUCTS</p>
                </div>
                <div className="col-10 col-lg-2 mx-auto">
                    <p>NAME OF PRODUCTS</p>
                </div>
                <div className="col-10 col-lg-2 mx-auto">
                    <p>PRICE</p>
                </div>
                <div className="col-10 col-lg-2 mx-auto">
                    <p>QUANTITY</p>
                </div>
                <div className="col-10 col-lg-2 mx-auto">
                    <p>REMOVE</p>
                </div>
                <div className="col-10 col-lg-2 mx-auto">
                    <p>TOTAL</p>
                </div>
            </div>
        </div>
    );
}

export default CartColumns;
