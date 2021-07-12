import './main.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEllipsisV, faPlus} from '@fortawesome/free-solid-svg-icons'

function ContentPartLeft3() {
    return (
        <div className="card mt-4">
            <div className="card-title p-4 mb-0 border-bottom">
                <h5 className="mb-0">Most Viewed This Week <FontAwesomeIcon className="color-lightgrey float-right pointer"
                                                               icon={faEllipsisV}/></h5>
            </div>
            <div className="card-body size-14">
                <div className="d-flex weight-600 justify-content-between">
                    <p className="mb-2">Senior Product Designer</p>
                    <p className="mb-2">$25/hr</p>
                </div>
                <p className="w-75 color-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                <div className="d-flex weight-600 justify-content-between">
                    <p className="mb-2">Senior Product Designer</p>
                    <p className="mb-2">$25/hr</p>
                </div>
                <p className="w-75 color-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

                <div className="d-flex weight-600 justify-content-between">
                    <p className="mb-2">Senior Product Designer</p>
                    <p className="mb-2">$25/hr</p>
                </div>
                <p className="w-75 color-grey">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>


            </div>
        </div>
    );

}

export default ContentPartLeft3;