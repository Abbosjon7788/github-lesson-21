import React, {useState, useEffect} from 'react';
import {GoSearch} from "react-icons/all";
import {Link} from "react-router-dom";
import './style.css';
import DrawSearch from "./DrawSearch";

const FlickrLinks = () => {

    const [inputValue, setInputValue] = useState();
    console.log(inputValue);


    return (
        <div className="container">
            <div className="row">
                <div className="col-4 offset-4 mt-4">
                    <h1 className="text-center snapshot-style mb-4">SnapShot</h1>
                    <div className="input-group mt-4">
                        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                               className="form-control shadow-none bg-grey border-right-0 border-3-grey"
                               placeholder="Search here..."/>
                        <div className="input-group-append">
                            <button type="button"
                                    className="btn bg-black text-white shadow-none px-3"><Link
                                to={"/flickr/" + inputValue} className="text-white"><GoSearch/></Link>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-8 offset-2 mt-5">
                    <ul className="nav nav-justified">
                        <li className="nav-item"><Link className="link-black px-3 text-decoration-none"
                                                       to="/flickr/mountain">Mountains</Link></li>
                        <li className="nav-item"><Link className="link-black px-3 text-decoration-none"
                                                       to="/flickr/beaches">Beaches</Link></li>
                        <li className="nav-item"><Link className="link-black px-3 text-decoration-none"
                                                       to="/flickr/birds">Birds</Link></li>
                        <li className="nav-item"><Link className="link-black px-3 text-decoration-none"
                                                       to="/flickr/food">Food</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FlickrLinks;