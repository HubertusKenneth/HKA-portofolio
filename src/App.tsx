import React, { useState, useEffect } from 'react';
import { Moon, Sun, Phone, Mail, MapPin, Lightbulb, MessageCircle, Users, Handshake, Menu, X } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const fullText = "Hi, I'm Hubertus Kenneth Alfragisa";

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add staggered delay for multiple elements in the same section
          setTimeout(() => {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }, index * 150);
        }
      });
    }, observerOptions);

    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      const elementsToAnimate = document.querySelectorAll('.fade-in-on-scroll');
      elementsToAnimate.forEach(el => {
        observer.observe(el);
      });
    }, 500);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // Dark mode toggle
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 z-50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">Hubertus's Portfolio</h2>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => scrollToSection('home')} className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</button>
                <button onClick={() => scrollToSection('experience')} className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Experience</button>
                <button onClick={() => scrollToSection('education')} className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Education</button>
                <button onClick={() => scrollToSection('skills')} className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Skills</button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Contact</button>
              </div>
            </div>

            {/* Dark Mode Toggle and Mobile Menu Button */}
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Home</button>
                <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">About</button>
                <button onClick={() => scrollToSection('experience')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Experience</button>
                <button onClick={() => scrollToSection('education')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Education</button>
                <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Skills</button>
                <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 min-h-[1.2em]">
                <span className="typewriter">{displayedText}</span>
                <span className="cursor animate-pulse">|</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 fade-in-on-scroll opacity-0 transform translate-y-8">Computer Science Student</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl fade-in-on-scroll opacity-0 transform translate-y-8">
                Active college student at Bina Nusantara University, focused on improving and learning new things through collaborating with others.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start fade-in-on-scroll opacity-0 transform translate-y-8">
                <button onClick={() => scrollToSection('contact')} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg">
                  Get In Touch
                </button>
                <button onClick={() => scrollToSection('about')} className="border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end fade-in-on-scroll opacity-0 transform translate-y-8">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 dark:bg-blue-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <img 
                  src="/image.png" 
                  alt="Hubertus Kenneth Alfragisa" 
                  className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-4 border-blue-600 dark:border-blue-400 transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-on-scroll opacity-0 transform translate-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Getting to know me better</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 fade-in-on-scroll opacity-0 transform translate-y-8">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                I'm a passionate Computer Science student at Bina Nusantara University, specializing in Software Engineering. 
                My journey in technology is driven by a genuine curiosity to understand how things work and a desire to create 
                meaningful solutions through collaboration and continuous learning.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Currently serving as Manager of the Streaming Division at Binusian Gaming and actively participating as an 
                Activist in Persekutuan Oikumene, I believe in the power of teamwork and community engagement to drive innovation 
                and personal growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center md:justify-start space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg fade-in-on-scroll opacity-0 transform translate-y-8">
                <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-700 dark:text-gray-300">Gading Serpong, Tangerang</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg fade-in-on-scroll opacity-0 transform translate-y-8">
                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-700 dark:text-gray-300">Computer Science Student</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg fade-in-on-scroll opacity-0 transform translate-y-8">
                <MessageCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <span className="text-gray-700 dark:text-gray-300">Bahasa Indonesia, English</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-on-scroll opacity-0 transform translate-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">My professional journey</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md fade-in-on-scroll opacity-0 transform translate-y-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Winner - Best Booth</h3>
                    <h4 className="text-lg text-blue-600 dark:text-blue-400">TARQVAE Biology Virtual Exhibition</h4>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">2021</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Recognized for outstanding presentation and innovative approach in showcasing biological concepts through virtual exhibition format.</p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md fade-in-on-scroll opacity-0 transform translate-y-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Participant</h3>
                    <h4 className="text-lg text-blue-600 dark:text-blue-400">OSTARNAS V Project Based Learning</h4>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">2022</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Participated in a comprehensive project-based learning program focused on practical application of academic knowledge in real-world scenarios.</p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md fade-in-on-scroll opacity-0 transform translate-y-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Manager - Streaming Division</h3>
                    <h4 className="text-lg text-blue-600 dark:text-blue-400">Binusian Gaming</h4>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0 bg-green-100 dark:bg-green-900 px-3 py-1 rounded-full">2024 - Present</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Leading the streaming division, coordinating content creation strategies and managing team operations to enhance gaming community engagement.</p>
              </div>

              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md fade-in-on-scroll opacity-0 transform translate-y-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Activist</h3>
                    <h4 className="text-lg text-blue-600 dark:text-blue-400">Persekutuan Oikumene</h4>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 mt-2 md:mt-0 bg-green-100 dark:bg-green-900 px-3 py-1 rounded-full">2025 - Present</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">Actively participating in community outreach programs and interfaith dialogue initiatives to promote unity and social awareness.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-on-scroll opacity-0 transform translate-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">My academic background</p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md fade-in-on-scroll opacity-0 transform translate-y-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Bina Nusantara University</h3>
              <h4 className="text-blue-600 dark:text-blue-400 font-medium mb-2">Computer Science - Software Engineering</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 bg-green-100 dark:bg-green-900 px-3 py-1 rounded-full inline-block">2023 - Present</p>
              <p className="text-gray-600 dark:text-gray-300">Currently pursuing a degree in Computer Science with specialization in Software Engineering, focusing on modern development practices and collaborative software development.</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md fade-in-on-scroll opacity-0 transform translate-y-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">SMA Tarakanita Gading Serpong</h3>
              <h4 className="text-blue-600 dark:text-blue-400 font-medium mb-2">High School - Science Studies</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full inline-block">2020 - 2023</p>
              <p className="text-gray-600 dark:text-gray-300">Completed high school education with focus on Science Studies, building a strong foundation in mathematics, physics, and analytical thinking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-on-scroll opacity-0 transform translate-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">What I bring to the table</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center fade-in-on-scroll opacity-0 transform translate-y-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Problem Solving</h3>
              <p className="text-gray-600 dark:text-gray-300">Analytical approach to breaking down complex challenges into manageable solutions through systematic thinking and creative problem-solving techniques.</p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center fade-in-on-scroll opacity-0 transform translate-y-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Communication</h3>
              <p className="text-gray-600 dark:text-gray-300">Strong verbal and written communication skills, enabling effective collaboration and clear presentation of ideas across diverse teams and audiences.</p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center fade-in-on-scroll opacity-0 transform translate-y-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Leadership</h3>
              <p className="text-gray-600 dark:text-gray-300">Experience in leading teams and managing projects, with focus on inspiring others and creating environments that foster growth and innovation.</p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center fade-in-on-scroll opacity-0 transform translate-y-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Cooperation & Teamwork</h3>
              <p className="text-gray-600 dark:text-gray-300">Collaborative mindset with ability to work effectively in team environments, contributing to shared goals while supporting team members' success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-on-scroll opacity-0 transform translate-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Let's connect and collaborate</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center fade-in-on-scroll opacity-0 transform translate-y-8 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                <a href="mailto:hubertus.alfragisa@binus.ac.id" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">
                  hubertus.alfragisa@binus.ac.id
                </a>
              </div>

              <div className="text-center fade-in-on-scroll opacity-0 transform translate-y-8 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Phone</h3>
                <a href="tel:+62083890403193" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors">
                  +62 083890403193
                </a>
              </div>

              <div className="text-center fade-in-on-scroll opacity-0 transform translate-y-8 transition-all duration-300 hover:transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
                <span className="text-gray-600 dark:text-gray-300">Gading Serpong, Tangerang</span>
              </div>
            </div>

            <div className="text-center bg-gray-50 dark:bg-gray-800 p-8 rounded-lg fade-in-on-scroll opacity-0 transform translate-y-8 transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Connect with me</h3>
              <div className="flex justify-center space-x-6">
                <a href="https://instagram.com/hubertus.kenneth" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:transform hover:scale-110 transition-all duration-300 shadow-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://linkedin.com/in/hubertus-kenneth-alfragisa" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white hover:transform hover:scale-110 transition-all duration-300 shadow-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="mailto:hubertus.alfragisa@binus.ac.id" className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white hover:transform hover:scale-110 transition-all duration-300 shadow-lg">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">&copy; 2024 Hubertus Kenneth Alfragisa. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Built with passion and dedication</p>
        </div>
      </footer>
    </div>
  );
}

export default App;