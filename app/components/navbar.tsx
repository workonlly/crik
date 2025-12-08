'use client'
import React, { useState } from 'react'
import Image from 'next/image'

function Navbar() {
  const [activeLink, setActiveLink] = useState('Home')

  const navLinks = ['Home', 'About Us', 'Matches', 'Pages', 'Contact Us']

  return (
    <nav className='sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-black via-gray-900 to-black shadow-2xl border-b border-blue-500/20'>
      <div className='max-w-7xl mx-auto px-6 py-4'>
        <div className='flex flex-row justify-between items-center'>
          
          {/* Logo Section */}
          <div className='flex items-center gap-4 group cursor-pointer'>
            <div className='relative'>
              <div className='absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300'></div>
              <img 
                src="./logoc.png" 
                alt="logo" 
                width={65} 
                height={65}
                className='relative rounded-full border-2 border-blue-400 group-hover:border-blue-300 transition-all duration-300 group-hover:scale-110'
              />
            </div>
            <span className='text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-blue-300 group-hover:to-cyan-300 transition-all duration-300'>
              Kapil Yadav Cricket Centre
            </span>
          </div>

          {/* Navigation Links */}
          <div className='flex flex-row gap-2 items-center'>
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => setActiveLink(link)}
                className={`
                  relative px-5 py-2.5 text-base font-medium rounded-lg
                  transition-all duration-300 ease-out
                  ${activeLink === link 
                    ? 'text-white' 
                    : 'text-gray-300 hover:text-white'
                  }
                `}
              >
                {/* Active/Hover Background */}
                <span className={`
                  absolute inset-0 rounded-lg transition-all duration-300
                  ${activeLink === link
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 shadow-lg shadow-blue-500/50'
                    : 'bg-white/0 hover:bg-white/10'
                  }
                `}></span>
                
                {/* Text */}
                <span className='relative z-10'>{link}</span>
                
                {/* Bottom Border on Hover */}
                <span className={`
                  absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300
                  ${activeLink === link ? 'w-0' : 'w-0 hover:w-3/4'}
                `}></span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button className='relative group overflow-hidden px-8 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50'>
            {/* Animated Gradient Background */}
            <span className='absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_100%] animate-gradient'></span>
            
            {/* Button Border Glow */}
            <span className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300'></span>
            
            {/* Button Text */}
            <span className='relative z-10 flex items-center gap-2'>
              Join Us Now
              <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
              </svg>
            </span>
          </button>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
