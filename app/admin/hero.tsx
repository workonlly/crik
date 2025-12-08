'use client'
import React, { useState } from 'react'

function Hero() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className='bg-white rounded-2xl shadow-xl border-2 border-black m-6 p-8'>
      {/* Header */}
      <div className='border-b-4 border-black pb-6 mb-8'>
        <h1 className='text-5xl font-black text-black text-center uppercase tracking-tight'>Hero Image Manager</h1>
        <p className='text-center text-gray-600 mt-2'>Upload and manage hero section images</p>
      </div>

      {/* Content */}
      <div className='max-w-4xl mx-auto space-y-8'>
        {/* Upload Area */}
        <div className='bg-gray-50 p-8 rounded-xl border-2 border-black'>
          <label className='block text-lg font-bold text-black mb-4 uppercase'>Upload Hero Image</label>
          
          {/* File Input */}
          <div className='relative'>
            <input 
              type="file" 
              accept="image/*"
              onChange={handleImageChange}
              className='w-full text-black file:mr-4 file:py-4 file:px-8 file:rounded-lg file:border-2 file:border-black file:text-sm file:font-bold file:bg-black file:text-white hover:file:bg-gray-800 cursor-pointer'
            />
          </div>
          
          <p className='text-sm text-gray-600 mt-3'>Supported formats: JPG, PNG, WebP (Max size: 5MB)</p>
        </div>

        {/* Preview Area */}
        {selectedImage && (
          <div className='bg-gray-50 p-8 rounded-xl border-2 border-black'>
            <h3 className='text-lg font-bold text-black mb-4 uppercase'>Preview</h3>
            <div className='relative aspect-video w-full bg-white border-2 border-black rounded-lg overflow-hidden'>
              <img 
                src={selectedImage} 
                alt="Preview" 
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className='flex gap-4 pt-4'>
          <button className='flex-1 bg-black text-white font-bold py-4 px-8 rounded-xl border-2 border-black hover:bg-gray-800 transition-all duration-300 uppercase tracking-wide'>
            Upload Image
          </button>
          <button className='flex-1 bg-white text-black font-bold py-4 px-8 rounded-xl border-2 border-black hover:bg-gray-100 transition-all duration-300 uppercase tracking-wide'>
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
