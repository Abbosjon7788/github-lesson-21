import React, {useState, useEffect} from 'react';
import Flickr_Links from "./Flickr_Links";
import './style.css';
import axios from "axios";
import {FadeLoader} from "react-spinners";

const Birds = () => {

    const [bird, setBird] = useState([]);
    const [loading, setLoading] = useState(true);

    const apiKey = "e04a0475a23f3c074f24cfaf32a45166";
    const location = `
      display: block;
      margin: 100px auto; 
      
    `;

    useEffect(() => {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=bird&per_page=24&format=json&nojsoncallback=1`)
            .then((res) => {
                console.log(res);
                setBird(res.data.photos.photo);
            })
            .finally(() => {
                setLoading(false);
            })

    },[])


    return (
        <div>
            <Flickr_Links/>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="my-5 text-center link-style">Bird Pictures</h2>
                    </div>
                    <FadeLoader color="red" css={location} loading={loading} size={100}/>

                    {
                        bird.map((item) => (
                            <div className="col-4 py-30">
                                <img src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`} className="w-100" alt=""/>

                            </div>
                        ))
                    }


                </div>
            </div>
        </div>
    );
};

export default Birds;