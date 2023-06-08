import React, { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  function fetchUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }

  function handleUserSelect(event) {
    const userId = parseInt(event.target.value);
    setSelectedUserId(userId);

    const selectedUser = users.find((user) => user.id === userId);
    setSelectedUser(selectedUser);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users);
  console.log(selectedUser);

  return (
    <body>
    <div className="container">
      <h1>User List</h1>

      <div className="select-container">
        <label htmlFor="user-select">Select User:</label>
        <select
          id="user-select"
          value={selectedUserId || ""}
          onChange={handleUserSelect}
        >
          <option value="">-- Select User --</option>
          {/* to give option of name */}
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>

      {selectedUser && (
        <div className="user-details">
          <h2>{selectedUser.name}</h2>
          <p>Email: {selectedUser.email}</p>
          <p>Phone: {selectedUser.phone}</p>
          <p>Website: {selectedUser.website}</p>
        </div>
      )}
    </div>
    </body>
  );
}
export default UserList;
