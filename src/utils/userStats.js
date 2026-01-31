"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("..");
function getUserStats(users) {
    var total = users.length;
    var isActive = users.filter(function (x) {
        return x.status === "Active";
    });
    var A = isActive.length;
    var D = total - A;
    var Stats = {
        total: total,
        active: A,
        inactive: D,
    };
    return Stats;
}
console.log(getUserStats(__1.default));
