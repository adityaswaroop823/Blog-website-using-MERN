import react, { useState } from "react";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const collectData = () => {
    console.log(name, email, password);
  };
  return (
    <div className="signupMain">
      <h1>Register</h1>
      <input
        className="input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Name"
      />
      <input
        className="input"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
      />
      <input
        className="input"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
      />
      <button onClick={collectData} className="button">
        Sign Up
      </button>
    </div>
  );
};
export default Signup;
