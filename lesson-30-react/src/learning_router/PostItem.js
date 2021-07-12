import {Link} from "react-router-dom";
import axios from "axios";

import React, {Component} from 'react';

class PostItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        axios.get("http://jsonplaceholder.typicode.com/users/" + this.props.userID)
            .then(res => {
                this.setState({
                    user: res.data
                })
            })
    }

    render() {
        return (
            <div className="card mt-4">
                <div className="card-body">
                    <h6>{this.props.title} <Link to={"/posts/" + this.props.id}>more...</Link></h6>
                </div>
                <div className="card-footer">
                    {/*<p>{this.props.userID}</p>*/}
                    <Link to={"/users/" + this.props.userID}>{this.state.user.name}</Link>
                </div>
            </div>
        );
    }
}

export default PostItem;