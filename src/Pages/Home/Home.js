import React from 'react';
import Banner from './Banner';
import BusinessWork from './BusinessWork';
import FeaturedProducts from './FeaturedProducts';
import Reviews from './Reviews';
import WorkBrand from './WorkBrand';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProducts></FeaturedProducts>
            <Reviews></Reviews>
            <BusinessWork></BusinessWork>
            <WorkBrand></WorkBrand>
        </div>
    );
};

export default Home;