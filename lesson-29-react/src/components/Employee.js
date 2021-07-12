import React, {Component} from 'react';
import {AvForm, AvField} from 'availity-reactstrap-validation';
import axios from 'axios';
import {Modal, ModalFooter, ModalBody} from 'reactstrap'
// import Modal from 'reactstrap/es/Modal'

class Employee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: [],
            modalOpen: false,
            selectedIndex: -1
        }
    }

    componentDidMount() {
        axios.get("https://app-employ.herokuapp.com/api/employee")
            .then((res) => {
                console.log(res);
                this.setState({employees: res.data.object});
            })
    }


    render() {
        const changeModal = () => {
            this.setState({modalOpen: !this.state.modalOpen});
        }

        const saveEmployee = (events, values) => {
            axios.post("https://app-employ.herokuapp.com/api/employee", values)
                .then((res) => {
                    if (res.data.success) {
                        axios.get("https://app-employ.herokuapp.com/api/employee")
                            .then((res2) => {
                                console.log(res2);
                                this.setState({employees: res2.data.object})
                            })
                    }
                })
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
            axios.put("https://app-employ.herokuapp.com/api/employee/" + this.state.employees[this.state.selectedIndex].id, values)
                .then((res) => {
                    axios.get("https://app-employ.herokuapp.com/api/employee")
                        .then((res2) => {
                            this.setState({employees: res2.data.object});
                            changeModal();
                        })
                })
        }

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-4 offset-4 mt-3">
                            <div className="card">
                                <div className="card-body">
                                    <AvForm onValidSubmit={saveEmployee}>
                                        <AvField
                                            name='firstName'
                                            label='Employee firstname'
                                            required
                                            type='text'
                                        />

                                        <AvField
                                            name='lastName'
                                            label='Employee lastname'
                                            required
                                            type='text'
                                        />

                                        <AvField
                                            name='age'
                                            label='Employee age'
                                            required
                                            type='number'
                                        />

                                        <AvField
                                            name='salary'
                                            label='Employee salary'
                                            required
                                            type='number'
                                        />

                                        <AvField
                                            name='position'
                                            label='Employee position'
                                            required
                                            type='select'
                                        >
                                            <option value="Director">Director</option>
                                            <option value="Director assist">Director assist</option>
                                            <option value="Driver">Driver</option>
                                            <option value="Developer">Developer</option>
                                        </AvField>

                                        <button type='submit' className='btn btn-success d-block ml-auto'>Add</button>


                                    </AvForm>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {this.state.employees.map((item, index) => (
                            <div className='col-4 mt-3'>
                                <div className="card">
                                    <div className="card-header"><h5>{item.firstName} {item.lastName}</h5></div>
                                    <div className="card-body">
                                        <p>Age: <b>{item.age}</b></p>
                                        <p>Salary: <b>{item.salary}</b></p>
                                        <p>Position: <b>{item.position}</b></p>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between">
                                        <button type='button' className='btn btn-primary' onClick={() => {this.setState({selectedIndex: index}); changeModal();}}>Edit</button>
                                        <button type='button' className='btn btn-danger'
                                                onClick={() => deleteEmployee(item.id)}>Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <Modal isOpen={this.state.modalOpen} toggle={changeModal}>
                    <AvForm onValidSubmit={editEmployee} model={this.state.employees[this.state.selectedIndex]}>
                        <ModalBody>
                            <AvField
                                name='firstName'
                                label='Employee firstname'
                                required
                                type='text'
                            />

                            <AvField
                                name='lastName'
                                label='Employee lastname'
                                required
                                type='text'
                            />

                            <AvField
                                name='age'
                                label='Employee age'
                                required
                                type='number'
                            />

                            <AvField
                                name='salary'
                                label='Employee salary'
                                required
                                type='number'
                            />

                            <AvField
                                name='position'
                                label='Employee position'
                                required
                                type='select'
                            >
                                <option value="Director">Director</option>
                                <option value="Director assist">Director assist</option>
                                <option value="Driver">Driver</option>
                                <option value="Developer">Developer</option>
                            </AvField>
                        </ModalBody>
                        <ModalFooter>
                            <button type='submit' className='btn btn-primary'>Save</button>
                            <button type='button' className='btn btn-secondary' onClick={changeModal}>Cancel</button>
                        </ModalFooter>
                    </AvForm>
                </Modal>

            </div>
        );
    }
}

export default Employee;