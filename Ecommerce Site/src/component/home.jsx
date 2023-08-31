import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import Product from './product';

class Home extends Component {
    state = { 
        img1:"https://1.kerulet.ittlakunk.hu/files/ittlakunk/upload/company/25947/slider11.jpg",
        img2:"https://pricespakistan.pk/wp-content/uploads/2022/04/Upcoming-Mobiles-in-Pakistan-2022-1.jpg",
        img3:"http://realidad20.es/media/wysiwyg/root_slider/slider_santacole_1.jpg",
        img4:"https://donghotantan.vn/images/products/manufactories//large/shop-dong-ho-longines-chinh-hang-tphcm-banner_1633764152.jpg.webp",
        img5:"https://www.shopoholicfashion.co.uk/wp-content/uploads/2018/11/222.png",
    } 
    
    render() {
        return (
            <div className='home_screen'>
            <Carousel className='carousel'>
            <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={this.state.img1} alt="First slide"/>
                <Carousel.Caption>
                    <h3> Laptops </h3>
                    <p>Get discount for any laptop and some gifts selected by you with up to 8.5% off</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={this.state.img2} alt="Second slide"/>
                <Carousel.Caption>
                    <h3>SmartPhones</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={this.state.img3} alt="Third slide"/>
                <Carousel.Caption>
                    <h3>Home Decoration</h3>
                    <p>All the decorations you need are here with up to 20% off</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={this.state.img4} alt="Third slide"/>
                <Carousel.Caption>
                    <h3>Watches</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img className="d-block w-100" src={this.state.img5} alt="Third slide"/>
            </Carousel.Item>
        </Carousel>
        {this.props.product.map(products=>
                <Product key={products.id}
                product2={products} />)}
        </div>
        );
    }
}
export default Home;