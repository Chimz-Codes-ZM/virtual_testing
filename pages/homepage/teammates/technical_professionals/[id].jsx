import { useRouter } from "next/router";
import Image from "next/image";
import Layout from '../../../layout';
import Home from "../../home";
import Link from 'next/link';
import { productionTeam } from "../../../data";

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const member = productionTeam.find((p) => p.id === parseInt(id));

  if (!member) {
    return <div>member not found</div>;
  }

  return (
    <Layout
      title={member.title} 
      content='Our team makes us who we are' 
    >
      <div className='overflow-x-hidden'>
        <Home 
          title={member.title}
          mediaSrc='/assets/t-cover.jpg'
          mediaType='image' 
        />
        <div className='w-full flex flex-col'>
          <div className='w-full background-green flex flex-col md:flex-row items-center gap-5'>
            <div id='1' className='w-72 flex-shrink-0 truncate h-full flex justify-center items-center py-5 text-3xl font-bold text-gray-200'>Bio</div>
            <div id='2' className='flex bg-white flex-col gap-3 flex-grow p-10'>
              {member.bio.split('\n').map((paragraph, index) => (
                <p key={index} className='w-full text-sm md:text-lg'>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className='w-full background-green flex flex-col md:flex-row items-center gap-5'>
            <div className='w-72 flex-shrink-0 truncate h-full flex justify-center items-center py-5 text-3xl font-bold text-gray-200'>Expertise</div>
            <div className='flex w-full border-t bg-white md:px-5 gap-3 flex-grow p-4 sm:p-10'>
              <div className='w-full gap-5 grid grid-cols-2 lg:grid-cols-5 justify-around'>
                <span className="flex flex-col items-center gap-2">
                  <h1>Skills</h1>
                  <h1 className='border rounded-full px-2'>{member.strength}</h1>
                </span>
                <span className="flex flex-col items-center gap-2">
                  <h1>Experience</h1>
                  <h1 className='border rounded-full px-2'>{member.experience}</h1>
                </span>
                <span className="flex flex-col items-center gap-2">
                  <h1>Language</h1>
                  <h1 className='border rounded-full px-2'>{member.lang}</h1>
                </span>
                <span className="flex flex-col items-center gap-2">
                  <h1>Industry</h1>
                  <h1 className='border rounded-full px-2'>{member.industry}</h1>
                </span>
                <span className="flex flex-col items-center gap-2">
                  <h1>Services</h1>
                  <h1 className='border rounded-full px-2'>{member.services}</h1>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
