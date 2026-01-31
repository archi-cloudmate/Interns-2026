"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var filterUsers_1 = require("./utils/filterUsers");
var users = [
    { id: 1, name: "Raviraj", role: "ADMIN", status: "ACTIVE" },
    { id: 2, name: "Amit", role: "USER", status: "INACTIVE" },
    { id: 3, name: "Neha", role: "USER", status: "ACTIVE" },
    { id: 4, name: "Pooja", role: "MANAGER", status: "ACTIVE" },
];
var onlyUsers = (0, filterUsers_1.filterUsers)(users, "USER");
var activeUsers = (0, filterUsers_1.filterUsers)(users, "USER", "ACTIVE");
var allUsers = (0, filterUsers_1.filterUsers)(users);
console.log("Only Users:", onlyUsers);
console.log("Active Users:", activeUsers);
console.log("All Users:", allUsers);
