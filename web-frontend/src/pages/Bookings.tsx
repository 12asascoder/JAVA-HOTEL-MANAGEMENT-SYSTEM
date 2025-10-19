import { useState } from 'react'
import axios from 'axios'

export default function Bookings() {
  const [roomId, setRoomId] = useState('')
  const [start, setStart] = useState('')
  const [end, setEnd] = useState('')
  const [available, setAvailable] = useState<boolean | null>(null)
  const [loading, setLoading] = useState(false)

  const check = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`/api/bookings/availability/${roomId}`, { params: { start, end } })
      setAvailable(!!res.data.data)
    } finally { setLoading(false) }
  }

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-6 py-12 h-screen overflow-y-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Booking Management
          </h1>
          <p className="text-xl text-slate-300">Check availability and manage reservations</p>
        </div>

        {/* Booking Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-300 text-sm">Total Bookings</p>
                <p className="text-3xl font-bold">156</p>
              </div>
              <div className="w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📅</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-300 text-sm">Active Bookings</p>
                <p className="text-3xl font-bold text-green-400">89</p>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-300 text-sm">Pending</p>
                <p className="text-3xl font-bold text-yellow-400">23</p>
              </div>
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⏳</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-300 text-sm">Revenue</p>
                <p className="text-3xl font-bold text-purple-400">₹37.5L</p>
              </div>
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 rounded-lg p-4 text-center transition-all transform hover:scale-105">
                <div className="text-2xl mb-2">➕</div>
                <div className="font-medium">New Booking</div>
              </button>
              <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-lg p-4 text-center transition-all transform hover:scale-105">
                <div className="text-2xl mb-2">🔍</div>
                <div className="font-medium">Search Bookings</div>
              </button>
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-lg p-4 text-center transition-all transform hover:scale-105">
                <div className="text-2xl mb-2">📊</div>
                <div className="font-medium">Booking Reports</div>
              </button>
              <button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 rounded-lg p-4 text-center transition-all transform hover:scale-105">
                <div className="text-2xl mb-2">📈</div>
                <div className="font-medium">Analytics</div>
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold mb-4">Recent Bookings</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Room 205 - John Smith</p>
                  <p className="text-xs text-slate-400">Check-in: Today 3:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Room 312 - Sarah Johnson</p>
                  <p className="text-xs text-slate-400">Check-out: Tomorrow 11:00 AM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Room 108 - Mike Wilson</p>
                  <p className="text-xs text-slate-400">Pending confirmation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Availability Checker */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h2 className="text-2xl font-bold mb-6 text-center">Check Room Availability</h2>
          <div className="max-w-md mx-auto">
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Room ID</label>
                <input 
                  className="w-full bg-white/10 border border-white/20 rounded-lg p-3 focus:outline-none focus:border-indigo-400 text-white placeholder-slate-400" 
                  placeholder="Enter room number" 
                  value={roomId} 
                  onChange={e => setRoomId(e.target.value)} 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Check-in Date</label>
                <input 
                  className="w-full bg-white/10 border border-white/20 rounded-lg p-3 focus:outline-none focus:border-indigo-400 text-white" 
                  type="date" 
                  value={start} 
                  onChange={e => setStart(e.target.value)} 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Check-out Date</label>
                <input 
                  className="w-full bg-white/10 border border-white/20 rounded-lg p-3 focus:outline-none focus:border-indigo-400 text-white" 
                  type="date" 
                  value={end} 
                  onChange={e => setEnd(e.target.value)} 
                />
              </div>
              <button 
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-lg py-3 font-medium transition-all transform hover:scale-105 disabled:opacity-50 disabled:transform-none" 
                disabled={loading || !roomId || !start || !end} 
                onClick={check}
              >
                {loading ? 'Checking Availability…' : 'Check Availability'}
              </button>
              {available !== null && (
                <div className={`text-center p-4 rounded-lg ${available ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
                  <div className="text-2xl mb-2">{available ? '🎉' : '❌'}</div>
                  <div className="font-medium">
                    {available ? 'Room is available!' : 'Room not available'}
                  </div>
                  {available && (
                    <div className="text-sm mt-2 opacity-80">Ready to book this room</div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}