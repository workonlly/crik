import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <footer id='contact' className='bg-black text-white'>
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
                href="https://www.facebook.com/people/Kapil-Yadav-Cricket-Centre/61585188540961/?rdid=7zm6gThBYc9jN3aE&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1AdtVrMUFK%2F" 
                target="_blank"
                rel="noopener noreferrer"
                className='w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110'
                aria-label="Facebook"
              >
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z'/>
                </svg>
              </a>
              <a 
                href="https://wa.me/message/FCOXVMHZQC6EP1" 
                target="_blank"
                rel="noopener noreferrer"
                className='w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110'
                aria-label="WhatsApp"
              >
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 32 32'>
                  <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.668 4.624 1.934 6.6L4 29l7.6-1.934A12.96 12.96 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22.917c-1.98 0-3.917-.52-5.6-1.5l-.4-.233-4.533 1.154 1.154-4.533-.233-.4A10.93 10.93 0 015.083 15c0-6.045 4.872-10.917 10.917-10.917S26.917 8.955 26.917 15 22.045 25.917 16 25.917zm5.267-7.267c-.287-.144-1.7-.84-1.963-.933-.263-.093-.454-.144-.646.144-.193.287-.74.933-.907 1.127-.167.193-.334.217-.62.073-.287-.144-1.213-.447-2.312-1.425-.855-.762-1.432-1.7-1.6-1.987-.167-.287-.018-.443.126-.587.13-.13.287-.334.43-.5.144-.167.192-.287.287-.48.096-.192.048-.36-.024-.504-.072-.144-.646-1.56-.885-2.137-.233-.56-.47-.484-.646-.493-.167-.009-.36-.011-.553-.011-.192 0-.504.072-.768.36-.263.287-1.01.987-1.01 2.404 0 1.417 1.036 2.788 1.181 2.983.144.192 2.04 3.12 4.938 4.253.691.298 1.229.475 1.648.608.692.221 1.322.19 1.82.115.555-.082 1.7-.693 1.94-1.362.24-.669.24-1.243.168-1.362-.072-.12-.263-.192-.55-.336z"/>
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
          <div className='flex flex-col gap-6 items-end text-right bg-gradient-to-l from-gray-900 via-black to-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800'>
            <h3 className='text-2xl font-extrabold mb-2 text-blue-400 tracking-wide flex items-center gap-2'>
              <svg className='w-7 h-7 text-blue-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M21 10.34V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7.34M17 17l4 4m0 0l-4-4m4 4V15a2 2 0 00-2-2h-4a2 2 0 00-2 2v4a2 2 0 002 2h4a2 2 0 002-2z' />
              </svg>
              Contact Us
            </h3>
            <div className='space-y-2'>
              <a href="tel:+918898717137" className='flex items-center gap-2 text-lg text-gray-200 hover:text-blue-400 font-semibold transition-colors duration-300'>
                <svg className='w-5 h-5 text-blue-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a2 2 0 011.7 1.06l1.52 2.72a2 2 0 01-.45 2.45l-1.27 1.27a16.001 16.001 0 006.58 6.58l1.27-1.27a2 2 0 012.45-.45l2.72 1.52A2 2 0 0121 17.72V21a2 2 0 01-2 2h-1C7.82 23 1 16.18 1 8V7a2 2 0 012-2z' />
                </svg>
                +91 88987 17137
              </a>
              <a href="tel:+918828049119" className='flex items-center gap-2 text-lg text-gray-200 hover:text-blue-400 font-semibold transition-colors duration-300'>
                <svg className='w-5 h-5 text-blue-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a2 2 0 011.7 1.06l1.52 2.72a2 2 0 01-.45 2.45l-1.27 1.27a16.001 16.001 0 006.58 6.58l1.27-1.27a2 2 0 012.45-.45l2.72 1.52A2 2 0 0121 17.72V21a2 2 0 01-2 2h-1C7.82 23 1 16.18 1 8V7a2 2 0 012-2z' />
                </svg>
                +91 88280 49119
              </a>
            </div>
            <a href="mailto:Hello@Domainsite.Com" className='flex items-center gap-2 text-gray-300 hover:text-blue-400 font-medium transition-colors duration-300'>
              <svg className='w-5 h-5 text-blue-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm2 4v1a2 2 0 01-2 2H6a2 2 0 01-2-2v-1' />
              </svg>
              kyccmumbai ( Kapil Yadav Cricket Centre)
            </a>
            <div className='flex items-center gap-2 text-gray-300 mt-2'>
              <svg className='w-5 h-5 text-blue-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243M15 11V7a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z' />
              </svg>
              <span className='font-medium'>Location:</span>
              <span className='text-gray-400'>Manohar Joshi College, City Sport, Sion&nbsp;West,&nbsp;Mumbai</span>
            </div>
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
