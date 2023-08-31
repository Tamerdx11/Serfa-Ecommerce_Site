import React, { Component } from 'react';
import {Routes, Route} from "react-router-dom";
import Home from './home';
import About from './about';
import Navbar from './Navbar';
import ContactUs from './cotact-us';
import Cat from './categories';
import Cart from './cart';
import Footer from './Footer';

class App extends Component {
    state = { 
        products:[],
        cartId:[],
        cart:[],
    }

    addToCart=id=>{
        var cart;
        var cartId;
        if(!this.state.cartId.includes(id)){
            cart=this.state.cart;
            cartId=this.state.cartId;
            cartId.push(id);
            cart.push(this.state.products[id-1])
            this.setState({cart,cartId});
        } else {
            cartId =this.state.cartId.filter(e=>e !=id);
            cart=this.state.cart.filter(p=>p.id !=id);
            this.setState({cart,cartId});
        }
    }
    
    async componentDidMount() {
        const axios = require('axios').default;
        const {products} = (await axios.get('https://dummyjson.com/products')).data;
        this.setState({products});
    }

    render() { 
        return (
            <React.Fragment>
                <Navbar cartCount={this.state.cartId.length}></Navbar>
                <main className="container">
                    <Routes>
                        <Route path="/about/:id" element = { <About cartId={this.state.cartId} addToCart={this.addToCart} product={this.state.products} /> } />
                        <Route path="/" element = { <Home product={this.state.products} /> }/>
                        <Route path="/contact-us" element = { <ContactUs/> }/>
                        <Route path="/categories/:catrgory" element = { <Cat product={this.state.products}/> }/>
                        <Route path="/cart" element = { <Cart cart={this.state.cart} cartCount={this.state.cartId.length} product={this.state.products} /> }/>
                    </Routes>
                </main>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}
export default App;