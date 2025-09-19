import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { USER_ROLES } from "@/lib/constants"
import { logout, getUserRole } from "@/lib/auth"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function RoleBasedLayout({ children, role }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const navigate = useNavigate()
  const userRole = getUserRole()

  const navItems = {
    student: [
      { name: "Monitoring", path: "/student/monitoring" },
      { name: "Ratings", path: "/student/rating" },
    ],
    lecturer: [
      { name: "Reports", path: "/lecturer/reports" },
      { name: "Monitoring", path: "/lecturer/monitoring" },
      { name: "Ratings", path: "/lecturer/rating" },
    ],
    prl: [
      { name: "Courses", path: "/prl/courses" },
      { name: "Reports", path: "/prl/reports" },
      { name: "Monitoring", path: "/prl/monitoring" },
      { name: "Ratings", path: "/prl/rating" },
    ],
    pl: [
      { name: "Courses", path: "/pl/courses" },
      { name: "Reports", path: "/pl/reports" },
      { name: "Monitoring", path: "/pl/monitoring" },
      { name: "Ratings", path: "/pl/rating" },
    ],
  }

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside
        className={`bg-white shadow w-64 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        <div className="p-4 font-bold text-lg">Dashboard</div>
        <nav className="flex flex-col p-2 space-y-1">
          {navItems[userRole]?.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="px-4 py-2 rounded hover:bg-gray-100"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="p-4 mt-auto">
          <Button variant="outline" className="w-full" onClick={() => logout()}>
            Logout
          </Button>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">LUCT Reporting App</h1>
          <Button variant="ghost" onClick={toggleSidebar}>
            {isSidebarOpen ? "Hide Sidebar" : "Show Sidebar"}
          </Button>
        </header>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
