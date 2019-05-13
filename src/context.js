import React, {Component} from 'react';
import {storeProducts, detailProduct} from './data';


const ProductContext=React.createContext();

//The Context Provider is already set up here in advance so we can use this as central state management/props handeling system
class ProductProvider extends Component {

    state={
        products:[], //because the array is too big we kept in separate file and imported it.
        detailProduct:{...detailProduct},
        cart:[],
        modalOpen:false,
        modalProduct:{...detailProduct},
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
       let tempProducts=[...this.state.products];
       let index=tempProducts.findIndex(product=>product.id===id);
       let product=tempProducts[index];
        console.log('product: '+product);

       product.inCart=true;
       product.count=1;
       let price=product.price;
       product.total=price;

       this.setState({products:tempProducts, cart:[...this.state.cart, product]});
       //console.log('state: '+this.state);
    };

    openModal=(id)=>{
        const product=this.getItem(id);
        this.setState({modalProduct:product, modalOpen:true});
    };
    closeModal=()=>{
        console.log('closemodal')
      this.setState({modalOpen:false});
    };

    render() {
        return (                            //It is allowed to sent the whole state like this "...this.state"
            <ProductContext.Provider
                value={{...this.state,
                    handelDetail:this.handelDetail,
                    addToCart:this.addToCart,
                    openModal:this.openModal,
                    closeModal:this.closeModal}}>

                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

export {ProductContext, ProductProvider};
