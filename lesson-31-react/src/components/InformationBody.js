import React, {Component} from 'react';
import InformationComplaints from "./InformationComplaints";
import InformationMedia from "./InformationMedia";
import InformationDescription from "./InformationDescription";

class InformationBody extends Component {
    render() {
        return (
            <div className="container">
                <div className="row mt-30">
                    <div className="col-8">
                        <InformationDescription/>
                    </div>
                    <div className="col-4">
                        <InformationMedia/>
                        <InformationComplaints/>
                    </div>
                </div>

            </div>
        );
    }
}

export default InformationBody;