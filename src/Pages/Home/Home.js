import React from 'react';
import Banner from './Banner';
import FeaturedProducts from './FeaturedProducts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;