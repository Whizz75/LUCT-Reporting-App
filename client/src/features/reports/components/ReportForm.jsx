import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

export default function ReportForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    faculty: "",
    className: "",
    week: "",
    date: "",
    courseName: "",
    courseCode: "",
    lecturerName: "",
    studentsPresent: "",
    totalRegistered: "",
    venue: "",
    time: "",
    topic: "",
    outcomes: "",
    recommendations: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <h2 className="text-xl font-semibold">Submit Lecturer Report</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          {[
            { label: "Faculty Name", name: "faculty" },
            { label: "Class Name", name: "className" },
            { label: "Week of Reporting", name: "week" },
            { label: "Date of Lecture", name: "date", type: "date" },
            { label: "Course Name", name: "courseName" },
            { label: "Course Code", name: "courseCode" },
            { label: "Lecturer Name", name: "lecturerName" },
            { label: "Students Present", name: "studentsPresent", type: "number" },
            { label: "Total Registered Students", name: "totalRegistered", type: "number" },
            { label: "Venue", name: "venue" },
            { label: "Scheduled Time", name: "time", type: "time" },
          ].map((field) => (
            <div key={field.name} className="grid gap-2">
              <Label htmlFor={field.name}>{field.label}</Label>
              <Input
                id={field.name}
                name={field.name}
                type={field.type || "text"}
                value={formData[field.name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <div className="grid gap-2">
            <Label htmlFor="topic">Topic Taught</Label>
            <Textarea id="topic" name="topic" value={formData.topic} onChange={handleChange} required />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="outcomes">Learning Outcomes</Label>
            <Textarea id="outcomes" name="outcomes" value={formData.outcomes} onChange={handleChange} required />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="recommendations">Recommendations</Label>
            <Textarea id="recommendations" name="recommendations" value={formData.recommendations} onChange={handleChange} />
          </div>

          <Button type="submit" className="w-full">Submit Report</Button>
        </form>
      </CardContent>
    </Card>
  )
}
