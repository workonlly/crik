'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import supabase from '../../supabase'

interface BlogPost {
  id: number
  created_at: string
  name: string
  response: string
  image_url?: string
}

function Blog() {
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from('blog')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(6)

      if (error) throw error
      setBlogs(data || [])
    } catch (error: any) {
      console.error('Error fetching blogs:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleBlogClick = (id: number) => {
    router.push(`/blog/${id}`)
  }

  if (loading) {
    return (
      <section className='bg-gradient-to-r from-black via-gray-900 to-black text-white py-20 px-8'>
        <div className='max-w-7xl mx-auto text-center'>
          <p className='text-xl text-gray-400'>Loading blogs...</p>
        </div>
      </section>
    )
  }

  return (
    <section id='matches' className='bg-gradient-to-r from-black via-gray-900 to-black text-white py-20 px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <span className='px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700'>
            Our Blog
          </span>
          <h2 className='text-4xl md:text-5xl font-bold leading-tight mt-6'>
            Latest News & Updates
          </h2>
          <p className='text-gray-400 text-lg mt-4 max-w-2xl mx-auto'>
            Stay updated with the latest cricket news, tips, and stories from our team
          </p>
        </div>

        {/* Blog Grid */}
        {blogs.length === 0 ? (
          <div className='text-center py-12'>
            <p className='text-gray-400 text-lg'>No blog posts available yet</p>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {blogs.map((blog) => (
              <div
                key={blog.id}
                onClick={() => handleBlogClick(blog.id)}
                className='bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 transition-all duration-300 cursor-pointer group hover:transform hover:scale-105'
              >
                {/* Image */}
                {blog.image_url ? (
                  <div className='relative h-48 overflow-hidden'>
                    <img
                      src={blog.image_url}
                      alt={blog.name}
                      className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent'></div>
                  </div>
                ) : (
                  <div className='h-48 bg-gray-700 flex items-center justify-center'>
                    <svg className='w-16 h-16 text-gray-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' />
                    </svg>
                  </div>
                )}

                {/* Content */}
                <div className='p-6 space-y-3'>
                  <div className='flex items-center gap-2 text-xs text-gray-400'>
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
                    </svg>
                    <span>{new Date(blog.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>

                  <h3 className='text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2'>
                    {blog.name}
                  </h3>

                  <p className='text-gray-400 text-sm leading-relaxed line-clamp-3'>
                    {blog.response}
                  </p>

                  <button className='inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm mt-2'>
                    Read More
                    <svg className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Button */}
        {blogs.length > 0 && (
          <div className='text-center mt-12'>
            <button 
              onClick={() => router.push('/blogs')}
              className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center gap-2'
            >
              View All Blogs
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Blog
