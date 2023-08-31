import React,{Component} from 'react';
import Product from './product';

class Cart extends Component {
    state = { 
        products:[]
    }
    render() {
        var text =this.props.cartCount?"Your cart contains: ":"Cart is Empty :(";
        return (
            <div className='cart_screen'>
                <div className='cart_text'>{text}</div>
                {this.props.cart.map(products=>
                <Product key={products.id}
                product2={products} />)}
            </div>
        );
    }
}
export default Cart;