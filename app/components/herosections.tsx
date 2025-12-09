'use client'
import React, { useState, useEffect } from 'react'
import supabase from '../../supabase'

interface HeroImage {
  name: string
  publicUrl: string
}

function Herosections() {
  const [heroImages, setHeroImages] = useState<HeroImage[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchHeroImages()
  }, [])

  useEffect(() => {
    if (heroImages.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
      }, 5000) // Change image every 5 seconds

      return () => clearInterval(interval)
    }
  }, [heroImages.length])

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
      console.error('Error fetching hero images:', error)
    } finally {
      setLoading(false)
    }
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  if (loading) {
    return (
      <div className='relative bg-black h-screen bg-gradient-to-r from-black via-gray-900 to-black flex items-center justify-center'>
        <div className='text-white text-2xl'>Loading...</div>
      </div>
    )
  }

  if (heroImages.length === 0) {
    return (
      <div className='relative bg-black h-screen bg-gradient-to-r from-black via-gray-900 to-black flex items-center justify-center'>
        <div className='text-center text-white'>
          <h2 className='text-4xl font-bold mb-4'>No Hero Images</h2>
          <p className='text-gray-400'>Upload images in the admin panel to see them here</p>
        </div>
      </div>
    )
  }

  return (
    <div className='relative bg-black h-screen bg-gradient-to-r from-black via-gray-900 to-black'>
      {/* Slider Container */}
      <div className='relative h-full w-full overflow-hidden'>
        {/* Images */}
        {heroImages.map((image, index) => (
          <div
            key={image.name}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.publicUrl}
              alt={`Hero ${index + 1}`}
              className='w-full h-full object-cover'
            />
            {/* Overlay */}
            <div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent'></div>
          </div>
        ))}

        {/* Content Overlay */}
        <div className='absolute inset-0 flex items-center justify-center z-10'>
          <div className='text-center text-white px-8 max-w-4xl'>
            <h1 className='text-5xl md:text-7xl font-black mb-6 leading-tight'>
              Welcome to Kapil Yadav<br />Cricket Centre
            </h1>
            <p className='text-xl md:text-2xl text-gray-300 mb-8'>
              Excellence in Cricket Training & Development
            </p>
            <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-2xl'>
              Get Started
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        {heroImages.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className='absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110'
              aria-label='Previous slide'
            >
              <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={3} d='M15 19l-7-7 7-7' />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className='absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/20 backdrop-blur-sm hover:bg-white/40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110'
              aria-label='Next slide'
            >
              <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={3} d='M9 5l7 7-7 7' />
              </svg>
            </button>
          </>
        )}

        {/* Dots Navigation */}
        {heroImages.length > 1 && (
          <div className='absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3'>
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-12 h-3 bg-blue-600'
                    : 'w-3 h-3 bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Herosections
