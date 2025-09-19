import { useEffect, useState } from "react"
import api from "@/lib/api"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

export default function AttendanceAnalytics() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/monitoring/attendance")
        setData(res.data)
      } catch (err) {
        console.error("Error fetching attendance data:", err)
      }
    }
    fetchData()
  }, [])

  return (
    <Card className="mt-6">
      <CardHeader>
        <h2 className="text-xl font-semibold">Attendance Analytics</h2>
      </CardHeader>
      <CardContent>
        {data.length === 0 ? (
          <p>No attendance data available.</p>
        ) : (
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="attendance" fill="#2563eb" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
