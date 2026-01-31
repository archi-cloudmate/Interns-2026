"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./models/user");
var u1 = {
    id: 111,
    name: "Sachin",
    Email: "sachin@123.com",
    role: "admin",
    status: user_1.UserStatus.ACTIVE,
    createdAt: new Date(),
};
var u2 = {
    id: 222,
    name: "Jigar",
    Email: "jigar@123.com",
    role: "user",
    status: user_1.UserStatus.INACTIVE,
    createdAt: new Date(),
};
var u3 = {
    id: 333,
    name: "Nayan",
    Email: "nayan@123.com",
    role: "guest",
    status: user_1.UserStatus.INACTIVE,
    createdAt: new Date(),
};
var u4 = {
    id: 444,
    name: "Amit",
    Email: "amit@123.com",
    role: "user",
    status: user_1.UserStatus.ACTIVE,
    createdAt: new Date(),
};
var u5 = {
    id: 555,
    name: "Sanket",
    Email: "sanket@123.com",
    role: "user",
    status: user_1.UserStatus.INACTIVE,
    createdAt: new Date(),
};
var u6 = {
    id: 666,
    name: "Bhargav",
    Email: "bhargav@123.com",
    role: "guest",
    status: user_1.UserStatus.INACTIVE,
    createdAt: new Date(),
};
var users = [u1, u2, u3, u4, u5, u6];
exports.default = users;
