import {
  ChevronLeft,
  ChevronRight,
  Search,
  Bell,
  User,
  Settings,
  Grid2x2,
  List,
  Home,
  Clock,
  AlertCircle,
  BarChart3,
  Users,
  BookOpen,
  HelpCircle,
} from "lucide-react"
import Image from "next/image"

export default function Page() {
  const employees = [
    {
      id: 1,
      name: "Bogus Fikri",
      empId: "3948664",
      avatar: "/profile-avatar.png",
      clockIn: "10:02 AM",
      duration: "8h 58m",
      clockOut: "07:00 PM",
      overtime: "2h 12m",
      picture: "bogus_profil...",
      location: "Jl. Jendral Sudirman...",
      note: "Discussed mutual value proposi...",
    },
    {
      id: 2,
      name: "Ihdizein",
      empId: "34534543",
      avatar: "/profile-avatar.png",
      clockIn: "09:30 AM",
      duration: "8h 18m",
      clockOut: "07:12 PM",
      overtime: "-",
      picture: "ihdizen_profil...",
      location: "Jl. Ahmad Yani No...",
      note: "Tynisha is already lined up for th...",
    },
    {
      id: 3,
      name: "Mufti Hidayat",
      empId: "8274382",
      avatar: "/profile-avatar.png",
      clockIn: "09:24 AM",
      duration: "7h 36m",
      clockOut: "05:00 PM",
      overtime: "-",
      picture: "mufti_profile...",
      location: "Jl. Diponegoro No...",
      note: "Marci is already doing some gre...",
    },
    {
      id: 4,
      name: "Fauzan Ardianysyah",
      empId: "3948664",
      avatar: "/profile-avatar.png",
      clockIn: "08:56 AM",
      duration: "10h 12m",
      clockOut: "05:01 PM",
      overtime: "-",
      picture: "fauzan_profil...",
      location: "Jl. Basuki Rahmat...",
      note: "Tynisha is already lined up for th...",
    },
    {
      id: 5,
      name: "Raihan Fikri",
      empId: "9284244",
      avatar: "/profile-avatar.png",
      clockIn: "08:56 AM",
      duration: "10h 12m",
      clockOut: "07:00 PM",
      overtime: "-",
      picture: "raihan_profile...",
      location: "Jl. Raya Bogor Km...",
      note: "Discussed mutual value proposi...",
    },
    {
      id: 6,
      name: "Ifan",
      empId: "90029388",
      avatar: "/profile-avatar.png",
      clockIn: "10:02 AM",
      duration: "10h 12m",
      clockOut: "05:00 PM",
      overtime: "-",
      picture: "rasyid_profil...",
      location: "Jl. WR Supratman...",
      note: "Rochel has agreed to attend the...",
    },
    {
      id: 7,
      name: "Panji Dwi",
      empId: "173584473",
      avatar: "/profile-avatar.png",
      clockIn: "08:56 AM",
      duration: "10h 12m",
      clockOut: "05:00 PM",
      overtime: "-",
      picture: "panji_profile...",
      location: "Jl. Diponegoro No...",
      note: "Darcel is pretty good. We should...",
    },
    {
      id: 8,
      name: "Laokta Roymarley",
      empId: "3948664",
      avatar: "/profile-avatar.png",
      clockIn: "08:56 AM",
      duration: "8h 18m",
      clockOut: "05:00 PM",
      overtime: "-",
      picture: "laokta_profil...",
      location: "Jl. Sisingamangar...",
      note: "Maryland is a new name we ide...",
    },
    {
      id: 9,
      name: "Bryan",
      empId: "927449748",
      avatar: "/profile-avatar.png",
      clockIn: "08:56 AM",
      duration: "8h 18m",
      clockOut: "05:00 PM",
      overtime: "-",
      picture: "bryan_profil...",
      location: "Jl. Raya Solo-Jogja...",
      note: "Not heard back from them for a...",
    },
    {
      id: 10,
      name: "Ardhi",
      empId: "972358422",
      avatar: "/profile-avatar.png",
      clockIn: "08:56 AM",
      duration: "8h 18m",
      clockOut: "05:00 PM",
      overtime: "-",
      picture: "bani_profile...",
      location: "Jl. Cikarang Baru N...",
      note: "Marci is already doing some gre...",
    },
  ]

  const sidebarItems = [
    { icon: Home, label: "Home" },
    { icon: Clock, label: "Attendance" },
    { icon: AlertCircle, label: "Alerts" },
    { icon: BarChart3, label: "Reports" },
    { icon: Users, label: "Team" },
    { icon: BookOpen, label: "Documents" },
    { icon: Settings, label: "Settings" },
    { icon: HelpCircle, label: "Help" },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-6 gap-8">
        {sidebarItems.map((item, index) => (
          <button
            key={index}
            className="p-3 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <item.icon size={24} />
          </button>
        ))}
        <div className="mt-auto">
          <button className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 transition-colors">
            <HelpCircle size={24} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <div className="bg-gray-900 text-white px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center text-gray-900 font-bold text-lg">
                ⧫
              </div>
              <span className="font-semibold">timli</span>
            </div>
            <span className="text-gray-300">Time Management</span>
          </div>

          <div className="flex items-center gap-6">
            <button className="px-4 py-2 hover:bg-gray-800 rounded-lg transition-colors">Attendance</button>
            <button className="px-4 py-2 hover:bg-gray-800 rounded-lg transition-colors">
              Overtime
              <span className="ml-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">92</span>
            </button>
            <button className="px-4 py-2 hover:bg-gray-800 rounded-lg transition-colors">
              Time Off
              <span className="ml-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">68</span>
            </button>
            <button className="px-4 py-2 hover:bg-gray-800 rounded-lg transition-colors">
              Shift Schedule
              <span className="ml-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">31</span>
            </button>
            <button className="px-4 py-2 hover:bg-gray-800 rounded-lg transition-colors">Work Time</button>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 bg-yellow-400 text-gray-900 rounded-lg hover:bg-yellow-500 transition-colors">
              +
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
              <User size={20} />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto">
          <div className="p-8 bg-white">
            {/* Page Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <ChevronLeft size={20} />
                </button>
                <h1 className="text-2xl font-bold text-gray-900">Attendance</h1>
                <span className="text-gray-600">Monday, 15 October</span>
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <span>📋</span> Attendance Report
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
                  <span>+</span> Add Attendance
                </button>
              </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {/* Present Summary */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                    <span>📍</span> Present Summary
                  </h3>
                  <button className="text-gray-400 hover:text-gray-600">⋯</button>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">On time</p>
                    <p className="text-3xl font-bold text-gray-900">265</p>
                    <p className="text-sm text-green-600">+12 vs yesterday</p>
                  </div>
                  <div className="border-t pt-3">
                    <p className="text-sm text-gray-600">Late clock-in</p>
                    <p className="text-2xl font-bold text-gray-900">62</p>
                    <p className="text-sm text-red-600">−6 vs yesterday</p>
                  </div>
                  <div className="border-t pt-3">
                    <p className="text-sm text-gray-600">Early clock-in</p>
                    <p className="text-2xl font-bold text-gray-900">224</p>
                    <p className="text-sm text-red-600">−6 vs yesterday</p>
                  </div>
                </div>
              </div>

              {/* Not Present Summary */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                    <span>⛔</span> Not Present Summary
                  </h3>
                  <button className="text-gray-400 hover:text-gray-600">⋯</button>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">Absent</p>
                    <p className="text-3xl font-bold text-gray-900">42</p>
                    <p className="text-sm text-green-600">+12 vs yesterday</p>
                  </div>
                  <div className="border-t pt-3">
                    <p className="text-sm text-gray-600">No clock-in</p>
                    <p className="text-2xl font-bold text-gray-900">36</p>
                    <p className="text-sm text-red-600">−6 vs yesterday</p>
                  </div>
                  <div className="border-t pt-3">
                    <p className="text-sm text-gray-600">No clock-out</p>
                    <p className="text-2xl font-bold text-gray-900">0</p>
                    <p className="text-sm">0 vs yesterday</p>
                  </div>
                  <div className="border-t pt-3">
                    <p className="text-sm text-gray-600">Invalid</p>
                    <p className="text-2xl font-bold text-gray-900">0</p>
                    <p className="text-sm">0 vs yesterday</p>
                  </div>
                </div>
              </div>

              {/* Away Summary */}
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                    <span>🏠</span> Away Summary
                  </h3>
                  <button className="text-gray-400 hover:text-gray-600">⋯</button>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600">Day off</p>
                    <p className="text-3xl font-bold text-gray-900">0</p>
                    <p className="text-sm text-red-600">−2 vs yesterday</p>
                  </div>
                  <div className="border-t pt-3">
                    <p className="text-sm text-gray-600">Time off</p>
                    <p className="text-2xl font-bold text-gray-900">0</p>
                    <p className="text-sm text-red-600">−6 vs yesterday</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Filters and Search */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search employee"
                    className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  📅 Date Range
                </button>
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  ⊙ Advance Filter
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Grid2x2 size={18} />
                </button>
                <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <List size={18} />
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Employee Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Clock-in & Out</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Overtime</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Picture</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Location</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <Image
                            src={employee.avatar || "/placeholder.svg"}
                            alt={employee.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                          <div>
                            <p className="font-semibold text-gray-900">{employee.name}</p>
                            <p className="text-sm text-gray-500">{employee.empId}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <p className="text-sm font-semibold text-orange-600">{employee.clockIn}</p>
                          <p className="text-xs text-gray-600">• {employee.duration}</p>
                          <p className="text-sm text-teal-600">◀ {employee.clockOut}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-900">{employee.overtime}</p>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-sm text-blue-600 hover:underline">📋 {employee.picture}</button>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-sm text-blue-600 hover:underline">📍 {employee.location}</button>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-600">{employee.note}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
