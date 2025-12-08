'use client'
import React, { useState } from 'react'

function Members() {
  const [formData, setFormData] = useState({
    name: '',
    place: '',
    image: '',
    facebook: '',
    twitter: '',
    instagram: ''
  })

  return (
    <div className='bg-white rounded-2xl shadow-xl border-2 border-black m-6 p-8'>
      {/* Header */}
      <div className='border-b-4 border-black pb-6 mb-8'>
        <h1 className='text-5xl font-black text-black text-center uppercase tracking-tight'>Team Members</h1>
        <p className='text-center text-gray-600 mt-2'>Add and manage team member profiles</p>
      </div>

      {/* Form */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto'>
        {/* Left Column */}
        <div className='space-y-6'>
          {/* Image Upload */}
          <div className='bg-gray-50 p-6 rounded-xl border-2 border-black'>
            <label className='block text-lg font-bold text-black mb-3 uppercase'>Member Image</label>
            <input 
              type="file" 
              accept="image/*"
              className='w-full text-black file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-2 file:border-black file:text-sm file:font-bold file:bg-black file:text-white hover:file:bg-gray-800 cursor-pointer'
            />
          </div>

          {/* Name */}
          <div className='bg-gray-50 p-6 rounded-xl border-2 border-black'>
            <label className='block text-lg font-bold text-black mb-3 uppercase'>Member Name</label>
            <input 
              type="text" 
              placeholder="Enter name..."
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className='w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-400 text-black font-medium'
            />
          </div>

          {/* Place/Position */}
          <div className='bg-gray-50 p-6 rounded-xl border-2 border-black'>
            <label className='block text-lg font-bold text-black mb-3 uppercase'>Position/Role</label>
            <input 
              type="text" 
              placeholder="Enter position..."
              value={formData.place}
              onChange={(e) => setFormData({...formData, place: e.target.value})}
              className='w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-400 text-black font-medium'
            />
          </div>
        </div>

        {/* Right Column - Social Links */}
        <div className='space-y-6'>
          <div className='bg-gray-50 p-6 rounded-xl border-2 border-black h-full'>
            <h3 className='text-lg font-bold text-black mb-6 uppercase'>Social Media Links</h3>
            <div className='space-y-4'>
              {/* Facebook */}
              <div>
                <label className='block text-sm font-bold text-black mb-2'>Facebook</label>
                <input 
                  type="url" 
                  placeholder="https://facebook.com/..."
                  value={formData.facebook}
                  onChange={(e) => setFormData({...formData, facebook: e.target.value})}
                  className='w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-400 text-black font-medium'
                />
              </div>

              {/* Twitter */}
              <div>
                <label className='block text-sm font-bold text-black mb-2'>Twitter</label>
                <input 
                  type="url" 
                  placeholder="https://twitter.com/..."
                  value={formData.twitter}
                  onChange={(e) => setFormData({...formData, twitter: e.target.value})}
                  className='w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-400 text-black font-medium'
                />
              </div>

              {/* Instagram */}
              <div>
                <label className='block text-sm font-bold text-black mb-2'>Instagram</label>
                <input 
                  type="url" 
                  placeholder="https://instagram.com/..."
                  value={formData.instagram}
                  onChange={(e) => setFormData({...formData, instagram: e.target.value})}
                  className='w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-400 text-black font-medium'
                />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons - Full Width */}
        <div className='lg:col-span-2 flex gap-4 pt-4'>
          <button className='flex-1 bg-black text-white font-bold py-4 px-8 rounded-xl border-2 border-black hover:bg-gray-800 transition-all duration-300 uppercase tracking-wide'>
            Add Member
          </button>
          <button className='flex-1 bg-white text-black font-bold py-4 px-8 rounded-xl border-2 border-black hover:bg-gray-100 transition-all duration-300 uppercase tracking-wide'>
            Clear Form
          </button>
        </div>
      </div>
    </div>
  )
}

export default Members
