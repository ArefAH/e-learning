import React, { useEffect, useState } from "react";
import { requestApi } from "../utils/request";
import Navbar from "../components/common/Navbar";
const courseId = localStorage.getItem("courseId");

const CoursePage = () => {
  const [stream, setStream] = useState([])
  const getStream = async () => {
    try {
      const result = await requestApi({
        route: "/courses/stream",
        method: "POST",
        body: {
          courseId,
        },
      });
      setStream([...stream], [result])
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getStream();
  }, [])
  return (
    <>
      <Navbar />
      <div className="stream">
        
      </div>
    </>
  );
};

export default CoursePage;
