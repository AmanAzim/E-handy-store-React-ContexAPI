import React, {Component} from 'react';
import Product from './Product'
import Title from './title';
import {ProductContext} from '../context';

class ProductList extends Component {

    static contextType=ProductContext;


    render() {
        console.log(this.context.products);
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">

                        <Title name="Our" title="Products"/>

                        <div className="row">
                            {this.context.products.map((product)=>{
                                    return <Product key={product.id} product={product}></Product>
                            })}
                        </div>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductList;

