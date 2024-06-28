import { User } from "./columns";

export const users: User[] = [
    {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        role: "Frontend Developer",
        status: "APPROVED"
    },
    {
        id: "2",
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        role: "Backend Developer",
        status: "PENDING"
    },
    {
        id: "3",
        firstName: "Alice",
        lastName: "Johnson",
        email: "alice.johnson@example.com",
        role: "Full Stack Developer",
        status: "APPROVED"
    },
    {
        id: "4",
        firstName: "Bob",
        lastName: "Brown",
        email: "bob.brown@example.com",
        role: "DevOps Engineer",
        status: "PENDING"
    },
    {
        id: "5",
        firstName: "Charlie",
        lastName: "Davis",
        email: "charlie.davis@example.com",
        role: "QA Engineer",
        status: "APPROVED"
    }
];
