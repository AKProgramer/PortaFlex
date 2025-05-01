"use client"
import Footer from '@/components/HomePage/Footer'
import Navbar from '@/components/HomePage/Navbar'
import FilterSection from '@/components/TemplatePage/FilterSection'
import TemplateSection from '@/components/TemplatePage/TemplateSection'
import React from 'react'

export default function TemplatesPage() {
  return (
    <div>
      <Navbar />
      <FilterSection/>
      <TemplateSection/>
      <Footer />
    </div>
  )
}
