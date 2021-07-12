import React from 'react';

import {Link} from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className='navbar navbar-expand-sm navbar-light'>
            <Link to="/" className='navbar-brand'>
                <img src="logo192.png" alt="" width='60'/>
            </Link>

            <div className="collapse navbar-collapse">
                <ul className='navbar-nav'>
                    <li className='nav-item'><Link className='nav-link' to="/products">Products</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="/trello">Trello</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="/counter">Counter</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="/posts">Posts</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="/plugins">Plugins</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="/hooks">Hooks</Link></li>
                    <li className='nav-item'><Link className='nav-link' to="/flickr">Flickr</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default NavigationBar;