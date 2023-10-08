import React from "react";
import Terms_subscribe from "./components/terms_subscribe";
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
<Terms_subscribe />
            

        </div>
          
        </Layout>
    )
}

export default Team;