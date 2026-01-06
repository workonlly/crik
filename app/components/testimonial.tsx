'use client'
import React, { useEffect, useState } from 'react'
import supabase from '../../supabase'

interface GalleryImage {
  name: string
  url: string
}

function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  useEffect(() => {
    fetchGalleryImages()
  }, [])

  const fetchGalleryImages = async () => {
    try {
      const { data, error } = await supabase.storage
        .from('gallery')
        .list()

      if (error) throw error

      // Generate public URLs for each image
      const imageList = (data || []).map((file) => ({
        name: file.name,
        url: supabase.storage
          .from('gallery')
          .getPublicUrl(file.name).data.publicUrl
      }))

      setImages(imageList)
    } catch (error: any) {
      console.error('Error fetching gallery images:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section className='bg-gradient-to-r from-black via-gray-900 to-black text-white py-20 px-8'>
        <div className='max-w-7xl mx-auto text-center'>
          <p className='text-xl text-gray-400'>Loading gallery...</p>
        </div>
      </section>
    )
  }

  return (
    <section className='bg-gradient-to-r from-black via-gray-900 to-black text-white py-20 px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <span className='px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700'>
            Gallery
          </span>
          <h2 className='text-4xl md:text-5xl font-bold leading-tight mt-6'>
            Cricket Cup Memories
          </h2>
          <p className='text-gray-400 text-lg mt-4 max-w-2xl mx-auto'>
            Relive the exciting moments and highlights from our events
          </p>
        </div>

        {/* Gallery Grid */}
        {images.length === 0 ? (
          <div className='text-center py-12'>
            <p className='text-gray-400 text-lg'>No gallery images available yet</p>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {images.map((image) => (
              <div
                key={image.name}
                onClick={() => setSelectedImage(image)}
                className='relative group cursor-pointer overflow-hidden rounded-2xl border border-gray-700 hover:border-blue-500 transition-all duration-300'
              >
                <div className='relative w-full h-[32rem] bg-gray-800'>
                  <img
                    src={image.url}
                    alt={image.name}
                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300'
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className='fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4'
          onClick={() => setSelectedImage(null)}
        >
          <div
            className='relative max-w-4xl max-h-screen'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className='absolute top-4 right-4 text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 z-10'
            >
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.name}
              className='max-w-full max-h-screen object-contain'
            />
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
