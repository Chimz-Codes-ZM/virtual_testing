import Head from 'next/head';
import React from 'react';
import Home from "./home";
import Navbar from "./navbar";
import Slide from './components/slide_hor';
import TitleBox from './components/title_box';
import Price from './components/price';

const Homepage = () => {
    return (
        <div className='overflow-x-hidden'>

            <Home title="Virtual Technology Village" mediaType='image' mediaSrc='/assets/pricing.jpg' buttons='yes' />

            <TitleBox />

            <Slide />
            
            {/* <Price /> */}

        </div>
    )
};
export default Homepage;
