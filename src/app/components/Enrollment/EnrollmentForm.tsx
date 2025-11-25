'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

const EnrollmentForm = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Replace with your form submission logic
      console.log('Form submitted:', formData)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSuccess(true)
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        grade: '',
        subject: '',
        message: ''
      })
      // Close form after 2 seconds
      setTimeout(() => {
        onClose()
        setIsSuccess(false)
      }, 2000)
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='relative max-w-md w-full bg-white rounded-lg p-8'>
      <button
        onClick={onClose}
        className='absolute top-4 right-4 text-gray-500 hover:text-primary'
        aria-label='Close form'>
        <Icon icon='material-symbols:close-rounded' width={24} height={24} />
      </button>
      
      <h2 className='text-2xl font-bold text-center mb-6'>Enroll Now</h2>
      
      {isSuccess ? (
        <div className='text-center py-8'>
          <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
            <Icon icon='mdi:check' className='text-green-500 text-3xl' />
          </div>
          <h3 className='text-xl font-semibold mb-2'>Thank You!</h3>
          <p className='text-gray-600'>We've received your enrollment request. We'll contact you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1'>
              Full Name *
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent'
              placeholder='Enter your full name'
            />
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
                Email *
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent'
                placeholder='your@email.com'
              />
            </div>
            
            <div>
              <label htmlFor='phone' className='block text-sm font-medium text-gray-700 mb-1'>
                Phone Number *
              </label>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                required
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent'
                placeholder='+91 1234567890'
              />
            </div>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label htmlFor='grade' className='block text-sm font-medium text-gray-700 mb-1'>
                Grade/Class *
              </label>
              <select
                id='grade'
                name='grade'
                value={formData.grade}
                onChange={handleChange}
                required
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-white'>
                <option value=''>Select Grade</option>
                <option value='pre-school'>Pre-School</option>
                <option value='1-5'>Class 1-5</option>
                <option value='6-8'>Class 6-8</option>
                <option value='9-10'>Class 9-10</option>
                <option value='11-12'>Class 11-12</option>
                <option value='college'>College</option>
              </select>
            </div>
            
            <div>
              <label htmlFor='subject' className='block text-sm font-medium text-gray-700 mb-1'>
                Interested Subject *
              </label>
              <input
                type='text'
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                required
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent'
                placeholder='e.g., Mathematics, Science, etc.'
              />
            </div>
          </div>
          
          <div>
            <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-1'>
              Additional Information
            </label>
            <textarea
              id='message'
              name='message'
              rows={3}
              value={formData.message}
              onChange={handleChange}
              className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent'
              placeholder='Any specific requirements or questions?'
            />
          </div>
          
          <div className='pt-2'>
            <button
              type='submit'
              disabled={isSubmitting}
              className='w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center'>
              {isSubmitting ? (
                <>
                  <svg className='animate-spin -ml-1 mr-2 h-5 w-5 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                    <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                    <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                  </svg>
                  Submitting...
                </>
              ) : (
                'Submit Enrollment'
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  )
}

export default EnrollmentForm
