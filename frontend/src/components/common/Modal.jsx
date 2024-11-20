import React from "react";
import Input from "../base/Input";
import Button from "../base/Button";
import X from "./../../assets/icons/x.svg";
import "../../styles/Modal.css";

const Modal = ({ active }) => {
  return (
    <div className="bg">
      <div className="modal">
        <div className="cancel" onClick={() => active((prev) => !prev)}>
          <img src={X} alt="X button" />
        </div>
        <h3>Enter Course Code:</h3>
        <Input />
        <Button>Add Course</Button>
      </div>
    </div>
  );
};

export default Modal;
