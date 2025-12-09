'use client'
import React, { useState } from 'react'
import Image from 'next/image'

function Choose() {
  const [activeTab, setActiveTab] = useState('Professional Coaching')

  const tabs = [
    'Professional Coaching',
    'Inclusive Community',
    'Modern Facilities'
  ]

  const content = {
    'Professional Coaching': {
      title: 'Coaching Built For Performance And Progress',
      description: 'Fusce efficitur justo non maximus iaculis. Aenean in diam quis diam feugiat pulvinar. Ut sit amet congue sapien. Nulla varius est vitae risus cursus malesuada at id nulla.',
      image: './crk/crik3.jpg'
    },
    'Inclusive Community': {
      title: 'A Welcoming Environment For All',
      description: 'Join a diverse community of cricket enthusiasts where everyone is valued. We foster an inclusive atmosphere that encourages growth, friendship, and mutual respect.',
      image: './crk/crik1.jpg'
    },
    'Modern Facilities': {
      title: 'State-Of-The-Art Training Grounds',
      description: 'Train with the best equipment and facilities. Our modern cricket grounds feature professional-grade pitches, nets, and amenities to enhance your game.',
      image: './crk/crik2.jpg'
    }
  }

  return (
    <section className='bg-gradient-to-r from-black via-gray-900 to-black text-white py-20 px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          
          {/* Left Side - Content */}
          <div className='space-y-8'>
            {/* Badge */}
            <div className='inline-block'>
              <span className='px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700'>
                Why Choose Us
              </span>
            </div>

            {/* Heading */}
            <h2 className='text-4xl md:text-5xl font-bold leading-tight'>
              Where Passion<br />Meets Performance
            </h2>

            {/* Image Card with Description */}
            <div className='bg-gray-800/50 backdrop-blur-sm rounded-3xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300'>
              <div className='flex flex-col md:flex-row gap-6'>
                <div className='flex-shrink-0'>
                  <div className='w-40 h-48 rounded-2xl overflow-hidden bg-gray-700'>
                    <img 
                      src="./img/im4.jpg" 
                      alt="Young Cricketer" 
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>
                <div className='flex-1 flex flex-col justify-center'>
                  <p className='text-gray-300 leading-relaxed'>
                   "Priyanshu Singh shined in the Giles Shield with a superb all-round show. He bowled 6 overs with 2 maidens, giving just 13 runs and taking a brilliant 5-wicket haul. He also contributed with a quick 27 off 14 balls, making it a standout performance."
                   </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Tabbed Content */}
          <div className='space-y-6'>
            {/* Tab Buttons */}
            <div className='flex flex-wrap gap-3'>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    px-6 py-3 rounded-full font-medium transition-all duration-300
                    ${activeTab === tab
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                    }
                  `}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content Card */}
            <div className='bg-gray-800/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 group'>
              {/* Image */}
              <div className='relative h-64 overflow-hidden'>
                <img 
                  src={content[activeTab as keyof typeof content].image}
                  alt={activeTab}
                  className='w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent'></div>
              </div>

              {/* Content */}
              <div className='p-8 space-y-4'>
                <h3 className='text-2xl font-bold leading-tight'>
                  {content[activeTab as keyof typeof content].title}
                </h3>
                <p className='text-gray-400 leading-relaxed'>
                  {content[activeTab as keyof typeof content].description}
                </p>
                <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 mt-4'>
                  Read More
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Choose
