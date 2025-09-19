import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

export default function CourseForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    code: "",
    name: "",
    faculty: "",
    lecturerName: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader>
        <h2 className="text-xl font-semibold">Add New Course</h2>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid gap-4">
          {[
            { label: "Course Code", name: "code" },
            { label: "Course Name", name: "name" },
            { label: "Faculty", name: "faculty" },
            { label: "Lecturer Name", name: "lecturerName" },
          ].map((field) => (
            <div key={field.name} className="grid gap-2">
              <Label htmlFor={field.name}>{field.label}</Label>
              <Input
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <Button type="submit" className="w-full">
            Save Course
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
