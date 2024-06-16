import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const DashCards = () => {
    return (
        <Card className="">
        <CardHeader className="pb-2">
          <CardDescription>Completed</CardDescription>
          <CardTitle className="text-4xl">50</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-muted-foreground">
            +25% from last week
          </div>
        </CardContent>
      </Card>
    )
}

export default DashCards;