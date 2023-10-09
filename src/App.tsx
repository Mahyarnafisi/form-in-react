import React, { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
  });
  const genderHandler = useCallback(
    (type: string) => {
      setUserData({ ...userData, gender: type });
    },
    [userData]
  );

  const inputHandler = useCallback(
    (type: string, e: React.ChangeEvent<HTMLInputElement>) => {
      setUserData({ ...userData, [type]: e.target.value });
    },
    [userData]
  );
  console.log(userData);

  return (
    <div className="container">
      <div className="report">
        <p>First Name: {!userData.firstName ? "empty" : userData.firstName}</p>
        <p>Family Name: {!userData.lastName ? "empty" : userData.lastName}</p>
        <p>Email: {!userData.email ? "empty" : userData.email}</p>
        <p>Gender: {!userData.gender ? "empty" : userData.gender}</p>
      </div>
      <h1>Registration from:</h1>
      <form className="form">
        <input className="text-input" type="text" placeholder="First name" onChange={(e) => inputHandler("firstName", e)} />
        <input className="text-input" type="text" placeholder="Family name" onChange={(e) => inputHandler("lastName", e)} />
        <div className="gender">
          <input className="radio-input" id="radio1" type="radio" value="male" name="radio-group" onChange={() => genderHandler("male")} />
          <label htmlFor="radio1">Male</label>
          <input className="radio-input" id="radio2" type="radio" value="female" name="radio-group" onChange={() => genderHandler("female")} />
          <label htmlFor="radio2">Female</label>
          <input className="radio-input" id="radio3" type="radio" value="trans" name="radio-group" onChange={() => genderHandler("trans")} />
          <label htmlFor="radio3">Trans</label>
        </div>
        <input className="text-input" type="email" placeholder="Email address" onChange={(e) => inputHandler("email", e)} />
        <div className="button-group">
          <button>Back</button>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
}

export default App;
