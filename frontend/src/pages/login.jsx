import React from "react";
import Input from "../components/base/Input";
import Button from "../components/base/Button";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { requestApi } from "../utils/request";
import { requestMethod } from "../utils/enums/requestMethod";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      console.log(username, password);
      
      const result = await requestApi({
        body: {
          username,
          password,
        },
        method: requestMethod.POST,
        route: "/auth/login",
      });

      localStorage.setItem("token", result.access_token);

      navigate("/Home");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
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
