import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


type User = {
  id: number;
  name: string;
  email: string;
  tasksCompleted: number;
};


const TeamPerformance = () => {
    const users: User[] = [
      {
        id: 1,
        name: "Alice Johnson",
        email: "alice.johnson@example.com",
        tasksCompleted: 5,
      },
      {
        id: 2,
        name: "Bob Smith",
        email: "bob.smith@example.com",
        tasksCompleted: 7,
      },
      {
        id: 3,
        name: "Carol Williams",
        email: "carol.williams@example.com",
        tasksCompleted: 10,
      },
      {
        id: 4,
        name: "David Brown",
        email: "david.brown@example.com",
        tasksCompleted: 8,
      },
      {
        id: 5,
        name: "Eva Davis",
        email: "eva.davis@example.com",
        tasksCompleted: 6,
      },
    ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Performance</CardTitle>
        <CardDescription>
          Your team finished 20 tasks this week.
        </CardDescription>
      </CardHeader>
      <CardContent className="gap-2.5">
      {users.map((user) => (
          <div key={user.id} className="flex w-full items-center justify-between px-2.5 mb-2">
            <div className="flex items-center gap-2.5">
              <Avatar>
                <AvatarImage />
                <AvatarFallback>{user.name[0]}{user.name.split(" ")[1][0]}</AvatarFallback>
              </Avatar>
              <div className="leading-4">
                <p>{user.name}</p>
                <p className="text-xs">{user.email}</p>
              </div>
            </div>
            <p>{user.tasksCompleted} Tasks</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TeamPerformance;
