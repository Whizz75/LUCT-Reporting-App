import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export default function RatingList({ ratings }) {
  if (!ratings.length) return <p className="p-4">No ratings yet.</p>

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Course</TableHead>
            <TableHead>Lecturer</TableHead>
            <TableHead>Rating</TableHead>
            <TableHead>Comments</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ratings.map((r) => (
            <TableRow key={r.id}>
              <TableCell>{r.course}</TableCell>
              <TableCell>{r.lecturer}</TableCell>
              <TableCell>{r.rating}</TableCell>
              <TableCell>{r.comments || "-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
