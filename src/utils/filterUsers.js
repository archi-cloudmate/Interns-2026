"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterUsers = filterUsers;
function filterUsers(users, role, status) {
    return users.filter(function (user) {
        if (role && user.role !== role) {
            return false;
        }
        if (status && user.status !== status) {
            return false;
        }
        return true;
    });
}
