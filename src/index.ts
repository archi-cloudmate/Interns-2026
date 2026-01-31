import { User } from "./models/user";
import { filterUsers } from "./utils/filterUsers";

const users: User[] = [
  { id: 1, name: "Raviraj", role: "ADMIN", status: "ACTIVE" },
  { id: 2, name: "Amit", role: "USER", status: "INACTIVE" },
  { id: 3, name: "Neha", role: "USER", status: "ACTIVE" },
  { id: 4, name: "Pooja", role: "MANAGER", status: "ACTIVE" },
];

const onlyUsers = filterUsers(users, "USER");

const activeUsers = filterUsers(users, "USER", "ACTIVE");

const allUsers = filterUsers(users);

console.log("Only Users:", onlyUsers);
console.log("Active Users:", activeUsers);
console.log("All Users:", allUsers);
