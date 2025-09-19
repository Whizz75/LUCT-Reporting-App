import { Card, CardHeader, CardContent } from "@/components/ui/card"

export default function MonitoringCard({ title, value }) {
  return (
    <Card className="shadow">
      <CardHeader>
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{value}</p>
      </CardContent>
    </Card>
  )
}
