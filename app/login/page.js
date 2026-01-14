'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function LoginPage() {
  const [userType, setUserType] = useState('customer')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login:', { userType, ...formData })
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
    { value: 'provider', label: 'Service Provider', icon: '🔧', description: 'Manage service deliveries' },
    { value: 'admin', label: 'Admin', icon: '👑', description: 'Platform administration' }
  ]

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />

      <section
        className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/10"
        id="login"
      >
        <div className="max-w-5xl w-full">
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-400 mb-2">Welcome back</p>
            <h1 className="text-4xl md:text-5xl font-bold neon-text leading-tight mb-4">Sign in to Fixora</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Access your dashboard and manage services in real time.
            </p>
          </div>

          <div className="glass glass-hover rounded-2xl p-8 md:p-10 shadow-xl shadow-cyan-500/10">
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
                        ? 'border-cyan-400 bg-cyan-500/10 shadow-lg shadow-cyan-500/20'
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
                <label className="block text-sm text-gray-300" htmlFor="email">
                  Email
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
                  className="w-full rounded-lg bg-gray-900/60 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/40 transition"
                />
              </div>
              <div className="flex items-center justify-between text-sm text-gray-400">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="rounded bg-gray-800 border-white/20 text-cyan-500 focus:ring-cyan-500/50"
                  />
                  Remember me
                </label>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white shadow-lg shadow-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/60 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                Sign In as {userTypes.find(t => t.value === userType)?.label}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-400">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

