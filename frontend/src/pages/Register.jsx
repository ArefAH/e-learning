import React from "react";
import Input from "../components/base/Input";
import Button from "../components/base/Button";
import "../styles/Register.css";
import { useNavigate } from "react-router-dom";
import { requestApi } from "../utils/request";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [match, setMatch] = useState(false);
  const handleRegister = async () => {
    if (password === confirmPassword) {
      setMatch(false);
      setError(false);
      const result = await requestApi({
        body: {
          username,
          password,
        },
        method: "POST",
        route: "/auth/register",
      });
      console.log(result);
      if (result.message === "User registered successfully.") {
        navigate("/");
      }
      else{
        setError(true)
      }
    }
    else{
      setMatch(true);
    }
  };

  const handleNavigation = () => {
    navigate("/");
  };

  return (
    <div className="register">
      <h1>REGISTER</h1>
      {error && <h3>Please fill all fields</h3>}
      {match && <h3>Passwords don't match</h3>}
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
      <Input
        text={"Confirm Password"}
        type={"password"}
        onChange={(e) => {
          setConfirmPassword(e.target.value);
        }}
      />
      <Button onClick={handleRegister}>REGISTER</Button>
      <p>
        Already have an account?
        <b onClick={handleNavigation}> LOGIN</b>
      </p>
    </div>
  );
};
export default Register;
