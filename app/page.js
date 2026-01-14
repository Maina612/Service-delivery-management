'use client'

import Navbar from '../components/Navbar'
import ServiceCard from '../components/ServiceCard'
import Footer from '../components/Footer'

// Hero Section Component
function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 neon-text leading-tight">
          Smart Service Delivery.
          <br />
          <span className="block mt-2">Powered by AI.</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Request, track, and manage services in real time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transform hover:scale-105 transition-all duration-300">
            Request a Service
          </button>
          <button className="px-8 py-4 glass glass-hover text-white font-semibold rounded-lg border-2 border-cyan-500/50 hover:border-cyan-500 transform hover:scale-105 transition-all duration-300">
            View Dashboard
          </button>
        </div>
      </div>
    </section>
  )
}

// Services Section Component
function ServicesSection() {
  const services = [
    {
      icon: '🔧',
      title: 'IT Support',
      description: '24/7 technical assistance and troubleshooting for all your IT needs.'
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics.'
    },
    {
      icon: '🔒',
      title: 'Security Services',
      description: 'Comprehensive security solutions to protect your digital assets.'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure tailored to your business requirements.'
    },
    {
      icon: '🚀',
      title: 'DevOps',
      description: 'Streamline your development and deployment processes.'
    },
    {
      icon: '💼',
      title: 'Consulting',
      description: 'Expert guidance to optimize your service delivery strategy.'
    }
  ]

  return (
    <section id="services" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 neon-text">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive service delivery solutions tailored to your needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

// How It Works Section Component
function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Request Service',
      description: 'Submit your service request through our intuitive platform',
      icon: '📝'
    },
    {
      number: '02',
      title: 'Track Progress',
      description: 'Monitor real-time updates and status of your request',
      icon: '📈'
    },
    {
      number: '03',
      title: 'Get Results',
      description: 'Receive completed services with detailed reports',
      icon: '✅'
    }
  ]

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 neon-text">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Simple, efficient, and transparent service delivery process
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="glass glass-hover rounded-xl p-8 md:p-10">
                <div className="text-6xl md:text-7xl mb-4">{step.icon}</div>
                <div className="text-cyan-400 font-bold text-sm mb-2">{step.number}</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-cyan-500 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// AI Feature Card Component
function AIFeatureCard({ icon, title, description }) {
  return (
    <div className="glass glass-hover rounded-xl p-6 md:p-8 group cursor-pointer relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
      <div className="relative z-10">
        <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}

// AI Features Section Component
function AIFeaturesSection() {
  const features = [
    {
      icon: '🤖',
      title: 'AI Chat Assistant',
      description: 'Get instant answers and support from our intelligent AI assistant available 24/7.'
    },
    {
      icon: '💡',
      title: 'Smart Service Recommendations',
      description: 'Receive personalized service suggestions based on your usage patterns and needs.'
    },
    {
      icon: '🔔',
      title: 'Auto Status Updates',
      description: 'Automated notifications keep you informed about your service requests in real-time.'
    },
    {
      icon: '📊',
      title: 'Feedback Sentiment Analysis',
      description: 'Advanced AI analyzes feedback to continuously improve service quality and delivery.'
    }
  ]

  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 neon-text">
            AI-Powered Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the future of service delivery with cutting-edge AI technology
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <AIFeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

// Call to Action Section Component
function CTASection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-800/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="glass glass-hover rounded-2xl p-12 md:p-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 neon-text">
            Ready to Transform Your Service Delivery?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of organizations already using our platform to streamline their service management.
          </p>
          <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold text-lg rounded-lg shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/60 transform hover:scale-105 transition-all duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  )
}

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <AIFeaturesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
