import React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';

const SettingsLayout = ({ children, title, description, selectedItem }) => {
     const isItemSelected = () => selectedItem === itemName;
    
    return(
        <Layout sideHighlight='Settings'> 
        <div className="w-full flex flex-col lg:flex-row gap-5">
            <div className='w-48 gap-3 flex flex-col flex-shrink-0'>
                <div className='w-full flex flex-col gap-2'>
                    <h1 className='text-green-600'>Account</h1>
                    <div className='w-full flex flex-col gap-2 pl-2'>
                        <Link href='/dashboard/settings'>
                            <h1 className={
                              title === 'My Account'
                                ? 'border-l-4 pl-2 border-green-600'
                                : 'hover:border-l-4 pl-2'}
                            >
                                My Account
                            </h1>
                        </Link>
                        {/* <Link href='/dashboard/settings/team'>
                            <h1 className={
                              title === 'Team'
                                ? 'border-l-4 pl-2 border-green-600'
                                : 'hover:border-l-4 pl-2'}
                            >
                                Team
                            </h1>
                        </Link> */}
                    </div>
                </div>
                {/* <div className='w-full flex flex-col gap-2'>
                    <h1 className='text-green-600'>Data</h1>
                    <div className='w-full flex flex-col gap-2 pl-2'>
                        <Link href='/dashboard/settings/projects'>
                            <h1 className={
                              title === 'Projects'
                                ? 'border-l-4 pl-2 border-green-600'
                                : 'hover:border-l-4 pl-2'}
                            >
                                Projects
                            </h1>
                        </Link>
                    </div>
                </div> */}
            </div>
            <div className='flex py-3 px-5 overflow-x-hidden flex-grow shadow rounded h-max flex-col flex-shrink-0'>
                <div className='w-full border-b pb-3 flex-col gap-2'>
                    <h1 className='text-green-600'>{title}</h1>
                    <h1 className='text-gray-700'>{description}</h1>
                </div>
                { children }
            </div>
        </div>
    </Layout>
    )

};

export default SettingsLayout;
