import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <footer className='bg-black text-white'>
      {/* Top Section with CTA */}
      <div className='border-b border-gray-800'>
        <div className='max-w-7xl mx-auto px-8 py-16'>
          <div className='flex flex-row justify-between items-center gap-8'>
            <h2 className='text-5xl md:text-6xl font-bold leading-tight max-w-3xl'>
              Cricket Coaching, Training, And Matches—Together
            </h2>
            
          </div>
        </div>
      </div>

      {/* Bottom Section with Info Grid */}
      <div className='max-w-7xl mx-auto px-8 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          
          {/* Brand Section */}
          <div className='flex flex-col gap-6'>
            <div className='flex items-center gap-3'>
              <img 
                src="/logoc.png" 
                alt="Kapil Yadav Cricket Centre" 
                width={50} 
                height={50}
                className='rounded-lg'
              />
              <span className='text-xl font-bold'>Kapil Yadav Cricket Centre</span>
            </div>
            <p className='text-gray-400 text-sm leading-relaxed'>
              Cricket coaching, training, and matches—combined to create a complete, structured pathway for every aspiring player.
            </p>
            
            {/* Social Media Icons */}
            <div className='flex flex-row gap-4'>
              <a 
                href="#" 
                className='w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110'
                aria-label="Facebook"
              >
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'/>
                </svg>
              </a>
              <a 
                href="#" 
                className='w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110'
                aria-label="Twitter"
              >
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z'/>
                </svg>
              </a>
              <a 
                href="#" 
                className='w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110'
                aria-label="YouTube"
              >
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div className='flex flex-col gap-4 items-end text-right'>
            <h3 className='text-xl font-bold mb-2'>Contact</h3>
            <a href="tel:+626761-8523-398" className='text-gray-300 hover:text-white transition-colors duration-300'>
             +91 88987 17137,+91 88280 49119
            </a>
            <a href="mailto:Hello@Domainsite.Com" className='text-gray-300 hover:text-white transition-colors duration-300'>
              kyccmumbai ( Kapil Yadav Cricket Centre)

            </a>
            <p className='text-gray-300 leading-relaxed'>
              Location - Manohar Joshi College, City Sport,   Sion West, Mumbai
            </p>
          </div>

        </div>
      </div>

      {/* Copyright Section */}
      <div className='border-t border-gray-800'>
        <div className='max-w-7xl mx-auto px-8 py-6'>
          <p className='text-center text-gray-500 text-sm'>
            © 2025 Kapil Yadav Cricket Centre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
