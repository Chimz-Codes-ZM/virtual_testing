import Head from 'next/head';
import React, { ReactNode } from 'react';
import Navbar from './homepage/navbar';
import Contact from './homepage/components/contact';
import Footer from './homepage/components/footer';
import Link from 'next/link';
import Favicon from "../public/favicon.ico"



const Layout = ({ title, content, children }) => (
    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={content} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <Link rel="icon" href={Favicon}/>
        </Head>

        <div>
            <Navbar />

            { children }

            <Contact />

            <Footer />
        </div>
    </>
);

Layout.defaultProps = {
    title: 'Baobabpad',
    content: 'Elevating African Technology Talent, Virtually and Globally'
}

export default Layout;