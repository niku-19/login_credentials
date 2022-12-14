import { useState } from "react";
const useLogin = () => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredFirstNameIsValid, setEnteredFirstNameIsValid] = useState(false);
  const [enteredLastNameIsValid, setEnteredLastNameIsValid] = useState(false);
  const [enteredEmailIsValid, setEnteredEmailIsValid] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const onFirstNameHanler = (event) => {
    event.preventDefault();
    setEnteredFirstName(event.target.value);
    if (event.target.value.trim() === "") {
      setEnteredFirstNameIsValid(false);
    } else if (event.target.value.trim() !== "") {
      setEnteredFirstNameIsValid(true);
      setIsTouch(false);
    }
  };
  const onLastNameHandler = (event) => {
    event.preventDefault();
    setEnteredLastName(event.target.value);
    if (event.target.value.trim() === "") {
      setEnteredLastNameIsValid(false);
    } else if (event.target.value.trim() !== "") {
      setEnteredLastNameIsValid(true);
      setIsTouch(false);
    }
  };
  const onEmailHandler = (event) => {
    event.preventDefault();
    setEnteredEmail(event.target.value);
    if (
      event.target.value.includes("@") &&
      event.target.value.includes(".") &&
      event.target.value.trim() !== ""
    ) {
      setEnteredEmailIsValid(true);
      setIsTouch(false);
    }
  };

  const formIsValid =
    enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid;

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    const userData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
    };
    console.log(userData);
  };
  const onBlurHandler = (event) => {
    if (
      enteredEmailIsValid &&
      enteredFirstNameIsValid &&
      enteredLastNameIsValid
    ) {
      setIsTouch(false);
      return;
    }
    setIsTouch(true);
  };
  return {
    onFirstNameHanler,
    onLastNameHandler,
    onEmailHandler,
    onFormSubmitHandler,
    enteredFirstNameIsValid,
    enteredLastNameIsValid,
    enteredEmailIsValid,
    formIsValid,
    onBlurHandler,
    isTouch,
  };
};

export default useLogin;
