 import React, {Component} from 'react';
import axios from 'axios';
import {AvForm, AvField} from 'availity-reactstrap-validation';
import {Modal, ModalBody, ModalFooter} from "reactstrap";

class ExtraLearning extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // users: [],
            // photos: []
            employees: [],
            modalOpen: false,
            selectedIndex: -1
        }
    }


    componentDidMount() {
        console.log("This is componentDidMount");

        axios.get("https://app-employ.herokuapp.com/api/employee")
            .then((res) => {
                this.setState({employees: res.data.object})
            })

        // axios.get("http://jsonplaceholder.typicode.com/users")
        //     .then((res) => {
        //         console.log(res);
        //
        //         this.setState({users: res.data});
        //
        //         console.log(this.state.users);
        //
        //     })
        //
        //     .catch((errors) => {
        //         console.log(errors);
        //         // this function shows errors
        //     })
        //
        //
        //     .finally(() => {
        //         //this function is used finally in page.
        //     })
        //
        // axios.get("http://jsonplaceholder.typicode.com/photos")
        //     .then((res) => {
        //         console.log(res);
        //         this.setState({photos: res.data});
        //     })
    }


    render() {
        const changeModal = () => {
            this.setState({modalOpen: !this.state.modalOpen});
        }


        const saveEmployee = (events, values) => {
            axios.post("https://app-employ.herokuapp.com/api/employee", values)
                .then((res) => {
                    // console.log(res);

                    if (res.data.success) {
                        axios.get("https://app-employ.herokuapp.com/api/employee")
                            .then((res2) => {
                                console.log(res2);

                                this.setState({employees: res2.data.object});
                            })
                    }
                })

            this.form && this.form.reset();

        }

        const deleteEmployee = (id) => {
            axios.delete("https://app-employ.herokuapp.com/api/employee/" + id)
                .then((res) => {
                    console.log(res);

                    axios.get("https://app-employ.herokuapp.com/api/employee")
                        .then((res2) => {
                            this.setState({employees: res2.data.object});
                        })
                })
        }

        const editEmployee = (event, values) => {
            console.log(this.state.employees[this.state.selectedIndex].id);

            axios.put("https://app-employ.herokuapp.com/api/employee/" + this.state.employees[this.state.selectedIndex].id, values)
                .then((res) => {
                    axios.get("https://app-employ.herokuapp.com/api/employee")
                        .then((res2) => {
                            this.setState({employees: res2.data.object});
                            changeModal();
                        })
                })

        }

        const setSelectedIndex = (index) => {
            this.state.selectedIndex = index;
            this.setState({selectedIndex: this.state.selectedIndex});
        }


        return (
            <div className="container">
                {/*<div className="row mb-4">*/}
                {/*    {*/}
                {/*        this.state.users.map((item) => (*/}
                {/*            <div className="col-4 mt-4">*/}
                {/*                <div className="card">*/}
                {/*                    <div className="card-header">*/}
                {/*                        <h5>{item.name}</h5>*/}
                {/*                    </div>*/}
                {/*                    <div className="card-body">*/}
                {/*                        <p>Address: <b>{item.address.street}</b></p>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        ))*/}
                {/*    }*/}
                {/*</div>*/}

                {/*<div className="row">*/}
                {/*    {*/}
                {/*        this.state.photos.map((item)=>(*/}
                {/*            <div className="col-4 mb-4">*/}
                {/*                <img src={item.url} className="w-100" alt=""/>*/}
                {/*            </div>*/}
                {/*        ))*/}
                {/*    }*/}
                {/*</div>*/}

                <div className="row">
                    <div className="col-4 mt-4 offset-4">
                        <div className="card">
                            <div className="card-body">
                                <AvForm onValidSubmit={saveEmployee} ref={c => (this.form = c)}>
                                    <AvField
                                        name='firstName'
                                        label='Employee name:'
                                        required
                                        type='text'
                                    />

                                    <AvField
                                        name='lastName'
                                        label='Employee surname:'
                                        required
                                        type='text'
                                    />

                                    <AvField
                                        name='age'
                                        label='Employee age:'
                                        required
                                        type='number'
                                    />

                                    <AvField
                                        name='salary'
                                        label='Employee salary:'
                                        required
                                        type='number'
                                    />

                                    <AvField
                                        name='position'
                                        label='Employee position:'
                                        required
                                        type='select'
                                    >
                                        <option value=""></option>
                                        <option value="Director">Director</option>
                                        <option value="Director assistant">Director assistant</option>
                                        <option value="Driver">Driver</option>
                                        <option value="Developer">Developer</option>

                                    </AvField>

                                    <button className="btn btn-success d-block ml-auto" type="submit">Add</button>

                                </AvForm>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    {
                        this.state.employees.map((item, index) => (
                            <div className="col-4 mt-4">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>{item.firstName + " " + item.lastName}</h5>
                                    </div>
                                    <div className="card-body">
                                        <p>Age: <b>{item.age}</b></p>
                                        <p>Salary: <b>{item.salary}</b></p>
                                        <p>Position: <b>{item.position}</b></p>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between">
                                        <button type="button" className="btn btn-primary"
                                                onClick={() => {
                                                    setSelectedIndex(index);
                                                    changeModal()
                                                }}>Edit
                                            {/*() => this.setState({selectedIndex: index}); changeModal()*/}
                                        </button>
                                        <button type="button" className="btn btn-danger"
                                                onClick={() => deleteEmployee(item.id)}>Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>


                <Modal isOpen={this.state.modalOpen} toggle={changeModal}>
                    <AvForm onValidSubmit={editEmployee} model={this.state.employees[this.state.selectedIndex]}>
                        <ModalBody>
                            <AvField
                                name='firstName'
                                label='Employee name:'
                                required
                                type='text'
                            />

                            <AvField
                                name='lastName'
                                label='Employee surname:'
                                required
                                type='text'
                            />

                            <AvField
                                name='age'
                                label='Employee age:'
                                required
                                type='number'
                            />

                            <AvField
                                name='salary'
                                label='Employee salary:'
                                required
                                type='number'
                            />

                            <AvField
                                name='position'
                                label='Employee position:'
                                required
                                type='select'
                            >
                                <option value=""></option>
                                <option value="Director">Director</option>
                                <option value="Director assistant">Director assistant</option>
                                <option value="Driver">Driver</option>
                                <option value="Developer">Developer</option>

                            </AvField>

                        </ModalBody>

                        <ModalFooter className="d-flex justify-content-between">
                            <button type="submit" className="btn btn-primary">Save</button>
                            <button type="button" className="btn btn-secondary" onClick={changeModal}>Cancel</button>
                        </ModalFooter>
                    </AvForm>

                </Modal>


            </div>
        );
    }
}

export default ExtraLearning;