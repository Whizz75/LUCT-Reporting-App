import { Routes, Route, Navigate } from "react-router-dom"
import RoleBasedLayout from "@/components/layout/RoleBasedLayout"
import SubmitReport from "@/features/reports/pages/SubmitReport"
import ReportList from "@/features/reports/pages/ReportList"
import MonitoringDashboard from "@/features/monitoring/pages/MonitoringDashboard"
import RatingDashboard from "@/features/rating/pages/RatingDashboard"
import { hasRole, isAuthenticated } from "@/lib/auth"
import { USER_ROLES } from "@/lib/constants"

export default function LecturerRoutes() {
  if (!isAuthenticated() || !hasRole([USER_ROLES.LECTURER])) {
    return <Navigate to="/login" replace />
  }

  return (
    <RoleBasedLayout role={USER_ROLES.LECTURER}>
      <Routes>
        <Route path="reports" element={<ReportList />} />
        <Route path="reports/new" element={<SubmitReport />} />
        <Route path="monitoring" element={<MonitoringDashboard />} />
        <Route path="rating" element={<RatingDashboard />} />
        <Route path="*" element={<Navigate to="reports" replace />} />
      </Routes>
    </RoleBasedLayout>
  )
}
