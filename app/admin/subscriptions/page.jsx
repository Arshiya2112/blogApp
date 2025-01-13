'use client'
import SubTableItem from '@/components/AdminComponents/SubTableItem'
import React from 'react'

const page = () => {

  //logic to be implemented

  return (
    <div className='flex-1 px-5 pt-5 sm:pt-12 sm:pl-16'>
      <h1 className='text-lg font-semibold'>Subscribed Users</h1>
      <div className='relative  h-[80vh] overflow-x-auto mt-4 border border-gray-300 scrollbar-hide'>
        <table className='w-full text-sm text-gray-600'>
          <thead className='text-xs text-left text-gray-700 uppercase bg-gray-100'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Subscriber Email
              </th>
              <th scope='col' className='hidden sm:block px-6 py-3'>
                Date Subscribed
              </th>
              <th scope='col' className='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <SubTableItem/>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default page