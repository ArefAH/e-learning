import React from "react";
import "../../styles/Input.css";

const input = ({ text, type, onChange }) => {
  return (
    <>
      <label>{text}</label>
      <input type={type} onChange={onChange}/>
    </>
  );
};

export default input;
