import React, {Component} from 'react';
import styled from 'styled-components';
import {ProductContext} from '../context';
import {NavLink} from 'react-router-dom';

const ProductWrapper=styled.div`
    
`;

class Product extends Component {

    render() {

        const {id, title, img, price, inCart}=this.props.product;

        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container py-5" onClick={console.log('Clicked')}>
                        <NavLink to="/details"><img src={img} alt="product" className="card-img-top"/></NavLink>
                    </div>
                </div>


            </ProductWrapper>
        );
    }
}

export default Product;

