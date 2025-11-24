import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { CourseType } from '@/app/types/course'
import { Hourtype } from '@/app/types/hour'
import { CourseDetailType } from '@/app/types/coursedetail'
import { MentorType } from '@/app/types/mentor'
import { TestimonialType } from '@/app/types/testimonial'
import { FooterLinkType } from '@/app/types/footerlinks'

type GalleryImage = {
  id: number
  src: string
  alt: string
  category: string
}

const HeaderData: HeaderItem[] = [
  { label: 'Home', href: '/#Home' },
  { label: 'Courses', href: '/#Courses' },
  { label: 'About', href: '/about' },
  { label: 'Testimonial', href: '/#testimonial-section' },
  { label: 'Join', href: '/#join-section' },
  { label: 'Contact Us', href: '/contact' }
]

const CourseData: CourseType[] = [
  { name: 'Mobile Development' },
  { name: 'Web Development' },
  { name: 'Data Science' },
  { name: 'Cloud Computing' },
]

const HourData: Hourtype[] = [
  { name: '20hrs in a Month' },
  { name: '30hrs in a Month' },
  { name: '40hrs in a Month' },
  { name: '50hrs in a Month' },
]

const Companiesdata: { imgSrc: string }[] = [
  {
    imgSrc: '/images/slickCompany/airbnb.svg',
  },
  {
    imgSrc: '/images/slickCompany/hubspot.svg',
  },
  {
    imgSrc: '/images/slickCompany/microsoft.svg',
  },
  {
    imgSrc: '/images/slickCompany/google.svg',
  },
  {
    imgSrc: '/images/slickCompany/walmart.svg',
  },
  {
    imgSrc: '/images/slickCompany/fedex.svg',
  },
]

const CourseDetailData: CourseDetailType[] = [
  {
    course: 'HTML, CSS, JS',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'HTML, CSS, Javascript Development',
    price: '40',
    category: 'webdevelopment',
  },
  {
    course: 'Node.js',
    imageSrc: '/images/courses/coursesTwo.svg',
    profession: 'Backend with Node.js and Express.js',
    price: '21',
    category: 'webdevelopment',
  },
  {
    course: 'Database',
    imageSrc: '/images/courses/coursesThree.svg',
    profession: 'Learn Mongodb with Mongoose',
    price: '21',
    category: 'webdevelopment',
  },
  {
    course: 'React.js',
    imageSrc: '/images/courses/coursesFour.svg',
    profession: 'Learn React with Redux toolkit',
    price: '99',
    category: 'webdevelopment',
  },
  {
    course: 'React Native',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Learn React Native with Node.js',
    price: '89',
    category: 'mobiledevelopment',
  },
  {
    course: 'Swift',
    imageSrc: '/images/courses/coursesThree.svg',
    profession: 'Learn Swift from Scratch',
    price: '89',
    category: 'mobiledevelopment',
  },
  {
    course: 'Flutter',
    imageSrc: '/images/courses/coursesFour.svg',
    profession: 'Flutter App Development',
    price: '69',
    category: 'mobiledevelopment',
  },
  {
    course: 'Onsen UI',
    imageSrc: '/images/courses/coursesTwo.svg',
    profession: 'Learn Onsen Ui with HTML, CSS',
    price: '69',
    category: 'mobiledevelopment',
  },
  {
    course: 'TensorFlow',
    imageSrc: '/images/courses/coursesTwo.svg',
    profession: 'Learn TensorFlow with SQL',
    price: '99',
    category: 'datascience',
  },
  {
    course: 'AWS',
    imageSrc: '/images/courses/coursesFour.svg',
    profession: 'AWS Deep Learning AMI',
    price: '99',
    category: 'datascience',
  },
  {
    course: 'Bokeh',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Learn Bokeh with Python',
    price: '99',
    category: 'datascience',
  },
  {
    course: 'Scikit',
    imageSrc: '/images/courses/coursesThree.svg',
    profession: 'Scikit with Python Development',
    price: '89',
    category: 'datascience',
  },
  {
    course: 'Laas',
    imageSrc: '/images/courses/coursesThree.svg',
    profession: 'Infra-as-a-Service',
    price: '21',
    category: 'cloudcomputing',
  },
  {
    course: 'Iaas',
    imageSrc: '/images/courses/coursesFour.svg',
    profession: 'Info-as-a-Service',
    price: '29',
    category: 'cloudcomputing',
  },
  {
    course: 'Paas',
    imageSrc: '/images/courses/coursesOne.svg',
    profession: 'Platform-as-a-Service',
    price: '99',
    category: 'cloudcomputing',
  },
  {
    course: 'Saas',
    imageSrc: '/images/courses/coursesTwo.svg',
    profession: 'Software-as-a-Service',
    price: '58',
    category: 'cloudcomputing',
  },
]

const MentorData: MentorType[] = [
  {
    name: 'Senior UX Designer',
    href: '#',
    imageSrc: '/images/gallery/Sports/1.JPG',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Shoo Thar Mein',
  },
  {
    name: 'Photoshop Instructor',
    href: '#',
    imageSrc: '/images/gallery/Sports/3.JPG',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Cristian Doru Barin',
  },
  {
    name: 'SEO Expert',
    href: '#',
    imageSrc: '/images/gallery/New_Year/3.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Tanzeel Ur Rehman',
  },
  {
    name: 'UI/UX Designer',
    href: '#',
    imageSrc: '/images/gallery/Sports/8.JPG',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Andrew Williams',
  },
  {
    name: 'Web Development / Web Design',
    href: '#',
    imageSrc: '/images/gallery/Guest_Lecture/1.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Brad Schiff',
  },
  {
    name: 'Adobe Certified Instructor',
    href: '#',
    imageSrc: '/images/gallery/Ganesha_Festival/1.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Daniel Walter Scott',
  },
]

const TestimonialData: TestimonialType[] = [
  {
    profession: '10th Grade Student',
    name: 'Vinay S',
    imgSrc: '/images/testimonial/user-1.jpg',
    starimg: '/images/testimonial/stars.png',
    detail: 'Recommended coaching center for 10th State, CBSE & ICSE Board. Students can also seek admission for II PU Science & Commerce with integrated coaching for JEE, NEET & CA',
  },
  {
    profession: '2nd PU Student',
    name: 'Ganesh Kumar',
    imgSrc: '/images/testimonial/user-2.jpg',
    starimg: '/images/testimonial/stars.png',
    detail: 'I\'m really thankful for the positive learning environment during my 10th grade & 2nd PU and would highly recommend our tuition Dr. KITE Academy to anyone looking to improve academically.',
  },
  {
    profession: '10th Grade Student (2024-25)',
    name: 'Mohith Gowda',
    imgSrc: '/images/testimonial/user-3.jpg',
    starimg: '/images/testimonial/stars.png',
    detail: 'I was one of those 10th students of 2024-25 Batch to take admission at KITE. The teaching methodology and environment in the tuition during my 10th grade was super. Karthik Anna taught us all the subjects in very easy methods and we were able to do well in our board exams. I recommend all my juniors for 10th std. and seniors for 2nd pu Science & Commerce to take admission here to excel in their academics.',
  },
  {
    profession: '2nd PU Student',
    name: 'Gaurav Kumar',
    imgSrc: '/images/testimonial/user-1.jpg',
    starimg: '/images/testimonial/stars.png',
    detail: 'The personal attention and customized study plans really helped me improve my marks in my 2nd PU CBSE board examination. Thank you for always motivating us and making learning enjoyable!',
  },
]

const FooterLinkData: FooterLinkType[] = [
  {
    section: 'Company',
    links: [
      { label: 'Home', href: '/#Home' },
      { label: 'Courses', href: '/#Courses' },
      { label: 'Mentors', href: '/#mentors-section' },
      { label: 'Testimonial', href: '/#testimonial-section' },
      { label: 'Join', href: '/#join-section' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    section: 'Support',
    links: [
      { label: 'Help center', href: '/' },
      { label: 'Terms of service', href: '/' },
      { label: 'Legal', href: '/' },
      { label: 'Privacy Policy', href: '/' },
      { label: 'Status', href: '/' },
    ],
  },
]

const GalleryImages: GalleryImage[] = [
  // Cycling
  {
    id: 1,
    src: '/images/gallery/Cycling/1.jpg',
    alt: 'Cycling event',
    category: 'Cycling'
  },
  {
    id: 2,
    src: '/images/gallery/Cycling/2.jpg',
    alt: 'Cycling group',
    category: 'Cycling'
  },
  
  // Tilt Cafe
  {
    id: 3,
    src: '/images/gallery/Tilt_Cafe/1.jpg',
    alt: 'Tilt Cafe event',
    category: 'Tilt_Cafe'
  },
  {
    id: 4,
    src: '/images/gallery/Tilt_Cafe/2.jpg',
    alt: 'Tilt Cafe gathering',
    category: 'Tilt_Cafe'
  },
  
  // Ganesha Festival
  {
    id: 5,
    src: '/images/gallery/Ganesha_Festival/1.jpg',
    alt: 'Ganesha Festival celebration',
    category: 'Ganesha_Festival'
  },
  {
    id: 6,
    src: '/images/gallery/Ganesha_Festival/2.jpg',
    alt: 'Ganesha idol',
    category: 'Ganesha_Festival'
  },
  
  // Guest Lecture
  {
    id: 7,
    src: '/images/gallery/Guest_Lecture/1.jpg',
    alt: 'Guest lecture in progress',
    category: 'Guest_Lecture'
  },
  {
    id: 8,
    src: '/images/gallery/Guest_Lecture/2.jpg',
    alt: 'Guest speaker',
    category: 'Guest_Lecture'
  },
  
  // Isha Foundation
  {
    id: 9,
    src: '/images/gallery/Isha_Foundation/1.jpg',
    alt: 'Isha Foundation event',
    category: 'Isha_Foundation'
  },
  {
    id: 10,
    src: '/images/gallery/Isha_Foundation/2.jpg',
    alt: 'Isha Foundation activities',
    category: 'Isha_Foundation'
  },
  
  // Sports
  {
    id: 11,
    src: '/images/gallery/Sports/1.jpg',
    alt: 'Sports day',
    category: 'Sports'
  },
  {
    id: 12,
    src: '/images/gallery/Sports/2.jpg',
    alt: 'Sports competition',
    category: 'Sports'
  },
  
  // New Year
  {
    id: 13,
    src: '/images/gallery/New_Year/1.jpg',
    alt: 'New Year celebration',
    category: 'New_Year'
  },
  {
    id: 14,
    src: '/images/gallery/New_Year/2.jpg',
    alt: 'New Year party',
    category: 'New_Year'
  },
  {
    id: 15,
    src: '/images/gallery/14.jpg',
    alt: 'Science lab',
    category: 'science'
  },
  {
    id: 16,
    src: '/images/gallery/15.jpg',
    alt: 'Group discussion',
    category: 'discussion'
  },
  {
    id: 17,
    src: '/images/gallery/16.jpg',
    alt: 'Award ceremony',
    category: 'events'
  },
  {
    id: 18,
    src: '/images/gallery/17.jpg',
    alt: 'Workshop',
    category: 'workshop'
  },
  {
    id: 19,
    src: '/images/gallery/18.jpg',
    alt: 'Study group',
    category: 'study'
  },
  {
    id: 20,
    src: '/images/gallery/19.jpg',
    alt: 'Coding session',
    category: 'coding'
  },
  {
    id: 21,
    src: '/images/gallery/20.jpg',
    alt: 'Team building',
    category: 'activity'
  }
]

export async function GET() {
  return NextResponse.json({
    HeaderData,
    CourseData,
    HourData,
    Companiesdata,
    CourseDetailData,
    MentorData,
    TestimonialData,
    FooterLinkData,
    GalleryImages,
  })
}
