import React from 'react'
import Hero from './hero'
import Blog from './blog'
import Members from './members'
import Testimonial from './testimonial'

function page() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-100 to-gray-200'>
      {/* Admin Header */}
      <div className='bg-black text-white py-8 px-6 shadow-2xl border-b-4 border-white'>
        <div className='max-w-7xl mx-auto'>
          <h1 className='text-6xl font-black uppercase tracking-tighter text-center'>Admin Dashboard</h1>
          <p className='text-center text-gray-300 mt-2'>Manage your cricket centre content</p>
        </div>
      </div>

      {/* Content Sections */}
      <div className='max-w-7xl mx-auto py-8'>
        <div className='space-y-8'>
          <div><Hero /></div>
          <div><Members /></div>
          <div><Blog /></div>
          <div><Testimonial /></div>
        </div>
      </div>

      {/* Footer */}
      <div className='bg-black text-white py-6 mt-12 border-t-4 border-white'>
        <p className='text-center text-sm text-gray-400'>© 2025 Kapil Yadav Cricket Centre - Admin Panel</p>
      </div>
    </div>
  )
}

export default page
