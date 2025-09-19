import { Link } from "react-router-dom"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function ReportTable({ reports }) {
  if (!reports.length) {
    return <p>No reports available.</p>
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Course</TableHead>
          <TableHead>Lecturer</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Students Present</TableHead>
          <TableHead>Total Registered</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {reports.map((report) => (
          <TableRow key={report.id}>
            <TableCell>{report.courseName}</TableCell>
            <TableCell>{report.lecturerName}</TableCell>
            <TableCell>{new Date(report.date).toLocaleDateString()}</TableCell>
            <TableCell>{report.studentsPresent}</TableCell>
            <TableCell>{report.totalRegistered}</TableCell>
            <TableCell>
              <Link to={`/lecturer/reports/${report.id}`} className="text-blue-600 hover:underline">
                View
              </Link>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
