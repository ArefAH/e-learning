import React from "react";
import Input from "../components/base/Input";
import Button from "../components/base/Button";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { requestApi } from "../utils/request";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleLogin = async () => {
    setUsername('')
    setPassword('')
    const result = await requestApi({
      body: {
        username,
        password,
      },
      method: "POST",
      route: "/auth/login",
    });

    localStorage.setItem("token", result.access_token);
    console.log(result);
    if (result.message === "Successful") {
      navigate("/Home");
    }
    else{
      setError(true)
    }
  };

  const handleNavigation = () => {
    navigate('/Register');
  };

  return (
    <div className="login">
      <h1>LOGIN</h1>
      {error && <h3>Please fill all fields</h3>}
      <Input
        text={"Enter Username"}
        type={"text"}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <Input
        text={"Enter Password"}
        type={"password"}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button onClick={handleLogin}>LOGIN</Button>
      <p>
        Don't have an account?
        <b onClick={handleNavigation}>  Register</b>
      </p>
    </div>
  );
};
export default Login;
