'use client'
import React, { useState, useEffect } from 'react'
import supabase from '../../supabase'

interface Testimonial {
  id: number
  created_at: string
  name: string
  response: string
}

function Testimonial() {
  const [formData, setFormData] = useState({
    name: '',
    response: ''
  })
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setTestimonials(data || [])
    } catch (error: any) {
      console.error('Error fetching testimonials:', error)
      showMessage('error', 'Failed to fetch testimonials')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ type: '', text: '' })

    try {
      const { error } = await supabase
        .from('testimonials')
        .insert([
          {
            name: formData.name,
            response: formData.response
          }
        ])

      if (error) throw error

      showMessage('success', 'Testimonial added successfully!')
      clearForm()
      fetchTestimonials()
    } catch (error: any) {
      console.error('Error adding testimonial:', error)
      showMessage('error', error.message || 'Failed to add testimonial')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return

    setLoading(true)
    try {
      const { error } = await supabase
        .from('testimonials')
        .delete()
        .eq('id', id)

      if (error) throw error

      showMessage('success', 'Testimonial deleted successfully!')
      fetchTestimonials()
    } catch (error: any) {
      console.error('Error deleting testimonial:', error)
      showMessage('error', 'Failed to delete testimonial')
    } finally {
      setLoading(false)
    }
  }

  const clearForm = () => {
    setFormData({
      name: '',
      response: ''
    })
  }

  const showMessage = (type: string, text: string) => {
    setMessage({ type, text })
    setTimeout(() => setMessage({ type: '', text: '' }), 5000)
  }

  return (
    <div className='bg-white rounded-2xl shadow-xl border-2 border-black m-6 p-8'>
      {/* Header */}
      <div className='border-b-4 border-black pb-6 mb-8'>
        <h1 className='text-5xl font-black text-black text-center uppercase tracking-tight'>Testimonials</h1>
        <p className='text-center text-gray-600 mt-2'>Manage customer testimonials and reviews</p>
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
          {/* Name */}
          <div className='bg-gray-50 p-6 rounded-xl border-2 border-black'>
            <label className='block text-lg font-bold text-black mb-3 uppercase'>Customer Name</label>
            <input 
              type="text" 
              placeholder="Enter customer name..."
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
              className='w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-400 text-black font-medium'
            />
          </div>

          {/* Response/Review */}
          <div className='bg-gray-50 p-6 rounded-xl border-2 border-black'>
            <label className='block text-lg font-bold text-black mb-3 uppercase'>Testimonial Message</label>
            <textarea 
              placeholder="Enter customer testimonial..."
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
              {loading ? 'Saving...' : 'Save Testimonial'}
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

      {/* Testimonials List */}
      <div className='border-t-4 border-black pt-8 mt-8'>
        <h2 className='text-3xl font-black text-black mb-6 uppercase'>Customer Testimonials</h2>
        
        {testimonials.length === 0 ? (
          <div className='text-center py-12 bg-gray-50 rounded-xl border-2 border-black'>
            <p className='text-gray-500 text-lg'>No testimonials yet</p>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className='bg-gray-50 rounded-xl border-2 border-black p-6 hover:shadow-xl transition-all duration-300'>
                <div className='space-y-3'>
                  <h3 className='text-xl font-bold text-black'>{testimonial.name}</h3>
                  <p className='text-gray-600 line-clamp-4'>{testimonial.response}</p>
                  <p className='text-xs text-gray-400'>
                    {new Date(testimonial.created_at).toLocaleDateString()}
                  </p>
                  
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(testimonial.id)}
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

export default Testimonial
