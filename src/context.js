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
        cartSubtotal:0,
        cartTax:0,
        cartTotal:0,
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

       product.inCart=true;
       product.count=1;
       const tempPrice=product.price;
       product.total=tempPrice;

       this.setState({products:tempProducts, cart:[...this.state.cart, product]}, ()=>{this.addTotal()} );
    };

    openModal=(id)=>{
        const product=this.getItem(id);
        this.setState({modalProduct:product, modalOpen:true});
    };
    closeModal=()=>{
      this.setState({modalOpen:false});
    };


    increment=(id)=>{
       let tempCart=[...this.state.cart];
       let index=tempCart.findIndex(item=>item.id===id);
       let product=tempCart[index];

       product.count++;
       product.total+=product.price;

       this.setState({cart:tempCart}, ()=>{this.addTotal();})
    };
    decrement=(id)=>{
        let tempCart=[...this.state.cart];
        let index=tempCart.findIndex(item=>item.id===id);
        let product=tempCart[index];

        product.count--;
        product.total-=product.price;

        if(product.count<=0){
           // product.inCart=false;
           // product.count=0;
           // product.total=0;
           // tempCart.splice(index, 1);
            this.removeItem(id);
        } else {
            this.setState({cart:tempCart}, ()=>{this.addTotal();});
        }
    };
    addTotal=()=>{
        let subTotal=0;
        for(let i=0;i<this.state.cart.length;i++){
            subTotal +=this.state.cart[i].total;
        }
        console.log('subTotal:'+subTotal);
        let tempTax=subTotal*0.1;
        tempTax=parseFloat(tempTax.toFixed(2));

        let total=subTotal+tempTax;

        this.setState({cartSubtotal:subTotal, cartTax:tempTax, cartTotal:total});
    };
    removeItem=(id)=>{
        let tempProducts=[...this.state.products];
        let index=tempProducts.findIndex(item=>item.id===id);
        let product=tempProducts[index];

        product.inCart=false;
        product.count=0;
        product.total=0;

        let tempCart=this.state.cart.filter(item=>item.id!==id);

        this.setState({products:tempProducts, cart:tempCart}, ()=>{this.addTotal()});
    };
    clearCart=()=>{
       let tempProducts=[...this.state.products];
       tempProducts.map(item=>{
           item.inCart=false;
           item.count=0;
           item.total=0;
       });
       this.setState({products:tempProducts, cart:[], cartSubtotal:0, cartTax:0, cartTotal:0});

       //Instead of all these we can set the old state of all the products back by :
      /*  this.setState({cart:[]}, ()=>{
            this.setProducts();
            this.addTotal();//for safety
        }); */
    };

    render() {
        return (                            //It is allowed to sent the whole state like this "...this.state"
            <ProductContext.Provider
                value={{...this.state,
                    handelDetail:this.handelDetail,
                    addToCart:this.addToCart,
                    openModal:this.openModal,
                    closeModal:this.closeModal,
                    increment:this.increment,
                    decrement:this.decrement,
                    removeItem:this.removeItem,
                    clearCart:this.clearCart, }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

export {ProductContext, ProductProvider};
