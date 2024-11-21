import React, { useEffect, useState } from "react";
import { requestApi } from "../utils/request";
import Navbar from "../components/common/Navbar";
import Mic from "./../assets/icons/mic.svg";
import Book from "./../assets/icons/book.svg";
import { useParams } from "react-router-dom";
import "../styles/CoursePage.css";

const CoursePage = () => {
  const { courseId } = useParams();
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

      setStream(result.stream);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStream();
  }, [courseId]);

  return (
    <>
      <Navbar home={'Home'} />
      <div className="stream">
        {stream.length > 0 ? (
          stream.map((item) => (
            <div key={item.id} className="stream-item">
              {item.source === "Assignment" ? (
                <img src={Book} alt="Assignment logo" />
              ) : (
                <img src={Mic} alt="Announcement logo" />
              )}
              <div>
                <h3>{item.content}</h3>
                <small>{new Date(item.creation_date).toLocaleString()}</small>
              </div>
            </div>
          ))
        ) : (
          <h2>No data available for this course.</h2>
        )}
      </div>
    </>
  );
};

export default CoursePage;
