'use client'
import React, { useState } from 'react'

function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'How Can I Join The Tambora Cricket Team?',
      answer: 'You can join by filling out our online registration form, attending our open tryouts, or contacting our team coordinator directly. We welcome players of all skill levels!'
    },
    {
      question: 'Do I Need Prior Cricket Experience To Join?',
      answer: 'No prior experience is necessary! We welcome players of all levels, from complete beginners to experienced cricketers. Our coaching staff will help you develop your skills regardless of your starting point.'
    },
    {
      question: 'What Equipment Do I Need To Bring?',
      answer: 'Basic equipment includes cricket whites, comfortable athletic shoes, and personal protective gear. We provide bats, balls, and wickets during training sessions. A complete equipment list will be provided upon registration.'
    },
    {
      question: 'When And Where Are The Training Sessions Held?',
      answer: 'Training sessions are held at our facility every Tuesday, Thursday, and Saturday from 4:00 PM to 7:00 PM. Additional weekend sessions are available for competitive teams. Check our schedule for holiday adjustments.'
    }
  ]

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className='bg-gradient-to-r from-black via-gray-900 to-black text-white py-20 px-8'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          
          {/* Left Side - Images and Badge */}
          <div className='relative space-y-6'>
            {/* Badge */}
            <div className='inline-block'>
              <span className='px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700'>
                FAQs
              </span>
            </div>

            {/* Heading */}
            <h2 className='text-4xl md:text-5xl font-bold leading-tight'>
              We've Heard It All—And We're Answering
            </h2>

            {/* Images Grid */}
            <div className='grid grid-cols-2 gap-4 pt-6'>
              {/* Large Image - Left */}
              <div className='rounded-3xl overflow-hidden border-4 border-gray-700 shadow-2xl h-80'>
                <img 
                  src="/cricket-player-smile.jpg" 
                  alt="Cricket Player" 
                  className='w-full h-full object-cover'
                />
              </div>

              {/* Right Column - Two Images */}
              <div className='space-y-4'>
                {/* Top Image */}
                <div className='rounded-3xl overflow-hidden border-4 border-gray-700 shadow-2xl h-48'>
                  <img 
                    src="/cricket-action-field.jpg" 
                    alt="Cricket Action" 
                    className='w-full h-full object-cover'
                  />
                </div>

                {/* Bottom Badge Card */}
                <div className='bg-blue-600 rounded-3xl p-6 shadow-2xl border-2 border-blue-500 hover:bg-blue-500 transition-all duration-300 h-28 flex items-center gap-4'>
                  <div className='w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0'>
                    <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
                    </svg>
                  </div>
                  <div>
                    <div className='text-sm font-bold text-white'>Curious About Cricket?</div>
                    <div className='text-xs text-blue-100'>We've Got You Covered!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - FAQ Accordion */}
          <div className='space-y-4'>
            {/* View All Button */}
            <div className='flex justify-end mb-6'>
              <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center gap-2'>
                View All FAQs
                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                </svg>
              </button>
            </div>

            {/* Accordion Items */}
            <div className='space-y-3'>
              {faqs.map((faq, index) => (
                <div key={index} className='overflow-hidden rounded-2xl border border-gray-700 bg-gray-800/50 backdrop-blur-sm'>
                  {/* Question Button */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`
                      w-full text-left px-6 py-5 font-semibold text-lg flex items-center justify-between transition-all duration-300
                      ${openIndex === index ? 'bg-blue-600 text-white' : 'bg-gray-800/80 text-white hover:bg-gray-700'}
                    `}
                  >
                    <span>{faq.question}</span>
                    <span className={`
                      text-2xl transition-transform duration-300 flex-shrink-0 ml-4
                      ${openIndex === index ? 'rotate-180' : 'rotate-0'}
                    `}>
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </button>

                  {/* Answer Content */}
                  <div
                    className={`
                      overflow-hidden transition-all duration-300 ease-in-out
                      ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                    `}
                  >
                    <div className='px-6 py-5 bg-gray-900/50 text-gray-300 leading-relaxed'>
                      {faq.answer}
                    </div>
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

export default Faq
