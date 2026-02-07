import { useEffect, useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import  type { User } from "./models/User";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "./services/userService";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  // Fetch all users
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await getUsers();
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users", err);
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchUsers();
  }, []);

  // Create or Update
  const handleSubmit = async (data: User) => {
    try {
      setLoading(true);

      if (selectedUser?.id) {
        await updateUser(selectedUser.id, data);
        setSelectedUser(null);
      } else {
        await createUser(data);
      }

      fetchUsers();
    } catch (err) {
      console.error("Save failed", err);
    } finally {
      setLoading(false);
    }
  };

  // Delete user
  const handleDelete = async (id: number) => {
    if (!window.confirm("Delete this user?")) return;

    try {
      setLoading(true);
      await deleteUser(id);
      fetchUsers();
    } catch (err) {
      console.error("Delete failed", err);
    } finally {
      setLoading(false);
    }
  };

  // Edit user
  const handleEdit = (user: User) => {
    setSelectedUser(user);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto space-y-6">

        <h1 className="text-3xl font-bold text-center">
          User CRUD (React + TS + Tailwind)
        </h1>

        <UserForm
          onSubmit={handleSubmit}
          selectedUser={selectedUser}
        />

        {loading && (
          <p className="text-center text-gray-500">Loading...</p>
        )}

        <UserList
          users={users}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

      </div>
    </div>
  );
}

export default App;
