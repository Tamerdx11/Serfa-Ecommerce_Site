import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = props => {
    
    return ( 
        <header className='header_navbar'>
            <div className='mylogo11' title='SerFa Store'>
                <span> SerFa </span>
                <i className="fa-solid fa-cart-flatbed"></i>
            </div>
            <div className='nav_items'>
                <ul className='main-items'>
                    <li className='item-in-main'>
                        <NavLink className="nav-link" to="/"><b> Home </b></NavLink>
                    </li>
                    <li className='item-in-main'><b> Categories </b>
                        <div className="sub_item">
                            <ul className='sub_list'> 
                                <NavLink className="nav-link" to={`/categories/${"smartphones"}`}>
                                    <li className='cat'>Smart Phones</li>
                                </NavLink>
                                <NavLink className="nav-link" to={`/categories/${"fragrances"}`}>
                                    <li className='cat'>fragrances</li>
                                </NavLink>
                                <NavLink className="nav-link" to={`/categories/${"laptops"}`}>
                                    <li className='cat'>Laptops</li>
                                </NavLink>
                                <NavLink className="nav-link" to={`/categories/${"home-decoration"}`}>
                                    <li className='cat'>Home Decoration</li>
                                </NavLink>
                                <NavLink className="nav-link" to={`/categories/${"skincare"}`}>
                                    <li className='cat'>Skincare</li>
                                </NavLink>
                                <NavLink className="nav-link" to={`/categories/${"groceries"}`}>
                                    <li className='cat'>Groceries</li>
                                </NavLink>
                            </ul>
                        </div>
                    </li>
                    <li className='item-in-main'>
                        <NavLink className="nav-link" to="/contact-us"><b> Contact Us </b></NavLink>
                    </li>
                </ul>
            </div>
            <div className='add_to_cart'>
                <NavLink className="nav-link" to="/cart">
                    <i title='Add to cart' className="fa-solid fa-cart-plus"></i>
                    <span className='num-in-cart'>{props.cartCount}</span>
                </NavLink>
            </div>
        </header>
    );
}
export default Navbar;