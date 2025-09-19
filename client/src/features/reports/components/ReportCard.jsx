import { Card, CardHeader, CardContent } from "@/components/ui/card"

export default function ReportCard({ report, detailed = false }) {
  return (
    <Card className="max-w-3xl mx-auto shadow">
      <CardHeader>
        <h2 className="text-xl font-semibold">{report.courseName} ({report.courseCode})</h2>
        <p className="text-sm text-muted-foreground">{report.date} – {report.lecturerName}</p>
      </CardHeader>
      <CardContent className="space-y-2">
        <p><strong>Class:</strong> {report.className}</p>
        <p><strong>Faculty:</strong> {report.faculty}</p>
        <p><strong>Students Present:</strong> {report.studentsPresent} / {report.totalRegistered}</p>
        <p><strong>Venue:</strong> {report.venue} at {report.time}</p>

        {detailed && (
          <>
            <p><strong>Topic Taught:</strong> {report.topic}</p>
            <p><strong>Learning Outcomes:</strong> {report.outcomes}</p>
            <p><strong>Recommendations:</strong> {report.recommendations}</p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
