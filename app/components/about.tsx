import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <section className='bg-gradient-to-r from-black via-gray-900 to-black text-white py-20 px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          
          {/* Left Side - Images Collage */}
          <div className='relative'>
            {/* Main Cricket Image */}
            <div className='relative z-10 rounded-3xl overflow-hidden border-4 border-white shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500'>
              <img 
                src="/cricket-player.jpg" 
                alt="Cricket Player" 
                className='w-full h-[500px] object-cover'
              />
            </div>

            {/* Secondary Image - Cricket Ball */}
            <div className='absolute -top-8 -left-8 z-0 rounded-3xl overflow-hidden border-4 border-white shadow-2xl w-48 h-48 transform -rotate-6 hover:rotate-0 transition-transform duration-500'>
              <img 
                src="/cricket-ball.jpg" 
                alt="Cricket Ball" 
                className='w-full h-full object-cover'
              />
            </div>
            </div>

          {/* Right Side - Content */}
          <div className='space-y-6'>
            {/* Badge */}
            <div className='inline-block'>
              <span className='px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700'>
                About Us
              </span>
            </div>

            {/* Heading */}
            <h2 className='text-4xl md:text-5xl font-bold leading-tight'>
              Behind Every Boundary, There's A Brotherhood
            </h2>

            {/* Description */}
            <p className='text-gray-400 text-lg leading-relaxed'>
              Sed dignissim massa tellus, ac pulvinar dolor porta quis. Aenean consequat, 
              velit eget vulputate lobortis, sapien tortor maximus nulla, sit amet ultrices 
              velit lectus sed turpis. Nunc a convallis lorem, ut pretium nisi.
            </p>

            {/* Features List */}
            <div className='space-y-4 pt-4'>
              <div className='flex items-start gap-3'>
                <div className='mt-1 flex-shrink-0'>
                  <svg className='w-6 h-6 text-blue-400' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                </div>
                <div>
                  <h3 className='text-lg font-semibold'>A Place Where Talent Meets Opportunity</h3>
                </div>
              </div>

              <div className='flex items-start gap-3'>
                <div className='mt-1 flex-shrink-0'>
                  <svg className='w-6 h-6 text-blue-400' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                </div>
                <div>
                  <h3 className='text-lg font-semibold'>Guided By Teamwork, Discipline, And Respect</h3>
                </div>
              </div>

              <div className='flex items-start gap-3'>
                <div className='mt-1 flex-shrink-0'>
                  <svg className='w-6 h-6 text-blue-400' fill='currentColor' viewBox='0 0 20 20'>
                    <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                  </svg>
                </div>
                <div>
                  <h3 className='text-lg font-semibold'>Creating Champions On And Off The Field</h3>
                </div>
              </div>
            </div>

            {/* Founder Card */}
            <div className='flex items-center gap-4 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 mt-8'>
              <div className='relative'>
                <div className='w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1'>
                  <img 
                    src="/founder.jpg" 
                    alt="Elsa Verina" 
                    className='w-full h-full rounded-full object-cover border-2 border-gray-800'
                  />
                </div>
              </div>
              <div className='flex-1'>
                <h4 className='text-lg font-bold'>Elsa Verina</h4>
                <p className='text-gray-400 text-sm'>Founder & Head Coach</p>
              </div>
              <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105'>
                Read More
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
