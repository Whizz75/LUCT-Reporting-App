import { useNavigate } from "react-router-dom"
import CourseForm from "../components/CourseForm"
import api from "@/lib/api"

export default function AddCourse() {
  const navigate = useNavigate()

  const handleAddCourse = async (formData) => {
    try {
      await api.post("/courses", formData)
      alert("Course added successfully.")
      navigate("/pl/courses")
    } catch (err) {
      console.error(err)
      alert("Failed to add course.")
    }
  }

  return (
    <div className="p-6">
      <CourseForm onSubmit={handleAddCourse} />
    </div>
  )
}
