'use client'
import React, { useState, useEffect } from 'react'
import supabase from '../../supabase'

interface HeroImage {
  name: string
  publicUrl: string
}

function Hero() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [heroImages, setHeroImages] = useState<HeroImage[]>([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    fetchHeroImages()
  }, [])

  const fetchHeroImages = async () => {
    try {
      const { data, error } = await supabase.storage
        .from('hero_images')
        .list()

      if (error) throw error

      const images = data.map((file) => {
        const { data: urlData } = supabase.storage
          .from('hero_images')
          .getPublicUrl(file.name)
        
        return {
          name: file.name,
          publicUrl: urlData.publicUrl
        }
      })

      setHeroImages(images)
    } catch (error: any) {
      console.error('Error fetching images:', error)
      showMessage('error', 'Failed to fetch images')
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUpload = async () => {
    if (!selectedImage) {
      showMessage('error', 'Please select an image first')
      return
    }

    setLoading(true)
    setMessage({ type: '', text: '' })

    try {
      const fileExt = selectedImage.name.split('.').pop()
      const fileName = `hero_${Date.now()}.${fileExt}`

      const { error: uploadError } = await supabase.storage
        .from('hero_images')
        .upload(fileName, selectedImage, {
          cacheControl: '3600',
          upsert: false
        })

      if (uploadError) throw uploadError

      showMessage('success', 'Image uploaded successfully!')
      resetForm()
      fetchHeroImages()
    } catch (error: any) {
      console.error('Error uploading image:', error)
      showMessage('error', `Upload failed: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (fileName: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return

    setLoading(true)
    try {
      const { error } = await supabase.storage
        .from('hero_images')
        .remove([fileName])

      if (error) throw error

      showMessage('success', 'Image deleted successfully!')
      fetchHeroImages()
    } catch (error: any) {
      console.error('Error deleting image:', error)
      showMessage('error', 'Failed to delete image')
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setSelectedImage(null)
    setPreviewUrl(null)
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement
    if (fileInput) fileInput.value = ''
  }

  const showMessage = (type: string, text: string) => {
    setMessage({ type, text })
    setTimeout(() => setMessage({ type: '', text: '' }), 5000)
  }

  return (
    <div className='bg-white rounded-2xl shadow-xl border-2 border-black m-6 p-8'>
      {/* Header */}
      <div className='border-b-4 border-black pb-6 mb-8'>
        <h1 className='text-5xl font-black text-black text-center uppercase tracking-tight'>Hero Image Manager</h1>
        <p className='text-center text-gray-600 mt-2'>Upload and manage hero section images</p>
      </div>

      {/* Message */}
      {message.text && (
        <div className={`mb-6 p-4 rounded-lg border-2 ${
          message.type === 'success' 
            ? 'bg-green-50 border-green-500 text-green-800' 
            : 'bg-red-50 border-red-500 text-red-800'
        }`}>
          {message.text}
        </div>
      )}

      {/* Content */}
      <div className='max-w-4xl mx-auto space-y-8 mb-8'>
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
        {previewUrl && (
          <div className='bg-gray-50 p-8 rounded-xl border-2 border-black'>
            <h3 className='text-lg font-bold text-black mb-4 uppercase'>Preview</h3>
            <div className='relative aspect-video w-full bg-white border-2 border-black rounded-lg overflow-hidden'>
              <img 
                src={previewUrl} 
                alt="Preview" 
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className='flex gap-4 pt-4'>
          <button 
            onClick={handleUpload}
            disabled={loading || !selectedImage}
            className='flex-1 bg-black text-white font-bold py-4 px-8 rounded-xl border-2 border-black hover:bg-gray-800 transition-all duration-300 uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {loading ? 'Uploading...' : 'Upload Image'}
          </button>
          <button 
            onClick={resetForm}
            disabled={loading}
            className='flex-1 bg-white text-black font-bold py-4 px-8 rounded-xl border-2 border-black hover:bg-gray-100 transition-all duration-300 uppercase tracking-wide disabled:opacity-50'
          >
            Reset
          </button>
        </div>
      </div>

      {/* Hero Images Gallery */}
      <div className='border-t-4 border-black pt-8 mt-8'>
        <h2 className='text-3xl font-black text-black mb-6 uppercase'>Uploaded Hero Images</h2>
        
        {heroImages.length === 0 ? (
          <div className='text-center py-12 bg-gray-50 rounded-xl border-2 border-black'>
            <p className='text-gray-500 text-lg'>No hero images uploaded yet</p>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {heroImages.map((image) => (
              <div key={image.name} className='bg-gray-50 rounded-xl border-2 border-black overflow-hidden hover:shadow-xl transition-all duration-300'>
                {/* Image */}
                <div className='relative aspect-video w-full bg-gray-200'>
                  <img 
                    src={image.publicUrl} 
                    alt={image.name}
                    className='w-full h-full object-cover'
                  />
                </div>
                
                {/* Content */}
                <div className='p-4 space-y-3'>
                  <p className='text-sm text-gray-600 truncate' title={image.name}>
                    {image.name}
                  </p>
                  
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(image.name)}
                    disabled={loading}
                    className='w-full bg-red-600 text-white font-bold py-2 px-4 rounded-lg border-2 border-red-700 hover:bg-red-700 transition-all duration-300 disabled:opacity-50'
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Hero
