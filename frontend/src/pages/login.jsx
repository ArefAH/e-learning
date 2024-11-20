import React from "react";
import Input from "../components/base/Input";
import Button from "../components/base/Button";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { requestApi } from "../utils/request";
import { requestMethod } from "../utils/enums/requestMethod";
import { useState, useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    try {
      const result = await requestApi({
        body: {
          username,
          password,
        },
        method: requestMethod.POST,
        route: "/auth/login",
      });

      localStorage.setItem("token", result.access_token);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        handleLogin();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
  })
    

  return (
    <div className="login">
      <h1>LOGIN</h1>
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
    </div>
  );
};

export default Login;
