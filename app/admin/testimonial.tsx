'use client'
import React, { useState } from 'react'

function Testimonial() {
  const [formData, setFormData] = useState({
    name: '',
    response: '',
    rating: 5
  })

  return (
    <div className='bg-white rounded-2xl shadow-xl border-2 border-black m-6 p-8'>
      {/* Header */}
      <div className='border-b-4 border-black pb-6 mb-8'>
        <h1 className='text-5xl font-black text-black text-center uppercase tracking-tight'>Testimonials</h1>
        <p className='text-center text-gray-600 mt-2'>Manage customer testimonials and reviews</p>
      </div>

      {/* Form */}
      <div className='space-y-6 max-w-3xl mx-auto'>
        {/* Name */}
        <div className='bg-gray-50 p-6 rounded-xl border-2 border-black'>
          <label className='block text-lg font-bold text-black mb-3 uppercase'>Customer Name</label>
          <input 
            type="text" 
            placeholder="Enter customer name..."
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className='w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-400 text-black font-medium'
          />
        </div>

        {/* Rating */}
        <div className='bg-gray-50 p-6 rounded-xl border-2 border-black'>
          <label className='block text-lg font-bold text-black mb-3 uppercase'>Rating</label>
          <div className='flex gap-2'>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setFormData({...formData, rating: star})}
                className={`text-4xl transition-all duration-200 ${
                  star <= formData.rating ? 'text-black' : 'text-gray-300'
                }`}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        {/* Response/Review */}
        <div className='bg-gray-50 p-6 rounded-xl border-2 border-black'>
          <label className='block text-lg font-bold text-black mb-3 uppercase'>Testimonial Message</label>
          <textarea 
            placeholder="Enter customer testimonial..."
            value={formData.response}
            onChange={(e) => setFormData({...formData, response: e.target.value})}
            rows={6}
            className='w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-400 text-black font-medium resize-none'
          />
        </div>

        {/* Action Buttons */}
        <div className='flex gap-4 pt-4'>
          <button className='flex-1 bg-black text-white font-bold py-4 px-8 rounded-xl border-2 border-black hover:bg-gray-800 transition-all duration-300 uppercase tracking-wide'>
            Save Testimonial
          </button>
          <button className='flex-1 bg-white text-black font-bold py-4 px-8 rounded-xl border-2 border-black hover:bg-gray-100 transition-all duration-300 uppercase tracking-wide'>
            Clear
          </button>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
