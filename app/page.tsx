import ScrollBackground from './components/ScrollBackground';
import Link from 'next/link';
import NavItem from './components/NavItem';
import ProfileImage from './components/ProfileImage';
import LoadingScreen from './components/LoadingScreen';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollBackground />
      <div className="min-h-screen font-mono relative animate-siteLoad">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center">
          <div className="container mx-auto px-6 flex justify-between items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Welcome Text */}
              <div>
                <h2 className="text-yellow-300 text-2xl mb-2">Welcome! I&apos;m</h2>
                <h1 className="text-white text-5xl font-bold">
                  Tomas Santos Yciano.
                </h1>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-4">
                <NavItem
                  title="MY STORY"
                  subtitle="From the D.R. to the Big Apple, here's my journey."
                  href="#story"
                />

                <NavItem
                  title="PROJECTS"
                  subtitle="Turning big ideas into bold projects."
                  href="#projects"
                />

                <NavItem
                  title="EXPERIENCE"
                  subtitle="Learning, leading, and building along the way."
                  href="#experience"
                />

                <NavItem
                  title="EDUCATION"
                  subtitle="Proudly learning and growing at St. John's University."
                  href="#education"
                />

                <NavItem
                  title="GALLERY"
                  subtitle="Snapshots of my journey, one moment at a time."
                  href="#gallery"
                />
              </nav>

              {/* Social Links */}
              <div className="pt-4">
                <div className="text-white space-x-4 text-xl">
                  <Link 
                    href="mailto:tomassantos484@gmail.com" 
                    className="hover:text-yellow-300 transition-colors border-b-2 border-yellow-300 pb-0.5 hover:border-opacity-100 border-opacity-0 transition-all duration-200"
                  >
                    EMAIL
                  </Link>
                  <span>|</span>
                  <Link 
                    href="https://github.com/tomassantos484" 
                    className="hover:text-yellow-300 transition-colors border-b-2 border-yellow-300 pb-0.5 hover:border-opacity-100 border-opacity-0 transition-all duration-200"
                  >
                    GITHUB
                  </Link>
                  <span>|</span>
                  <Link 
                    href="https://www.linkedin.com/in/tjsy" 
                    className="hover:text-yellow-300 transition-colors border-b-2 border-yellow-300 pb-0.5 hover:border-opacity-100 border-opacity-0 transition-all duration-200"
                  >
                    LINKEDIN
                  </Link>
                  <span>|</span>
                  <a 
                    href="/TSY_Resume_Sept2024_V5.pdf" 
                    download="Tomas_Santos_Yciano_Resume.pdf"
                    className="hover:text-yellow-300 transition-colors border-b-2 border-yellow-300 pb-0.5 hover:border-opacity-100 border-opacity-0 transition-all duration-200"
                  >
                    RESUME
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <ProfileImage />
          </div>
        </section>

        {/* My Story Section */}
        <section id="story" className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
              <div className="space-y-6 max-w-2xl">
                <div className="space-y-2">
                  <h2 className="text-yellow-300 text-4xl mb-2">1</h2>
                  <h3 className="text-white text-4xl font-bold">My Story.</h3>
                </div>
                
                <div className="text-white space-y-6 text-base">
                  <p>
                    Born in the Dominican Republic and raised in New York City, I&apos;m a full-stack engineer and a Fast Track B.S./M.S. Computer Science and Data Science student at St. John&apos;s University, where I serve as President of the STJ ACM Student Chapter. 
                    Through internships at <a 
                      href="https://www.ey.com/en_us" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-yellow-300 transition-colors border-b-2 border-yellow-300 pb-0.5 hover:border-opacity-100 border-opacity-0 transition-all duration-200"
                    >Ernst & Young (EY)</a> and <a 
                      href="https://www.headstarter.co" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-yellow-300 transition-colors border-b-2 border-yellow-300 pb-0.5 hover:border-opacity-100 border-opacity-0 transition-all duration-200"
                    >Headstarter</a>, I&apos;ve honed my skills in building impactful solutions and bridging technical expertise with business acumen.
                  </p>
                  <p>
                    Outside of work and academics, I enjoy traveling, playing and watching sports, reading, and exploring video games. 
                    Grounded in family, faith in Jesus Christ, and community, I&apos;m passionate about leveraging technology to drive meaningful change.
                  </p>
                </div>
              </div>

              <div className="relative w-[500px] h-[500px] rounded-[40%] overflow-hidden">
                <Image
                  src="/tsy_rock.jpeg"
                  alt="Tomas on a rock in Central Park"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Add your skills items here */}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Add your project cards here */}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Experience</h2>
            <div className="max-w-3xl mx-auto">
              {/* Add your experience timeline here */}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Education</h2>
            <div className="max-w-3xl mx-auto">
              {/* Add your education details here */}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {/* Add your gallery images here */}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-transparent">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Contact Me</h2>
            <div className="max-w-md mx-auto">
              {/* Add your contact form or contact information here */}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 bg-transparent border-t border-white/10">
          <div className="container mx-auto px-4 text-center text-white">
            <p>© {new Date().getFullYear()} Tomas Santos Yciano. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
