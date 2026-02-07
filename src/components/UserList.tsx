import  type { User } from "../models/User";

interface Props {
  users: User[];
  onEdit: (user: User) => void;
  onDelete: (id: number) => void;
}

export default function UserList({ users, onEdit, onDelete }: Props) {
  if (!users.length) return null;

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            {Object.keys(users[0])
              .filter(k => k !== "id")
              .map(key => (
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
              {Object.keys(user)
                .filter(k => k !== "id")
                .map(key => (
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
  );
}
