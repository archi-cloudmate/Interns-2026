export type UserRole = "admin" | "user" | "guest";

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