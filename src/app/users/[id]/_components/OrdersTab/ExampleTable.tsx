import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import DataTable from "@/components/Table"; // Adjust path if needed
// import { MoreVertical } from 'lucide-react'

type User = {
  id: number;
  name: string;
  email: string;
  age: number;
  status: "active" | "inactive";
  role: string;
  department: string;
  phone: string;
  location: string;
};

const mockData: User[] = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  age: 20 + (i % 10),
  status: i % 2 === 0 ? "active" : "inactive",
  role: i % 3 === 0 ? "Admin" : "User",
  department: ["HR", "Engineering", "Design"][i % 3],
  phone: `+998 90 000 00 ${String(i + 1).padStart(2, "0")}`,
  location: ["Tashkent", "Samarkand", "Bukhara"][i % 3],
}));

const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: (info) => info.getValue(),
    size: 420,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: (info) => info.getValue(),
    size: 190,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: (info) => (
      <a href={`mailto:${info.getValue()}`} className="text-blue-600 underline">
        {info.getValue()}
      </a>
    ),
    size: 240,
  },
  {
    accessorKey: "age",
    header: "Age",
    cell: (info) => `${info.getValue()} yrs`,
    size: 100,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (info) => (
      <span
        className={
          info.getValue() === "active" ? "text-green-600" : "text-red-500"
        }
      >
        {info.getValue()}
      </span>
    ),
    size: 120,
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: (info) => info.getValue(),
    size: 150,
  },
  {
    accessorKey: "department",
    header: "Department",
    cell: (info) => info.getValue(),
    size: 180,
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: (info) => info.getValue(),
    size: 200,
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: (info) => info.getValue(),
    size: 160,
  },
  {
    id: "actions",
    header: "",
    size: 60,
    cell: () => (
      <div className="flex justify-center items-center">
        ...
        {/* <MoreVertical className="w-5 h-5 text-gray-500" /> */}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
    meta: {
      pin: "right", // Optional custom meta to indicate pinning
    },
  },
];

export default function MockTableDemo() {
  return (
    <DataTable
      pageCount={5}
      totalCount={56}
      data={mockData}
      columns={columns}
      prefix="orders"
    />
  );
}
