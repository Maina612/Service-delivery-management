'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function RegisterPage() {
  const [userType, setUserType] = useState('customer')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    terms: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    if (!formData.terms) {
      alert('Please accept the terms and conditions')
      return
    }
    // Handle registration logic here
    console.log('Register:', { userType, ...formData })
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const userTypes = [
    { value: 'customer', label: 'Customer', icon: '👤', description: 'Request and track services' },
    { value: 'provider', label: 'Service Provider', icon: '🔧', description: 'Deliver services to customers' },
    { value: 'admin', label: 'Admin', icon: '👑', description: 'Manage platform operations' }
  ]

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />

      <section
        className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900/15 to-blue-900/15"
        id="register"
      >
        <div className="max-w-5xl w-full">
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400 mb-2">Get started</p>
            <h1 className="text-4xl md:text-5xl font-bold neon-text leading-tight mb-4">Create your Fixora account</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Unlock AI-driven workflows, real-time tracking, and proactive service updates.
            </p>
          </div>

          <div className="glass glass-hover rounded-2xl p-8 md:p-10 shadow-xl shadow-purple-500/10">
            {/* User Type Selection */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-300 mb-4">Account Type</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {userTypes.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setUserType(type.value)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      userType === type.value
                        ? 'border-purple-400 bg-purple-500/10 shadow-lg shadow-purple-500/20'
                        : 'border-white/10 bg-gray-900/40 hover:border-white/20'
                    }`}
                  >
                    <div className="text-2xl mb-2">{type.icon}</div>
                    <div className="font-semibold text-white mb-1">{type.label}</div>
                    <div className="text-xs text-gray-400">{type.description}</div>
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm text-gray-300" htmlFor="name">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  required
                  className="w-full rounded-lg bg-gray-900/60 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 transition"
                />
              </div>
              {userType === 'provider' && (
                <div className="space-y-2">
                  <label className="block text-sm text-gray-300" htmlFor="company">
                    Company/Organization Name
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company Ltd."
                    required
                    className="w-full rounded-lg bg-gray-900/60 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 transition"
                  />
                </div>
              )}
              <div className="space-y-2">
                <label className="block text-sm text-gray-300" htmlFor="email">
                  {userType === 'admin' ? 'Admin Email' : 'Work email'}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  required
                  className="w-full rounded-lg bg-gray-900/60 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 transition"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm text-gray-300" htmlFor="password">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    minLength={8}
                    className="w-full rounded-lg bg-gray-900/60 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm text-gray-300" htmlFor="confirmPassword">
                    Confirm password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    className="w-full rounded-lg bg-gray-900/60 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 transition"
                  />
                </div>
              </div>
              {userType === 'admin' && (
                <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/30">
                  <p className="text-sm text-yellow-300">
                    <strong>Admin Access:</strong> Admin accounts require approval from platform administrators. 
                    You will receive an email once your account is verified.
                  </p>
                </div>
              )}
              <div className="flex items-start gap-3 text-sm text-gray-400">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  required
                  className="mt-1 rounded bg-gray-800 border-white/20 text-cyan-500 focus:ring-cyan-500/50"
                />
                <label htmlFor="terms" className="cursor-pointer">
                  I agree to the{' '}
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white shadow-lg shadow-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/60 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Create {userTypes.find(t => t.value === userType)?.label} Account
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-400">
              Already have an account?{' '}
              <Link href="/login" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

