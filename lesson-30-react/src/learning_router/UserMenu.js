import React, {Component} from 'react';
import axios from "axios";

class UserMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: [],
            // address: {}
        }
    }

    componentDidMount() {
        console.log(this.props);
        axios.get("http://jsonplaceholder.typicode.com/users/" + this.props.match.params.userID)
            .then((res) => {
                console.log(res);
                this.setState({user: res.data});
                console.log(this.state.user.address.city);
            })
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4 mt-4 offset-4">
                        <div className="card">
                            <div className="card-header">
                                <h3>{this.state.user.name}</h3>
                            </div>
                            <div className="card-body">
                                <p>ID number: <b>{this.state.user.id}</b></p>
                                <p>Username: <b>{this.state.user.username}</b></p>
                                <p>Email address: <b>{this.state.user.email}</b></p>
                                <p>Website: <b>{this.state.user.website}</b></p>
                                <p>Address: <b>{this.state.user.address ? this.state.user.address.city : ""}</b></p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default UserMenu;