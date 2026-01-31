export type UserRole = "ADMIN" | "USER" | "MANAGER";

export type UserStatus = "ACTIVE" | "INACTIVE";

export interface User {
  id: number;
  name: string;
  role: UserRole;
  status: UserStatus;
}
