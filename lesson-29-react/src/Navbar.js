import './main.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {faBuilding} from '@fortawesome/free-solid-svg-icons'
import {faPuzzlePiece} from '@fortawesome/free-solid-svg-icons'
import {faUsers} from '@fortawesome/free-solid-svg-icons'
import {faBriefcase} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faBolt} from '@fortawesome/free-solid-svg-icons'
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    return (

        <div className="container">
            <ul className="nav align-items-center">
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <img src="./images/workwise.png" alt="" className="rasm-logo"/>
                    </a>
                </li>

                <li className="nav-item">
                    <div className="btn-group">
                        <input type="text" className="form-control shadow-none input-border-radius"
                               placeholder="Search..."/>
                        <button type="button" className="btn shadow-none btn-color"><FontAwesomeIcon
                            className="color-red fa-lg rotate" icon={faSearch}/></button>
                    </div>
                </li>

                <li className="nav-item ml-auto">
                    <a href="#" className="nav-link text-white pt-2">
                            <span className="text-center d-block">
                                <FontAwesomeIcon className="fa-lg" icon={faHome}/>
                            </span>

                        <p className="san-serif size-14 text-center mb-0">Home</p>
                    </a>
                </li>

                <li className="nav-item">
                    <a href="#" className="nav-link text-white pt-2">
                            <span className="text-center d-block">
                                <FontAwesomeIcon className="fa-lg" icon={faBuilding}/>
                            </span>

                        <p className="san-serif size-14 text-center mb-0">Companies</p>
                    </a>
                </li>

                <li className="nav-item">
                    <a href="#" className="nav-link text-white pt-2">
                            <span className="text-center d-block">
                                <FontAwesomeIcon className="fa-lg" icon={faPuzzlePiece}/>
                            </span>

                        <p className="san-serif size-14 text-center mb-0">Projects</p>
                    </a>
                </li>

                <li className="nav-item">
                    <a href="#" className="nav-link text-white pt-2">
                            <span className="text-center d-block">
                                <FontAwesomeIcon className="fa-lg" icon={faUsers}/>
                            </span>

                        <p className="san-serif size-14 text-center mb-0">Profiles</p>
                    </a>
                </li>

                <li className="nav-item">
                    <a href="#" className="nav-link text-white pt-2">
                            <span className="text-center d-block">
                                <FontAwesomeIcon className="fa-lg" icon={faBriefcase}/>
                            </span>

                        <p className="san-serif size-14 text-center mb-0">Jobs</p>
                    </a>
                </li>

                <li className="nav-item">
                    <a href="#" className="nav-link text-white pt-2">
                            <span className="text-center d-block">
                                <FontAwesomeIcon className="fa-lg" icon={faEnvelope}/>
                            </span>

                        <p className="san-serif size-14 text-center mb-0">Messages</p>
                    </a>
                </li>

                <li className="nav-item">
                    <a href="#" className="nav-link text-white pt-2">
                            <span className="text-center d-block">
                                <FontAwesomeIcon className="fa-lg" icon={faBolt}/>
                            </span>

                        <p className="san-serif size-14 text-center mb-0">Notifications</p>
                    </a>
                </li>

                <li className="nav-item">
                    <a href="#" className="nav-link user-border text-white">
                        <img src="./images/user-1.png" alt="" className="rasm-user"/>
                        <span className="mx-3 san-serif">John</span>
                        <FontAwesomeIcon icon={faCaretDown}/>
                    </a>
                </li>

            </ul>
        </div>


    );
}

export default Navbar;