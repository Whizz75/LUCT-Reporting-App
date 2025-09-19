import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Login from "@/features/auth/pages/Login"
import Register from "@/features/auth/pages/Register"
import StudentRoutes from "@/routes/StudentRoutes"
import LecturerRoutes from "@/routes/LecturerRoutes"
import PRLRoutes from "@/routes/PRLRoutes"
import PLRoutes from "@/routes/PLRoutes"
import { isAuthenticated } from "@/lib/auth"

export default function App() {
  return (
    <Router>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/student/*" element={<StudentRoutes />} />
        <Route path="/lecturer/*" element={<LecturerRoutes />} />
        <Route path="/prl/*" element={<PRLRoutes />} />
        <Route path="/pl/*" element={<PLRoutes />} />

        <Route
          path="/"
          element={
            isAuthenticated() ? (
              <Navigate to="/student/monitoring" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}
