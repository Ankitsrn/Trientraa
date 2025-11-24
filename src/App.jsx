    import React, { useState, useEffect, useRef } from 'react'
    import logo from '../trinetra.png'
    import Connect from './Connect'

// Navigation Component
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-lg`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            {/** Make brand text white on dark hero background, and dark when navbar becomes white on scroll. Show `trinetra.png` left of the brand text. */}
            <h1 className="flex items-center">
              <img src={logo} alt="Gemini logo" className="w-10 h-10 mr-3 object-contain" />
              <span className={`text-2xl font-bold text-gray-900`}>
                Trientraa Digital Solutions
              </span>
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
          <a href="#solutions" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Solutions</a>
          <a href="#products" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Products</a>
          <a href="#testimonials" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Testimonials</a>
          <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">Contact</a>
          <button onClick={() => (window.location.hash = '#connect')} className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>

          <button
          className={`md:hidden text-gray-700`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <a href="#solutions" className="block text-gray-700 hover:text-indigo-600 py-2">Solutions</a>
            <a href="#products" className="block text-gray-700 hover:text-indigo-600 py-2">Products</a>
            <a href="#testimonials" className="block text-gray-700 hover:text-indigo-600 py-2">Testimonials</a>
            <a href="#contact" className="block text-gray-700 hover:text-indigo-600 py-2">Contact</a>
            <button onClick={() => (window.location.hash = '#connect')} className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}


import analyticsImg from '../hero/analytics.png';
import partnersImg from '../hero/partners.png';
import revenueImg from '../hero/revenue.png';
import growthImg from '../hero/growth.png';

const Hero = () => {
  const slides = [
    { img: analyticsImg, title: 'Analytics' },
    { img: partnersImg, title: 'Partners' },
    { img: revenueImg, title: 'Revenue' },
    { img: growthImg, title: 'Growth' }
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCurrent(i => (i + 1) % slides.length), 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative hero-gradient pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-pattern"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="slide-in">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight text-shadow">
              Collaborate Better Succeed Faster
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              End-to-end partnership and collaboration management with affiliates, influencers, brand ambassadors, OEM partners, loyalty platforms, and cashback networks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => (window.location.hash = '#connect')} className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl">
                For Advertiser
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105">
                For Publishers
              </button>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* Slideshow: single large floating card that cycles through slides */}
              <div className="relative h-72 md:h-96 flex items-center justify-center overflow-hidden">
                {slides.map((s, i) => (
                  <div
                    key={s.title}
                    className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-400 ease-in-out ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} 
                    aria-hidden={i === current ? 'false' : 'true'}
                  >
                    <img src={s.img} alt={s.title} className="w-56 h-56 md:w-72 md:h-72 object-contain mb-4" />
                    <div className="text-white font-semibold text-lg md:text-xl">{s.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  )
}

// Solutions Section
const Solutions = () => {
  const solutions = [
    {
      icon: '🎯',
      title: 'Affiliate Marketing',
      subtitle: 'Trientraa / Perform',
      description: 'A robust, tech-driven affiliate platform for customer acquisition via CPA, CPL, and CPS models. Connect with a global ecosystem of vetted partners.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: '✨',
      title: 'Influencer Marketing',
      subtitle: 'Trientraa / Creator',
      description: 'Collaborate with creators who convert. Run high-impact campaigns across Instagram, TikTok, YouTube with promo code and link tracking.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: '🎁',
      title: 'Loyalty Marketing',
      subtitle: 'Trientraa / Rewards',
      description: 'Tap into high-intent audiences by placing your offers inside leading cashback, mileage, and bank loyalty programs.',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: '📱',
      title: 'Mobile OEM Advertising',
      subtitle: 'Trientraa / Mobile',
      description: 'Drive installs and sales via alternative app stores, OEM placements. Reach users beyond the duopoly with CPC-to-CPA optimization.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: '📝',
      title: 'Contract & Pay',
      subtitle: 'Trientraa / Flow',
      description: 'Run special projects without the hassle. We handle contracts, compliance, and global payouts for all your partners.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: '🛒',
      title: 'For Marketplace Sellers',
      subtitle: 'Trientraa / Seller',
      description: 'Attract high-intent shoppers to your listings via our global network. Full-funnel tracking and multi-channel attribution included.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Trientraa Solutions for Brands</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Whatever your business size or marketing objectives, Trientraa delivers the tools and solutions to help you grow.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="card-hover bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center text-3xl mb-6 glow-effect`}>
                {solution.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{solution.title}</h3>
              <p className="text-sm text-indigo-600 font-semibold mb-4">{solution.subtitle}</p>
              <p className="text-gray-600 leading-relaxed">{solution.description}</p>
              <button className="mt-6 text-indigo-600 font-semibold hover:text-indigo-700 flex items-center gap-2 group">
                Learn More
                <i className="fas fa-arrow-right transform group-hover:translate-x-2 transition-transform"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Target Audience Section
const TargetAudience = () => {
  const audiences = [
    {
      title: 'For Advertisers ',
      items: ['Ecommerce', 'Travel', 'Online Services', 'Finance', 'Loans & Insurance', 'Marketplace Sellers', 'Mobile Apps'],
      icon: '🏢',
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      title: 'For Publishers & Creators',
      items: ['Influencers', 'Creators', 'Affiliates', 'Call Centers', 'Loyalty Programs', 'OEM Providers', 'Telegram Channels'],
      icon: '👥',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      title: 'For Agencies',
      items: ['PR Agencies', 'Performance Marketing', 'Creative Agencies', 'Media Agencies', 'Digital Marketing', 'Brand Strategy', 'Content Creation'],
      icon: '🎨',
      gradient: 'from-green-600 to-teal-600'
    }
  ]

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Welcome to Trientraa</h2>
          <p className="text-xl text-gray-600">Join Trientraa as a Brand, Agency partner, or sign up as a Publisher or Creator</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="card-hover bg-white rounded-2xl overflow-hidden shadow-xl">
              <div className={`bg-gradient-to-br ${audience.gradient} p-8 text-center`}>
                <div className="text-6xl mb-4">{audience.icon}</div>
                <h3 className="text-2xl font-bold text-white">{audience.title}</h3>
              </div>
              <div className="p-8">
                <p className="text-gray-600 font-semibold mb-4">Our products for:</p>
                <ul className="space-y-3">
                  {audience.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700">
                      <i className="fas fa-check-circle text-green-500"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className={`mt-6 w-full bg-gradient-to-r ${audience.gradient} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Testimonials
const Testimonials = () => {
  const testimonials = [
    { name: 'Arpit Sharma', role: 'Marketing Director', company: 'TechVision Solutions', text: 'Partner marketing has been our most effective performance channel. We have seen higher conversion rates and lower customer acquisition costs compared to other paid channels.', avatar: '👨‍💼' },
    { name: 'Priya Malhotra', role: 'CEO', company: 'GrowthHub India', text: 'Our partnership with Trientraa has been instrumental in our journey. They understand our unique needs and have done excellent work in problem-solving. Their team has been supportive and results-driven.', avatar: '👩‍💼' },
    { name: 'Rahul Verma', role: 'Head of Partnerships', company: 'StudentBenefits Plus', text: 'This collaboration allows us to expand our range of brands and exclusive deals. The partnership showcases the power of collaboration and reinforces our position as a leading platform.', avatar: '👨‍💻' },
    { name: 'Anjali Desai', role: 'Growth Manager', company: 'EcoMart Online', text: 'We have been associated since 2021. Partner marketing now contributes 26% to our overall marketing mix, helping us bring down customer acquisition costs and boost revenues significantly.', avatar: '👩‍💻' }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Real success stories from businesses in India who grow with Trientraa</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="card-hover bg-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-3xl flex-shrink-0">{t.avatar}</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{t.name}</h4>
                  <p className="text-indigo-600 font-semibold">{t.role}</p>
                  <p className="text-gray-500 text-sm">{t.company}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic">"{t.text}"</p>
              <div className="mt-6 flex gap-1">{[...Array(5)].map((_, i) => <i key={i} className="fas fa-star text-yellow-400"></i>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Stats with animated counters
const Stats = () => {
  const stats = [
    { target: 10000, label: 'Active Partners', icon: '🤝', format: (v) => `${v.toLocaleString('en-IN')}+` },
    { target: 500, label: 'Revenue Generated', icon: '💰', format: (v) => `₹${Math.round(v)}Cr+` },
    { target: 50, label: 'Countries', icon: '🌍', format: (v) => `${Math.round(v)}+` },
    { target: 98, label: 'Client Satisfaction', icon: '⭐', format: (v) => `${Math.round(v)}%` }
  ]

  const [values, setValues] = useState(() => stats.map(() => 0))
  const sectionRef = useRef(null)
  const playedRef = useRef(false)

  useEffect(() => {
    let rafId = null
    const duration = 3000 // ms

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

    const animate = () => {
      const start = performance.now()
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = easeOutCubic(progress)
        setValues(stats.map((s) => Math.floor(s.target * eased)))

        if (progress < 1) {
          rafId = requestAnimationFrame(step)
        }
      }
      rafId = requestAnimationFrame(step)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !playedRef.current) {
            playedRef.current = true
            animate()
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      observer.disconnect()
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.format(values[index])}</div>
              <div className="text-blue-100 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA
const CTA = () => (
  <section id="contact" className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to Transform Your Partner Marketing?</h2>
      <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Join thousands of brands and publishers who are growing their business with Trientraa's innovative platform.</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button onClick={() => (window.location.hash = '#connect')} className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">Start Free Trial</button>
        <button className="bg-gray-100 text-gray-800 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">Schedule Demo</button>
      </div>
    </div>
  </section>
)

// Footer
const Footer = () => (
  <footer className="bg-gray-900 text-white py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div>
          <h3 className="text-2xl font-bold gradient-text mb-4">Trientraa Digital</h3>
          <p className="text-gray-400">Partnership collaboration management platform for successful business growth.</p>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Products</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Affiliate Marketing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Influencer Marketing</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Loyalty Programs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Mobile OEM</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Company</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-4">Connect</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors"><i className="fab fa-twitter"></i></a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
        <p>&copy; 2025 Trientraa Digital Solution Private Limited. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

export default function App() {
  const [route, setRoute] = useState(window.location.hash || '')

  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || '')
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const isConnect = route === '#connect'

  return (
    <div>
      <Navigation />
      {isConnect ? (
        <Connect />
      ) : (
        <>
          <Hero />
          <Solutions />
          <TargetAudience />
          <Stats />
          <Testimonials />
          <CTA />
          <Footer />
        </>
      )}
    </div>
  )
}
