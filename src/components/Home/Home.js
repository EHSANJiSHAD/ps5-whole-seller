import './Home.css'

import React from 'react';
import useReviews from './../../hooks/useReviews';
import Review from '../Review/Review';
import { Link } from 'react-router-dom';

const Home = () => {
    const [reviews,setReviews] = useReviews();
    return (

        <div>
            <div className='headline'>

                <div>
                    <h1>ALL NEW PS5 IS HERE!</h1>
                    <p>The PlayStation 5 (PS5) is a home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, the PS5 was released on November 12, 2020, in Australia, Japan, New Zealand, North America, and South Korea, with worldwide release following a week later. The PS5 is part of the ninth generation of video game consoles, along with Microsoft's Xbox Series X and Series S consoles, which were released in the same month.</p>

                    <button className='btn'>Live Demo</button>
                </div>
                <div>
                    <img src="ps5.jpg" alt="" />

                </div>

            </div>

            <section className='Customer-reviews'>
                    <h3 style={{textAlign:'center',color:'rgb(131, 219, 30)'}}>CUSTOMER REVIEWS</h3>     
            {
               
                reviews.slice(0,3).map(review => <Review key={review.id} review={review}></Review>)
            }
            <Link to='/reviews'><button className='review-btn'>SEE ALL REVIEWS</button></Link>   
            </section>

        </div>
    );
};

export default Home;