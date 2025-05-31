'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Heart, Users, Leaf, Brain, Mail, ExternalLink } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-900/95 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto section-padding">
          <div className="flex items-center justify-between h-16">
            <div className="font-serif text-2xl font-bold text-primary-400">
              Eyimofe
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="hover:text-primary-400 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="hover:text-primary-400 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-primary-400 transition-colors">
                Contact
              </button>
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4 bg-dark-900/95 backdrop-blur-lg rounded-lg mt-2">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 hover:text-primary-400 transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 hover:text-primary-400 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 hover:text-primary-400 transition-colors">
                Contact
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center section-padding pt-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="font-serif text-5xl lg:text-7xl font-bold leading-tight">
              Find Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                Inner Peace
              </span>
              <br />Through Wellness
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              With over 7 years of experience as a yoga and wellness instructor, 
              I guide you on a transformative journey towards holistic well-being.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary"
              >
                Contact Me
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="btn-secondary"
              >
                My Services
              </button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary-500/20 to-primary-600/20 backdrop-blur-lg border border-primary-400/30 flex items-center justify-center">
                <Heart size={120} className="text-primary-400" />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-primary-500/20 backdrop-blur-lg animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-primary-600/10 backdrop-blur-lg animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-primary-400">
              About Eyimofe
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                For over 7 years, I've been dedicated to helping individuals discover 
                their path to wellness through the ancient practice of yoga and modern 
                wellness techniques. My approach combines traditional wisdom with 
                contemporary understanding of mind-body connection.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Whether you're a beginner seeking to start your wellness journey or 
                an experienced practitioner looking to deepen your practice, I'm here 
                to guide you with compassion, expertise, and personalized attention.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">7+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">500+</div>
                <div className="text-sm text-gray-400">Students Guided</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">1000+</div>
                <div className="text-sm text-gray-400">Classes Taught</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 section-padding bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-primary-400">
              Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-8 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Heart size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary-400">Private Yoga Sessions</h3>
              <p className="text-gray-300">Personalized one-on-one yoga instruction tailored to your specific needs and goals.</p>
            </div>
            
            <div className="glass-card p-8 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Users size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary-400">Group Classes</h3>
              <p className="text-gray-300">Join our welcoming community in group yoga and wellness sessions for all levels.</p>
            </div>
            
            <div className="glass-card p-8 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Leaf size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary-400">Wellness Coaching</h3>
              <p className="text-gray-300">Holistic wellness guidance covering nutrition, mindfulness, and lifestyle balance.</p>
            </div>
            
            <div className="glass-card p-8 text-center group hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Brain size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary-400">Meditation & Mindfulness</h3>
              <p className="text-gray-300">Learn powerful meditation techniques to cultivate inner peace and mental clarity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl font-bold mb-6 text-primary-400">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <p className="text-lg text-gray-300 leading-relaxed">
                Ready to begin your wellness journey? I'd love to hear from you and 
                discuss how we can work together to achieve your wellness goals.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="https://medium.com/@cloudspin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass-card p-4 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                    <ExternalLink size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary-400 group-hover:text-primary-300">Read My Articles</div>
                    <div className="text-sm text-gray-400">Medium Blog</div>
                  </div>
                </a>
                
                <a 
                  href="https://twitter.com/cloudspin_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass-card p-4 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                    <ExternalLink size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary-400 group-hover:text-primary-300">Follow on Twitter</div>
                    <div className="text-sm text-gray-400">@cloudspin_</div>
                  </div>
                </a>
                
                <a 
                  href="https://instagram.com/cloudspin_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass-card p-4 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center">
                    <ExternalLink size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary-400 group-hover:text-primary-300">Instagram</div>
                    <div className="text-sm text-gray-400">@cloudspin_</div>
                  </div>
                </a>
              </div>
            </div>
            
            <div className="glass-card p-8">
              <form className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    required 
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all"
                    required 
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Your Message" 
                    rows={5}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                  <Mail size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 section-padding border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 mb-2">&copy; 2024 Eyimofe. All rights reserved.</p>
          <p className="text-gray-500 text-sm">Wellness • Yoga • Mindfulness</p>
        </div>
      </footer>
    </div>
  )
}