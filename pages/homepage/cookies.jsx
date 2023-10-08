import React from "react";
import Cookies from "./components/cookie";
import Layout from '../layout';


function cookies() {
  return (
    <Layout
          title='Baobabpad Privacy Policy' 
          content='Bring Africa growth with Tech' 
        >

        <div className='overflow-x-hidden'>
<Cookies />
            

        </div>
          
        </Layout>
  )
}

export default cookies