
'use client'
import React, { useState, useEffect } from 'react'
import supabase from '../../supabase'

function GalleryImageUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [message, setMessage] = useState<string>('')
  const [images, setImages] = useState<{ name: string, url: string }[]>([])

  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = async () => {
    const { data, error } = await supabase.storage.from('gallery').list()
    if (!error && data) {
      const imageList = data.map((file) => ({
        name: file.name,
        url: supabase.storage.from('gallery').getPublicUrl(file.name).data.publicUrl
      }))
      setImages(imageList)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return
    setUploading(true)
    setMessage('')
    const { error } = await supabase.storage.from('gallery').upload(file.name, file)
    if (error) {
      setMessage('Upload failed: ' + error.message)
    } else {
      setMessage('Image uploaded successfully!')
      fetchImages()
    }
    setUploading(false)
    setFile(null)
  }

  return (
    <div className='bg-white rounded-2xl shadow-xl border-2 border-black m-6 p-8'>
      <div className='border-b-4 border-black pb-6 mb-8'>
        <h1 className='text-5xl font-black text-black text-center uppercase tracking-tight'>Gallery Image Upload</h1>
        <p className='text-center text-gray-600 mt-2'>Upload images to the public gallery</p>
      </div>
      {message && (
        <div className='mb-6 p-4 rounded-lg border-2 bg-green-50 border-green-500 text-green-800'>
          {message}
        </div>
      )}
      <form onSubmit={handleUpload} className='flex flex-col items-center gap-6 mb-10'>
        <input
          type='file'
          accept='image/*'
          onChange={handleFileChange}
          className='block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-gray-700'
        />
        <button
          type='submit'
          disabled={uploading || !file}
          className='bg-black text-white font-bold py-3 px-8 rounded-xl border-2 border-black hover:bg-gray-800 transition-all duration-300 uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {uploading ? 'Uploading...' : 'Upload Image'}
        </button>
      </form>
      <div className='border-t-4 border-black pt-8 mt-8'>
        <h2 className='text-3xl font-black text-black mb-6 uppercase'>Uploaded Images</h2>
        {images.length === 0 ? (
          <div className='text-center py-12 bg-gray-50 rounded-xl border-2 border-black'>
            <p className='text-gray-500 text-lg'>No images uploaded yet</p>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {images.map((image) => (
              <div key={image.name} className='bg-gray-50 rounded-xl border-2 border-black p-6 flex flex-col items-center'>
                <img src={image.url} alt={image.name} className='w-full h-64 object-cover rounded-lg mb-2' />
                <span className='text-xs text-gray-500 break-all mb-2'>{image.name}</span>
                <button
                  onClick={async () => {
                    const confirmDelete = window.confirm('Are you sure you want to delete this image?');
                    if (!confirmDelete) return;
                    setUploading(true);
                    setMessage('');
                    const { error } = await supabase.storage.from('gallery').remove([image.name]);
                    if (error) {
                      setMessage('Delete failed: ' + error.message);
                    } else {
                      setMessage('Image deleted successfully!');
                      fetchImages();
                    }
                    setUploading(false);
                  }}
                  className='mt-2 bg-red-600 text-white font-bold py-2 px-4 rounded-lg border-2 border-red-700 hover:bg-red-700 transition-all duration-300 disabled:opacity-50'
                  disabled={uploading}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default GalleryImageUpload
