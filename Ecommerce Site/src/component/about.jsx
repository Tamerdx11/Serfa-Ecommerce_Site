import React from 'react';
import { useParams } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

const About = props => {
    const {id}= useParams();
    const product = props.product.filter(c => c.id == id )[0];
    var productId;
    var productName;
    var productPrice;
    var productDescription;
    var productDiscount;
    var productRating;
    var productBrand;
    var productCategory;
    var productImages;
    if(!product){
        productId = "unexist!";
        productName = "unexist!";
        productDescription = "unexist!";
        productDiscount = "unexist!";
        productRating = "unexist!";
        productBrand = "unexist!";
        productCategory = "unexist!";
        productImages = "unexist!";
    }
    else{
        productId = id;
        productName = product.title;
        productPrice = product.price;
        productDescription = product.description;
        productDiscount = product.discountPercentage;
        productRating = product.rating;
        productBrand = product.brand;
        productCategory = product.category;
        productImages = product.images;
    }
    
    var add="add to ";
    var remove="remove from ";

    return ( 
    <div className='about_container about_screen'>
        <div className='about_slider'>
        <Carousel className='carousel2'>
            {productImages.map((image)=>
            <Carousel.Item key={image}>
                <img className="d-block w-100 img_slider" src={image} alt="slide"/>
            </Carousel.Item>
            )}
            
        </Carousel>
        
        <button className='add' onClick={()=>props.addToCart(productId)}>
            <b>{props.cartId.includes(productId)? remove : add }</b>
            <i className="fa-solid fa-cart-plus"></i>
        </button>
        </div>
        <div className="details_container">
            <div className='name'><b>{productName}</b></div>
            <div className='description'>{productDescription}</div>
            <div className='brand'>Brand: {productBrand}</div>
            <div className='category'>Category: {productCategory}</div>
            <div className='rating'><b>Rating: {productRating}</b><i className="fa-solid fa-star"></i></div>
            <div className='about_price'>Price {productPrice}$</div>
            <div className='about_discount'>Discount {productDiscount}%</div>

        </div>
    </div> 
    );
}
export default About;