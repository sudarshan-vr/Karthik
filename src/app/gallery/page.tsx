'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

type GalleryImage = {
  id: number
  src: string
  alt: string
  category: string
}

export default function GalleryPage() {
  const GalleryItem = ({ imageSrc, imageAlt }: { imageSrc: string; imageAlt: string }) => (
    <div className='group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl'>
      <div className='aspect-square w-full overflow-hidden bg-gray-100'>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={600}
          className='h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-90'
        />
      </div>
    </div>
  )
  
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('all')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setImages(data.GalleryImages || [])
      } catch (error) {
        console.error('Error fetching gallery data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Gallery</h1>
          <div className="h-1 w-20 bg-white mx-auto mb-6"></div>
          <p className="text-lg max-w-2xl mx-auto">
            Explore our collection of moments, events, and achievements
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className='py-16 bg-white'>
        <div className='container mx-auto px-4'>
          {/* Category Filters */}
          <div className='flex flex-wrap justify-center gap-3 mb-10'>
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === 'all' 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
            </button>
            {['Cycling', 'Tilt_Cafe', 'Ganesha_Festival', 'Guest_Lecture', 'Isha_Foundation', 'Sports', 'New_Year'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                  activeCategory === category 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.replace('_', ' ')}
              </button>
            ))}
          </div>

          {loading ? (
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className='aspect-square bg-gray-200 animate-pulse rounded-lg' />
              ))}
            </div>
          ) : (
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
              {images
                .filter(img => activeCategory === 'all' || img.category === activeCategory)
                .map((item) => (
                  <div key={item.id} className='group relative overflow-hidden rounded-lg'>
                    <div className='aspect-square w-full overflow-hidden bg-gray-100'>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={500}
                        height={500}
                        className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-110'
                      />
                    </div>
                    <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100'>
                      <span className='text-white font-medium text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full'>
                        {item.category}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </section>

    </main>
  )
}
