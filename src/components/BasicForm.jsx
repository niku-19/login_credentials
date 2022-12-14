import useLogin from "../hooks/use-creditial";
const BasicForm = (props) => {
  const {
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
  } = useLogin();

  const classes1 = isTouch ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={onFormSubmitHandler}>
      <div className="control-group">
        <div className={classes1}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onBlur={onBlurHandler}
            onChange={onFirstNameHanler}
          />
          {!enteredFirstNameIsValid && isTouch ? (
            <p>Please Enter Your First Name here!</p>
          ) : (
            ""
          )}
        </div>
        <div className={classes1}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onBlur={onBlurHandler}
            onChange={onLastNameHandler}
          />
          {!enteredLastNameIsValid && isTouch ? (
            <p>Please Enter Your Last Name here!</p>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={classes1}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onBlur={onBlurHandler}
          onChange={onEmailHandler}
        />
        {!enteredEmailIsValid && isTouch ? (
          <p>Please Enter Correct Email ("@") </p>
        ) : (
          ""
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
