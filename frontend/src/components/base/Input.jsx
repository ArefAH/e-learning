import React from "react";
import "../../styles/Input.css";

const Input = ({ text, type, onChange }) => {
  return (
    <>
      <label>{text}</label>
      <input type={type} onChange={onChange}/>
    </>
  );
};

export default Input;
