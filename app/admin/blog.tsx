'use client'
import React, { useState, useEffect } from 'react'
import supabase from '../../supabase'

interface Blog {
  id: number
  created_at: string
  name: string
  response: string
  image_url?: string
}

function Blog() {
  const [formData, setFormData] = useState({
    name: '',
    response: ''
  })
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [blogs, setBlogs] = useState<Blog[]>([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    fetchBlogs()
  }, [])

  const fetchBlogs = async () => {
    try {
      const { data, error } = await supabase
        .from('blog')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setBlogs(data || [])
    } catch (error: any) {
      console.error('Error fetching blogs:', error)
      showMessage('error', 'Failed to fetch blogs')
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0])
    }
  }

  const uploadImage = async (file: File): Promise<string | null> => {
    try {
      const fileExt = file.name.split('.').pop()
      const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExt}`
      const filePath = fileName

      const { data, error: uploadError } = await supabase.storage
        .from('blog')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        })

      if (uploadError) {
        console.error('Upload error details:', uploadError)
        throw uploadError
      }

      const { data: urlData } = supabase.storage
        .from('blog')
        .getPublicUrl(filePath)

      return urlData.publicUrl
    } catch (error: any) {
      console.error('Error uploading image:', error)
      showMessage('error', `Upload failed: ${error.message}`)
      return null
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ type: '', text: '' })

    try {
      let imageUrl = ''
      if (imageFile) {
        const url = await uploadImage(imageFile)
        if (url) {
          imageUrl = url
        } else {
          showMessage('error', 'Image upload failed, but continuing to save blog data')
        }
      }

      const { error } = await supabase
        .from('blog')
        .insert([
          {
            name: formData.name,
            response: formData.response,
            image_url: imageUrl || null
          }
        ])

      if (error) throw error

      showMessage('success', imageUrl ? 'Blog post added successfully!' : 'Blog post added successfully (without image)!')
      clearForm()
      fetchBlogs()
    } catch (error: any) {
      console.error('Error adding blog:', error)
      showMessage('error', error.message || 'Failed to add blog post')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number, imageUrl?: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return

    setLoading(true)
    try {
      if (imageUrl) {
        const fileName = imageUrl.split('/').pop()
        if (fileName) {
          await supabase.storage.from('blog').remove([fileName])
        }
      }

      const { error } = await supabase
        .from('blog')
        .delete()
        .eq('id', id)

      if (error) throw error

      showMessage('success', 'Blog post deleted successfully!')
      fetchBlogs()
    } catch (error: any) {
      console.error('Error deleting blog:', error)
      showMessage('error', 'Failed to delete blog post')
    } finally {
      setLoading(false)
    }
  }

  const clearForm = () => {
    setFormData({
      name: '',
      response: ''
    })
    setImageFile(null)
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement
    if (fileInput) fileInput.value = ''
  }

  const showMessage = (type: string, text: string) => {
    setMessage({ type, text })
    setTimeout(() => setMessage({ type: '', text: '' }), 5000)
  }

  return (
    <div className='bg-white rounded-2xl shadow-xl border-2 border-black m-6 p-8'>
      {/* Header */}
      <div className='border-b-4 border-black pb-6 mb-8'>
        <h1 className='text-5xl font-black text-black text-center uppercase tracking-tight'>Blog Management</h1>
        <p className='text-center text-gray-600 mt-2'>Create and manage blog posts</p>
      </div>

      {/* Message */}
      {message.text && (
        <div className={`mb-6 p-4 rounded-lg border-2 ${
          message.type === 'success' 
            ? 'bg-green-50 border-green-500 text-green-800' 
            : 'bg-red-50 border-red-500 text-red-800'
        }`}>
          {message.text}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className='space-y-6 max-w-3xl mx-auto mb-8'>
          {/* Image Upload */}
          <div className='bg-gray-50 p-6 rounded-xl border-2 border-black'>
            <label className='block text-lg font-bold text-black mb-3 uppercase'>Blog Image</label>
            <input 
              type="file" 
              accept="image/*"
              onChange={handleImageChange}
              className='w-full text-black file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-2 file:border-black file:text-sm file:font-bold file:bg-black file:text-white hover:file:bg-gray-800 cursor-pointer'
            />
          </div>

          {/* Title */}
          <div className='bg-gray-50 p-6 rounded-xl border-2 border-black'>
            <label className='block text-lg font-bold text-black mb-3 uppercase'>Blog Title</label>
            <input 
              type="text" 
              placeholder="Enter blog title..."
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              className='w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-400 text-black font-medium'
            />
          </div>

          {/* Description */}
          <div className='bg-gray-50 p-6 rounded-xl border-2 border-black'>
            <label className='block text-lg font-bold text-black mb-3 uppercase'>Blog Content</label>
            <textarea 
              placeholder="Enter blog content..."
              value={formData.response}
              onChange={(e) => setFormData({...formData, response: e.target.value})}
              required
              rows={6}
              className='w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-400 text-black font-medium resize-none'
            />
          </div>

          {/* Action Buttons */}
          <div className='flex gap-4 pt-4'>
            <button 
              type="submit"
              disabled={loading}
              className='flex-1 bg-black text-white font-bold py-4 px-8 rounded-xl border-2 border-black hover:bg-gray-800 transition-all duration-300 uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {loading ? 'Saving...' : 'Save Blog'}
            </button>
            <button 
              type="button"
              onClick={clearForm}
              disabled={loading}
              className='flex-1 bg-white text-black font-bold py-4 px-8 rounded-xl border-2 border-black hover:bg-gray-100 transition-all duration-300 uppercase tracking-wide disabled:opacity-50'
            >
              Clear
            </button>
          </div>
        </div>
      </form>

      {/* Blog List */}
      <div className='border-t-4 border-black pt-8 mt-8'>
        <h2 className='text-3xl font-black text-black mb-6 uppercase'>Published Blog Posts</h2>
        
        {blogs.length === 0 ? (
          <div className='text-center py-12 bg-gray-50 rounded-xl border-2 border-black'>
            <p className='text-gray-500 text-lg'>No blog posts yet</p>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {blogs.map((blog) => (
              <div key={blog.id} className='bg-gray-50 rounded-xl border-2 border-black overflow-hidden hover:shadow-xl transition-all duration-300'>
                {/* Image */}
                {blog.image_url && (
                  <div className='w-full h-48 bg-gray-200'>
                    <img 
                      src={blog.image_url} 
                      alt={blog.name}
                      className='w-full h-full object-cover'
                    />
                  </div>
                )}
                
                {/* Content */}
                <div className='p-6 space-y-3'>
                  <h3 className='text-xl font-bold text-black'>{blog.name}</h3>
                  <p className='text-gray-600 line-clamp-3'>{blog.response}</p>
                  <p className='text-xs text-gray-400'>
                    {new Date(blog.created_at).toLocaleDateString()}
                  </p>
                  
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(blog.id, blog.image_url)}
                    disabled={loading}
                    className='w-full mt-4 bg-red-600 text-white font-bold py-2 px-4 rounded-lg border-2 border-red-700 hover:bg-red-700 transition-all duration-300 disabled:opacity-50'
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog
