import React, {Component} from 'react';
import {Button, Modal, ModalBody, ModalFooter} from "reactstrap";

import {AvForm, AvField} from "availity-reactstrap-validation";

class App2 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            modalOpen: false,
            selectedProductIndex: -1

        };
    }


    render() {
        const changeModal = () => {
            this.setState({modalOpen: !this.state.modalOpen});
        }

        const exampleForEach = () => {
            var companies = ["Samsung", "Ecma", "PDP", "Apple", "Google"];

            companies.forEach((item, index) => {
                console.log(item + " " + index);

            });

            var newCompany = companies.map((item, index) => {
                console.log(item);
                return {name: item, tel: "+998995447235"};
            });

            console.log(newCompany);

            //map bu yangi array tuzishda qo'llaniladi

            var numbers = [200, 565, 547, 789, 423];

            // var newNumbers = numbers.filter((item) => {
            //     return item > 400;
            // });

            var newNumbers = numbers.filter((item) => item > 400);

            console.log(newNumbers);

            var newSortedNumbers = numbers.sort((a, b) => {
                return a - b;
            });
            console.log(newSortedNumbers);
        };

        const saveProduct = (hodisalar, qiymatlar) => {
            // console.log(xatoliklar);
            console.log(qiymatlar);

            // var temp = this.state.products;
            // temp.push(qiymatlar);
            // this.setState({products: temp})

            // this.setState({products: [...this.state.products, qiymatlar]})

            this.setState({products: this.state.products.concat(qiymatlar)});
            console.log(this.state);

            this.form && this.form.reset();
            // form - ixtiyoriy nom
        };


        const deleteProduct = (index) => {
            this.state.products.splice(index, 1);
            this.setState({products: this.state.products});

        }

        const setSelectedProduct = (index) => {
            this.setState({selectedProductIndex: index});
        }

        const editProduct = (event, values) => {
            this.state.products.splice(this.state.selectedProductIndex, 1, values);

            this.setState({products: this.state.products});
            changeModal();

        }

        return (
            <div>

                <Button color="success" onClick={exampleForEach}>Click me!</Button>

                <div className="container">
                    <div className="row">
                        <div className="col-4 offset-4 mt-4">
                            <div className="card">
                                <div className="card-body">
                                    <AvForm onValidSubmit={saveProduct} ref={c => (this.form = c)}>

                                        <AvField
                                            type="text"
                                            name="productName"
                                            label="Product Name"
                                            required
                                            errorMessage="Bu maydon to'ldirilishi shart!"
                                        />

                                        <AvField
                                            type="number"
                                            name="productPrice"
                                            label="Product Price"
                                            required
                                            errorMessage="Bu maydon to'ldirilishi shart!"

                                        />

                                        <AvField
                                            type="color"
                                            name="productColor"
                                            label="Product Color"
                                            required
                                            errorMessage="Bu maydon to'ldirilishi shart!"

                                        />

                                        <Button color="success" className="d-block mt-3 ml-auto">Add</Button>
                                    </AvForm>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {
                            this.state.products.map((item, index) => (
                                <div className="col-4 mt-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3>{item.productName}</h3>
                                        </div>
                                        <div className="card-body">
                                            <p>Color: <b style={{color: item.productColor}}>{item.productColor}</b></p>
                                            <p>Price: <b>{item.productPrice}</b></p>
                                        </div>
                                        <div className="card-footer d-flex justify-content-between">
                                            <button type="button" className="btn btn-primary"
                                                    onClick={() => {
                                                        setSelectedProduct(index);
                                                        changeModal()
                                                    }}>Edit
                                            </button>
                                            <button type="button" className="btn btn-danger"
                                                    onClick={() => deleteProduct(index)}>Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <Modal isOpen={this.state.modalOpen} toggle={changeModal}>
                    <AvForm onValidSubmit={editProduct} model={this.state.products[this.state.selectedProductIndex]}>
                        <ModalBody>
                            <AvField
                                type="text"
                                name="productName"
                                label="Product Name"
                                required
                                errorMessage="Bu maydon to'ldirilishi shart!"
                            />

                            <AvField
                                type="number"
                                name="productPrice"
                                label="Product Price"
                                required
                                errorMessage="Bu maydon to'ldirilishi shart!"

                            />

                            <AvField
                                type="color"
                                name="productColor"
                                label="Product Color"
                                required
                                errorMessage="Bu maydon to'ldirilishi shart!"

                            />

                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" outline block>Edit</Button>

                        </ModalFooter>
                    </AvForm>


                </Modal>

            </div>
        );
    }
}

export default App2;