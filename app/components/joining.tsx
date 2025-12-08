import React from 'react'

function Joining() {
  const steps = [
    {
      icon: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
        </svg>
      ),
      title: 'Fill Out The Registration Form',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      icon: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
        </svg>
      ),
      title: 'Attend A Trial Session',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      icon: (
        <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' />
        </svg>
      ),
      title: 'Become An Official Member',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    }
  ]

  return (
    <section className='bg-gradient-to-r from-black via-gray-900 to-black text-white py-20 px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          
          {/* Left Side - Image Collage */}
          <div className='relative'>
            {/* Main Large Image - Black & White */}
            <div className='relative rounded-3xl overflow-hidden border-4 border-gray-700 shadow-2xl'>
              <img 
                src="/cricket-bowler-bw.jpg" 
                alt="Cricket Player Bowling" 
                className='w-full h-[500px] object-cover grayscale'
              />
            </div>

            {/* Secondary Image - Color */}
            <div className='absolute bottom-8 right-8 rounded-3xl overflow-hidden border-4 border-gray-700 shadow-2xl w-64 h-48 z-10 transform hover:scale-105 transition-transform duration-300'>
              <img 
                src="/cricket-batting.jpg" 
                alt="Cricket Batting" 
                className='w-full h-full object-cover'
              />
            </div>

            {/* Stats Badge */}
            <div className='absolute top-8 right-8 bg-gray-800 rounded-3xl px-8 py-6 shadow-2xl z-10 border-2 border-gray-700'>
              <div className='text-center'>
                <div className='text-4xl font-bold text-white mb-1'>300+</div>
                <div className='text-sm text-gray-400 font-medium'>Members Joined</div>
              </div>
            </div>
          </div>

          {/* Right Side - Steps Content */}
          <div className='space-y-8'>
            {/* Badge */}
            <div className='inline-block'>
              <span className='px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700'>
                Our Steps
              </span>
            </div>

            {/* Heading */}
            <h2 className='text-4xl md:text-5xl font-bold leading-tight'>
              Ready To Play? Here's How To Join The Squad
            </h2>

            {/* Steps List */}
            <div className='space-y-6 pt-4'>
              {steps.map((step, index) => (
                <div key={index} className='flex gap-5 group'>
                  {/* Icon Circle */}
                  <div className='flex-shrink-0'>
                    <div className='w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-600/50'>
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className='flex-1 space-y-2'>
                    <h3 className='text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300'>
                      {step.title}
                    </h3>
                    <p className='text-gray-400 leading-relaxed'>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Joining
