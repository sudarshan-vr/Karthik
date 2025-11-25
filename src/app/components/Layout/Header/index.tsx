'use client'

import { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import HeaderLink from '../Header/Navigation/HeaderLink'
import MobileHeaderLink from '../Header/Navigation/MobileHeaderLink'
import dynamic from 'next/dynamic'

const EnrollmentForm = dynamic(
  () => import('@/app/components/Enrollment/EnrollmentForm'),
  { ssr: false }
)
import { Icon } from '@iconify/react/dist/iconify.js'
import { HeaderItem } from '@/app/types/menu'

const Header: React.FC = () => {
  const [headerData, setHeaderData] = useState<HeaderItem[]>([])

  const [navbarOpen, setNavbarOpen] = useState(false)
  const [sticky, setSticky] = useState(false)
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false)

  const navbarRef = useRef<HTMLDivElement>(null)
  const enrollmentRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setHeaderData(data.HeaderData)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  const handleScroll = () => {
    setSticky(window.scrollY >= 10)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      enrollmentRef.current &&
      !enrollmentRef.current.contains(event.target as Node)
    ) {
      setIsEnrollmentOpen(false)
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    
    // Add event listener for the custom event
    const handleEnrollmentEvent = () => {
      setIsEnrollmentOpen(true)
    }
    window.addEventListener('openEnrollmentForm', handleEnrollmentEvent)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('openEnrollmentForm', handleEnrollmentEvent)
    }
  }, [navbarOpen, isEnrollmentOpen])

  useEffect(() => {
    if (isEnrollmentOpen || navbarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isEnrollmentOpen, navbarOpen])

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        sticky ? ' shadow-lg bg-white py-4' : 'shadow-none py-4'
      }`}>
      <div>
        <div className='container mx-auto max-w-7xl px-4 flex items-center justify-between'>
          <Logo />
          <nav className='hidden lg:flex grow items-center gap-8 justify-start ml-14'>
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div className='flex items-center gap-4'>
            <button
              className='hidden lg:block bg-primary text-white text-base font-medium hover:bg-transparent duration-300 hover:text-primary border border-primary px-6 py-2 rounded-lg hover:cursor-pointer'
              onClick={() => {
                setIsEnrollmentOpen(true)
              }}>
              Join Now
            </button>
            {isEnrollmentOpen && (
              <div className='fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50'>
                <div ref={enrollmentRef} className='relative'>
                  <EnrollmentForm onClose={() => setIsEnrollmentOpen(false)} />
                </div>
              </div>
            )}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className='block lg:hidden p-2 rounded-lg'
              aria-label='Toggle mobile menu'>
              <span className='block w-6 h-0.5 bg-black'></span>
              <span className='block w-6 h-0.5 bg-black mt-1.5'></span>
              <span className='block w-6 h-0.5 bg-black mt-1.5'></span>
            </button>
          </div>
        </div>
        {navbarOpen && (
          <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-40' />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs ${
            navbarOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50`}>
          <div className='flex items-center justify-between p-4'>
            <h2 className='text-lg font-bold text-midnight_text'>
              <Logo />
            </h2>
            {/*  */}
            <button
              onClick={() => setNavbarOpen(false)}
              className='bg-black/30 rounded-full p-1 text-white'
              aria-label='Close menu Modal'>
              <Icon
                icon={'material-symbols:close-rounded'}
                width={24}
                height={24}
              />
            </button>
          </div>
          <nav className='flex flex-col items-start p-4'>
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
            <div className='mt-4 w-full'>
              <button
                className='w-full bg-primary text-white px-4 py-2 rounded-lg border border-primary hover:text-primary hover:bg-transparent hover:cursor-pointer transition duration-300 ease-in-out'
                onClick={() => {
                  setIsEnrollmentOpen(true)
                  setNavbarOpen(false)
                }}>
                Join Now
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
