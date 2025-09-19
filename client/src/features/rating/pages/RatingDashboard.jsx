import { useEffect, useState } from "react"
import RatingForm from "../components/RatingForm"
import RatingList from "../components/RatingList"
import api from "@/lib/api"
import { Card, CardHeader, CardContent } from "@/components/ui/card"

export default function RatingDashboard() {
  const [ratings, setRatings] = useState([])

  const fetchRatings = async () => {
    try {
      const res = await api.get("/ratings")
      setRatings(res.data)
    } catch (err) {
      console.error("Error fetching ratings:", err)
    }
  }

  useEffect(() => {
    fetchRatings()
  }, [])

  const handleSubmit = async (data) => {
    try {
      await api.post("/ratings", data)
      alert("Rating submitted successfully")
      fetchRatings()
    } catch (err) {
      console.error(err)
      alert("Failed to submit rating")
    }
  }

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Ratings Dashboard</h1>

      <Card>
        <CardHeader>
          <h2 className="text-lg font-medium">Submit a Rating</h2>
        </CardHeader>
        <CardContent>
          <RatingForm onSubmit={handleSubmit} />
        </CardContent>
      </Card>

      <RatingList ratings={ratings} />
    </div>
  )
}
