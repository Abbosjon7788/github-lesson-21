import './main.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

function ContentPartMiddleCarousel() {
    return (
        <div className="card bg-transparent mt-4">
            <div className="card-title border-bottom d-flex justify-content-between p-4">
                <h3>Top Profiles</h3>
                <div>
                    <FontAwesomeIcon className="fa-lg color-lightgrey pointer" icon={faEllipsisV}/>
                </div>
            </div>

            <div className="card-body p-4">
                <div id="demo" className="carousel slide" data-ride="carousel">
                    {/*<ul className="carousel-indicators">*/}
                    {/*    <li data-target="#demo" data-slide-to="0" className="active"></li>*/}
                    {/*    <li data-target="#demo" data-slide-to="1"></li>*/}
                    {/*    <li data-target="#demo" data-slide-to="2"></li>*/}
                    {/*</ul>*/}

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-4">
                                    <div className="card bg-white">
                                        <div className="card-body text-center px-0 pb-0">
                                            <img src="./images/user-1.png" alt=""/>
                                            <h5 className="mb-0">John Doe</h5>
                                            <p className="color-grey size-14 mb-2">Graphic Designer</p>
                                            <div className="flex pb-3 border-bottom">
                                                <button type="button"
                                                        className="btn size-12 py-1 px-2 shadow-none text-white bg-green">Follow
                                                </button>
                                                <button type="button"
                                                        className="btn size-12 py-1 px-2 shadow-none mx-1 text-white btn-red">
                                                    <FontAwesomeIcon icon={faEnvelope}/>
                                                </button>
                                                <button type="button"
                                                        className="btn size-12 py-1 px-2 shadow-none btn-blue text-white">Hire
                                                </button>

                                            </div>
                                            <a href="#"
                                               className="text-center weight-600 text-dark text-decoration-none size-14 d-block my-3">View
                                                Profile</a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-4">
                                    <div className="card bg-white">
                                        <div className="card-body text-center px-0 pb-0">
                                            <img src="./images/user-2.png" alt=""/>
                                            <h5 className="mb-0">John Doe</h5>
                                            <p className="color-grey size-14 mb-2">Graphic Designer</p>
                                            <div className="flex pb-3 border-bottom">
                                                <button type="button"
                                                        className="btn size-12 py-1 px-2 shadow-none text-white bg-green">Follow
                                                </button>
                                                <button type="button"
                                                        className="btn size-12 py-1 px-2 shadow-none mx-1 text-white btn-red">
                                                    <FontAwesomeIcon icon={faEnvelope}/>
                                                </button>
                                                <button type="button"
                                                        className="btn size-12 py-1 px-2 shadow-none btn-blue text-white">Hire
                                                </button>

                                            </div>
                                            <a href="#"
                                               className="text-center weight-600 text-dark text-decoration-none size-14 d-block my-3">View
                                                Profile</a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-4">
                                    <div className="card bg-white">
                                        <div className="card-body text-center px-0 pb-0">
                                            <img src="./images/user-3.png" alt=""/>
                                            <h5 className="mb-0">John Doe</h5>
                                            <p className="color-grey size-14 mb-2">Graphic Designer</p>
                                            <div className="flex pb-3 border-bottom">
                                                <button type="button"
                                                        className="btn size-12 py-1 px-2 shadow-none text-white bg-green">Follow
                                                </button>
                                                <button type="button"
                                                        className="btn size-12 py-1 px-2 shadow-none mx-1 text-white btn-red">
                                                    <FontAwesomeIcon icon={faEnvelope}/>
                                                </button>
                                                <button type="button"
                                                        className="btn size-12 py-1 px-2 shadow-none btn-blue text-white">Hire
                                                </button>

                                            </div>
                                            <a href="#"
                                               className="text-center weight-600 text-dark text-decoration-none size-14 d-block my-3">View
                                                Profile</a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-4">
                                    <div className="card bg-white">
                                        <div className="card-body text-center px-0 pb-0">
                                            <img src="./images/user-4.png" alt=""/>
                                            <h5 className="mb-0">John Doe</h5>
                                            <p className="color-grey size-14 mb-2">Graphic Designer</p>
                                            <div className="flex pb-3 border-bottom">
                                                <button type="button"
                                                        className="btn size-12 py-1 px-2 shadow-none text-white bg-green">Follow
                                                </button>
                                                <button type="button"
                                                        className="btn size-12 py-1 px-2 shadow-none mx-1 text-white btn-red">
                                                    <FontAwesomeIcon icon={faEnvelope}/>
                                                </button>
                                                <button type="button"
                                                        className="btn size-12 py-1 px-2 shadow-none btn-blue text-white">Hire
                                                </button>

                                            </div>
                                            <a href="#"
                                               className="text-center weight-600 text-dark text-decoration-none size-14 d-block my-3">View
                                                Profile</a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

}

export default ContentPartMiddleCarousel;