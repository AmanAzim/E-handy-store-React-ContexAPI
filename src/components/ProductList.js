import React, {Component} from 'react';
import Product from './Product'
import Title from './title';
import {storeProducts} from '../data';

class ProductList extends Component {

    state={
        products:[...storeProducts],//because the array is too big we kept in separate file and imported it.
    };

    render() {
        console.log(this.state.products);
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="Our" title="Products"/>
                        <div className="row">

                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductList;

