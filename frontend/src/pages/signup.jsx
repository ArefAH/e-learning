import React from "react";
import Input from "../components/base/Input";
import Button from "../components/base/Button";
import { useState } from "react";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    console.log(username);
    console.log(password);
  };
  return (
    <>
      <h1>SignUp</h1>
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
      <Button onClick={handleSignUp}>LOGIN</Button>
    </>
  );
};

export default SignUp;
