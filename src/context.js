import React, {Component} from 'react';
import {storeProducts, detailProduct} from './data';


const ProductContext=React.createContext();

//The Context Provider is already set up here in advance so we can use this as central state management/props handeling system
class ProductProvider extends Component {

    state={
        products:[...storeProducts],
        detailProduct:{...detailProduct},
    };
    handelDetail=()=>{
        console.log('Hello from detail')
    };
    addToCart=()=>{
        console.log('Hello from cart')
    };

    render() {
        return (                            //It is allowed to sent the whole state like this "...this.state"
            <ProductContext.Provider value={{...this.state, handelDetail:this.handelDetail, addToCart:this.addToCart}}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

export {ProductContext, ProductProvider};
