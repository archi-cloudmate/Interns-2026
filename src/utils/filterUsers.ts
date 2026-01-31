import { User, UserRole, UserStatus } from "../models/user";

export function filterUsers(
  users: User[],
  role?: UserRole,
  status?: UserStatus
): User[] {
  return users.filter((user) => {
    if (role && user.role !== role) {
      return false;
    }

    if (status && user.status !== status) {
      return false;
    }

    return true;
  });
}
