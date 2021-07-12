import React, {Component} from 'react';
import {AvForm, AvField} from "availity-reactstrap-validation";
import {Button} from "reactstrap";
import '../components_3/main3.css';


class App3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            database: [],
            newDatabase: [],
            percentage: 0

        };
    }


    render() {

        const Add = (event, values) => {

            this.setState({database: this.state.database.concat(values)});
            console.log(this.state);

            this.form && this.form.reset();
            Calculate();

        };

        const AddToDone = (index) => {
            this.state.newDatabase.push(this.state.database[index]);
            // this.setState({newDatabase: this.state.newDatabase.concat(this.state.database[index])});

            this.state.database.splice(index, 1);
            this.setState({database: this.state.database, newDatabase: this.state.newDatabase});
            Calculate();
            console.log(this.state.database.length);
            console.log(this.state.newDatabase.length);
        };

        const DeleteFromDone = (index) => {
            this.state.newDatabase.splice(index, 1);
            this.setState({newDatabase: this.state.newDatabase});
            Calculate();
        }

        const Calculate = () => {
            if (this.state.database.length == 0 && this.state.newDatabase.length != 0) {
                this.setState({percentage: 100 + "%"})
            } else if (this.state.database.length == 0 && this.state.newDatabase.length == 0) {
                this.setState({percentage: 0 + "%"})
            } else {
                this.setState({percentage: ((this.state.newDatabase.length) / (this.state.database.length + this.state.newDatabase.length)) * 100 + "%"})
            }
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-6 mt-4 offset-3">
                        <AvForm onValidSubmit={Add} ref={c => (this.form = c)}>
                            <AvField
                                type="text"
                                name="inputText"
                                required
                                errorMessage="Please, write here something!"
                                placeholder="Type here..."
                            />

                            <Button color="success" className="btn-block">Add</Button>
                            {/*<div className="btn-group">*/}
                            {/*    <input type="text" className="form-control shadow-none round" id="text-part" placeholder="Type here..."/>*/}

                            {/*    <button type="button" className="btn btn-success shadow-none">Add</button>*/}
                            {/*</div>*/}


                        </AvForm>
                    </div>

                    <div className="col-8 offset-2 mt-4">
                        <div className="progress">
                            <div className="progress-bar progress-bar-animated progress-bar-striped"
                                 style={{width: this.state.percentage}}>{this.state.percentage}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-6 mt-4">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="text-center">To Do</h2>
                            </div>
                            <div className="card-body">
                                {
                                    this.state.database.map((item, index) => (
                                        <div className="btn-group w-100 mt-3">
                                            <button type="button"
                                                    className="btn btn-outline-success disabled shadow-none w-90 size-18">{item.inputText}</button>
                                            <button type="button" className="btn btn-success shadow-none w-10"
                                                    onClick={() => AddToDone(index)}>&#10003;</button>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className="col-6 mt-4">
                        <div className="card">
                            <div className="card-header">
                                <h2 className="text-center">Done</h2>
                            </div>
                            <div className="card-body">
                                {
                                    this.state.newDatabase.map((item, index) => (
                                        <div className="btn-group w-100 mt-3">
                                            <button type="button"
                                                    className="btn btn-outline-primary disabled shadow-none w-90 size-18">{item.inputText}</button>
                                            <button type="button"
                                                    className="btn btn-primary shadow-none w-10"
                                                    onClick={() => DeleteFromDone(index)}>&times;</button>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>

                </div>


            </div>
        );
    }
}

export default App3;