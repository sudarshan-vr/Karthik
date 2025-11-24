'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { MentorType } from '@/app/types/mentor'

export const GalleryItem = ({ imageSrc, imageAlt }: { imageSrc: string; imageAlt: string }) => (
  <div className='group relative overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105'>
    <div className='aspect-square w-full overflow-hidden bg-gray-100'>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={500}
        height={500}
        className='h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-90'
      />
    </div>
  </div>
)

const Mentor = () => {
  const [mentor, setMentor] = useState<MentorType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setMentor(data.MentorData)
      } catch (error) {
        console.error('Error fetching gallery data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section id='gallery-section' className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col sm:flex-row gap-5 justify-between items-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-900'>Our Gallery</h2>
          <Link 
            href='/gallery' 
            className='inline-flex items-center bg-primary hover:bg-primary/90 text-white font-medium py-2.5 px-6 rounded transition-colors duration-300'
          >
            View Gallery
            <svg 
              xmlns='http://www.w3.org/2000/svg' 
              className='h-5 w-5 ml-2' 
              viewBox='0 0 20 20' 
              fill='currentColor'
            >
              <path 
                fillRule='evenodd' 
                d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z' 
                clipRule='evenodd' 
              />
            </svg>
          </Link>
        </div>

        {loading ? (
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className='aspect-square bg-gray-200 animate-pulse rounded-lg' />
            ))}
          </div>
        ) : (
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {mentor.map((item, index) => (
              <GalleryItem 
                key={index} 
                imageSrc={item.imageSrc} 
                imageAlt={item.imageAlt || `Gallery image ${index + 1}`} 
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Mentor
