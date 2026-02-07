import axios from "axios";
import type { User } from "../models/User";

const BASE_URL = import.meta.env.VITE_API_URL;

console.log("ENV:", import.meta.env.VITE_API_URL);


export const getUsers = () =>
  axios.get<User[]>(`${BASE_URL}/users`);

export const createUser = (data: User) =>
  axios.post(`${BASE_URL}/users`, data);

export const updateUser = (id: number, data: User) =>
  axios.put(`${BASE_URL}/users/${id}`, data);

export const deleteUser = (id: number) =>
  axios.delete(`${BASE_URL}/users/${id}`);
