import React from 'react';
import Banner from './Banner';
import BusinessWork from './BusinessWork';
import FeaturedProducts from './FeaturedProducts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
            <Reviews></Reviews>
            <BusinessWork></BusinessWork>
        </div>
    );
};

export default Home;