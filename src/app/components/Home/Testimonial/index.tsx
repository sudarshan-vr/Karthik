'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { TestimonialType } from '@/app/types/testimonial'
import TestimonialSkeleton from '../../Skeleton/Testimonial'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// CAROUSEL SETTINGS

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState<TestimonialType[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    rating: 5
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setTestimonial(data.TestimonialData)
      } catch (error) {
        console.error('Error fetching services:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/send-review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: 'admin@drkiteacademy.com',
          subject: 'New Testimonial Submission'
        }),
      })

      if (response.ok) {
        toast.success('Thank you for your review!', {
          position: 'top-center',
          autoClose: 3000,
        })
        setIsModalOpen(false)
        setFormData({ name: '', message: '', rating: 5 })
      } else {
        throw new Error('Failed to submit review')
      }
    } catch (error) {
      console.error('Error submitting review:', error)
      toast.error('Failed to submit review. Please try again.', {
        position: 'top-center',
        autoClose: 3000,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }))
  }

  return (
    <section id='testimonial-section' className='bg-cream relative'>
      <div className='container'>
        <div className='flex flex-col sm:flex-row gap-5 justify-between sm:items-center mb-6'>
          <h2 className='font-bold tracking-tight'>
            What Our Happy <br /> Students Says
          </h2>
          <div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className='bg-transparent cursor-pointer hover:bg-primary text-primary font-semibold hover:text-white py-3 px-4 border border-primary hover:border-transparent rounded-sm duration-300'
            >
              Give Your Review
            </button>
          </div>
        </div>
        <p className='text-lg font-medium mb-6'>
          Build skills with our curricumum and mentors.
        </p>
        <Slider {...settings}>
          {loading
            ? Array.from({ length: 3 }).map((_, i) => (
                <TestimonialSkeleton key={i} />
              ))
            : testimonial.map((items, i) => (
                <div key={i}>
                  <div className='bg-white m-4 pt-8 px-12 pb-10 text-center rounded-lg'>
                    <div className="relative z-0 flex justify-center items-center before:absolute before:bg-[url('/images/testimonial/greenpic.svg')] before:h-6 before:w-6 before:bottom-0 before:z-10 before:left-54%">
                      <Image
                        src={items.imgSrc}
                        alt='gaby'
                        width={64}
                        height={64}
                        className='inline-block rounded-full ring-2 ring-white relative'
                      />
                    </div>
                    <p className='text-sm pt-4 pb-2'>{items.profession}</p>
                    <p className='text-2xl font-semibold pb-3'>{items.name}</p>
                    <Image
                      src={items.starimg}
                      alt='stars-img'
                      className='m-auto pb-6 w-[30%]'
                      width={32}
                      height={32}
                    />
                    <p className='text-lg font-medium leading-7'>
                      {items.detail}
                    </p>
                  </div>
                </div>
              ))}
        </Slider>
      </div>

      {/* Review Form Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
          <div className='bg-white rounded-lg p-6 w-full max-w-md relative'>
            <button 
              onClick={() => setIsModalOpen(false)}
              className='absolute top-4 right-4 text-gray-500 hover:text-gray-700'
            >
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
            
            <h3 className='text-2xl font-bold mb-4'>Write Your Review</h3>
            
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1'>
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                  required
                />
              </div>
              
              <div>
                <label htmlFor='rating' className='block text-sm font-medium text-gray-700 mb-1'>
                  Rating
                </label>
                <select
                  id='rating'
                  name='rating'
                  value={formData.rating}
                  onChange={handleInputChange}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                  required
                >
                  {[5, 4, 3, 2, 1].map((num) => (
                    <option key={num} value={num}>
                      {num} Star{num !== 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor='message' className='block text-sm font-medium text-gray-700 mb-1'>
                  Your Review
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
                  required
                />
              </div>
              
              <div className='flex justify-end space-x-3 pt-2'>
                <button
                  type='button'
                  onClick={() => setIsModalOpen(false)}
                  className='px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition duration-200'
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  className='px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-dark rounded-md transition duration-200 flex items-center'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className='animate-spin -ml-1 mr-2 h-4 w-4 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                        <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                      </svg>
                      Submitting...
                    </>
                  ) : 'Submit Review'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <ToastContainer position='top-center' autoClose={3000} />
    </section>
  )
}

export default Testimonial
