import React from "react";
import "../../styles/Input.css";

const Input = ({ text, type, onChange }) => {
  return (
    <p>
      <p><label>{text}</label></p>
      <input type={type} onChange={onChange}/>
    </p>
  );
};

export default Input;
