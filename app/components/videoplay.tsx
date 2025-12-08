'use client'
import React, { useState } from 'react'

function Videoplay() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className='relative w-full h-[500px] overflow-hidden'>
      {/* Background Image/Video */}
      <div className='absolute inset-0'>
        <img 
          src="/cricket-field-background.jpg" 
          alt="Cricket Field" 
          className='w-full h-full object-cover'
        />
        {/* Overlay */}
        <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-gray-900/60 to-black/70'></div>
      </div>

      {/* Content */}
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-center px-8'>
        <div className='max-w-4xl space-y-6'>
          {/* Heading */}
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight'>
            Become Part Of Our<br />Cricket Family
          </h2>

          {/* Description */}
          <p className='text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
            luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          {/* CTA Button */}
          <div className='pt-4'>
            <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-blue-600/50 hover:shadow-blue-700/50'>
              Join Tambora Today !
            </button>
          </div>
        </div>
      </div>

      {/* Play Button Overlay (Optional) */}
      {!isPlaying && (
        <button 
          onClick={() => setIsPlaying(true)}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border-4 border-white/50'
          aria-label='Play Video'
        >
          <svg className='w-10 h-10 text-white ml-1' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M8 5v14l11-7z'/>
          </svg>
        </button>
      )}
    </section>
  )
}

export default Videoplay
