import React from 'react'
import Hero from '@/app/components/Home/Hero'
import Companies from '@/app/components/Home/Companies'
import NamesList from '@/app/components/Home/Courses'
import Mentor from '@/app/components/Home/Mentor'
import Testimonial from '@/app/components/Home/Testimonial'
import Newsletter from '@/app/components/Home/Newsletter'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KITE Tuition Center',
  description: 'Empowering students through personalized education and holistic development'
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <NamesList />
      <Mentor />
      <Testimonial />
      <Newsletter />
    </main>
  )
}
