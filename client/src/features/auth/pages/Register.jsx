import { useNavigate } from "react-router-dom"
import AuthForm from "../components/AuthForm"
import api from "@/lib/api"
import { setAuth } from "@/lib/auth"

export default function Register() {
  const navigate = useNavigate()

  const handleRegister = async (formData) => {
    try {
      // Map frontend fields → backend expectations
      const payload = {
        username: formData.email,   // backend expects "username", we send email
        password: formData.password,
        roleId: null,                  // 🔹 for now default to "student" role
        studentId: null,            // 🔹 set later if needed
        lecturerId: null            // 🔹 set later if needed
      }

      const res = await api.post("/auth/register", payload)
      const { token, user } = res.data
      setAuth(token, user)

      // Redirect by role
      if (user.role === "student") {
        navigate("/student/monitoring")
      } else if (user.role === "lecturer") {
        navigate("/lecturer/reports")
      } else {
        navigate("/")
      }
    } catch (err) {
      console.error(err)
      alert("Registration failed. Please try again.")
    }
  }

  return <AuthForm type="register" onSubmit={handleRegister} />
}
