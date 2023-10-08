import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import TechVillage from '../../../public/tech-village/tech1.jpg';
import Tech from '../../../public/assets/tech2.jpg';
import Capital from '../../../public/assets/capital1.jpg';


const Slide = () => {

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <div className='w-full h-max bg-gray-100 flex flex-col'>

      <div
        className='w-full flex flex-col gap-5 lg:gap-20 p-3 lg:p-10 h-[300px] hover:h-[500px] ease-in duration-500 relative overflow-hidden'
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
        >
        <div className='flex gap-4 z-20 items-center truncate w-full'>
          <div className='h-10 w-1 lg:h-20 lg:w-3 background'></div>
          <h1 className='text-lg lg:text-6xl text-white'>Tech Village</h1>
        </div>

        <div className='w-full text-white z-20 items-end flex flex-col gap-3 px-3 lg:px-12 absolute left-0 top-28 lg:top-[200px] h-[200px]'>
          <div className='w-full text-sm lg:text-md md:w-1/2 glass p-3 h-max p-3 flex flex-col gap-3'  style={{ visibility: isHovered1 ? 'visible' : 'hidden' }}>
            <p className='w-full h-max ease-in-out duration-500 text-justify'>
              Africa is a continent with a rapidly growing population and an emerging middle class, but access to technology remains a challenge for many. Africa will have the world’s youngest population by 2050. That's where our tech village comes in - we're on a mission to digitize Africa and empower its people to fully participate in the digital age.
            </p>
            <p className='w-full h-max ease-in-out duration-500 text-justify'>
              Our tech village is a community of innovators, entrepreneurs, and experts working together to create the future of African tech. Located in Luderitz, Namibia, our village is a hub of activity, with state-of-the-art facilities and a vibrant atmosphere that encourages collaboration and creativity.
            </p>
          </div>
        </div>

        <Image
          src={TechVillage}
          alt='Tech Village'
          layout='fill'
          objectFit='cover'
          className={`filter brightness-75 contrast-100 grayscale-50 saturate-50 ${isHovered1 ? 'brightness-30 transition-delay-500' : ''}`}
        />

                

      </div>

      <div
        className='w-full flex flex-col gap-5 lg:gap-20 p-3 lg:p-10 h-[300px] hover:h-[500px] ease-in duration-500 relative overflow-hidden'
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
        >
        <div className='flex gap-4 z-20 items-center truncate w-full'>
          <div className='h-10 w-1 lg:h-20 lg:w-3 background'></div>
          <h1 className='text-lg lg:text-6xl text-white'>Digital Transformation</h1>
        </div>

        <div className='w-full text-white z-20 items-end flex flex-col gap-3 px-3 lg:px-12 absolute left-0 top-28 lg:top-[200px] h-[200px]'>
          <div className='w-full text-sm lg:text-md md:w-1/2 glass p-3 h-max p-3 flex flex-col gap-3'  style={{ visibility: isHovered2 ? 'visible' : 'hidden' }}>
            <p className='w-full h-max ease-in-out duration-500 text-justify'>
                In Africa, digital transformation has the potential to drive significant economic growth and development, as it can help businesses to become more efficient, productive, and competitive. By embracing digital technologies such as artificial intelligence, the Internet of Things, and cloud computing, African businesses can improve their operational efficiencies, reduce costs, and create new revenue streams.
                Digital transformation revenue potential in Africa is estimated to be between $148 billion to $318 billion by 2025.
            </p>
          </div>
        </div>

        <Image
          src={Tech}
          alt='Tech'
          layout='fill'
          objectFit='cover'
          className={`filter brightness-75 contrast-100 grayscale-50 saturate-50 ${isHovered2 ? 'brightness-30 transition-delay-500' : ''}`}
        />

                

      </div>

      <div
        className='w-full flex flex-col gap-5 lg:gap-20 p-3 lg:p-10 h-[300px] hover:h-[500px] ease-in duration-500 relative overflow-hidden'
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}
        >
        <div className='flex gap-4 z-20 items-center truncate w-full'>
          <div className='h-10 w-1 lg:h-20 lg:w-3 background'></div>
          <h1 className='text-lg lg:text-6xl text-white'>Growth Capital</h1>
        </div>

        <div className='w-full text-white z-20 items-end flex flex-col gap-3 px-3 lg:px-12 absolute left-0 top-28 lg:top-[200px] h-[200px]'>
          <div className='w-full text-sm lg:text-md md:w-1/2 glass p-3 h-max p-3 flex flex-col gap-3'  style={{ visibility: isHovered3 ? 'visible' : 'hidden' }}>
            <p className='w-full h-max ease-in-out duration-500 text-justify'>
                With the right growth capital, you can take your business to the next level and compete effectively in the global marketplace. This is why it's so important to work with a partner who understands your vision and can provide the financial support you need to achieve your goals.
            </p>
            <p className='w-full h-max ease-in-out duration-500 text-justify'>
              At our company, we believe in the power of growth capital to transform businesses and drive economic development in Africa. We work with businesses of all sizes and in all industries to provide the funding they need to succeed. Our team of experts will work closely with you to understand your unique needs and develop a tailored growth capital solution that meets your specific requirements.
            </p>
          </div>
        </div>

        <Image
          src={Capital}
          alt='capital'
          layout='fill'
          objectFit='cover'
          className={`filter brightness-75 contrast-100 grayscale-50 saturate-50 ${isHovered3 ? 'brightness-30 transition-delay-500' : ''}`}
        />

                

      </div>

    </div>
  )
}

export default Slide;