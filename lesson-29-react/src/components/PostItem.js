import React from 'react';
import {Link} from 'react-router-dom';

const PostItem = (props) => {
    return (
        <div className='card mt-3'>
            <div className="card-body">
                <h6>{props.title} <Link to={'/posts/' + props.id}>more...</Link></h6>
            </div>
        </div>
    );
};

export default PostItem;