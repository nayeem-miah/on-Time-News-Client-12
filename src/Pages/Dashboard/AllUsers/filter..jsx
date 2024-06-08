import  { useState } from "react";

const UserFilter = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
    { id: 4, name: "David", age: 35 },
  ]);

  const [minAge, setMinAge] = useState(30);

  const handleAgeChange = e => {
    setMinAge(e.target.value);
  };

  const filteredUsers = users.filter(user => user.age >= minAge);

  return (
    <div>
      <h1>Filter Users by Age</h1>
      <label>
        Minimum Age:
        <input type="number" value={minAge} onChange={handleAgeChange} />
      </label>
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>
            {user.name} - {user.age} years old
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserFilter;
