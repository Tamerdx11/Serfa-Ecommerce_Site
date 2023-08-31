import React from 'react';
const Footer = () => {
    return (<h1>
        <footer>
            <div className='footer_container'>
                <div className='footer_logo'> SerFa <span>E-Commerce</span> </div>
                <div className='footer_details'>
                    <div>
                        <div className='footer_text'>Security</div>
                        <div className='footer_text'>Privacy Policy</div>
                        <div className='footer_text'>Help</div>
                    </div>
                    <div className='follow_us'><b> Follow us </b></div>
                    <div>
                        <a href="" title='facebook'><i className="fa-brands fa-square-facebook"></i></a>
                        <a href="" title='twitter'><i className="fa-brands fa-square-twitter"></i></a>
                        <a href="" title='github'><i className="fa-brands fa-square-github"></i></a>
                        <a href="" title='linkedin'><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                    
                    
                </div>
            </div>
        </footer>
    </h1>);
}
export default Footer;