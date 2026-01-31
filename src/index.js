"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./models/user");
var User1 = {
    id: 1,
    name: "John Doe",
    email: "yashdhanani16@gmail.com",
    role: "user",
    status: user_1.UserStatus.ACTIVE,
    createdAt: new Date()
};
console.log(User1);
