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
            itemTitle: []
        }
    }


    render() {

        const changeCardVisible = () => {
            this.setState({isCardShow: !this.state.isCardShow})
        }

        const addBoard = () => {
            if (this.state.selectedIndex >= 0){
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

        return (
            <div>
                <div className="container">
                    <div className="row mt-3">
                        <div className="col-3">
                            <button type='button' onClick={changeCardVisible} className='btn btn-success'>Add board</button>

                            <div className={`card mt-3 ${this.state.isCardShow ? '' : 'd-none'}`}>
                                <div className="card-body">
                                    {/*<form onSubmit={addBoard}>*/}
                                    <textarea value={this.state.boardTitle} className='form-control' onChange={handleChange} name='boardTitle' placeholder='Type here' />

                                    <button type='button' onClick={addBoard} className={`btn mt-3 d-block ml-auto ${this.state.selectedIndex >= 0 ? "btn-primary" : "btn-success"}`}>{this.state.selectedIndex >= 0 ? "Edit" : "Add"}</button>
                                    {/*</form>*/}
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="row">
                                {this.state.boards.map((item, index) => (
                                    <div className="col-4 mb-3">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5 onClick={() => editBoard(index)}>{item.title}</h5>
                                                <div className="close" onClick={() => deleteBoard(index)}>&times;</div>
                                            </div>
                                            <div className="card-body">
                                                {item.items.map((item2, index) => (
                                                    <div className='task position-relative'>{item2} <div className="close">&times;</div></div>
                                                ))}
                                            </div>
                                            <div className="card-footer">
                                                {/*<form>*/}
                                                    <textarea value={this.state.itemTitle[index]} onChange={(e) => handleItemChange(e, index)} className="form-control"/>
                                                    <button type='submit' className='btn btn-success mt-3 d-block ml-auto'>Add</button>
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