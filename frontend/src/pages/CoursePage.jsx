import React, { useEffect, useState } from "react";
import { requestApi } from "../utils/request";
import Navbar from "../components/common/Navbar";
import Mic from "./../assets/icons/mic.svg";
import Book from "./../assets/icons/book.svg";
const courseId = localStorage.getItem("courseId");

const CoursePage = () => {
  const [stream, setStream] = useState([]);
  const getStream = async () => {
    try {
      const result = await requestApi({
        route: "courses/stream",
        method: "POST",
        body: {
          courseId,
        },
      });
      setStream(result?.stream || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStream();
  }, []);
  return (
    <>
      <Navbar />
      <div className="stream">
        {stream.length > 0 ? (
          stream.map((item, index) => (
            <div key={index} className="stream-item">
              {item.source === "Assignment" ? (
                <img src={Book} alt="Assignment logo" />
              ) : (
                <img src={Mic} alt="Announcement logo" />
              )}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <small>{new Date(item.creation_date).toLocaleString()}</small>
            </div>
          ))
          
        ) : (
          <h3>No data available for this course.</h3>
        )}
      </div>
    </>
  );
};

export default CoursePage;
