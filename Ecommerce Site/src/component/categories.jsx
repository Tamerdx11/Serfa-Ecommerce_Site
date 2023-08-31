import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import Product from './product';

const Cat =props=> {
    const {catrgory}= useParams();
    var products = props.product.filter(product=>product.category ==catrgory);
    
    return (
        <div className='categories_screen'>
            <div className='category_selected'><b>Category: </b> {catrgory}</div>
                {products.map(product=>
                <Product key={product.id}
                product2={product} />)}
        </div>
    );
}
export default Cat;