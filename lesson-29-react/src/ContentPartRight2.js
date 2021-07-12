import './main.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons'
import {faPlus} from '@fortawesome/free-solid-svg-icons'

function ContentPartRight2() {

    return (
      <div className="card mt-4">
          <div className="card-title p-4 border-bottom">
              <h5 className="mb-0">Suggestions <FontAwesomeIcon className="color-lightgrey float-right pointer" icon={faEllipsisV}/></h5>

          </div>
          <div className="card-body pt-0">
              <div className="d-flex align-items-center mt-4">
                  <img src="./images/user-2.png" alt=""/>
                  <div className="name-profession size-14 ml-3">
                      <h6 className="mb-0">Jessica William</h6>
                      <p className="color-grey mb-0">Graphic Designer</p>
                  </div>

                  <div className="rounded border border-grey py-1 px-2 ml-auto pointer">
                      <FontAwesomeIcon className="color-grey" icon={faPlus}/>
                  </div>
              </div>
              <div className="d-flex align-items-center mt-4">
                  <img src="./images/user-3.png" alt=""/>
                  <div className="name-profession size-14 ml-3">
                      <h6 className="mb-0">John Doe</h6>
                      <p className="color-grey mb-0">PHP Developer</p>
                  </div>

                  <div className="rounded border border-grey py-1 px-2 ml-auto pointer">
                      <FontAwesomeIcon className="color-grey" icon={faPlus}/>
                  </div>
              </div>
              <div className="d-flex align-items-center mt-4">
                  <img src="./images/user-4.png" alt=""/>
                  <div className="name-profession size-14 ml-3">
                      <h6 className="mb-0">Poonam</h6>
                      <p className="color-grey mb-0">Wordpress Developer</p>
                  </div>

                  <div className="rounded border border-grey py-1 px-2 ml-auto pointer">
                      <FontAwesomeIcon className="color-grey" icon={faPlus}/>
                  </div>
              </div>
              <div className="d-flex align-items-center mt-4">
                  <img src="./images/user-4.png" alt=""/>
                  <div className="name-profession size-14 ml-3">
                      <h6 className="mb-0">Bill Gates</h6>
                      <p className="color-grey mb-0">C & C++ Developer</p>
                  </div>

                  <div className="rounded border border-grey py-1 px-2 ml-auto pointer">
                      <FontAwesomeIcon className="color-grey" icon={faPlus}/>
                  </div>
              </div>
              <div className="d-flex align-items-center mt-4">
                  <img src="./images/user-5.png" alt=""/>
                  <div className="name-profession size-14 ml-3">
                      <h6 className="mb-0">Jessica William</h6>
                      <p className="color-grey mb-0">Graphic Designer</p>
                  </div>

                  <div className="rounded border border-grey py-1 px-2 ml-auto pointer">
                      <FontAwesomeIcon className="color-grey" icon={faPlus}/>
                  </div>
              </div>
              <div className="d-flex align-items-center mt-4">
                  <img src="./images/user-1.png" alt=""/>
                  <div className="name-profession size-14 ml-3">
                      <h6 className="mb-0">Jessica William</h6>
                      <p className="color-grey mb-0">Graphic Designer</p>
                  </div>

                  <div className="rounded border border-grey py-1 px-2 ml-auto pointer">
                      <FontAwesomeIcon className="color-grey" icon={faPlus}/>
                  </div>
              </div>

              <a href="#" className="color-red text-center weight-600 text-decoration-none d-block san-serif py-2 mt-3 size-14">View
                  More</a>



          </div>
      </div>
    );

}

export default ContentPartRight2;