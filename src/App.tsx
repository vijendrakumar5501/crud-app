import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
import Spinner from "./components/Spinner";
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

  const [clearForm, setClearForm] = useState(false);




  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await getUsers();
      setUsers(res.data);
    } catch (error: unknown) {
      toast.error("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);


const handleSave = async (data: User) => {
  try {
    setLoading(true);

    const emailExists = users.some(
      user =>
        user.email?.toLowerCase() === data.email?.toLowerCase() &&
        user.id !== selectedUser?.id
    );

    if (emailExists) {
      toast.error("Email already exists");
      return;
    }

    if (selectedUser?.id) {
      await updateUser(selectedUser.id, data);
      toast.success("User updated");
    } else {
      await createUser(data);
      toast.success("User created");
    }

    setSelectedUser(null);
    setClearForm(prev => !prev);
    fetchUsers();

  } finally {
    setLoading(false);
  }
};



  const handleDelete = async (id: number) => {
    if (!confirm("Delete this user?")) return;

    try {
      setLoading(true);
      await deleteUser(id);
      toast.success("User deleted");
      fetchUsers();
    } catch {
      toast.error("Delete failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto space-y-6">

        <h1 className="text-3xl font-bold text-center">
          User Management
        </h1>

     <UserForm
  onSubmit={handleSave}
  selectedUser={selectedUser}
  clearForm={clearForm}
/>



        {loading && <Spinner />}

        <UserList
          users={users}
          onEdit={setSelectedUser}
          onDelete={handleDelete}
        />

      </div>
    </div>
  );
}

export default App;
