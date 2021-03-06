import './Reviews.css'

import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import useReviews from './../../hooks/useReviews';

const Reviews = () => {

    const [reviews,setReviews] =  useReviews();
    /* const [reviews,setReviews] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setReviews(data));
    },[]) */
    return (
        <div>
            <h1 style={{textAlign:'center',color:'rgb(131, 219, 30)'}}>REVIEWS</h1>
            {
                reviews.map(review => <Review key={review.id} review={review}></Review>)
            }
        </div>
    );
};

export default Reviews;