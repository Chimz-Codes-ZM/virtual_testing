import Image from 'next/image';
import Layout from '../../components/layouts/layout';
import Link from 'next/link';

const Index = () => {
  return (
    <>
      <Layout sideHighlight='Insight'>
        <div className='w-full flex flex-col gap-5 mt-16'>
        	
        	<p className='text-gray-800'>Applications to join Baobabpad</p>
        	
        	<div className='flex items-center'>
        		<span className='text-lg font-bold text-gray-900 w-32 pl-2 border-b-2 border-gray-700'>Applications</span>
        		<span className='text-lg font-bold text-gray-900 w-32 pl-2 border-b-2 border-gray-100'>Approved</span>
        		<span className='text-lg font-bold text-gray-900 w-32 pl-2 border-b-2 border-gray-100'>Denied</span>
        	</div>
        	
        	<div className='w-full flex flex-col'>
        	
        		<div className='w-full flex border-b border-gray-600'>
        			<span className='text-sm font-bold text-gray-800 flex flex-grow'>Names</span>
        			<span className='text-sm font-bold text-gray-800 w-20'>Approve</span>
        			<span className='text-sm font-bold text-gray-800 w-20'>Deny</span>
        		</div>
        	
        		<div className='w-full flex border-b py-2 border-gray-600'>
        			<span className='text-md text-gray-800 flex flex-grow'>Samson</span>
        			<span className='text-md text-gray-800 w-20 flex justify-center items-center'>
        				<a href='#'>
        					<div className='w-4 h-4 border-2 border-green-600 rounded'></div>
        				</a>
        			</span>
        			<span className='text-md text-red-600 w-20 flex justify-center items-center'>
        				<a href='#'>
        					<div className='w-4 h-4 border-2 border-red-600 rounded'></div>
        				</a>
        			</span>
        		</div>
        	
        		<div className='w-full flex border-b py-2 border-gray-600'>
        			<span className='text-md text-gray-800 flex flex-grow'>Chimwemwe</span>
        			<span className='text-md text-gray-800 w-20 flex justify-center items-center'>
        				<a href='#'>
        					<div className='w-4 h-4 border-2 border-green-600 rounded'></div>
        				</a>
        			</span>
        			<span className='text-md text-red-600 w-20 flex justify-center items-center'>
        				<a href='#'>
        					<div className='w-4 h-4 border-2 border-red-600 rounded'></div>
        				</a>
        			</span>
        		</div>
        	
        		<div className='w-full flex border-b py-2 border-gray-600'>
        			<span className='text-md text-gray-800 flex flex-grow'>Salomon</span>
        			<span className='text-md text-gray-800 w-20 flex justify-center items-center'>
        				<a href='#'>
        					<div className='w-4 h-4 border-2 border-green-600 rounded'></div>
        				</a>
        			</span>
        			<span className='text-md text-red-600 w-20 flex justify-center items-center'>
        				<a href='#'>
        					<div className='w-4 h-4 border-2 border-red-600 rounded'></div>
        				</a>
        			</span>
        		</div>
        		
        	</div>

         
        </div>
      </Layout>
    </>
  )
}

export default Index;
