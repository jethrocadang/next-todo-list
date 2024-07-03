import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
          <>
            <div
              key={user.id}
              className="my-2 flex w-full flex-col justify-between gap-2.5 px-2.5 sm:flex-row sm:gap-0 md:items-center md:my-3"
            >
              <div className="flex items-center gap-2.5">
                <Avatar>
                  <AvatarImage />
                  <AvatarFallback>
                    {user.name[0]}
                    {user.name.split(" ")[1][0]}
                  </AvatarFallback>
                </Avatar>
                <div className="leading-5">
                  <p className="text-md font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
              </div>
              <p className="pl-12 font-semibold">{user.tasksCompleted} Tasks</p>
            </div>
            <Separator className="md:hidden" />
          </>
        ))}
      </CardContent>
    </Card>
  );
};

export default TeamPerformance;
