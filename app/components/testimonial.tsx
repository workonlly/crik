'use client'
import React, { useEffect, useState } from 'react'
import supabase from '../../supabase'

interface Testimonial {
  id: number
  created_at: string
  name: string
  response: string
}

function Testimonial() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setTestimonials(data || [])
    } catch (error: any) {
      console.error('Error fetching testimonials:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section className='bg-gradient-to-r from-black via-gray-900 to-black text-white py-20 px-8'>
        <div className='max-w-7xl mx-auto text-center'>
          <p className='text-xl text-gray-400'>Loading testimonials...</p>
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
            Testimonials
          </span>
          <h2 className='text-4xl md:text-5xl font-bold leading-tight mt-6'>
            What Our Players Say
          </h2>
          <p className='text-gray-400 text-lg mt-4 max-w-2xl mx-auto'>
            Hear from our community about their experience with us
          </p>
        </div>

        {/* Testimonials Grid */}
        {testimonials.length === 0 ? (
          <div className='text-center py-12'>
            <p className='text-gray-400 text-lg'>No testimonials available yet</p>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className='bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 group hover:transform hover:scale-105'
              >
                {/* Quote Icon */}
                <div className='mb-6'>
                  <svg
                    className='w-12 h-12 text-blue-500 opacity-50'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
                  </svg>
                </div>

                {/* Testimonial Text */}
                <p className='text-gray-300 leading-relaxed mb-6 line-clamp-6'>
                  {testimonial.response}
                </p>

                {/* Author Info */}
                <div className='pt-6 border-t border-gray-700'>
                  <h4 className='text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300'>
                    {testimonial.name}
                  </h4>
                  <p className='text-xs text-gray-500 mt-1'>
                    {new Date(testimonial.created_at).toLocaleDateString('en-US', {
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Testimonial
