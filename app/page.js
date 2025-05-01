import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center gap-5 py-16 px-4 text-center text-secondary">
          <div className="bg-whiteButton py-2 w-full max-w-xs rounded-xl uppercase shadow font-extrabold tracking-widest">
            Get Responsive Website
          </div>
          <h1 className="text-2xl md:text-4xl mb-2 font-recklessNeue">
            Effortlessly create stunning portfolios
            <br /> with our intuitive platform
          </h1>
          <p className="md:text-lg mb-8 font-neueMontreal font-[600] tracking-wider">
            Choose from a variety of customizable templates and build your
            professional
            <br /> online portfolio in minutes. With no coding required.
          </p>
          <button className="bg-secondary text-white px-10 md:px-20 py-2 rounded-xl tracking-widest  font-neueMontreal font-bold">
            Get Started
          </button>
        </section>

        {/* Image Section */}
        <div className="relative flex justify-center items-center px-4 mt-4 font-sans">
          <div className="">
            <div className="rounded-t-xl py-5 shadow-2xl bg-[rgba(237,246,255,1)] ring-1 ring-tertiary"></div>
            <img
              src="/images/mainImg.png"
              alt="hero"
              className=" rounded-b-xl w-full max-w-4xl ring-1 ring-tertiary"
            />
          </div>
          <div className="hidden absolute md:flex items-center gap-2 bg-white px-6 py-2 rounded-xl shadow-xl left-10 md:left-28 top-28">
            <img
              src="/images/modernDesign.png"
              alt="modernDesign"
              className="w-8 h-8 inline-block"
            />
            <p>Modern Designs</p>
          </div>
          <div className="absolute bg-white px:2 md:px-4 md:py-4 w-[200px] rounded-xl shadow-xl text-center left-20 md:left-5 -bottom-16 md:bottom-10 ">
            <img
              src="/images/comment.png"
              alt="heroLogo"
              className=" w-4 h-4 md:w-8 md:h-8 mx-auto"
            />
            <p>
              Ready to <br /> make your own portfolio website?
            </p>
          </div>
          <div className="absolute flex items-center gap-2 bg-white px-6 py-3 rounded-xl shadow-xl -top-5 right-10 md:right-40 md:top-56 ">
            <p>Responsive</p>
            <img
              src="/images/responsive.png"
              alt="modernDesign"
              className="w-5 h-5 inline-block"
            />
          </div>
        </div>

        <section
          id="features"
          className=" py-20 md:py-16 max-w-6xl mx-auto px-4 md:px-8"
        >
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
                    <img
                      src="/images/responsiveDesign.png"
                      alt="Responsive Design"
                      className="w-16 h-16"
                    />
                  </div>
                  <h3 className="text-xl mb-2 font-[1000] text-center md:text-left">
                    Responsive Design
                  </h3>
                  <p className="text-secondary text-center md:text-left">
                    Your portfolio will look great on any device, from desktop
                    to mobile. Our templates automatically adapt to different
                    screen sizes, ensuring your work shines everywhere.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-lg shadow-md flex flex-col">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center mx-auto md:mx-0">
                    <img
                      src="/images/animations.png"
                      alt="Animations"
                      className="w-16 h-16"
                    />
                  </div>
                  <h3 className="font-[1000] text-xl mb-2 text-center md:text-left">
                    Animations
                  </h3>
                  <p className="text-secondary text-center md:text-left">
                    Bring your portfolio to life with smooth, eye-catching
                    animations. Easily add dynamic effects to highlight your
                    work and create a memorable user experience.
                  </p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Feature 3 */}
                <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-lg shadow-md flex flex-col">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center mx-auto md:mx-0">
                    <img
                      src="/images/animations.png"
                      alt="Animations"
                      className="w-16 h-16"
                    />
                  </div>
                  <h3 className="font-[1000] text-xl mb-2 text-center md:text-left">
                    Animations
                  </h3>
                  <p className="text-secondary text-center md:text-left">
                    Bring your portfolio to life with smooth, eye-catching
                    animations. Easily add dynamic effects to highlight your
                    work and create a memorable user experience.
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="col-span-1 bg-white p-6 rounded-lg shadow-md flex flex-col">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center mx-auto md:mx-0">
                    <img
                      src="/images/minimilisticDesign.png"
                      alt="Minimalistic Design"
                      className="w-16 h-16"
                    />
                  </div>
                  <h3 className="font-[1000] text-xl mb-2 text-center md:text-left">
                    Minimalistic Design
                  </h3>
                  <p className="text-secondary text-center md:text-left">
                    Focus on what matters most—your work. Our clean, templates
                    ensure that your portfolio is both elegant and clutter-free,
                    letting your projects take center stage.
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
            <div className="font-neueMontreal font-bold tracking-widest">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 font-recklessNeue">
                What is PortaFlex?
              </h2>
              <p className="text-secondary mb-4">
                PortaFlex is your go-to platform for effortlessly creating
                stunning, professional portfolios. Designed with both simplicity
                and flexibility in mind, PortaFlex offers a range of
                customizable templates that make showcasing your work easy and
                impactful.
              </p>
              <p className="text-secondary">
                With features like smooth animations, responsive design, and a
                minimalistic approach, we empower creatives and professionals to
                build visually appealing portfolios that look great on any
                device and make a lasting impression.
              </p>
              <p className="text-secondary mt-4">
                Join us and transform your online presence with PortaFlex!
              </p>
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions Section */}
        <section
          id="faq"
          className="py-16 px-8 font-neueMontreal tracking-widest"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-[50px] mb-10 font-recklessNeue">
              Frequently Asked Questions
            </h2>
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
        <Footer />
      </main>
    </div>
  );
}
