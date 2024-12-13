import Head from 'next/head';
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi"; // Email Icon
import { FiPhone } from "react-icons/fi"; // Phone Icon
import { MdLocationOn } from "react-icons/md"; // Address Icon
import { FaBars } from 'react-icons/fa';
export default function Dashboard() {
  return (
    <div className="">
      <Head>
        <title>PortaFlex - Build Stunning Portfolios</title>
        <meta
          name="description"
          content="Effortlessly create stunning portfolios with our intuitive platform."
        />
      </Head>
      <header className="bg-secondary text-textColor rounded-xl m-4 shadow-md">
        <div className="flex justify-between items-center px-6 py-3">
          <div className="text-xl font-recklessNeue flex items-center gap-3">
          <div class="w-[57px] h-[3.33rem] overflow-hidden">
          <img src="/images/PortaLogo.png" alt="logo" class="object-cover object-left w-full h-full" />
        </div>

            <p className='font-light text-3xl'>PortaFlex</p>
          </div>
          <div className="hidden md:flex items-center gap-10 font-neueMontreal tracking-widest font-bold">
            <nav className="flex space-x-6">
              <a href="#templates" className="hover:text-primary hover:underline">Templates</a>
              <a href="#features" className="hover:text-primary hover:underline">Features</a>
              <a href="#pricing" className="hover:text-primary hover:underline">Pricing</a>
              <a href="#about" className="hover:text-primary hover:underline">About</a>
              <a href="#contact" className="hover:text-primary hover:underline">Contact</a>
            </nav>  
            <button className="bg-black text-white px-6 py-2 rounded-xl hover:underline">Login/Signup</button>
          </div>
          <button className="md:hidden bg-black text-white px-4 py-2 rounded-lg cursor-pointer"><FaBars size={30}/></button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center gap-5 py-16 px-4 text-center text-secondary">
          <div className="bg-whiteButton py-2 w-full max-w-xs rounded-xl uppercase shadow font-extrabold tracking-widest">
            Get Responsive Website
          </div>
          <h1 className="text-2xl md:text-4xl mb-2 font-recklessNeue">
            Effortlessly create stunning portfolios<br/> with our intuitive platform
          </h1>
          <p className="md:text-lg mb-8 font-neueMontreal font-[600] tracking-wider">
            Choose from a variety of customizable templates and build your professional<br/> online portfolio in minutes. With no coding required.
          </p>
          <button className="bg-secondary text-white px-10 md:px-20 py-2 rounded-xl tracking-widest  font-neueMontreal font-bold">
            Get Started
          </button>
        </section>

        {/* Image Section */}
        <div className="relative flex justify-center items-center px-4 mt-4 font-sans">
          <div className=''>
            <div className='rounded-t-xl py-5 shadow-2xl bg-[rgba(237,246,255,1)] ring-1 ring-tertiary'></div>
             <img src="/images/mainImg.png" alt="hero" className=" rounded-b-xl w-full max-w-4xl ring-1 ring-tertiary" />
          </div>
          <div className="hidden absolute md:flex items-center gap-2 bg-white px-6 py-2 rounded-xl shadow-xl left-10 md:left-28 top-28">
            <img src="/images/modernDesign.png" alt="modernDesign" className="w-8 h-8 inline-block" />
            <p>Modern Designs</p>
          </div>
          <div className="absolute bg-white px:2 md:px-4 md:py-4 w-[200px] rounded-xl shadow-xl text-center left-20 md:left-5 -bottom-16 md:bottom-10 ">
            <img src="/images/comment.png" alt="heroLogo" className=" w-4 h-4 md:w-8 md:h-8 mx-auto" />
            <p>Ready to <br /> make your own portfolio website?</p>
          </div>
          <div className="absolute flex items-center gap-2 bg-white px-6 py-3 rounded-xl shadow-xl -top-5 right-10 md:right-40 md:top-56 ">
          <p>Responsive</p>
          <img src="/images/responsive.png" alt="modernDesign" className="w-5 h-5 inline-block" />
          </div>
        </div>

      
        <section id="features" className=" py-20 md:py-16 max-w-6xl mx-auto px-4 md:px-8">
  <div className="font-neueMontreal">
    {/* Section Title */}
    <h2 className="text-2xl md:text-[50px] mb-10 font-recklessNeue text-center md:text-left">
      Key features that we offer
    </h2>

    {/* Features Grid */}
    <div className="grid gap-8 font-semibold">
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Feature 1 */}
        <div className="col-span-1 bg-white p-6 rounded-lg shadow-md flex flex-col">
          <div className="w-16 h-16 mb-4 flex items-center justify-center mx-auto md:mx-0">
            <img src="/images/responsiveDesign.png" alt="Responsive Design" className="w-16 h-16" />
          </div>
          <h3 className="text-xl mb-2 font-[1000] text-center md:text-left">Responsive Design</h3>
          <p className="text-secondary text-center md:text-left">
            Your portfolio will look great on any device, from desktop to mobile. Our templates automatically adapt to different screen sizes, ensuring your work shines everywhere.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-lg shadow-md flex flex-col">
          <div className="w-16 h-16 mb-4 flex items-center justify-center mx-auto md:mx-0">
            <img src="/images/animations.png" alt="Animations" className="w-16 h-16" />
          </div>
          <h3 className="font-[1000] text-xl mb-2 text-center md:text-left">Animations</h3>
          <p className="text-secondary text-center md:text-left">
            Bring your portfolio to life with smooth, eye-catching animations. Easily add dynamic effects to highlight your work and create a memorable user experience.
          </p>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Feature 3 */}
        <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-lg shadow-md flex flex-col">
          <div className="w-16 h-16 mb-4 flex items-center justify-center mx-auto md:mx-0">
            <img src="/images/animations.png" alt="Animations" className="w-16 h-16" />
          </div>
          <h3 className="font-[1000] text-xl mb-2 text-center md:text-left">Animations</h3>
          <p className="text-secondary text-center md:text-left">
            Bring your portfolio to life with smooth, eye-catching animations. Easily add dynamic effects to highlight your work and create a memorable user experience.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="col-span-1 bg-white p-6 rounded-lg shadow-md flex flex-col">
          <div className="w-16 h-16 mb-4 flex items-center justify-center mx-auto md:mx-0">
            <img src="/images/minimilisticDesign.png" alt="Minimalistic Design" className="w-16 h-16" />
          </div>
          <h3 className="font-[1000] text-xl mb-2 text-center md:text-left">Minimalistic Design</h3>
          <p className="text-secondary text-center md:text-left">
            Focus on what matters most—your work. Our clean, templates ensure that your portfolio is both elegant and clutter-free, letting your projects take center stage.
          </p>
        </div>
      </div>
    </div>

    {/* Explore Features Button */}
    <div className="text-center mt-10">
      <button className="bg-black text-white px-8 py-2 rounded-xl hover:underline tracking-widest">
        Explore all features
      </button>
    </div>
  </div>
        </section>

        {/* What is PortaFlex Section */}
        <section id="about" className="py-16 px-8 tracking-widest">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
            {/* Image Section */}
            <div className="flex justify-center">
              {/* Placeholder for Image */}
              <img
                src="/images/what.png" // Replace with actual image
                alt="PortaFlex Illustration"
              />
            </div>
            
            {/* Text Section */}
            <div className='font-neueMontreal font-bold tracking-widest'>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-recklessNeue">What is PortaFlex?</h2>
              <p className="text-secondary mb-4">
                PortaFlex is your go-to platform for effortlessly creating stunning, professional portfolios. 
                Designed with both simplicity and flexibility in mind, PortaFlex offers a range of customizable 
                templates that make showcasing your work easy and impactful.
              </p>
              <p className="text-secondary">
                With features like smooth animations, responsive design, and a minimalistic approach, we empower 
                creatives and professionals to build visually appealing portfolios that look great on any device 
                and make a lasting impression.
              </p>
              <p className="text-secondary mt-4">
                Join us and transform your online presence with PortaFlex!
              </p>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions Section */}
        <section id="faq" className="py-16 px-8 font-neueMontreal tracking-widest">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-[50px] mb-10 font-recklessNeue">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {/* FAQ Item 1 */}
              <div className="border-b border-tertiary pb-4">
                <h3 className="font-bold text-lg text-secondary cursor-pointer">
                  Do we have to pay for templates?
                </h3>
              </div>
              {/* FAQ Item 2 */}
              <div className="border-b border-tertiary pb-4">
                <h3 className="font-bold text-lg text-secondary cursor-pointer">
                  Do we have to pay for templates?
                </h3>
              </div>
              {/* FAQ Item 3 */}
              <div className="border-b border-tertiary pb-4">
                <h3 className="font-bold text-lg text-secondary cursor-pointer">
                  Do we have to pay for templates?
                </h3>
              </div>
            </div>
          </div>
        </section>
        {/* Footer Section */}
        <footer className="bg-footer text-white py-12 px-4 md:px-8 font-sans">
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    {/* Logo and Social Links */}
    <div className="text-center md:text-left">
      <h2 className="text-2xl font-bold mb-4 font-recklessNeue">PortaFlex</h2>
      <div className="mb-6">
        <p className="text-gray-400">
          Transform your online presence with sleek and professional designs.
        </p>
      </div>
      <div className="flex justify-center md:justify-start space-x-4">
        <a href="#" className="text-gray-400 hover:text-white">
          <FaTwitter size={24} />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <FaFacebook size={24} />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>

    {/* Navigation Links */}
    <div className="text-center md:text-left">
      <h3 className="font-medium text-lg mb-4">Navigation</h3>
      <ul className="space-y-2">
        <li>
          <a href="#" className="text-gray-400 hover:text-white">Home</a>
        </li>
        <li>
          <a href="#" className="text-gray-400 hover:text-white">Features</a>
        </li>
        <li>
          <a href="#" className="text-gray-400 hover:text-white">Pricing</a>
        </li>
        <li>
          <a href="#" className="text-gray-400 hover:text-white">About</a>
        </li>
        <li>
          <a href="#" className="text-gray-400 hover:text-white">Contact</a>
        </li>
      </ul>
    </div>

    {/* Quick Links */}
    <div className="text-center md:text-left">
      <h3 className="font-medium text-lg mb-4">Quick Links</h3>
      <ul className="space-y-2">
        <li>
          <a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a>
        </li>
        <li>
          <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
        </li>
      </ul>
    </div>

    {/* Contact Info */}
    <div className="text-center md:text-left">
      <h3 className="font-medium text-lg mb-4">Contact Us</h3>
      <ul className="space-y-4">
        <li className="flex items-center justify-center md:justify-start text-gray-400">
          <HiMail size={20} className="mr-3" />
          <a href="mailto:info@powerfulechoes.org" className="hover:text-white">
            info@powerfulechoes.org
          </a>
        </li>
        <li className="flex items-center justify-center md:justify-start text-gray-400">
          <MdLocationOn size={20} className="mr-3" />
          <span>123 Main Street, City, Country</span>
        </li>
        <li className="flex items-center justify-center md:justify-start text-gray-400">
          <FiPhone size={20} className="mr-3" />
          <span>555-555-5555</span>
        </li>
      </ul>
    </div>
  </div>
        </footer>

      </main>
    </div>
  );
}
