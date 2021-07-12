import React from 'react';
import {Col} from "reactstrap";

const Card = () => {
    return (
     <Col md={4}>
            <div className="card">
                <div className="card-header">
                    <h3>Lorem ipsum dolor.</h3>
                </div>
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aperiam dolor ea explicabo, incidunt
                        ipsam labore nihil, odit officia perspiciatis possimus quas qui repellendus, ut veritatis!
                        Aperiam
                        cumque soluta totam!</p>
                </div>
                <div className="card-footer">
                    <button type="button" className="btn btn-success">Click me!</button>
                </div>
            </div>
     </Col>
    )
}

export default Card;