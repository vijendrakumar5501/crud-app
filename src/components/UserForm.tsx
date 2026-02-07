import { useEffect, useState } from "react";
import { userSchema } from "../config/userSchema";
import  type { User } from "../models/User";

interface Props {
  onSubmit: (data: User) => void;
  selectedUser: User | null;
}

export default function UserForm({ onSubmit, selectedUser }: Props) {
  const initialState: User = {};
  userSchema.forEach(f => (initialState[f.name] = ""));

  const [formData, setFormData] = useState<User>(initialState);

  useEffect(() => {
    if (selectedUser) setFormData(selectedUser);
  }, [selectedUser]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData(initialState);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {userSchema.map(field => (
        <div key={field.name}>
          <label className="block text-sm font-medium mb-1">
            {field.label}
          </label>

          <input
            type={field.type}
            name={field.name}
            required={field.required}
            value={formData[field.name] || ""}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
      ))}

      <div className="md:col-span-2">
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          {selectedUser ? "Update User" : "Create User"}
        </button>
      </div>
    </form>
  );
}

