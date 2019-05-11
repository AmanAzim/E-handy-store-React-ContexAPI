import React, {Component} from 'react';
import {storeProducts, detailProduct} from './data';


const ProductContext=React.createContext();

//The Context Provider is already set up here in advance so we can use this as central state management/props handeling system
class ProductProvider extends Component {

    state={
        products:[], //because the array is too big we kept in separate file and imported it.
        detailProduct:{...detailProduct},
    };

    setProducts=()=>{
        let tempProducts=[];

        storeProducts.forEach((item)=>{
            const singleItem={...item};
            tempProducts=[...tempProducts, singleItem];
        });

        this.setState({products:tempProducts});
    };

    componentDidMount() {
        this.setProducts();
    }

    getItem=(id)=>{
        const product=this.state.products.find((product)=>{
            return product.id===id;
        });

        return product;
    };
    handelDetail=(id)=>{
        this.setState({detailProduct:this.getItem(id)});
    };
    addToCart=(id)=>{
        console.log(id+' added to cart');
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
