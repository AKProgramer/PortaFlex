import Head from 'next/head';

export default function Dashboard() {
  return (
    <div className="bg-gray-200">
      <Head>
        <title>PortaFlex - Build Stunning Portfolios</title>
        <meta
          name="description"
          content="Effortlessly create stunning portfolios with our intuitive platform."
        />
      </Head>
      <header className="bg-white shadow-md">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="text-xl font-bold flex items-center gap-3">
            <img src="/icon.png" alt="logo" className="w-10 h-10 rounded-full" />
            <p>PortaFlex</p>
          </div>
          <div className="hidden md:flex items-center gap-10">
            <nav className="flex space-x-6">
              <a href="#templates" className="hover:text-primary">Templates</a>
              <a href="#features" className="hover:text-primary">Features</a>
              <a href="#pricing" className="hover:text-primary">Pricing</a>
              <a href="#about" className="hover:text-primary">About</a>
              <a href="#contact" className="hover:text-primary">Contact</a>
            </nav>
            <button className="bg-black text-white px-6 py-2 rounded-xl">Login/Signup</button>
          </div>
          <button className="md:hidden bg-black text-white px-4 py-2 rounded-lg">Menu</button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center gap-5 py-16 px-4 text-center">
          <div className="bg-white py-2 w-full max-w-xs rounded-xl text-black uppercase shadow">
            Get Responsive Website
          </div>
          <h1 className="text-2xl md:text-4xl mb-4">
            Effortlessly create stunning portfolios with our intuitive platform
          </h1>
          <p className="text-base md:text-lg mb-8">
            Choose from a variety of customizable templates and build your professional online portfolio in minutes. With no coding required.
          </p>
          <button className="bg-black text-white px-10 md:px-20 py-2 rounded-xl text-lg">
            Get Started
          </button>
        </section>

        {/* Image Section */}
        <div className="relative flex justify-center items-center px-4">
          <img src="/img.jpg" alt="hero" className="rounded-xl w-full max-w-4xl" />
          <div className="absolute bg-white px-6 py-2 rounded-lg shadow-md left-10 md:left-40 top-10">
            Modern Designs
          </div>
          <div className="absolute bg-white px-4 py-4 w-[200px] rounded-lg shadow-md text-center left-10 md:left-40 bottom-10">
            Ready to <br /> make your own portfolio website?
          </div>
          <div className="absolute bg-white px-6 py-2 rounded-lg shadow-md right-10 md:right-40 top-10">
            Responsive
          </div>
        </div>

        {/* Features Section */}
        <section id="features" className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Key features that we offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2">Modern Designs</h3>
                <p className="text-gray-600">Create sleek and professional portfolios that stand out.</p>
              </div>
              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2">Responsive</h3>
                <p className="text-gray-600">Your portfolio will look great on all devices.</p>
              </div>
              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2">Intuitive Platform</h3>
                <p className="text-gray-600">Easily customize and publish with our simple interface.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
