import axios from "axios";
import type  { User } from "../models/User";

const API = "http://localhost:3000/users";

export const getUsers = () => axios.get<User[]>(API);

export const createUser = (data: User) =>
  axios.post(API, data);

export const updateUser = (id: number, data: User) =>
  axios.put(`${API}/${id}`, data);

export const deleteUser = (id: number) =>
  axios.delete(`${API}/${id}`);
