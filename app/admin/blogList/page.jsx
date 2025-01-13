'use client'
import BlogTableItem from '@/components/AdminComponents/BlogTableItem'
import React from 'react'

const page = () => {

  //some logic to be implemented
  return (
    <div className='flex-1 pt-5 px-5 sm:pl-16 sm:pt-12'>
      <h1 className='text-lg font-semibold'>All Blogs</h1>
      <div className='relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
        <table className='w-full text-sm text-gray-500'>
          <thead className='text-sm text-gray-700 bg-gray-100 text-left uppercase'>
            <tr>
              <th scope='col' className='hidden sm:block px-6 py-3'>
                Author
              </th>
              <th scope='col' className='px-6 py-3'>
                Title
              </th>
              <th scope='col' className='px-6 py-3'>
                Date
              </th>
              <th scope='col' className='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          <tbody> 
            <BlogTableItem/> 
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page