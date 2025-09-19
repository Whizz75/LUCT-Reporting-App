import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "@/lib/api"
import ReportCard from "../components/ReportCard"

export default function ReportDetail() {
  const { id } = useParams()
  const [report, setReport] = useState(null)

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const res = await api.get(`/reports/${id}`)
        setReport(res.data)
      } catch (err) {
        console.error("Error fetching report:", err)
      }
    }
    fetchReport()
  }, [id])

  if (!report) return <p className="p-6">Loading report...</p>

  return (
    <div className="p-6">
      <ReportCard report={report} detailed />
    </div>
  )
}
