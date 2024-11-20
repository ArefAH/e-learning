import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import Plus from "./../assets/icons/plus.svg";
import "../styles/Home.css";
import Modal from "../components/common/Modal";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {isActive && <Modal active={setIsActive}/>}
      <Navbar />
      <div className="courses">
        {courses.length === 0 && (
          <h2>You are not enrolled in any courses yet</h2>
        )}
      </div>
      <button
        onClick={() => setIsActive((prev) => !prev)}
        className="add-button"
      >
        <img src={Plus} alt="Plus Icon" />
      </button>
    </>
  );
};

export default Home;
