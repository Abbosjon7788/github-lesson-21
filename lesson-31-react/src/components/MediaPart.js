import React, {useState} from 'react';
import {Nav, NavItem, NavLink, TabContent, TabPane} from "reactstrap";
import classnames from "classnames";

const MediaPart = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
            <section id="media">
                <div className="container">`
                    <div className="row d-block">
                        <h2 className="media-title">Media</h2>

                        <Nav tabs className="bg-white d-inline-flex border-bottom-0">
                            <NavItem>
                                <NavLink
                                    className={classnames({active: activeTab === '1'})}
                                    onClick={() => {
                                        toggle('1');
                                    }}
                                >
                                    Barchasi
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink
                                    className={classnames({active: activeTab === '2'})}
                                    onClick={() => {
                                        toggle('2');
                                    }}
                                >
                                    Foto galeriya
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink
                                    className={classnames({active: activeTab === '3'})}
                                    onClick={() => {
                                        toggle('3');
                                    }}
                                >
                                    Video galeriya
                                </NavLink>
                            </NavItem>

                        </Nav>
                    </div>


                    <div className="row">

                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <div className="row">
                                    <div className="col-4">
                                        <div className="card">
                                            <img className="card-img-top" src="../icons/company-card-2-header-news.png"  alt=""/>
                                            <div className="card-body">
                                                <h3 className="card-title-text">"DO`STLIKDONMAXSULOTLARI" AJ
                                                    boshqaruv raisi...</h3>
                                                <div className="card-icons">
                                                    <div className="calendar d-flex align-items-center mr-auto">
                                                        <span className="cursor-pointer icons icon-calendar mr-2"/>
                                                        <span className="color-grey">16:48 / 12.11.20</span>
                                                    </div>
                                                    <div className="view d-flex align-items-center">
                                                        <span className="cursor-pointer icons icon-views mr-2 m-top-3"/>
                                                        <span className="color-grey">321</span>
                                                    </div>
                                                    <div className="message d-flex align-items-center ml-auto">
                                                        <span className="cursor-pointer icons icon-message mr-2"/>
                                                        <span className="color-grey">100</span>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-4">
                                        <div className="card">
                                            <img className="card-img-top photo position-relative" src="../icons/company-card-2-header-news.png"  alt=""/>
                                            <div className="card-body">
                                                <span className="photo-hover icon-photo position-absolute"/>

                                                <h3 className="card-title-text">"DO`STLIKDONMAXSULOTLARI" AJ
                                                    boshqaruv raisi...</h3>
                                                <div className="card-icons">
                                                    <div className="calendar d-flex align-items-center mr-auto">
                                                        <span className="cursor-pointer icons icon-calendar mr-2"/>
                                                        <span className="color-grey">16:48 / 12.11.20</span>
                                                    </div>
                                                    <div className="view d-flex align-items-center">
                                                        <span className="cursor-pointer icons icon-views mr-2 m-top-3"/>
                                                        <span className="color-grey">321</span>
                                                    </div>
                                                    <div className="message d-flex align-items-center ml-auto">
                                                        <span className="cursor-pointer icons icon-message mr-2"/>
                                                        <span className="color-grey">100</span>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-4">
                                        <div className="card">
                                            <img className="card-img-top photo position-relative" src="../icons/youtube-img-card-3.png"  alt=""/>
                                            <div className="card-body">
                                                <span className="photo-hover icon-youtube position-absolute"/>
                                                <h3 className="card-title-text">"DO`STLIKDONMAXSULOTLARI" AJ
                                                    boshqaruv raisi...</h3>
                                                <div className="card-icons">
                                                    <div className="calendar d-flex align-items-center mr-auto">
                                                        <span className="cursor-pointer icons icon-calendar mr-2"/>
                                                        <span className="color-grey">16:48 / 12.11.20</span>
                                                    </div>
                                                    <div className="view d-flex align-items-center">
                                                        <span className="cursor-pointer icons icon-views mr-2 m-top-3"/>
                                                        <span className="color-grey">321</span>
                                                    </div>
                                                    <div className="message d-flex align-items-center ml-auto">
                                                        <span className="cursor-pointer icons icon-message mr-2"/>
                                                        <span className="color-grey">100</span>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                </div>

                            </TabPane>

                            <TabPane tabId="2">
                                <div className="row">
                                    <div className="col-12">
                                        Tab 2 contents
                                    </div>
                                </div>

                            </TabPane>

                            <TabPane tabId="3">
                                <div className="row">
                                    <div className="col-12">
                                        Tab 3 contents
                                    </div>
                                </div>

                            </TabPane>

                        </TabContent>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default MediaPart;