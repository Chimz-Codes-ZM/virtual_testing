import React from "react";
import Privacy from "./components/privacy";
import Layout from '../layout';
import Home from "./home";

import { HiDocumentReport } from "react-icons/hi"

const Team = () => {
    return (
        <Layout
          title='Baobabpad Privacy Policy' 
          content='Bring Africa growth with Tech' 
        >

        <div className='overflow-x-hidden'>
<Privacy />
            

        </div>
          
        </Layout>
    )
}

export default Team;