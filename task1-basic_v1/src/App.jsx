import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
        const res = await fetch("/Data.json");
        const json = await res.json();
        setData(json);
      };
    fetchData();
  }, []);

  const filtered = data.filter((item) =>
    Object.values(item).some((val) =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id)); // Remove item by id
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">User Table</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 px-4 py-2 border border-gray-300 rounded-md w-full max-w-md  focus:ring-blue-400"
      />

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              {[
                "ID",
                "First",
                "Last",
                "Email",
                "Phone",
                "Gender",
                "Address",
                "Action",
              ].map((item, index) => (
                <th
                  key={index}
                  className="px-4 py-2 border border-gray-200 text-left text-sm font-medium text-gray-700"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filtered.length ? (
              filtered.map((u) => (
                <tr key={u.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{u.id}</td>
                  <td className="px-4 py-2 border">{u.firstName}</td>
                  <td className="px-4 py-2 border">{u.lastName}</td>
                  <td className="px-4 py-2 border">{u.email}</td>
                  <td className="px-4 py-2 border">{u.phone}</td>
                  <td className="px-4 py-2 border">{u.gender}</td>
                  <td className="px-4 py-2 border">{u.address}</td>
                  <td className="px-4 py-2 border">
                    <button
                      onClick={() => handleDelete(u.id)} // Delete user
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="text-center py-4 text-gray-500">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
