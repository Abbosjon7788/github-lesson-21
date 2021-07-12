import React, {Component} from 'react';

import {toast} from "react-toastify";

import Slider from 'react-slick';

import { LightgalleryProvider, LightgalleryItem } from 'react-lightgallery';

import ModalVideo from 'react-modal-video'

class Plugins extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        }
    }

    render() {

        const showToast = () => {
            toast.success("Muvafaqqiyatli saqlandi!");
            toast.error("Login yoki parol xato!");
        }

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        }

        const changeModal = () => {
            this.setState({modalOpen: !this.state.modalOpen})
        }

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <button type='button' onClick={showToast} className='btn btn-success'>Click me!</button>
                        </div>
                        <div className="col-4">
                            <Slider {...settings}>
                                <div>
                                    <h4>Lorem ipsum dolor sit.</h4>
                                </div>
                                <div>
                                    <h4>Lorem ipsum dolor sit.</h4>
                                </div>
                                <div>
                                    <h4>Lorem ipsum dolor sit.</h4>
                                </div>
                                <div>
                                    <h4>Lorem ipsum dolor sit.</h4>
                                </div>
                                <div>
                                    <h4>Lorem ipsum dolor sit.</h4>
                                </div>
                            </Slider>
                        </div>
                        <div className="col-4">
                            <a href="img101.png">Download</a>
                            <LightgalleryProvider>
                                <LightgalleryItem src="img101.png">
                                    <img src="img101.png" className="w-100" alt=""/>
                                </LightgalleryItem>
                            </LightgalleryProvider>
                        </div>
                        <div className="col-4">
                            <button type='button' className='btn btn-success' onClick={changeModal}>Click me!</button>
                            <ModalVideo isOpen={this.state.modalOpen} channel="youtube" videoId="5G8HkJpZUKg" onClose={changeModal}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Plugins;