import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import Course from "../components/common/Course";
import Plus from "./../assets/icons/plus.svg";
import "../styles/Home.css";
import Modal from "../components/common/Modal";
import { requestApi } from "../utils/request";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const getCourses = async () => {
    try {
      const result = await requestApi({
        route: "/courses/list",
      });
      setCourses(result.courses);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <>
      {isActive && <Modal active={setIsActive} />}
      <Navbar />
      <div className="courses">
        {courses.length === 0 ? (
          <h2>You are not enrolled in any courses yet</h2>
        ) : (
          courses.map((element, index) => (
            <Course
              title={element.title}
              description={element.description}
            />
          ))
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
