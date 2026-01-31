export type UserRole = "admin" | "user" | "guest";

export enum UserStatus {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
}

interface User {
  id: number;
  name: string;
  readonly Email: string;
  role: UserRole;
  status: UserStatus;
  createdAt: Date;
}

export default User;
