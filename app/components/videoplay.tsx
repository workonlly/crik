'use client'
import React, { useState } from 'react'

function Videoplay() {
  return (
    <section className='bg-gradient-to-r from-black via-gray-900 to-black text-white py-20 px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          
          {/* Left Side - Video */}
          <div className='relative rounded-3xl overflow-hidden border-4 border-gray-700 shadow-2xl group'>
            <video 
              className='w-full h-full object-cover'
              autoPlay
              muted
              loop
            >
              <source src="/vid1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Right Side - Content */}
          <div className='space-y-6'>
            {/* Badge */}
            <div className='inline-block'>
              <span className='px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700'>
                Join Us
              </span>
            </div>

            {/* Heading */}
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight'>
              Become Part Of Our<br />Cricket Family
            </h2>

            {/* Description */}
            <p className='text-lg text-gray-400 leading-relaxed'>
              Join our passionate cricket community where players of all skill levels come together to train, compete, and grow. Experience world-class coaching, state-of-the-art facilities, and a supportive environment that brings out the champion in you.
            </p>

            {/* Features List */}
            <div className='space-y-3 pt-4'>
              <div className='flex items-center gap-3'>
                <svg className='w-6 h-6 text-blue-400 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
                <span className='text-gray-300'>Professional coaching and training programs</span>
              </div>
              <div className='flex items-center gap-3'>
                <svg className='w-6 h-6 text-blue-400 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
                <span className='text-gray-300'>Modern facilities and equipment</span>
              </div>
              <div className='flex items-center gap-3'>
                <svg className='w-6 h-6 text-blue-400 flex-shrink-0' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                </svg>
                <span className='text-gray-300'>Supportive and inclusive community</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className='pt-6'>
              <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-blue-600/50 hover:shadow-blue-700/50 inline-flex items-center gap-2'>
                Join Us Today
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Videoplay
