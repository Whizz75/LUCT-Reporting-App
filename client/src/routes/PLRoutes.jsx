import { Routes, Route, Navigate } from "react-router-dom"
import RoleBasedLayout from "@/components/layout/RoleBasedLayout"
import CourseList from "@/features/courses/pages/CourseList"
import AddCourse from "@/features/courses/pages/AddCourse"
import ReportList from "@/features/reports/pages/ReportList"
import MonitoringDashboard from "@/features/monitoring/pages/MonitoringDashboard"
import RatingDashboard from "@/features/rating/pages/RatingDashboard"
import { hasRole, isAuthenticated } from "@/lib/auth"
import { USER_ROLES } from "@/lib/constants"

export default function PLRoutes() {
  if (!isAuthenticated() || !hasRole([USER_ROLES.PL])) {
    return <Navigate to="/login" replace />
  }

  return (
    <RoleBasedLayout role={USER_ROLES.PL}>
      <Routes>
        <Route path="courses" element={<CourseList />} />
        <Route path="courses/new" element={<AddCourse />} />
        <Route path="reports" element={<ReportList />} />
        <Route path="monitoring" element={<MonitoringDashboard />} />
        <Route path="rating" element={<RatingDashboard />} />
        <Route path="*" element={<Navigate to="courses" replace />} />
      </Routes>
    </RoleBasedLayout>
  )
}
