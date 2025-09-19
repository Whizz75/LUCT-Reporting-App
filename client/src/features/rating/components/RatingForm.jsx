import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function RatingForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    course: "",
    lecturer: "",
    rating: "5",
    comments: ""
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
    setFormData({ course: "", lecturer: "", rating: "5", comments: "" })
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="course">Course</Label>
        <Input
          id="course"
          name="course"
          value={formData.course}
          onChange={handleChange}
          placeholder="Course Name"
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="lecturer">Lecturer</Label>
        <Input
          id="lecturer"
          name="lecturer"
          value={formData.lecturer}
          onChange={handleChange}
          placeholder="Lecturer Name"
          required
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="rating">Rating</Label>
        <Select
          value={formData.rating}
          onValueChange={(value) => setFormData({ ...formData, rating: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select Rating" />
          </SelectTrigger>
          <SelectContent>
            {[1,2,3,4,5].map((val) => (
              <SelectItem key={val} value={val.toString()}>{val}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="comments">Comments</Label>
        <Input
          id="comments"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          placeholder="Optional comments"
        />
      </div>

      <Button type="submit" className="w-full">Submit Rating</Button>
    </form>
  )
}
