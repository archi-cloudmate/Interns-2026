import User from "./models/user";
import { UserRole, UserStatus } from "./models/user";

const u1: User = {
  id: 111,
  name: "Sachin",
  Email: "sachin@123.com",
  role: "admin",
  status: UserStatus.ACTIVE,
  createdAt: new Date(),
};

const u2: User = {
  id: 222,
  name: "Jigar",
  Email: "jigar@123.com",
  role: "user",
  status: UserStatus.INACTIVE,
  createdAt: new Date(),
};

const u3: User = {
  id: 333,
  name: "Nayan",
  Email: "nayan@123.com",
  role: "guest",
  status: UserStatus.INACTIVE,
  createdAt: new Date(),
};

const u4: User = {
  id: 444,
  name: "Amit",
  Email: "amit@123.com",
  role: "user",
  status: UserStatus.ACTIVE,
  createdAt: new Date(),
};

const u5: User = {
  id: 555,
  name: "Sanket",
  Email: "sanket@123.com",
  role: "user",
  status: UserStatus.INACTIVE,
  createdAt: new Date(),
};

const u6: User = {
  id: 666,
  name: "Bhargav",
  Email: "bhargav@123.com",
  role: "guest",
  status: UserStatus.INACTIVE,
  createdAt: new Date(),
};

const users: User[] = [u1, u2, u3, u4, u5, u6];
export default users;
