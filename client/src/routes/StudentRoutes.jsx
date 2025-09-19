import { Routes, Route, Navigate } from "react-router-dom"
import RoleBasedLayout from "@/components/layout/RoleBasedLayout"
import MonitoringDashboard from "@/features/monitoring/pages/MonitoringDashboard"
import RatingDashboard from "@/features/rating/pages/RatingDashboard"
import { hasRole, isAuthenticated } from "@/lib/auth"
import { USER_ROLES } from "@/lib/constants"

export default function StudentRoutes() {
  if (!isAuthenticated() || !hasRole([USER_ROLES.STUDENT])) {
    return <Navigate to="/login" replace />
  }

  return (
    <RoleBasedLayout role={USER_ROLES.STUDENT}>
      <Routes>
        <Route path="monitoring" element={<MonitoringDashboard />} />
        <Route path="rating" element={<RatingDashboard />} />
        <Route path="*" element={<Navigate to="monitoring" replace />} />
      </Routes>
    </RoleBasedLayout>
  )
}
