import { useNavigate } from "react-router-dom"
import AuthForm from "../components/AuthForm"
import api from "@/lib/api"
import { setAuth } from "@/lib/auth"

export default function Login() {
  const navigate = useNavigate()

  const handleLogin = async (formData) => {
    try {
      const res = await api.post("/auth/login", formData)
      const { token, user } = res.data
      setAuth(token, user)

      // Redirect by role
      switch (user.role) {
        case "student":
          navigate("/student/monitoring")
          break
        case "lecturer":
          navigate("/lecturer/reports")
          break
        case "prl":
          navigate("/prl/courses")
          break
        case "pl":
          navigate("/pl/courses")
          break
        default:
          navigate("/")
      }
    } catch (err) {
      console.error(err)
      alert("Login failed. Please check your credentials.")
    }
  }

  return <AuthForm type="login" onSubmit={handleLogin} />
}
