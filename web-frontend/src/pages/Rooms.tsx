import { useEffect, useState } from 'react'
import axios from 'axios'

type Room = { id: number; number: string; type: string; status: string; basePrice?: number }

export default function Rooms() {
  const [rooms, setRooms] = useState<Room[]>([])

  useEffect(() => {
    axios.get('/api/rooms/available').then(r => setRooms(r.data.data || [])).catch(() => setRooms([]))
  }, [])

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'available': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'occupied': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      case 'maintenance': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'cleaning': return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-6 py-12 h-screen overflow-y-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Room Management
          </h1>
          <p className="text-xl text-slate-300">Manage your hotel's room inventory and status</p>
        </div>

        {/* Room Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-300 text-sm">Total Rooms</p>
                <p className="text-3xl font-bold">{rooms.length || 0}</p>
              </div>
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🏨</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-300 text-sm">Available</p>
                <p className="text-3xl font-bold text-green-400">
                  {rooms.filter(r => r.status.toLowerCase() === 'available').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-300 text-sm">Occupied</p>
                <p className="text-3xl font-bold text-blue-400">
                  {rooms.filter(r => r.status.toLowerCase() === 'occupied').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-300 text-sm">Maintenance</p>
                <p className="text-3xl font-bold text-yellow-400">
                  {rooms.filter(r => r.status.toLowerCase() === 'maintenance').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🔧</span>
              </div>
            </div>
          </div>
        </div>

        {/* Room Management Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold mb-4">Room Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 rounded-lg p-4 text-center transition-all transform hover:scale-105">
                <div className="text-2xl mb-2">➕</div>
                <div className="font-medium">Add Room</div>
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-lg p-4 text-center transition-all transform hover:scale-105">
                <div className="text-2xl mb-2">🔍</div>
                <div className="font-medium">Search Rooms</div>
              </button>
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-lg p-4 text-center transition-all transform hover:scale-105">
                <div className="text-2xl mb-2">📊</div>
                <div className="font-medium">Room Analytics</div>
              </button>
              <button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 rounded-lg p-4 text-center transition-all transform hover:scale-105">
                <div className="text-2xl mb-2">⚙️</div>
                <div className="font-medium">Settings</div>
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold mb-4">Room Types</h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Standard Rooms</p>
                  <p className="text-xs text-slate-400">50 rooms - ₹10,000/night</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Deluxe Rooms</p>
                  <p className="text-xs text-slate-400">30 rooms - ₹16,700/night</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Premium Suites</p>
                  <p className="text-xs text-slate-400">20 rooms - ₹29,200/night</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Room List */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h2 className="text-2xl font-bold mb-6">Room Inventory</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map(room => (
              <div key={room.id} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xl font-bold">Room {room.number}</div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(room.status)}`}>
                    {room.status}
                  </div>
                </div>
                <div className="text-slate-300 mb-2">Type: {room.type}</div>
                {room.basePrice !== undefined && (
                  <div className="text-lg font-semibold text-emerald-400 mb-4">₹{Math.round(room.basePrice * 83.33).toLocaleString('en-IN')}/night</div>
                )}
                <button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 rounded-lg py-2 text-sm font-medium transition-all transform hover:scale-105">
                  View Details
                </button>
              </div>
            ))}
            {rooms.length === 0 && (
              <div className="col-span-full text-center py-12">
                <div className="text-6xl mb-4">🏨</div>
                <div className="text-xl text-slate-300 mb-2">No rooms available</div>
                <div className="text-slate-400">Check back later or contact the front desk</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}