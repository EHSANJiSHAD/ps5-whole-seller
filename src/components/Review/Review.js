import './Review.css'

import React from 'react';

const Review = (props) => {
    const {name,review,ratings,img} = props.review
    return (
        <div className='review'>
            {/* <img src={img} alt="" /> */}
            <h3>{name}</h3>
            <p>{review}</p>
            <small>{ratings} Stars</small>
        </div>
    );
};

export default Review;