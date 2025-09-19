import { Routes, Route, Navigate } from "react-router-dom"
import RoleBasedLayout from "@/components/layout/RoleBasedLayout"
import ReportList from "@/features/reports/pages/ReportList"
import ReportDetail from "@/features/reports/pages/ReportDetail"
import MonitoringDashboard from "@/features/monitoring/pages/MonitoringDashboard"
import RatingDashboard from "@/features/rating/pages/RatingDashboard"
import CourseList from "@/features/courses/pages/CourseList"
import { hasRole, isAuthenticated } from "@/lib/auth"
import { USER_ROLES } from "@/lib/constants"

export default function PRLRoutes() {
  if (!isAuthenticated() || !hasRole([USER_ROLES.PRL])) {
    return <Navigate to="/login" replace />
  }

  return (
    <RoleBasedLayout role={USER_ROLES.PRL}>
      <Routes>
        <Route path="courses" element={<CourseList />} />
        <Route path="reports" element={<ReportList />} />
        <Route path="reports/:id" element={<ReportDetail />} />
        <Route path="monitoring" element={<MonitoringDashboard />} />
        <Route path="rating" element={<RatingDashboard />} />
        <Route path="*" element={<Navigate to="courses" replace />} />
      </Routes>
    </RoleBasedLayout>
  )
}
