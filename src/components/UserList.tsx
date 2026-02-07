import type { User } from "../models/User";

interface Props {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

export default function UserList({ users, onEdit, onDelete }: Props) {
  if (!users.length) return null;

  const keys = Object.keys(users[0]).filter(k => k !== "id");

  return (
    <div className="mt-6">

  
      <div className="space-y-4 md:hidden">
        {users.map(user => (
          <div key={user.id} className="bg-white shadow rounded-lg p-4">

            {keys.map(key => (
              <div key={key} className="flex justify-between text-sm mb-2">
                <span className="font-medium capitalize">{key}</span>
                <span>{user[key]}</span>
              </div>
            ))}

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => onEdit(user)}
                className="flex-1 bg-yellow-400 py-1 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => onDelete(user.id!)}
                className="flex-1 bg-red-500 text-white py-1 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

     
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              {keys.map(key => (
                <th key={key} className="p-3 text-left capitalize">
                  {key}
                </th>
              ))}
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-t">
                {keys.map(key => (
                  <td key={key} className="p-3">
                    {user[key]}
                  </td>
                ))}

                <td className="p-3 space-x-2">
                  <button
                    onClick={() => onEdit(user)}
                    className="px-3 py-1 bg-yellow-400 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(user.id!)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
