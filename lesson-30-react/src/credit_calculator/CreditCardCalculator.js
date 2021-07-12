import React, {Component} from 'react';
import './main.css';
import {FaCalculator, FaRegMoneyBillAlt} from "react-icons/fa";
import {AvForm, AvField} from 'availity-reactstrap-validation';


class CreditCardCalculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            creditValue: 0,
            selectYearRate: 0,
            row: [],
            givenCredit: 0,
            initialPayment: 0,
            monthlyPayment: 0

        };
    }

    render() {
        // const handleChange = (e) => {
        //     this.setState({creditValue: e.target.value})
        // }
        // console.log(this.state.creditValue * 20);
        // // console.log(this.state.selectYearRate*2);

        const SaveInputs = (event, values) => {
            this.setState({row: this.state.row.concat(values)});
            console.log(this.state.row);

            this.setState({givenCredit: values.creditValue * (100 - values.initialPaidValue) / 100});
            this.setState({initialPayment: values.creditValue * values.initialPaidValue / 100});
            this.setState({monthlyPayment: this.state.givenCredit / (values.yearTerm * 12)});


        }


        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 my-5">
                            <div className="card border-primary">
                                <div className="card-header bg-blue text-white px-3 d-flex align-items-center">
                                    <FaCalculator/>
                                    <span className="ml-2">Credit Calculator</span>
                                </div>
                                <div className="card-body px-3">
                                    {/*<form>*/}
                                    <AvForm onValidSubmit={SaveInputs}>
                                        <div className="row mx-0">
                                            <div className="col-6">
                                                <AvField name="creditValue"
                                                         label={<b>Credit Value:</b>} required/>

                                                <AvField type="select" name="selectYearRate"
                                                         label={<b>Yillik foiz:</b>}>
                                                    <option/>
                                                    <option value="0">0%</option>
                                                    <option value="12">12%</option>
                                                    <option value="24">24%</option>
                                                    <option value="36">36%</option>
                                                    <option value="48">48%</option>
                                                    <option value="60">60%</option>
                                                    <option value="72">72%</option>
                                                    <option value="84">84%</option>
                                                    <option value="96">96%</option>
                                                </AvField>


                                                <AvField type="select" name="calenderYear" label={<b>Kalendar Yil:</b>}>
                                                    <option/>
                                                    <option value="2017">2017 yil</option>
                                                    <option value="2018">2018 yil</option>
                                                    <option value="2019">2019 yil</option>
                                                    <option value="2020">2020 yil</option>
                                                    <option value="2021">2021 yil</option>
                                                    <option value="2022">2022 yil</option>

                                                </AvField>

                                            </div>
                                            <div className="col-6">
                                                <AvField name="initialPaidValue" type="select"
                                                         label={<b>Boshlang'ich to'lov foizi:</b>}>
                                                    <option/>
                                                    <option value="5">5%</option>
                                                    <option value="10">10%</option>
                                                    <option value="15">15%</option>
                                                    <option value="20">20%</option>
                                                    <option value="25">25%</option>
                                                </AvField>

                                                <AvField name="yearTerm" type="select" label={<b>Yillik muddat:</b>}>
                                                    <option/>
                                                    <option value="1">1 yil</option>
                                                    <option value="2">2 yil</option>
                                                    <option value="3">3 yil</option>
                                                    <option value="4">4 yil</option>
                                                    <option value="5">5 yil</option>
                                                    <option value="6">6 yil</option>
                                                    <option value="7">7 yil</option>
                                                    <option value="8">8 yil</option>
                                                    <option value="9">9 yil</option>
                                                    <option value="10">10 yil</option>
                                                    <option value="11">11 yil</option>
                                                    <option value="12">12 yil</option>

                                                </AvField>


                                                <AvField type="select" name="Month" label={<b>Kalendar oy:</b>}>
                                                    <option/>
                                                    <option value="Yanvar">Yanvar</option>
                                                    <option value="Fevral">Fevral</option>
                                                    <option value="Mart">Mart</option>
                                                    <option value="Aprel">Aprel</option>
                                                    <option value="May">May</option>
                                                    <option value="Iyun">Iyun</option>
                                                    <option value="Iyul">Iyul</option>
                                                    <option value="Avgust">Avgust</option>
                                                    <option value="Sentabr">Sentabr</option>
                                                    <option value="Oktabr">Oktabr</option>
                                                    <option value="Dekabr">Dekabr</option>
                                                </AvField>

                                            </div>
                                            <button type="submit"
                                                    className="btn bg-blue d-block text-white ml-auto mt-4">Calculate
                                            </button>
                                        </div>

                                    </AvForm>
                                    {/*</form>*/}

                                </div>

                            </div>

                            <div className="card mt-5 border-grey">
                                <div className="card-header bg-grey px-3">
                                    <FaRegMoneyBillAlt/>
                                    <span className="ml-2">Kredit kalendari</span>
                                </div>
                                <div className="card-body px-3">

                                    <div className="row mx-0">
                                        <div className="col-4">
                                            <p className="mb-2"><b>Boshlang'ich to'lov summasi</b></p>
                                            <input type="text" value={this.state.initialPayment} disabled
                                                   className="form-control bg-light"/>

                                        </div>
                                        <div className="col-4">
                                            <p className="mb-2"><b>Berilgan kredit summasi</b></p>
                                            <input type="text" value={this.state.givenCredit} disabled
                                                   className="form-control bg-light"/>

                                        </div>
                                        <div className="col-4">
                                            <p className="mb-2"><b>Oylik to'lov summasi</b></p>
                                            <input type="text" value={this.state.monthlyPayment} disabled
                                                   className="form-control bg-light"/>

                                        </div>

                                        <div className="col-12 mt-4">
                                            <table className="table table-bordered table-striped">
                                                <thead>
                                                <tr>
                                                    <th>№</th>
                                                    <th>Yil</th>
                                                    <th>Oy</th>
                                                    <th>Asosiy qarz</th>
                                                    <th>Oylik to'lov</th>
                                                    <th>Foiz to'lovi</th>
                                                    <th>Umumiy</th>
                                                </tr>
                                                </thead>

                                                <tbody>
                                                {
                                                    this.state.row.map((item, index) => (
                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <td>{item.calenderYear}</td>
                                                            <td>{item.Month}</td>
                                                            <td>{this.state.givenCredit}</td>
                                                            <td>{this.state.monthlyPayment}</td>
                                                            <td>{this.state.givenCredit * item.selectYearRate / (item.yearTerm * 1200)}</td>
                                                            <td>{(this.state.monthlyPayment) + (this.state.givenCredit * item.selectYearRate / (item.yearTerm * 1200))}</td>
                                                        </tr>
                                                    ))
                                                }

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreditCardCalculator;