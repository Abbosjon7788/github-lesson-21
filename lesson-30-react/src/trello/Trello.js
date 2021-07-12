import React, {Component} from 'react';
import './main.css';

class Trello extends Component {


    constructor(props) {
        super(props);

        this.state = {
            isCardShow: false,
            boards: [],
            boardTitle: "",
            selectedIndex: -1,
            itemTitle: [],
            selectedItemIndex: -1
        }
    }


    render() {

        const changeCardVisible = () => {
            this.setState({isCardShow: !this.state.isCardShow})
        }

        const addBoard = () => {
            if (this.state.selectedIndex >= 0) {
                this.state.boards[this.state.selectedIndex].title = this.state.boardTitle
            } else {
                this.state.boards.push({
                    // title,
                    title: this.state.boardTitle,
                    items: []
                });
            }
            changeCardVisible();
            this.setState({boards: this.state.boards, boardTitle: "", selectedIndex: -1});
        }

        const deleteBoard = (index) => {
            this.state.boards.splice(index, 1);
            this.setState({boards: this.state.boards});
        }

        const handleChange = (e) => {
            this.setState({boardTitle: e.target.value});
        }

        const editBoard = (index) => {
            this.setState({boardTitle: this.state.boards[index].title, isCardShow: true, selectedIndex: index});

        }

        const handleItemChange = (e, index) => {
            this.state.itemTitle[index] = e.target.value;
            this.setState({itemTitle: this.state.itemTitle});
        }

        const addItem = (index) => {
            if (this.state.selectedItemIndex >= 0) {
                this.state.boards[index].items[this.state.selectedItemIndex] = this.state.itemTitle[index];
            } else {
                this.state.boards[index].items.push(this.state.itemTitle[index]);
                // console.log(this.state.boards[index].items[this.state.selectedItemIndex].value);

            }
            this.setState({
                items: this.state.boards[index].items[this.state.selectedItemIndex],
                selectedItemIndex: this.state.selectedItemIndex
            });


            this.state.itemTitle[index] = "";
            this.setState({itemTitle: this.state.itemTitle, selectedItemIndex: -1});

        }

        const editItem = (index1, index2) => {
            this.state.itemTitle[index1] = this.state.boards[index1].items[index2];
            this.setState({itemTitle: this.state.itemTitle, selectedItemIndex: index2});


        }

        const deleteItem = (index1, index2) => {
            this.state.boards[index1].items.splice(index2, 1);
            this.setState({items: this.state.boards})
        }

        return (
            <div>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-3">
                            <button type='button' onClick={changeCardVisible} className='btn btn-success'>Add board
                            </button>

                            <div className={`card mt-4 ${this.state.isCardShow ? '' : 'd-none'}`}>
                                <div className="card-body">
                                    {/*<form onSubmit={addBoard}>*/}
                                    <textarea value={this.state.boardTitle} className='form-control'
                                              onChange={handleChange} name='boardTitle' placeholder='Type here'/>

                                    <button type='button' onClick={addBoard}
                                            className={`btn mt-4 d-block ml-auto ${this.state.selectedIndex >= 0 ? "btn-primary" : "btn-success"}`}>{this.state.selectedIndex >= 0 ? "Edit" : "Add"}</button>
                                    {/*</form>*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="row">
                                {this.state.boards.map((item, index1) => (
                                    <div className="col-4 mb-4">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5 onClick={() => editBoard(index1)}>{item.title}</h5>
                                                <div className="close" onClick={() => deleteBoard(index1)}>&times;</div>
                                            </div>
                                            <div className="card-body">
                                                {
                                                    item.items.map((item2, index2) => (
                                                        <div className='task position-relative'
                                                             onClick={() => editItem(index1, index2)}>{item2}
                                                            <div className="close"
                                                                 onClick={() => deleteItem(index1, index2)}>&times;</div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            <div className="card-footer">
                                                {/*<form>*/}
                                                <textarea value={this.state.itemTitle[index1]}
                                                          onChange={(e) => handleItemChange(e, index1)}
                                                          className="form-control"/>
                                                <button type='button'
                                                        className='btn btn-success mt-4 d-block ml-auto'
                                                        onClick={() => addItem(index1)}>Add
                                                </button>
                                                {/*</form>*/}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Trello;