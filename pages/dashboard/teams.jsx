import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import Layout from './components/layout';
import { BsChevronDown } from 'react-icons/bs';
import { BiUserCheck } from 'react-icons/bi';
import { MdAssuredWorkload } from 'react-icons/md';
import { useRouter } from 'next/router';
import jwt_decode from 'jwt-decode';



const Teams = () => {
  const router = useRouter();

  function checkToken() {
    if (!localStorage.getItem('token')) {
      router.push('../homepage/login');
      return;
    }

  }

  const [TeamList, setTeamList] = useState([])
    
  useEffect(() => {

    checkToken();

    const token = localStorage.getItem('token');
    const decodedToken = jwt_decode(token);
    const id = decodedToken.user_id;

    const fetchData = async () => {
      const response = await fetch(`https://baobabpad-334a8864da0e.herokuapp.com/api/create_team/${id}/`)
      const data = await response.json()
      setTeamList(data)
    }

    fetchData()
  }, [])
  return (
    <>
      <Layout sideHighlight='Teams'>
      {TeamList.map(({project, members}) => (
        <div className='w-full flex flex-col gap-10' key={project}>
          {project && (
          <span className='w-full flex bg-gray-100 rounded flex-col'>
            <div className='w-full py-3 cursor-pointer flex justify-between items-center rounded-t px-2 bg-gray-900'>
              <h1 className='text-white font-bold'>{project}</h1>
              <div className='text-white text-xl'>
                <BsChevronDown />
              </div>
              
            </div>
            <div className='w-full flex flex-col text-sm sm:text-base'>

              <div className='w-full px-2 py-4'>
                <div className='flex justify-between'>
                  <span className='w-[50%] sm:w-[70%] font-bold text-gray-800'>
                    <h1 className=''>Name</h1>
                  </span>
                  <span className='w-[50%] sm:w-[30%] font-bold text-gray-800'>
                    <h1 className=''>Skills</h1>
                  </span>
                </div>
              </div>


          {members && members.length > 0 ? (
            members.map(({ name, specialization }, index) => (
              <div className='w-full border-t px-2 py-4' key={index}>
                <div className='flex justify-between'>
                  <span className='w-[50%] sm:w-[70%] font-bold text-gray-800'>
                    <h1 className='flex gap-1 items-center'>
                      <BiUserCheck />
                      {name}
                    </h1>
                  </span>
                  <span className='w-[50%] sm:w-[30%] font-bold text-gray-800'>
                    <div className='flex gap-1 items-center'>
                      <MdAssuredWorkload />
                      <h1 className='px-2 py-1 bg-yellow-400 rounded text-center text-sm'>{specialization}</h1>
                    </div>
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className='px-2 py-4 text-gray-800'>No members found for this project.</p>
          )}


            </div>
          </span>

          )}

        </div>
        ))}
      </Layout>
    </>
  )
}

export default Teams;