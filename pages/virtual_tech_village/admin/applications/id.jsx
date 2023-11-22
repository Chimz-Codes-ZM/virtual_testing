import Image from 'next/image';
import Layout from '../../components/layouts/layout';
import Link from 'next/link';
import {AiOutlineMail, AiOutlineLinkedin} from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsPhone } from 'react-icons/bs';


const Index = () => {
  return (
    <>
      <Layout sideHighlight='Insight'>
        <div className='w-full flex flex-col gap-5'>
        	
        	<div className='w-full flex flex-col'>
        		<h1 className='text-3xl font-bold text-gray-800'>John Doe</h1>
        		<h2 className='text-3xl font-light text-gray-800'>Business Development Manager</h2>
        		<span className='flex w-full justify-end items-center gap-2'>
        			<h3 className='text-sm text-gray-700'>Approval : </h3>
        			<h3 className='text-sm text-white px-4 py-1 rounded bg-blue-600'>pending</h3>
        		</span>
        	</div>
        	
        	<div className='w-full flex bg-gray-800 px-5 text-white items-center justify-between h-10'>
        		<span className='flex items-center gap-2 truncate overflow-hidden'>
        			<AiOutlineMail />
        			<h1 className=''>john@gmail.com</h1>
        		</span>
        		<span className='flex items-center gap-2 truncate overflow-hidden'>
        			<BsPhone />
        			<h1 className=''>john@gmail.com</h1>
        		</span>
        		<span className='flex items-center gap-2 truncate overflow-hidden'>
        			<HiOutlineLocationMarker />
        			<h1 className=''>john@gmail.com</h1>
        		</span>
        		<span className='flex items-center gap-2 truncate overflow-hidden'>
        			<AiOutlineLinkedin />
        			<h1 className=''>john@gmail.com</h1>
        		</span>
        	</div>
        	
        	<div className='w-full flex gap-5'>
        		<div className='w-1/2 h-[700px] flex flex-col gap-5'>
        			<div className='w-full h-1/2 flex flex-col gap-3'>
        				<h1 className='font-bold text-yellow-600 text-2xl'>Work Experience</h1>
        				<p className='text-sm text-gray-800'>
        				</p>
        			</div>
        			
        			<div className='w-full h-1/2 flex flex-col gap-3'>
        				<h1 className='font-bold text-yellow-600 text-2xl'>Education</h1>
        			</div>
        			
        		</div>
        		<div className='w-1/2 h-[700px] flex flex-col gap-5 px-4'>
        			
        			<div className='w-full h-1/2 flex flex-col gap-3'>
        				<h1 className='font-bold text-yellow-600 text-2xl'>Skills</h1>
        				
        				<div className='w-full flex flex-col gap-2'>
        					<div className='w-full flex justify-between items-center'>
        						<span className='w-1/2 flex text-gray-800'>SEO</span>
        						
        						<span className='w-1/2 flex justify-between'>
        							<div className='w-3 h-3 bg-gray-800 rounded-full border border-gray-600'></div>
        							<div className='w-3 h-3 bg-gray-800 rounded-full border border-gray-600'></div>
        							<div className='w-3 h-3 bg-gray-800 rounded-full border border-gray-600'></div>
        							<div className='w-3 h-3 rounded-full border border-gray-600'></div>
        							<div className='w-3 h-3 rounded-full border border-gray-600'></div>
        						</span>
        					</div>
        					<div className='w-full flex justify-between items-center'>
        						<span className='w-1/2 flex text-gray-800'>Decision Making</span>
        						
        						<span className='w-1/2 flex justify-between'>
        							<div className='w-3 h-3 bg-gray-800 rounded-full border border-gray-600'></div>
        							<div className='w-3 h-3 bg-gray-800 rounded-full border border-gray-600'></div>
        							<div className='w-3 h-3 bg-gray-800 rounded-full border border-gray-600'></div>
        							<div className='w-3 h-3 bg-gray-800 rounded-full border border-gray-600'></div>
        							<div className='w-3 h-3 rounded-full border border-gray-600'></div>
        						</span>
        					</div>
        					<div className='w-full flex justify-between items-center'>
        						<span className='w-1/2 flex text-gray-800'>Team Work</span>
        						
        						<span className='w-1/2 flex justify-between'>
        							<div className='w-3 h-3 bg-gray-800 rounded-full border border-gray-600'></div>
        							<div className='w-3 h-3 bg-gray-800 rounded-full border border-gray-600'></div>
        							<div className='w-3 h-3 rounded-full border border-gray-600'></div>
        							<div className='w-3 h-3 rounded-full border border-gray-600'></div>
        							<div className='w-3 h-3 rounded-full border border-gray-600'></div>
        						</span>
        					</div>
        					<div className='w-full flex justify-between items-center'>
        						<span className='w-1/2 flex text-gray-800'>Sales and Marketing</span>
        						
        						<span className='w-1/2 flex justify-between'>
        							<div className='w-3 h-3 bg-gray-800 rounded-full border border-gray-600'></div>
        							<div className='w-3 h-3 bg-gray-800 rounded-full border border-gray-600'></div>
        							<div className='w-3 h-3 bg-gray-800 rounded-full border border-gray-600'></div>
        							<div className='w-3 h-3 rounded-full border border-gray-600'></div>
        							<div className='w-3 h-3 rounded-full border border-gray-600'></div>
        						</span>
        					</div>
        					<div className='w-full flex justify-between items-center'>
        						<span className='w-1/2 flex text-gray-800'>Emotional Intelligence</span>
        						
        						<span className='w-1/2 flex justify-between'>
        							<div className='w-3 h-3 bg-gray-800 rounded-full border border-gray-600'></div>
        							<div className='w-3 h-3 bg-gray-800 rounded-full border border-gray-600'></div>
        							<div className='w-3 h-3 rounded-full border border-gray-600'></div>
        							<div className='w-3 h-3 rounded-full border border-gray-600'></div>
        							<div className='w-3 h-3 rounded-full border border-gray-600'></div>
        						</span>
        					</div>
        					<div className='w-full flex justify-between items-center'>
        						<span className='w-1/2 flex text-gray-800'>Email Marketing</span>
        						
        						<span className='w-1/2 flex justify-between'>
        							<div className='w-3 h-3 bg-gray-800 rounded-full border border-gray-600'></div>
        							<div className='w-3 h-3 bg-gray-800 rounded-full border border-gray-600'></div>
        							<div className='w-3 h-3 bg-gray-800 rounded-full border border-gray-600'></div>
        							<div className='w-3 h-3 bg-gray-800 rounded-full border border-gray-600'></div>
        							<div className='w-3 h-3 rounded-full border border-gray-600'></div>
        						</span>
        					</div>
        					<div className='w-full flex justify-between items-center'>
        						<span className='w-1/2 flex text-gray-800'>Google Analytics</span>
        						
        						<span className='w-1/2 flex justify-between'>
        							<div className='w-3 h-3 bg-gray-800 rounded-full border border-gray-600'></div>
        							<div className='w-3 h-3 rounded-full border border-gray-600'></div>
        							<div className='w-3 h-3 rounded-full border border-gray-600'></div>
        							<div className='w-3 h-3 rounded-full border border-gray-600'></div>
        							<div className='w-3 h-3 rounded-full border border-gray-600'></div>
        						</span>
        					</div>
        				</div>
        			</div>
        			
        			<div className='w-full h-1/2 flex flex-col gap-3'>
        				<h1 className='font-bold text-yellow-600 text-2xl'>Honours and Awards</h1>
        			</div>
        		</div>
        	</div>
        </div>
      </Layout>
    </>
  )
}

export default Index;
