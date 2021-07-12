import React from 'react';
import {useState, useEffect} from "react";

const Hooks = () => {

    const [number, setNumber] = useState(0);
    //bu narsa arrayni destruktizatsiya deyiladi
    //yana yangi yaratmoqchi bolsak mana shunaqa holatda yoziladi



    useEffect(() => {
        document.title = number;
    })
    //bu funksiya compountDidMount va compountDidUpdate larda ishlaydi


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-4 offset-4 mt-4">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="text-center">{number}</h1>
                            </div>
                            <div className="card-footer d-flex justify-content-between">
                                <button type="button" className="btn btn-success"
                                        onClick={() => setNumber(number + 1)}>+
                                </button>
                                <button type="button" className="btn btn-danger"
                                        onClick={() => setNumber(number - 1)}>-
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hooks;