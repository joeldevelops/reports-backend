import * as bcrypt from "bcrypt";

import { DuplicateUserError, User, UserNotFoundError } from ".";
import user from "../models/users";

export const createUser = async (newUser: User): Promise<User> => {
  // Default claims for a new user.
  // Admin is selected here to allow a given user to view the
  // full functionality of the app.
  newUser.isAdmin = (newUser && newUser.isAdmin) || false;

  const salt = await bcrypt.genSalt(5);
  newUser.password = await bcrypt.hash(newUser.password, salt);

  return user.create(newUser);
};

export const getUserById = async (userId: string): Promise<User> => {
  const dbUser = await user.findByPk(userId);
  if (!dbUser) {
    throw new UserNotFoundError(`Unable to find user with ID: ${userId}`);
  }

  return dbUser;
};

export const getUserByEmail = async (email: string): Promise<User> => {
  const dbUser = await user.findOne({ where: { email } });
  if (!dbUser) {
    throw new UserNotFoundError(`Unable to find user with email: ${email}`);
  }

  return dbUser;
};

export const updateUser = async (
  userId: string,
  userUpdates: User
): Promise<number> => {
  try {
    const updatedUser = await user.update(userUpdates, {
      where: { id: userId },
    });
    return updatedUser[0];
  } catch (e) {
    throw new UserNotFoundError(`Unable to find user with ID: ${userId}`);
  }
};
