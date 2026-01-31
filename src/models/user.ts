export type UserRole = "admin" | "user" | "guest";

<<<<<<< HEAD
export enum UserStatus { 
  ACTIVE,
  INACTIVE
}

 export interface User { 
  id: Number;
  name : String;
 readonly  email : String;
  role: UserRole;
  status  : UserStatus;
    createdAt : Date; 
}
=======
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
>>>>>>> main
