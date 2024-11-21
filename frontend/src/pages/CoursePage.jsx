import React from "react";
import { requestApi } from "../utils/request";
import Navbar from "../components/common/Navbar";
const courseId = localStorage.getItem("courseId");

const CoursePage = () => {
  const getStream = async () => {
    try {
      const result = await requestApi({
        route: "/courses/stream",
        method: "POST",
        body: {
          courseId,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="stream">
        
      </div>
    </>
  );
};

export default CoursePage;
