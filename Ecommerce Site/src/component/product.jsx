import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
    render() { 
        const {product2}=this.props;
        return (
            <div className='products'>
                    <div className='product'>
                        <Link to={`/about/${product2.id}`}>
                            <div className='image_container'>
                                <img src={product2.thumbnail} alt="image" />
                            </div>
                        </Link>
                        <div className='title_container'>
                            <h6>{product2.title}</h6>
                        </div>
                        <div className='price_container'>
                            <div className='price'>
                                <span >Price </span>{product2.price}$
                            </div>
                            <div className='discount'>
                                <span >Discount :</span>{product2.discountPercentage}%
                            </div>
                        </div>
                    </div>
                
            </div>
        );
    }
}
export default Product;