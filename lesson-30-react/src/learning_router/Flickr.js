import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {BsSearch, GoSearch} from "react-icons/all";
import './style.css';
import axios from "axios";
import {ClipLoader, ClockLoader} from "react-spinners";
import Flickr_Links from "./Flickr_Links";

const Flickr = () => {

    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    const apiKey = "e04a0475a23f3c074f24cfaf32a45166";
    const location = `
      display: block;
      margin: 100px auto; 
      
    `;

    useEffect(() => {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=${apiKey}&per_page=24&format=json&nojsoncallback=1`)
            .then((res) => {
                console.log(res);
                setPhotos(res.data.photos.photo);
            })
            .finally(() => {
                setLoading(false);
            })

    }, [])


    return (
        <div>
            <Flickr_Links/>

            <div className="container">

                <div className="row mt-4">

                    <ClockLoader color="red" css={location} loading={loading} size={100}/>

                    {
                        photos.map((item) => (
                            <div className="col-4 py-30">
                                <img
                                    src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
                                    className="w-100" alt=""/>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default Flickr;