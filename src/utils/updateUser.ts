import User from "../models/user"

type UserUpdatableFields = Partial<Omit<User, "id" | "Email">>

export function updateUser(user: User, updates: UserUpdatableFields): User {
  return {
    ...user,
    ...updates,
  }
}

