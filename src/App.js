import { useState, Fragment } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([
    { id: 1, username: "Ahmad", age: 12 },
    { id: 2, username: "Rashid", age: 16 },
    { id: 3, username: "Mahmod", age: 38 },
  ]);

  const addUserHandler = (username, age) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { id: (usersList.length + 1).toString(), username: username, age: age },
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
