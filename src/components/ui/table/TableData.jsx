import {
   Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table"
import './TableData.css'; 

export default function TableData() {
  const users = [
    { name: "John Doe", email: "john@example.com", role: "Admin" },
    { name: "Jane Smith", email: "jane@example.com", role: "Editor" },
    { name: "Alice Johnson", email: "alice@example.com", role: "User" },
    { name: "Bob Brown", email: "bob@example.com", role: "User" },
    { name: "Charlie White", email: "charlie@example.com", role: "Admin" },
    { name: "Diana Black", email: "diana@example.com", role: "Editor" },
    { name: "Evan Blue", email: "evan@example.com", role: "User" },
  ]

  return (
    <div className="table-container">
      <Table className="custom-table">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
              
  )
}
