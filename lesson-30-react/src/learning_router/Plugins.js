import React, {Component} from 'react';
import {toast} from "react-toastify";
import Slider from 'react-slick';
import {LightgalleryProvider, LightgalleryItem} from 'react-lightgallery';
import ModalVideo from 'react-modal-video';


class Plugins extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalOpen: false
        }
    }


    render() {
        const showToast = () => {
            // toast(<img src="https://picsum.photos/200" alt=""/>)
            toast.success("Hello world!");

        }

        const changeModal = () => {
            this.setState({modalOpen: !this.state.modalOpen});
        }

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true
        }


        return (
            <div className="container">
                <div className="row">
                    <div className="col-4 mt-3">
                        <button type="button" onClick={showToast} className="btn btn-success">Click me!</button>
                    </div>
                </div>
                <div className="row bg-primary mt-4 d-flex justify-content-center">
                    <div className="col-9 mt-3 mb-5">
                        <Slider {...settings}>
                            <div className="border p-3 rounded bg-light">
                                <h3 className="text-center">Slick carousel</h3>
                            </div>
                            <div className="border p-3 rounded bg-danger">
                                <h3 className="text-center">Hello everyone!</h3>
                            </div>
                            <div className="border p-3 rounded bg-secondary">
                                <h3 className="text-center">Exam started</h3>
                            </div>
                            <div className="border p-3 rounded bg-white">
                                <h3 className="text-center">React learning</h3>
                            </div>
                            <div className="border p-3 rounded bg-dark">
                                <h3 className="text-center text-white">Bye bye!</h3>
                            </div>

                        </Slider>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 offset-4 mt-4">
                        <LightgalleryProvider>
                            <LightgalleryItem src="logo192.png">
                                <img src="logo192.png" className="w-100 border p-3 rounded" alt=""/>
                            </LightgalleryItem>
                            <LightgalleryItem src="https://picsum.photos/500/300">
                                <img src="https://picsum.photos/500/300" className="w-100 border p-3 rounded" alt=""/>
                            </LightgalleryItem>
                        </LightgalleryProvider>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4 mt-4">
                        <button type="button" className="btn btn-success" onClick={changeModal}>Click me!!!</button>
                        <ModalVideo isOpen={this.state.modalOpen} channel="youtube" videoId="Sh7tG2k63RI" onClose={changeModal}/>

                    </div>
                </div>

            </div>
        );
    }
}

export default Plugins;