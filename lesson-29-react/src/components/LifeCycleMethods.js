import React, {Component} from 'react';
import axios from 'axios';

class LifeCycleMethods extends Component {

    constructor(props) {
        super(props);
        console.log("This is constructor method");

        this.state = {
            users: [],
            photos: [],
        }
    }

    nizom() {
        console.log("This is nizom function")
    }

    componentDidMount() {
        console.log("This is componentDidMount method");

        axios.get("http://jsonplaceholder.typicode.com/users")
            .then((response) => {
                this.setState({users: response.data});
            })
            .catch((errors) => {
                console.log(errors);
            })
            .finally(() => {

            })

        axios.get("http://jsonplaceholder.typicode.com/photos")
            .then((response) => {
                console.log(response);
                this.setState({photos: response.data});
            })
    }

    componentWillUnmount() {
        console.log("This is componentWillUnMount method");
    }

    // componentWillMount() {
    // }

    render() {
        console.log("This is render function");

        return (
            <div>
                <div className="container">
                    <div className="row">
                        {this.state.users.map((item) => (
                            <div className="col-4 mt-3">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>{item.name}</h5>
                                    </div>
                                    <div className="card-body">
                                        <p>Address: <b>{item.address.city}</b></p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="row">
                        {this.state.photos.map((item) => (
                            <div className="col-4 mt-3">
                                <img src={item.url} className='w-100' alt=""/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default LifeCycleMethods;