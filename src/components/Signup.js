import React from "react";
import { post } from "../services/service";

const Signup = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const makeUser = async (e) => {
    e.preventDefault();
    console.log("TEST");
    try {
      const response = await post("/admin/signup", {
        username: username,
        password: password,
      });
      console.log(response.data);
      console.log("WORKING?");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <form onSubmit={makeUser} className="signup">
      <input
        placeholder="Username..."
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        placeholder="Password..."
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default Signup;
