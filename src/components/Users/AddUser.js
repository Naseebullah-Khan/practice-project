import { useState, Fragment, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const usernameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setEnteredUsername] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  // const usernameHandler = (event) => {
  //   setEnteredUsername(event.target.value);
  // };

  // const ageHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  const submitFormHandler = (event) => {
    event.preventDefault();

    const usernameValue = usernameInputRef.current.value;
    const ageValue = ageInputRef.current.value;

    if (usernameValue.trim().length === 0 || ageValue.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid username and age (non-empty values).",
      });
      return;
    }
    if (+ageValue < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddUser(usernameValue, ageValue);
    // setEnteredUsername("");
    // setEnteredAge("");

    // Don't manipulate DOM using Refs except in this scenario
    usernameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitFormHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={usernameHandler}
            placeholder="Enter username"
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageHandler}
            placeholder="Enter user age"
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
