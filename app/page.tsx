// Importing Components

import ScrollBackground from './components/ScrollBackground';
import Link from 'next/link';
import NavItem from './components/NavItem';
import ProfileImage from './components/ProfileImage';
import LoadingScreen from './components/LoadingScreen';
import StoryImage from './components/StoryImage';
import ProjectCard from './components/ProjectCard';
import { default as LinkedText } from './components/LinkedText';

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
                  Tomas J. Santos Yciano.
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

              <StoryImage />
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="space-y-2 mb-12">
              <h2 className="text-yellow-300 text-4xl mb-2">2</h2>
              <h3 className="text-white text-4xl font-bold">Projects.</h3>
            </div>

            {/* Project Cards Row 1*/}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjectCard
                title="Codetionary Bot"
                description="A Discord bot that helps Computer Science students succeed by generating personalized learning roadmaps, providing interactive tutorials, and creating custom code examples in their preferred programming language. Winner of the STJ ACM x Headstarter AI Hackathon 2024."
                technologies="Python | Discord API | MythoMist 7B LLM"
                link="https://github.com/tomassantos484/codetionary-ai-hackathon"
                borderColor="border-white/30"
              />
              <ProjectCard
                title="ConagraGPT"
                description={
                  <div>
                    A <LinkedText href="https://chatgpt.com/g/g-BAB9OZkz2-conagragpt">
                      custom GPT solution
                    </LinkedText> developed for Conagra Brands to revolutionize market research in the food industry. Leverages web-scraped data and AI to identify food trends, analyze nutritional needs, and discover market gaps. Won 3rd Place in FBLA&apos;s National Technology & Computer Science Case Competition 2024.
                  </div>
                }
                technologies="OpenAI GPT-4o | Apify Web Scraping | Custom Knowledge Base"
                link="https://github.com/tomassantos484/ConagraGPT"
                borderColor="border-white/30"
              />
              <ProjectCard
                title="Project 3"
                description="enter desc. here.."
                technologies="enter tech stack here.."
                link=""
                borderColor="border-white/30"
              />

              {/* Project Cards Row 2*/}
              <ProjectCard
                title="Project 4"
                description="enter desc. here.."
                technologies="enter tech stack here.."
                link=""
                borderColor="border-white/40"
              />
              <ProjectCard
                title="Project 5"
                description="enter desc. here.."
                technologies="enter tech stack here.."
                link=""
                borderColor="border-white/40"
              />
              <ProjectCard
                title="Project 6"
                description="enter desc. here.."
                technologies="enter tech stack here.."
                link=""
                borderColor="border-white/40"
              />

              {/* Project Cards Row 3*/}
              <ProjectCard
                title="Project 7"
                description="enter desc. here.."
                technologies="enter tech stack here.."
                link=""
                borderColor="border-white/50"
              />
              <ProjectCard
                title="Project 8"
                description="enter desc. here.."
                technologies="enter tech stack here.."
                link=""
                borderColor="border-white/50"
              />
              <ProjectCard
                title="View More ⇒"
                description="Check out more of my projects on GitHub"
                technologies=""
                link="https://github.com/tomassantos484"
                borderColor="border-white/50"
              />
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
