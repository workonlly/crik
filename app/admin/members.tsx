'use client'
import React, { useState, useEffect } from 'react'
import supabase from '../../supabase'

interface Member {
  id: number
  created_at: string
  name: string
  post: string
  insta: string
  facebook: string
  whatsapp: string
  image_url?: string
}

function Members() {
  const [formData, setFormData] = useState({
    name: '',
    post: '',
    insta: '',
    facebook: '',
    whatsapp: ''
  })
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [members, setMembers] = useState<Member[]>([])
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  // Fetch all members on component mount
  useEffect(() => {
    fetchMembers()
  }, [])

  const fetchMembers = async () => {
    try {
      const { data, error } = await supabase
        .from('members')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setMembers(data || [])
    } catch (error: any) {
      console.error('Error fetching members:', error)
      showMessage('error', 'Failed to fetch members')
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
        .from('members')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        })

      if (uploadError) {
        console.error('Upload error details:', uploadError)
        throw uploadError
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('members')
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
      // Upload image first if selected
      let imageUrl = ''
      if (imageFile) {
        const url = await uploadImage(imageFile)
        if (url) {
          imageUrl = url
        } else {
          // Continue without image if upload fails
          showMessage('error', 'Image upload failed, but continuing to save member data')
        }
      }

      // Insert member data
      const { error } = await supabase
        .from('members')
        .insert([
          {
            name: formData.name,
            post: formData.post,
            insta: formData.insta,
            facebook: formData.facebook,
            whatsapp: formData.whatsapp,
            image_url: imageUrl || null
          }
        ])

      if (error) throw error

      showMessage('success', imageUrl ? 'Member added successfully!' : 'Member added successfully (without image)!')
      clearForm()
      fetchMembers()
    } catch (error: any) {
      console.error('Error adding member:', error)
      showMessage('error', error.message || 'Failed to add member')
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: number, imageUrl?: string) => {
    if (!confirm('Are you sure you want to delete this member?')) return

    setLoading(true)
    try {
      // Delete image from storage if exists
      if (imageUrl) {
        const fileName = imageUrl.split('/').pop()
        if (fileName) {
          await supabase.storage.from('members').remove([fileName])
        }
      }

      // Delete member from database
      const { error } = await supabase
        .from('members')
        .delete()
        .eq('id', id)

      if (error) throw error

      showMessage('success', 'Member deleted successfully!')
      fetchMembers()
    } catch (error: any) {
      console.error('Error deleting member:', error)
      showMessage('error', 'Failed to delete member')
    } finally {
      setLoading(false)
    }
  }

  const clearForm = () => {
    setFormData({
      name: '',
      post: '',
      insta: '',
      facebook: '',
      whatsapp: ''
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
        <h1 className='text-5xl font-black text-black text-center uppercase tracking-tight'>Team Members</h1>
        <p className='text-center text-gray-600 mt-2'>Add and manage team member profiles</p>
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
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mb-8'>
          {/* Left Column */}
          <div className='space-y-6'>
            {/* Image Upload */}
            <div className='bg-gray-50 p-6 rounded-xl border-2 border-black'>
              <label className='block text-lg font-bold text-black mb-3 uppercase'>Member Image</label>
              <input 
                type="file" 
                accept="image/*"
                onChange={handleImageChange}
                className='w-full text-black file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-2 file:border-black file:text-sm file:font-bold file:bg-black file:text-white hover:file:bg-gray-800 cursor-pointer'
              />
            </div>

            {/* Name */}
            <div className='bg-gray-50 p-6 rounded-xl border-2 border-black'>
              <label className='block text-lg font-bold text-black mb-3 uppercase'>Member Name</label>
              <input 
                type="text" 
                placeholder="Enter name..."
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className='w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-400 text-black font-medium'
              />
            </div>

            {/* Position/Post */}
            <div className='bg-gray-50 p-6 rounded-xl border-2 border-black'>
              <label className='block text-lg font-bold text-black mb-3 uppercase'>Position/Role</label>
              <input 
                type="text" 
                placeholder="Enter position..."
                value={formData.post}
                onChange={(e) => setFormData({...formData, post: e.target.value})}
                required
                className='w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-400 text-black font-medium'
              />
            </div>
          </div>

          {/* Right Column - Social Links */}
          <div className='space-y-6'>
            <div className='bg-gray-50 p-6 rounded-xl border-2 border-black h-full'>
              <h3 className='text-lg font-bold text-black mb-6 uppercase'>Social Media Links</h3>
              <div className='space-y-4'>
                {/* Facebook */}
                <div>
                  <label className='block text-sm font-bold text-black mb-2'>Facebook</label>
                  <input 
                    type="text" 
                    placeholder="Facebook profile URL"
                    value={formData.facebook}
                    onChange={(e) => setFormData({...formData, facebook: e.target.value})}
                    className='w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-400 text-black font-medium'
                  />
                </div>

                {/* Instagram */}
                <div>
                  <label className='block text-sm font-bold text-black mb-2'>Instagram</label>
                  <input 
                    type="text" 
                    placeholder="Instagram profile URL"
                    value={formData.insta}
                    onChange={(e) => setFormData({...formData, insta: e.target.value})}
                    className='w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-400 text-black font-medium'
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label className='block text-sm font-bold text-black mb-2'>WhatsApp</label>
                  <input 
                    type="text" 
                    placeholder="WhatsApp number"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                    className='w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-4 focus:ring-gray-400 text-black font-medium'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons - Full Width */}
          <div className='lg:col-span-2 flex gap-4 pt-4'>
            <button 
              type="submit"
              disabled={loading}
              className='flex-1 bg-black text-white font-bold py-4 px-8 rounded-xl border-2 border-black hover:bg-gray-800 transition-all duration-300 uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {loading ? 'Adding...' : 'Add Member'}
            </button>
            <button 
              type="button"
              onClick={clearForm}
              disabled={loading}
              className='flex-1 bg-white text-black font-bold py-4 px-8 rounded-xl border-2 border-black hover:bg-gray-100 transition-all duration-300 uppercase tracking-wide disabled:opacity-50'
            >
              Clear Form
            </button>
          </div>
        </div>
      </form>

      {/* Members List */}
      <div className='border-t-4 border-black pt-8 mt-8'>
        <h2 className='text-3xl font-black text-black mb-6 uppercase'>Current Members</h2>
        
        {members.length === 0 ? (
          <div className='text-center py-12 bg-gray-50 rounded-xl border-2 border-black'>
            <p className='text-gray-500 text-lg'>No members added yet</p>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {members.map((member) => (
              <div key={member.id} className='bg-gray-50 rounded-xl border-2 border-black overflow-hidden hover:shadow-xl transition-all duration-300'>
                {/* Image */}
                {member.image_url && (
                  <div className='w-full h-48 bg-gray-200'>
                    <img 
                      src={member.image_url} 
                      alt={member.name}
                      className='w-full h-full object-cover'
                    />
                  </div>
                )}
                
                {/* Content */}
                <div className='p-6 space-y-3'>
                  <h3 className='text-xl font-bold text-black'>{member.name}</h3>
                  <p className='text-gray-600 font-medium'>{member.post}</p>
                  
                  {/* Social Links */}
                  <div className='flex gap-3 pt-2'>
                    {member.facebook && (
                      <a href={member.facebook} target="_blank" rel="noopener noreferrer" className='w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800'>
                        <span className='text-xs'>F</span>
                      </a>
                    )}
                    {member.insta && (
                      <a href={member.insta} target="_blank" rel="noopener noreferrer" className='w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800'>
                        <span className='text-xs'>I</span>
                      </a>
                    )}
                    {member.whatsapp && (
                      <a href={`https://wa.me/${member.whatsapp}`} target="_blank" rel="noopener noreferrer" className='w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800'>
                        <span className='text-xs'>W</span>
                      </a>
                    )}
                  </div>
                  
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(member.id, member.image_url)}
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

export default Members
