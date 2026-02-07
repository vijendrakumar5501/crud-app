import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema } from "../config/userSchema";
import { userValidationSchema } from "../config/userValidation";
import type { UserFormData } from "../config/userValidation";
import type { User } from "../models/User";


interface Props {
  onSubmit: (data: User) => void;
  selectedUser: User | null;
  clearForm: boolean;
}


export default function UserForm({ onSubmit, selectedUser ,clearForm }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserFormData>({
    resolver: zodResolver(userValidationSchema),
  });
  
const emptyFormValues = userSchema.reduce((acc, field) => {
  acc[field.name] = "";
  return acc;
}, {} as Record<string, string>);




useEffect(() => {
  if (selectedUser) {
    reset({
      firstName: selectedUser.firstName,
      lastName: selectedUser.lastName,
      phone: selectedUser.phone,
      email: selectedUser.email,
    });
  } else {
    reset(emptyFormValues);
  }
}, [selectedUser, clearForm, reset]);



  const submitForm = (data: UserFormData) => {
    onSubmit(data);
    
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="bg-white shadow rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {userSchema.map(field => (
        <div key={field.name}>
          <label className="text-sm font-medium">
            {field.label}
          </label>

          <input
            {...register(field.name as keyof UserFormData)}
            type={field.type}
            className={`w-full border rounded px-3 py-2 mt-1
              ${errors[field.name as keyof UserFormData]
                ? "border-red-500"
                : "border-gray-300"}
            `}
          />

          {errors[field.name as keyof UserFormData] && (
            <p className="text-red-500 text-xs mt-1">
              {errors[field.name as keyof UserFormData]?.message}
            </p>
          )}
        </div>
      ))}

      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {selectedUser ? "Update User" : "Create User"}
        </button>
      </div>
    </form>
  );
}
