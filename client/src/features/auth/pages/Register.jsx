import { useNavigate } from "react-router-dom"
import AuthForm from "../components/AuthForm"
import api from "@/lib/api"
import { setAuth } from "@/lib/auth"

export default function Register() {
  const navigate = useNavigate()

  const handleRegister = async (formData) => {
    try {
      const res = await api.post("/auth/register", formData)
      const { token, user } = res.data
      setAuth(token, user)

      // Redirect to dashboard based on role
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
