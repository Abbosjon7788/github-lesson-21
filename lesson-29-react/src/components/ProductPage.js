import React, {Component} from 'react';
import {Button, Modal, ModalBody, ModalFooter} from "reactstrap";

import {AvForm, AvField} from 'availity-reactstrap-validation'

class ProductPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            modalOpen: false,
            selectedProductIndex: -1
        }
    }


    render() {

        const changeModal = () => {
            this.setState({modalOpen: !this.state.modalOpen})
        }

        const exampleForEach = () => {

            var companies = ["Apple", "Google", "PDP", "ECMA", "AIF"];


            companies.forEach((company, index) => {
                if (index % 2 == 0) {
                    console.log(company + " " + index);
                }
            })

            // for (var i = 0; i < companies.length; i++){
            //     console.log(companies[i]);
            // }


            var newCompany = companies.map((item, index) => {
                return {name: item + " Inc", tel: "+998934366331"}
            });

            // var newCompany = companies.map((item, index) => ({name: item + " Inc", tel: "+9989343656"}));

            console.log(newCompany);

            var numbers = [233, 533, 653, -344, 533];

            var newNumbers = numbers.filter((item) => item > 500);

            // var newNumbers = numbers.filter((item) => {
            //     return item > 500
            // });

            console.log(newNumbers);

            numbers.sort((a, b) => {
                return b - a
            });

            console.log(numbers)


        }


        const saveProduct = (hodisalar, qiymatlar) => {
            console.log(qiymatlar);

            // var temp = this.state.products;
            // temp.push(qiymatlar)

            // this.setState({products: temp})

            // this.setState({products: [...this.state.products, qiymatlar]})


            this.setState({products: this.state.products.concat(qiymatlar)});
            console.log(this.state);

            this.nizom && this.nizom.reset();


        };


        const deleteProduct = (index) => {

            this.state.products.splice(index, 1);


            this.setState({product: this.state.products});


        }

        const setSelectedProduct = (index) => {
            this.setState({selectedProductIndex: index})
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
                        <div className="col-4 offset-4 mt-3">
                            <div className="card">
                                <div className="card-body">
                                    <AvForm onValidSubmit={saveProduct} ref={c => (this.nizom = c)}>
                                        <AvField
                                            type="text"
                                            name="productName"
                                            label="Product name"
                                            required
                                            errorMessage="Bu maydon to'ldirilishi shart"
                                        />

                                        <AvField
                                            type="number"
                                            name="productPrice"
                                            label="Product price"
                                            required
                                            errorMessage="Bu maydon to'ldirilishi shart"
                                        />

                                        <AvField
                                            type='color'
                                            name="productColor"
                                            label="Product color"
                                            errorMessage="Bu maydon to'ldirilishi shart"
                                        />

                                        <Button color="success" className="d-block ml-auto mt-3">Add</Button>


                                    </AvForm>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {
                            this.state.products.map((item, index) => (
                                <div className="col-4">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3>{item.productName}</h3>
                                        </div>
                                        <div className="card-body">
                                            <p>Color: <b style={{color: item.productColor}}>{item.productColor}</b></p>
                                            <p>Price: <b>{item.productPrice}</b></p>
                                        </div>
                                        <div className="card-footer">
                                            <button type="button" className="btn btn-primary" onClick={() => {setSelectedProduct(index); changeModal()}}>Edit</button>
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
                                label="Product name"
                                required
                                errorMessage="Bu maydon to'ldirilishi shart"
                            />

                            <AvField
                                type="number"
                                name="productPrice"
                                label="Product price"
                                required
                                errorMessage="Bu maydon to'ldirilishi shart"
                            />

                            <AvField
                                type='color'
                                name="productColor"
                                label="Product color"
                                errorMessage="Bu maydon to'ldirilishi shart"
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

export default ProductPage;