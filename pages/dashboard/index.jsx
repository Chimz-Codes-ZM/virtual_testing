import Image from 'next/image';
import Layout from './components/layout';
import Link from 'next/link';
import {GrMoney} from 'react-icons/gr';
import { HiOutlineCog } from 'react-icons/hi';
import { useState,useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useRouter } from 'next/router';

const Index = () => {
  
  const router = useRouter();
  const [ProjectList, setProjectList] = useState([])
  const [teamData, setTeamData] = useState([])


  function checkToken() {
    if (!localStorage.getItem('token')) {
      router.push('../homepage/login');
      return;
    }

  }
    
  useEffect(() => {

    checkToken();

    const token = localStorage.getItem('token');
    const decodedToken = jwt_decode(token);
    const id = decodedToken.user_id;

    const fetchData = async () => {
      const response = await fetch(`https://baobabpad-334a8864da0e.herokuapp.com/api/create_project/${id}/`)
      // const response = await fetch(`http://127.0.0.1:8000/api/create_project/${id}/`)

      const teams = await fetch(`https://baobabpad-334a8864da0e.herokuapp.com/api/create_team/${id}/`)
      // const teams = await fetch(`http://127.0.0.1:8000/api/create_team/${id}/`)
      const teamData = await teams.json();
      setTeamData(teamData);
      const data = await response.json()
      setProjectList(data)
      
    }

    fetchData()
  }, [])

  return (
    <>
      <Layout sideHighlight='Overview'>
        <div className='w-full overflow-hidden md:grid grid-cols-1 md:grid-cols-3 lg:h-40 rounded bg-gray-900 hidden'>

          {/* <div className='h-full p-4 flex flex-col justify-between gap-2 border-b border-r border-gray-100'>
            <span className='flex items-center gap-2'>  
              <div className='w-5 relative flex items-center justify-center h-5 bg-gray-400 rounded'>
                <GrMoney className='' />
              </div>
              <h1 className='text-gray-100 font-light'>Total Expenses</h1>
            </span>
            <span className='flex items-center gap-2'>
              <h1 className='text-gray-200 text-3xl font-bold'>$</h1>
              <h1 className='text-yellow-600 text-3xl font-bold'>4 000,00</h1>
            </span>
            <span className='flex items-center w-full justify-end gap-2'>
              <h2 className='text-gray-300 text-sm'>Since</h2>
              <h1 className='text-gray-200 text-sm font-light'>2023-02-05</h1>
            </span>
          </div> */}
          

          <div className='h-full p-4 flex flex-col justify-between gap-2 border-b border-r border-gray-100'>
            <span className='flex items-center gap-2'>  
              <div className='w-5 relative flex items-center justify-center h-5 bg-gray-400 rounded'>
                <GrMoney className='' />
              </div>
              <h1 className='text-gray-100 font-light'>Subscription</h1>
            </span>
            <span className='flex items-center gap-2'>
              <h1 className='text-yellow-600 text-3xl font-bold'>23-03-04</h1>
            </span>
            <span className='flex items-center w-full justify-end gap-2'>
              <h2 className='text-gray-300 text-sm'>start</h2>
              <h1 className='text-gray-200 text-sm font-light'>2023-04-05</h1>
            </span>
          </div>

          <div className='h-full p-4 flex flex-col justify-between gap-2 border-b border-r border-gray-100'>
            <span className='flex items-center gap-2'>  
              <div className='w-5 relative flex items-center justify-center h-5 bg-gray-400 rounded'>
                <GrMoney className='' />
              </div>
              <h1 className='text-gray-100 font-light'>Projects Completed</h1>
            </span>
            <span className='flex items-center gap-2'>
              <h1 className='text-yellow-600 text-3xl font-bold'>
              {teamData.find(obj => obj.completed_projects)?.completed_projects || 0}
              </h1>
            </span>
            {ProjectList.length > 0 && (
            <span className='flex items-center w-full justify-end gap-2'>
              <h2 className='text-gray-300 text-sm'>Since</h2>
              <h1 className='text-gray-200 text-sm font-light'>{ProjectList.find(obj => obj.first_project)?.first_project || "None"}</h1>
            </span>
          )}
          </div>
          {/* {ProjectList[ProjectList.length - 1].first_project} */}

          {teamData && (
          <div className='h-full p-4 flex flex-col justify-between gap-2 border-b border-gray-100'>
            <span className='flex items-center gap-2'>  
              <div className='w-5 relative flex items-center justify-center h-5 bg-gray-400 rounded'>
                <GrMoney className='' />
              </div>
              <h1 className='text-gray-100 font-light'>Teams</h1>
            </span>
            <span className='flex items-center gap-2'>
              <h1 className='text-yellow-600 text-3xl font-bold'>
              {teamData.find(obj => obj.teams)?.teams || 0}
              </h1>
            </span>
            <span className='flex items-center w-full justify-end gap-2'>
              <h1 className='text-gray-200 text-sm font-light'>People from your org</h1>
            </span>
          </div>
          )}

        </div>
        
        <div className='w-full overflow-x-hidden gap-5 flex flex-col'>
          <span className='flex justify-between gap-5 flex-col-reverse md:flex-row'>
            <h1 className='text-gray-700 font-bold '><span className='border-b-2 md:border-b-0'>Project List</span> </h1>
            <div className='flex flex-col sm:flex-row gap sm:gap-3 text-gray-800 items-center'>
              <h1 className='text-sm text-gray-900 font-bold'>Completion status</h1>
              <div className='flex gap-1'>
                <span className='flex gap-1 items-center'>
                <div className='w-3 h-3 rounded bg-yellow-400'></div>
                <h2 className='text-xs sm:text-sm'>0% - 30%</h2>
              </span>
              <span className='flex gap-1 items-center'>
                <div className='w-3 h-3 rounded bg-green-400'></div>
                <h2 className='text-xs sm:text-sm'>31% - 60%</h2>
              </span>
              <span className='flex gap-1 items-center'>
                <div className='w-3 h-3 rounded bg-blue-400'></div>
                <h2 className='text-xs sm:text-sm'>61% - 100%</h2>
              </span>
              </div>
              
            </div>
          </span>

          <div className='w-full  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3   gap-10'>

           {ProjectList.map(({project, started, issues, index, completion}) => (
            <span key={index} className={`max-h-64 flex flex-col justify-between p-4 rounded relative border`}>
                              <div className='w-2 h-full rounded-r bg-yellow-400 absolute right-0 top-0 '></div>

              <h1 className='text-3xl md:text-4xl text-gray-900 font-bold'>{project} </h1>
              <span className='flex items-center text-lg gap-2'>
                <h2 className='text-gray-800'>Issues</h2>
                <h2 className='font-bold text-gray-900 text-xl'>{issues}</h2>
              </span>
              <span className='flex items-center text-lg gap-2'>
                <h2 className='text-gray-800'>Start</h2>
                <h2 className='font-bold text-gray-900 text-xl'>{started}</h2>
              </span>
              <span className='flex items-center text-lg gap-2'>
                <h2 className='text-gray-800'>Completion</h2>
                <h2 className='font-bold text-gray-900 text-xl'>{completion} %</h2>
              </span>
              <div className='flex justify-end'>
                <Link href='/dashboard/settings/projects'>
                  <HiOutlineCog className='text-xl' />
                </Link>
              </div>
            </span>
              ))}

           

          </div>
        </div>
      </Layout>
    </>
  )
}

export default Index;