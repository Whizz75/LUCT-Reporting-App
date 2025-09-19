import ReportForm from "../components/ReportForm"
import api from "@/lib/api"
import { useNavigate } from "react-router-dom"

export default function SubmitReport() {
  const navigate = useNavigate()

  const handleSubmit = async (formData) => {
    try {
      await api.post("/reports", formData)
      alert("Report submitted successfully.")
      navigate("/lecturer/reports")
    } catch (err) {
      console.error(err)
      alert("Failed to submit report.")
    }
  }

  return (
    <div className="p-6">
      <ReportForm onSubmit={handleSubmit} />
    </div>
  )
}
