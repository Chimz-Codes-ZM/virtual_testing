import React from "react";
import Layout from '../layout';
import Home from "./home";
import Slide from './components/slide_';
import TitleBox from './components/title_box';

const Team = () => {
    return (
        <Layout
          title='Baobabpad | About' 
          content='Bring Africa growth with Tech' 
        >

        <div className='overflow-x-hidden'>

            
            <Home 
                title='Who We Are' 
                mediaSrc='/assets/aboutB.jpg'
                mediaType='image' 
            />

            <TitleBox />

            <Slide />

            
        </div>
          
        </Layout>
    )
}

export default Team;
