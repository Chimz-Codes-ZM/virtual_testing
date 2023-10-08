import React from 'react'
import Layout from '@/pages/layout'
import TeamSection from '../components/teams'
import {AiOutlineLinkedin} from 'react-icons/ai';
import Home from '../home';

function Technical_professionals() {
  return (
    
    <Layout>
        <Home 
        title='Technical Professionals' 
              description="Work with Africa's top IT and data management Talent and Teams, driving human capital Growth and Innovation"
              mediaSrc='/assets/ladies.jpg'
              mediaType='image' 
        />

        <TeamSection />

    </Layout>
  )
}

export default Technical_professionals