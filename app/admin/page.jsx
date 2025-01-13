import BlogTableItem from '@/components/AdminComponents/BlogTableItem'
import React from 'react'

const page = () => {
  return (
    <div className='pt-10 px-5 sm:pt-12 sm:pl-16 h-[100vh]'>
      
        <h1 className='text-2xl font-bold'>Welcome Admin</h1>
        <h3 className='text-xl font-semibold mt-10'>Admin Dashboard</h3>
        <ol className='list-disc mt-10'>
          <li className='font-semibold text-lg mb-10'>Click on <strong>Add Blog</strong> to create a new Blog.</li>
          <li className='font-semibold text-lg mb-10'>Click on <strong>All Blogs</strong> to get a list of all blogs published, view/remove them.</li>
          <li className='font-semibold text-lg mb-10'>Click on <strong>Subscribed Users</strong> to get a list of all subscribed users, view/remove them.</li>
        </ol>
      
    </div>
  )
}

export default page