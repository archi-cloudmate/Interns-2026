import users from "..";
import User, { UserStatus } from "../models/user";

interface UserStats {
  total: number;
  active: number;
  inactive: number;
}

function getUserStats(users: User[]) {
  const total: number = users.length;

  const isActive = users.filter((x) => {
    return x.status === "Active";
  });

  const A: number = isActive.length;

  const D: number = total - A;

  const Stats: UserStats = {
    total: total,
    active: A,
    inactive: D,
  };

  return Stats;
}

console.log(getUserStats(users));
