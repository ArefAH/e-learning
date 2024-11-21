import React from "react";
import Input from "../base/Input";
import Button from "../base/Button";
import X from "./../../assets/icons/x.svg";
import "../../styles/Modal.css";

const Modal = ({ active, text }) => {
  return (
    <div className="bg">
      <div className="modal">
        <div className="cancel" onClick={() => active((prev) => !prev)}>
          <img src={X} alt="X button" />
        </div>
        <h3>{text}</h3>
        <Input />
        <Button>Add</Button>
      </div>
    </div>
  );
};

export default Modal;
