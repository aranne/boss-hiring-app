/**
 * HTTP Request API
 */
import { client } from "./client";

/**
 * Register
 * @param {Object} user
 */
export const reqRegister = (user) => {
  return client.post("/users/register", user);
};

/**
 * Login
 * @param {Object} user
 */
export const reqLogin = (user) => {
  return client.post("/users/login", user);
};

/**
 * Update
 * @param {Object} user
 */
export const reqUpdateUser = (user) => {
  return client.post("/users/update", user);
};

/**
 * Get all users
 * @param {Object} type type of user [recruiter/jobseeker] must exist
 */
export const reqAllUsers = (type) => {
  return client.get("/users/userlist", { params: type });
};

/**
 * Fetch current user by id in cookies
 */
export const reqFetchUser = () => {
  return client.get("/users/user");
};
