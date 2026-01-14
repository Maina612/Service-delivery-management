'use client'

import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const initialRequests = [
  {
    id: 'SR-1023',
    title: 'Email Server Outage',
    requester: 'Acme Corp',
    type: 'IT Support',
    createdAt: '2026-01-10',
    priority: 'High',
    status: 'Pending',
  },
  {
    id: 'SR-1018',
    title: 'Monthly Performance Report',
    requester: 'Nova Health',
    type: 'Data Analytics',
    createdAt: '2026-01-09',
    priority: 'Medium',
    status: 'In Progress',
  },
  {
    id: 'SR-1007',
    title: 'Security Audit – Q1',
    requester: 'Orbit Finance',
    type: 'Security Services',
    createdAt: '2026-01-05',
    priority: 'Critical',
    status: 'In Progress',
  },
  {
    id: 'SR-0988',
    title: 'Migrate DB to Cloud',
    requester: 'Pixel Studio',
    type: 'Cloud Solutions',
    createdAt: '2025-12-22',
    priority: 'High',
    status: 'Completed',
  },
]

const statusStyles = {
  Pending: 'bg-yellow-500/10 text-yellow-300 border-yellow-500/40',
  'In Progress': 'bg-cyan-500/10 text-cyan-300 border-cyan-500/40',
  Completed: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/40',
}

const priorityStyles = {
  Low: 'bg-gray-500/10 text-gray-300 border-gray-500/40',
  Medium: 'bg-blue-500/10 text-blue-300 border-blue-500/40',
  High: 'bg-orange-500/10 text-orange-300 border-orange-500/40',
  Critical: 'bg-red-500/10 text-red-300 border-red-500/40',
}

export default function DashboardPage() {
  const [requests, setRequests] = useState(initialRequests)
  const [filter, setFilter] = useState('All')

  const filteredRequests =
    filter === 'All' ? requests : requests.filter((r) => r.status === filter)

  const handleAction = (id, action) => {
    setRequests((prev) =>
      prev.map((req) => {
        if (req.id !== id) return req
        if (action === 'start') return { ...req, status: 'In Progress' }
        if (action === 'complete') return { ...req, status: 'Completed' }
        return req
      }),
    )
  }

  return (
    <main className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar />

      <section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8" id="dashboard">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold neon-text">
                Service Delivery Dashboard
              </h1>
              <p className="mt-2 text-gray-300">
                Monitor all service requests in real time across customers, providers, and admins.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {['All', 'Pending', 'In Progress', 'Completed'].map((status) => (
                <button
                  key={status}
                  type="button"
                  onClick={() => setFilter(status)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                    filter === status
                      ? 'border-cyan-400 bg-cyan-500/10 text-cyan-200 shadow-[0_0_18px_rgba(34,211,238,0.4)]'
                      : 'border-white/10 text-gray-300 hover:border-cyan-400/60 hover:text-cyan-200'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </header>

          {/* KPIs */}
          <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="glass glass-hover rounded-2xl p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">
                Total Requests
              </p>
              <p className="text-3xl font-semibold text-white">
                {requests.length}
              </p>
            </div>
            <div className="glass glass-hover rounded-2xl p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">
                In Progress
              </p>
              <p className="text-3xl font-semibold text-cyan-300">
                {requests.filter((r) => r.status === 'In Progress').length}
              </p>
            </div>
            <div className="glass glass-hover rounded-2xl p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-2">
                Completed
              </p>
              <p className="text-3xl font-semibold text-emerald-300">
                {requests.filter((r) => r.status === 'Completed').length}
              </p>
            </div>
          </section>

          {/* Requests table / list */}
          <section className="glass rounded-2xl p-4 md:p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg md:text-xl font-semibold text-white">
                Service Requests
              </h2>
              <p className="text-xs text-gray-400">
                Showing {filteredRequests.length} of {requests.length} records
              </p>
            </div>

            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-400 border-b border-white/5">
                    <th className="py-3 pr-4">Request ID</th>
                    <th className="py-3 pr-4">Title</th>
                    <th className="py-3 pr-4">Requester</th>
                    <th className="py-3 pr-4">Type</th>
                    <th className="py-3 pr-4">Priority</th>
                    <th className="py-3 pr-4">Created</th>
                    <th className="py-3 pr-4">Status</th>
                    <th className="py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRequests.map((req) => (
                    <tr
                      key={req.id}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="py-3 pr-4 font-mono text-xs text-gray-300">
                        {req.id}
                      </td>
                      <td className="py-3 pr-4 text-white">{req.title}</td>
                      <td className="py-3 pr-4 text-gray-300">
                        {req.requester}
                      </td>
                      <td className="py-3 pr-4 text-gray-300">{req.type}</td>
                      <td className="py-3 pr-4">
                        <span
                          className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${
                            priorityStyles[req.priority]
                          }`}
                        >
                          {req.priority}
                        </span>
                      </td>
                      <td className="py-3 pr-4 text-gray-400">
                        {req.createdAt}
                      </td>
                      <td className="py-3 pr-4">
                        <span
                          className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${
                            statusStyles[req.status]
                          }`}
                        >
                          {req.status}
                        </span>
                      </td>
                      <td className="py-3 text-right space-x-2">
                        {req.status === 'Pending' && (
                          <button
                            type="button"
                            onClick={() => handleAction(req.id, 'start')}
                            className="px-3 py-1.5 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-200 border border-cyan-400/60 hover:bg-cyan-500/30 transition"
                          >
                            Start
                          </button>
                        )}
                        {req.status !== 'Completed' && (
                          <button
                            type="button"
                            onClick={() => handleAction(req.id, 'complete')}
                            className="px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-200 border border-emerald-400/60 hover:bg-emerald-500/30 transition"
                          >
                            Mark Completed
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="space-y-4 md:hidden">
              {filteredRequests.map((req) => (
                <div
                  key={req.id}
                  className="rounded-xl border border-white/10 bg-gray-900/60 p-4 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[11px] text-gray-400">
                        {req.id}
                      </p>
                      <h3 className="text-sm font-semibold text-white">
                        {req.title}
                      </h3>
                    </div>
                    <span
                      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-medium ${
                        statusStyles[req.status]
                      }`}
                    >
                      {req.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-[11px] text-gray-300">
                    <span>{req.requester}</span>
                    <span className="opacity-40">•</span>
                    <span>{req.type}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-gray-400">
                    <span>{req.createdAt}</span>
                    <span
                      className={`inline-flex items-center rounded-full border px-2 py-0.5 ${
                        priorityStyles[req.priority]
                      }`}
                    >
                      {req.priority}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {req.status === 'Pending' && (
                      <button
                        type="button"
                        onClick={() => handleAction(req.id, 'start')}
                        className="px-3 py-1.5 rounded-full text-[11px] font-medium bg-cyan-500/20 text-cyan-200 border border-cyan-400/60 hover:bg-cyan-500/30 transition"
                      >
                        Start
                      </button>
                    )}
                    {req.status !== 'Completed' && (
                      <button
                        type="button"
                        onClick={() => handleAction(req.id, 'complete')}
                        className="px-3 py-1.5 rounded-full text-[11px] font-medium bg-emerald-500/20 text-emerald-200 border border-emerald-400/60 hover:bg-emerald-500/30 transition"
                      >
                        Mark Completed
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  )
}

