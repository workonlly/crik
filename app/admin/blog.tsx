'use client'
import React, { useState } from 'react'

function Blog() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: ''
  })

  return (
    <div className='bg-white rounded-2xl shadow-xl border-2 border-black m-6 p-8'>
      {/* Header */}
      <div className='border-b-4 border-black pb-6 mb-8'>
        <h1 className='text-5xl font-black text-black text-center uppercase tracking-tight'>Blog Management</h1>
        <p className='text-center text-gray-600 mt-2'>Create and manage blog posts</p>
      </div>

      {/* Form */}
      <div className='space-y-6 max-w-3xl mx-auto'>
        {/* Image Upload */}
        <div className='bg-gray-50 p-6 rounded-xl border-2 border-black'>
          <label className='block text-lg font-bold text-black mb-3 uppercase'>Blog Image</label>
          <input 
            type="file" 
            accept="image/*"
            className='w-full text-black file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-2 file:border-black file:text-sm file:font-bold file:bg-black file:text-white hover:file:bg-gray-800 cursor-pointer'
          />
        </div>

        {/* Title */}
        <div className='bg-gray-50 p-6 rounded-xl border-2 border-black'>
          <label className='block text-lg font-bold text-black mb-3 uppercase'>Blog Title</label>
          <input 
            type="text" 
            placeholder="Enter blog title..."
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            className='w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-400 text-black font-medium'
          />
        </div>

        {/* Description */}
        <div className='bg-gray-50 p-6 rounded-xl border-2 border-black'>
          <label className='block text-lg font-bold text-black mb-3 uppercase'>Blog Description</label>
          <textarea 
            placeholder="Enter blog description..."
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            rows={6}
            className='w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-400 text-black font-medium resize-none'
          />
        </div>

        {/* Action Buttons */}
        <div className='flex gap-4 pt-4'>
          <button className='flex-1 bg-black text-white font-bold py-4 px-8 rounded-xl border-2 border-black hover:bg-gray-800 transition-all duration-300 uppercase tracking-wide'>
            Save Blog
          </button>
          <button className='flex-1 bg-white text-black font-bold py-4 px-8 rounded-xl border-2 border-black hover:bg-gray-100 transition-all duration-300 uppercase tracking-wide'>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default Blog
