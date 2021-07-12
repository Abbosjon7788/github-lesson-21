import React, {Component} from 'react';
import PostItem from "./PostItem";
import axios from "axios";

class Posts extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            userNames: {}
        }
    }


    componentDidMount() {
        axios.get("http://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                console.log(res);

                this.setState({posts: res.data});
                console.log(this.state.posts);


            })
        // console.log(this.state.posts.userId);
        // axios.get("http://jsonplaceholder.typicode.com/users/" + this.state.posts.userId)
        //     .then((res2) => {
        //         console.log(res2);
        //     })
    }


    render() {
        return (
            <div className="container">
                <h5>Posts</h5>

                <div className="row">
                    {
                        this.state.posts.map((item) => (
                            <div className="col-4">
                                <PostItem title={item.title} id={item.id} userID={item.userId}/>
                            </div>
                        ))
                    }

                </div>
            </div>
        );
    }
}

export default Posts;