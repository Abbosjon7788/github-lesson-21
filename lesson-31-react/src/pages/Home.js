import React, {Component} from 'react';
import '../main.scss';
import {FaPhoneAlt, FiSearch} from "react-icons/all";
import Slider from "react-slick";
import FooterPart from "../components/FooterPart";
import TopTitle from "../components/TopTitle";
import NavbarPart from "../components/NavbarPart";
import HomeCarousel from "../components/HomeCarousel";
import News from "../components/News";
import NewsCompany from "../components/NewsCompany";
import Complaint from "../components/Complaint";
import Services from "../components/Services";
import MediaPart from "../components/MediaPart";

class Home extends Component {
    render() {


        return (
            <div className="body-bg-color">

                <TopTitle/>
                <NavbarPart/>
                <HomeCarousel/>
                <News/>
                <NewsCompany/>
                <MediaPart/>
                <Complaint/>
                <Services/>


                <FooterPart/>
            </div>
        );
    }
}

export default Home;