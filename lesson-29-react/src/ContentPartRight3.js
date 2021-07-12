import './main.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCopyright} from '@fortawesome/free-solid-svg-icons'



function ContentPartRight3() {
    return (
        <div className="card mt-4">
            <div className="card-body">
                <p className="mb-2">
                    <a href="#" className="color-grey size-13 pr-2 mr-2 border-right text-decoration-none">Help Center</a>
                    <a href="#" className="color-grey size-13 pr-2 mr-2 border-right text-decoration-none">About</a>
                    <a href="#" className="color-grey size-13 mr-2 text-decoration-none">Privacy Policy</a>
                </p>

                <p className="mb-2">
                    <a href="#" className="color-grey size-13 pr-2 mr-2 border-right text-decoration-none">Community Guidelines</a>
                    <a href="#" className="color-grey size-13 mr-2 text-decoration-none">Cookies Policy</a>

                </p>

                <p className="mb-2">
                    <a href="#" className="color-grey size-13 pr-2 mr-2 border-right text-decoration-none">Career</a>
                    <a href="#" className="color-grey size-13 pr-2 mr-2 border-right text-decoration-none">Language</a>
                    <a href="#" className="color-grey size-13 mr-2 text-decoration-none">Copyright Policy</a>
                </p>
                <div className="size-14 d-flex align-items-center">
                    <img src="./images/workwise-logo.png" alt="" className="rasm-30"/>
                    <span className="color-red font-weight-bold ml-2">Workwise</span>
                    <span className="color-grey d-block ml-auto"><FontAwesomeIcon className="mr-1" icon={faCopyright}/>Copyright 2019</span>
                </div>
            </div>
        </div>
    );

}

export default ContentPartRight3;