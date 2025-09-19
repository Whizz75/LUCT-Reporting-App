import { useEffect, useState } from "react"
import api from "@/lib/api"
import ReportTable from "../components/ReportTable"

export default function ReportList() {
  const [reports, setReports] = useState([])

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await api.get("/reports")
        setReports(res.data)
      } catch (err) {
        console.error("Error fetching reports:", err)
      }
    }
    fetchReports()
  }, [])

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Reports</h1>
      <ReportTable reports={reports} />
    </div>
  )
}
