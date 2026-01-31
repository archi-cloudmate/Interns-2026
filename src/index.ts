
import { User ,  UserStatus , UserRole  } from "./models/user";

const  User1 : User = {
  id:1,
  name:"John Doe",
  email:"yashdhanani16@gmail.com" ,
  role: "user" ,
  status : UserStatus.ACTIVE,
createdAt : new Date()
}

console.log(User1);
