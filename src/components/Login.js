import React from "react";
import axios from "axios";
import { post } from "../services/service";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [status, setStatus] = React.useState("");

  const navigate = useNavigate();

  const existingAdmin = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setStatus("Please enter username and password");
    } else {
      try {
        const response = await post("/admin/login", {
          username: username,
          password: password,
        });
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("id", response.data.id);
        localStorage.setItem("username", username);
        setStatus(`welcome, ${username}!`);

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  return (
    <div className="login-page">
      <form className="login-inputs" onSubmit={existingAdmin}>
        <h1>Login</h1>
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
        <p className="login-status">{status}</p>
      </form>
    </div>
  );
};

export default Login;
