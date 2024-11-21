import React, { useState } from "react";
import Input from "../base/Input";
import Button from "../base/Button";
import X from "./../../assets/icons/x.svg";
import { requestApi } from "../../utils/request";
import "../../styles/Modal.css";
const Modal = ({ active, text, user_id }) => {
  const [code, setCode] = useState();
  const handlePress = async () =>{
    const result = await requestApi({
      body:{
        course_code : code,
        user_id
      },
      method: 'POST',
      route: "/auth/register",
      });
      setInstructor([...instructor, result.user]);
    
  }
  return (
    <div className="bg">
      <div className="modal">
        <div className="cancel" onClick={() => active((prev) => !prev)}>
          <img src={X} alt="X button" />
        </div>
        <h3>{text}</h3>
        <Input onChange={()=>{setCode()}}/>
        <Button>Add</Button>
      </div>
    </div>
  );
};

export default Modal;
