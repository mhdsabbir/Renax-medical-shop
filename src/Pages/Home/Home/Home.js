import React from 'react'
import Banner from '../../Shared/Banner/Banner';
import Category from '../Category/Category';
import Services from '../Services/Services';
const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Category></Category>
        </div>
    );
};

export default Home;