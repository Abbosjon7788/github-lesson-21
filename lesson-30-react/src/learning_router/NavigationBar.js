import React from 'react';
import {Link} from "react-router-dom";

const NavigationBar = () => {
    return (
        <div className="container">
            <div className="row mt-3">
                <div className="navbar navbar-expand-sm navbar-light">
                    <Link to="/" className="navbar-brand">
                        <img src="./logo192.png" width="60" alt=""/>
                    </Link>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/trello">Trello</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/extra-learning">Extra learning</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/posts">Posts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/plugins">Plugins</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/hooks">Hooks</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/flickr">Flickr</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/counterRedux">Counter_Redux</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NavigationBar;