import React, {Component} from 'react';
import TopTitle from "../components/TopTitle";
import NavbarPart from "../components/NavbarPart";
import InformationBody from "../components/InformationBody";
import News from "../components/News";
import FooterPart from "../components/FooterPart";

class Information extends Component {
    render() {
        return (
            <div className="body-bg-color">
                <TopTitle/>
                <NavbarPart/>
                <InformationBody/>
                <News/>
                <FooterPart/>
            </div>
        );
    }
}

export default Information;