import Link from 'next/link';
import React from 'react'
import { FaBars } from 'react-icons/fa';
export default function Navbar() {
  return (
    <header className="bg-secondary text-textColor rounded-xl shadow-md absolute top-4 left-4 right-4 z-50">
        <div className="flex justify-between items-center px-6 py-3">
          <div className="text-xl font-recklessNeue flex items-center gap-3">
          <div className="w-[57px] h-[3.33rem] overflow-hidden">
          <img src="/images/PortaLogo.png" alt="logo" className="object-cover object-left w-full h-full" />
        </div>
            <Link href="/" className='font-light text-3xl'>PortaFlex</Link>
          </div>
          <div className="hidden md:flex items-center gap-10 font-neueMontreal tracking-widest font-bold">
            <nav className="flex space-x-6">
              <Link href="/templates" className="hover:text-primary hover:underline">Templates</Link>
              <Link href="/features" className="hover:text-primary hover:underline">Features</Link>
              <Link href="/pricing" className="hover:text-primary hover:underline">Pricing</Link>
              <Link href="/about" className="hover:text-primary hover:underline">About</Link>
              <Link href="/contact" className="hover:text-primary hover:underline">Contact</Link>
            </nav>  
            <button className="bg-black text-white px-6 py-2 rounded-xl hover:underline">Login/Signup</button>
          </div>
          <button className="md:hidden bg-black text-white px-4 py-2 rounded-lg cursor-pointer"><FaBars size={30}/></button>
        </div>
      </header>
  )
}
