import './main.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {faClock} from '@fortawesome/free-solid-svg-icons'
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons'
import {faThLarge} from '@fortawesome/free-solid-svg-icons'
import {faBookmark} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import {faComment} from '@fortawesome/free-solid-svg-icons'
import {faEye} from '@fortawesome/free-solid-svg-icons'
import {faReplyAll} from '@fortawesome/free-solid-svg-icons'

function ContentPartMiddle4() {
    return (
        <div className="shadow bg-white mt-4">
            <div className="p-4">
                <div className="d-flex align-items-center">
                    <img src="./images/user-1.png" alt=""/>
                    <div className="ml-3">
                        <h5 className="mb-0">John Doe</h5>
                        <span className="color-grey size-14"><FontAwesomeIcon className="mr-1"
                                                                              icon={faClock}/>3 min ago</span>
                    </div>
                    <FontAwesomeIcon className="ml-auto fa-lg color-lightgrey pointer" icon={faEllipsisV}/>
                </div>
                <div className="d-flex align-items-center color-grey mt-3">
              <span className="size-13 san-serif">
                  <FontAwesomeIcon className="mr-1 color-blue" icon={faThLarge}/>
                  Epic Coder
              </span>
                    <span className="size-13 san-serif ml-4">
                  <img src="./images/telegram-brands.svg" alt="" className="rasm-15 mr-1"/>
                  India
              </span>
                    <div className="ml-auto d-flex">
                        <button type="button" className="btn bg-green shadow-none py-1 mr-2">
                            <FontAwesomeIcon className="text-white" icon={faBookmark}/>
                        </button>
                        <button type="button" className="btn btn-red shadow-none py-1">
                            <FontAwesomeIcon className="text-white" icon={faEnvelope}/>
                        </button>
                    </div>


                </div>
                <h6 className="weight-600 mb-0 mt-3">Senior Wordpress Developer</h6>
                <div className="d-flex align-items-center mt-3">
                    <button type="button" className="btn btn-blue text-white san-serif shadow-none mr-4 py-0">Full Time
                    </button>
                    <span className="weight-600">$30 / hr</span>
                </div>
                <p className="mb-1 mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dignissimos
                    eligendi
                    ipsam natus nisi porro, quae quis rem totam voluptatibus...</p>
                <a href="#" className="color-red weight-600 text-decoration-none san-serif py-2 mt-2 size-14">view
                    more</a>
                <div className="d-flex mt-4 pb-4 border-bottom">
                    <div className="py-1 px-3 mr-3 bg-grey round-16 size-14 san-serif color-grey">
                        HTML
                    </div>
                    <div className="py-1 px-3 mr-3 bg-grey round-16 size-14 san-serif color-grey">
                        PHP
                    </div>
                    <div className="py-1 px-3 mr-3 bg-grey round-16 size-14 san-serif color-grey">
                        CSS
                    </div>
                    <div className="py-1 px-3 mr-3 bg-grey round-16 size-14 san-serif color-grey">
                        Javascript
                    </div>
                    <div className="py-1 px-3 mr-3 bg-grey round-16 size-14 san-serif color-grey">
                        Wordpress
                    </div>
                </div>
                <div className="d-flex align-items-center mt-3">
                    <div className="d-flex align-items-center color-grey size-14">
                        <FontAwesomeIcon className="mr-1" icon={faHeart}/>
                        <span className="mr-1">Like</span>
                        <div className="position-relative ver-align-baseline">
                            <img src="./images/small-user-1.png"
                                 className="rounded-circle rasm-30 top-13 border-white position-absolute" alt=""/>
                            <img src="./images/small-user-2.png"
                                 className="left-10 rasm-30 top-13 rounded-circle border-white position-absolute"
                                 alt=""/>
                            <img src="./images/small-user-3.png"
                                 className="left-20 rasm-30 top-13 rounded-circle border-white position-absolute"
                                 alt=""/>
                            <img src="./images/small-user-1.png"
                                 className="left-30 rasm-30 top-13 rounded-circle border-white position-absolute"
                                 alt=""/>
                            <img src="./images/small-user-2.png"
                                 className="left-40 rasm-30 top-13 rounded-circle border-white position-absolute"
                                 alt=""/>
                        </div>
                        <FontAwesomeIcon className="ml-80" icon={faComment}/>
                        <span className="ml-1">Comment 15</span>
                    </div>
                    <div className="ml-auto d-flex align-items-center color-grey size-14">
                        <FontAwesomeIcon icon={faEye}/>
                        <span className="ml-1">Views 50</span>
                    </div>
                </div>

            </div>

            <div className="px-4">
                <div className="pt-5 border-top">
                    <div className="text-center mb-3">
                        <div className="border rounded-circle border-lightgrey d-inline-flex pointer">
                            <FontAwesomeIcon className="color-lightgrey m-3" icon={faPlus}/>
                        </div>
                    </div>
                    <div className="px-2">
                        <h6 className="mb-2">John Doe</h6>
                        <p className="color-grey size-14 mb-2"><FontAwesomeIcon className="mr-1" icon={faClock}/>3 min
                            ago</p>
                        <p className="color-grey size-14 mb-2">Lorem ipsum dolor sit amet.</p>
                        <p className="color-red size-14 pointer weight-600"><FontAwesomeIcon icon={faReplyAll}/> Reply
                        </p>

                        <div className="ml-5 mt-4">
                            <h6 className="mb-2">John Doe</h6>
                            <p className="color-grey size-14 mb-2"><FontAwesomeIcon className="mr-1" icon={faClock}/>3
                                min
                                ago</p>
                            <p className="mb-2 size-14 color-grey">Hi John</p>
                            <p className="color-grey pointer size-14 weight-600"><FontAwesomeIcon
                                icon={faReplyAll}/> Reply</p>

                        </div>
                        <h6 className="mb-2">John Doe</h6>
                        <p className="color-grey size-14"><FontAwesomeIcon className="mr-1" icon={faClock}/>3 min ago
                        </p>
                        <p className="color-grey size-14">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Accusantium atque dolor ea ex fugit
                            laboriosam nesciunt nulla omnis pariatur quod?</p>
                        <p className="color-grey pointer size-14 weight-600"><FontAwesomeIcon
                            icon={faReplyAll}/> Reply</p>

                        <div className="d-flex align-items-center pb-4">
                            <img src="./images/user-1.png" alt=""/>
                            <input type="text" className="form-control weight-600 shadow-none bg-grey mx-2" placeholder="Post a comment"/>
                            <button type="button" className="btn btn-red weight-600 shadow-none text-white py-2">Send</button>
                        </div>

                    </div>


                </div>
            </div>


        </div>


    );

}

export default ContentPartMiddle4;