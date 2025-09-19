import { useEffect, useState } from "react"
import api from "@/lib/api"
import MonitoringCard from "../components/MonitoringCard"
import AttendanceAnalytics from "./AttendanceAnalytics"

export default function MonitoringDashboard() {
  const [stats, setStats] = useState({
    totalClasses: 0,
    avgAttendance: 0,
    lowAttendanceCount: 0,
  })

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await api.get("/monitoring/stats")
        setStats(res.data)
      } catch (err) {
        console.error("Error fetching monitoring stats:", err)
      }
    }
    fetchStats()
  }, [])

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Monitoring Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <MonitoringCard title="Total Classes" value={stats.totalClasses} />
        <MonitoringCard
          title="Average Attendance"
          value={`${stats.avgAttendance}%`}
        />
        <MonitoringCard
          title="Low Attendance (<50%)"
          value={stats.lowAttendanceCount}
        />
      </div>

      <AttendanceAnalytics />
    </div>
  )
}
