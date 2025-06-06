"use client"
import Footer from '@/components/HomePage/Footer'
import Navbar from '@/components/HomePage/Navbar'
import FilterSection from '@/components/AllTemplatesPage/FilterSection'
import TemplateSection from '@/components/AllTemplatesPage/TemplateSection'
import React from 'react'

export default function AllTemplatesPage() {
  return (
    <div className='pt-20'>
      <Navbar />
      <FilterSection/>
      <TemplateSection/>
      <Footer />
    </div>
  )
}
