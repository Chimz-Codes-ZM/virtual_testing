import React from 'react';

import Image from 'next/image';


import Tech1 from '/public/tech-village/tech1.jpg';
import Tech2 from '/public/tech-village/tech2.jpg';
import Tech3 from '/public/tech-village/tech3.jpg';
import Tech4 from '/public/tech-village/tech4.jpg';
import Tech5 from '/public/tech-village/tech5.jpg';
import Tech6 from '/public/tech-village/tech6.jpg';
const Village_old = () => {
    return (
        <ul className='flex flex-wrap px-8'>
    
            <li className="w-full order-1 md:order-none md:w-1/2 my-10 flex justify-center items-center">
                <div className='w-96 gap-5 flex flex-col'>
                  <h1 className='text-2xl sm:text-4xl text-gray-900 truncate'>BAOBAB COLLAB</h1>
                  <p className='text-sm sm:text-md text-gray-700'>Welcome to Baobabpad Co-working Lab, the beating heart of innovation at our tech village. Here, ideas transform into realities. We provide a dynamic environment where technology enthusiasts, emerging entrepreneurs, and digital pioneers co-create. With access to cutting-edge resources, Baobabpad offers a nurturing space for ideas to bloom. Dive into the pulsating rhythm of creativity and collaboration at Baobabpad - where Africa's digital future is being shaped, one idea at a time. Join us and be part of the revolution!</p>
                </div>
            </li>
    
            <li className="w-full order-2 md:order-none md:w-1/2 my-10 flex justify-center items-center">
                <div className='w-[500px] h-[300px] rounded-xl overflow-hidden relative bg-white'>
                    <Image src={Tech1} alt='talent' fill />
                </div>
            </li>
    
            <li className="w-full order-4 md:order-none md:w-1/2 my-10 flex justify-center items-center">
                <div className='w-[500px] h-[300px] rounded-xl overflow-hidden relative bg-white'>
                    <Image src={Tech5} alt='talent' fill />
                </div>
            </li>
    
            <li className="w-full order-3 md:order-none md:w-1/2 my-10 flex justify-center items-center">
                <div className='w-96 gap-5 flex flex-col'>
                  <h1 className='text-2xl sm:text-4xl text-gray-900 truncate'>ECO-LIVING</h1>
                  <p className='text-sm sm:text-md text-gray-700'>Embrace the ECO-LIVING lifestyle at our tech village. Our commitment to sustainability resonates in every corner, inspiring us to craft solutions that not only propel us into the digital future, but also protect our planet. We champion sustainable practices, from energy-efficient buildings and waste reduction strategies to promoting clean tech innovations. ECO-LIVING is more than a concept here; it's our way of life, seamlessly blending technology and environmental stewardship. Discover how we harmonize digital advancement and ecological responsibility at ECO-LIVING.</p>
                </div>
            </li>
    
            <li className="w-full order-5 md:order-none md:w-1/2 my-10 flex justify-center items-center">
                <div className='w-96 gap-5 flex flex-col'>
                  <h1 className='text-2xl sm:text-4xl text-gray-900 truncate'>COMMUNITY CAFÉ</h1>
                  <p className='text-sm sm:text-md text-gray-700'>Step into the Community Cafe, the heart of our tech village. This isn't just a place to grab a coffee - it's a space where ideas are exchanged, connections are forged, and community spirit thrives. With the aroma of freshly brewed coffee filling the air, the Community Cafe nurtures both your intellect and your senses. Whether you're brainstorming your next big idea, collaborating with fellow innovators, or just soaking in the vibrant atmosphere, the Community Cafe is your haven of creativity, and connection.</p>
                </div>
            </li>
    
            <li className="w-full order-6 md:order-none md:w-1/2 my-10 flex justify-center items-center">
                <div className='w-[500px] h-[300px] rounded-xl overflow-hidden relative bg-white'>
                    <Image src={Tech3} alt='talent' fill />
                </div>
            </li>
    
            <li className="w-full order-8 md:order-none md:w-1/2 my-10 flex justify-center items-center">
                <div className='w-[500px] h-[300px] rounded-xl overflow-hidden relative bg-white'>
                    <Image src={Tech4} alt='talent' fill />
                </div>
            </li>
    
            <li className="w-full order-7 md:order-none md:w-1/2 my-10 flex justify-center items-center">
                <div className='w-96 gap-5 flex flex-col'>
                  <h1 className='text-2xl sm:text-4xl text-gray-900 truncate'>CONFERENCE</h1>
                  <p className='text-sm sm:text-md text-gray-700'>Welcome to the Baobab Conference, the epicenter of dialogue and discovery at our tech village. This venue hosts a plethora of events, from illuminating tech talks to transformative workshops, bringing together thought-leaders, innovators, and changemakers from across the continent and beyond. The Baobab Conference is more than a meeting place; it's a dynamic space where African tech finds its voice, diverse ideas merge, and solutions for a digital future are co-created. Engage, learn, inspire - this is the Baobab Conference.</p>
                </div>
            </li>
    
            <li className="w-full order-9 md:order-none md:w-1/2 my-10 flex justify-center items-center">
                <div className='w-96 gap-5 flex flex-col'>
                  <h1 className='text-2xl sm:text-4xl text-gray-900 truncate'>BAOBAB DESIGN LAB</h1>
                  <p className='text-sm sm:text-md text-gray-700'>The Baobab Design Lab is the creative core of our tech village. Here, designers, developers, and artists intersect to bring digital solutions to life. Armed with advanced tools and technology, the Baobab Design Lab is an incubator of ideas and a testament to the transformative power of design. From prototyping revolutionary products to crafting visually stunning interfaces, our Design Lab is where aesthetics meet functionality, and where digital dreams materialize. Dive into the fusion of technology and artistry at the Baobab Design Lab.</p>
                </div>
            </li>
    
            <li className="w-full order-10 md:order-none md:w-1/2 my-10 flex justify-center items-center">
                <div className='w-[500px] h-[300px] rounded-xl overflow-hidden relative bg-white'>
                    <Image src={Tech2} alt='talent' fill />
                </div>
            </li>
    
            <li className="w-full order-12 md:order-none md:w-1/2 my-10 flex justify-center items-center">
                <div className='w-[500px] h-[300px] rounded-xl overflow-hidden relative bg-white'>
                    <Image src={Tech6} alt='talent' fill />
                </div>
            </li>
    
            <li className="w-full order-11 md:order-none md:w-1/2 my-10 flex justify-center items-center">
                <div className='w-96 gap-5 flex flex-col'>
                  <h1 className='text-2xl sm:text-4xl text-gray-900 truncate'>BAOBAB LIBRARY</h1>
                  <p className='text-sm sm:text-md text-gray-700'>At the Baobab Library, knowledge is at your fingertips. This isn't just a repository of books - it's a gateway to a world of insights, fueling our tech village's thirst for knowledge. Packed with an extensive range of resources from tech manuals to digital journals, the Baobab Library is the ultimate stop for learning and discovery. Amidst the quiet hush, you'll find innovators deep in research, pioneers charting new courses, and explorers seeking inspiration. The Baobab Library - where the journey to innovation begins with a page turn.</p>
                </div>
            </li>
    
        </ul>
      );  
}

export default Village_old