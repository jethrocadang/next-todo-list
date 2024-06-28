"use client";

import { ColumnDef } from "@tanstack/react-table";

export type User = {
    id: string;
    firstName: string
    lastName: string
    email: string
    role: string
    status: "APPROVED" | "PENDING"
}

export const columns:ColumnDef<User>[] = [
    {
        accessorKey: "fullName",
        header: "Name",
        cell: ({row}) =>`${row.original.firstName} ${row.original.lastName}`
    },
    {
        accessorKey: "email",
        header:"Email",

    },
    {
        accessorKey: "role",
        header:"Role"
    },
    {
        accessorKey: "status",
        header: "Status"
    }
    
]