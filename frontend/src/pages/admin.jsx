import React, { useState, useEffect } from "react";
import Navbar from "../components/common/Navbar";
import Input from "../components/base/Input";
import Button from "../components/base/Button";
import Plus from "../assets/icons/plus.svg";
import "../styles/Admin.css";
import { requestApi } from "../utils/request";

const Admin = () => {
  const [students, setStudents] = useState([]);
  const getStudents = async () => {
    try {
      const result = await requestApi({
        route: "/user/students",
      });
      setStudents(result.students);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div className="admin">
      <Navbar home={"admin"} />
      <div className="students">
        <h2>Students</h2>
        <table>
          <th>
            <td>Username</td>
          </th>
          <th>
            <td>Status</td>
          </th>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.username}</td>
                <td>{student.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="instructors">
        <h2>
          Instructors
          <span>
            <img src={Plus} alt="Add Course" />
          </span>
        </h2>
        <table>
          <th>
            <td>Username</td>
          </th>
          <th>
            <td>Status</td>
          </th>
          <tbody>
            <tr>
              <td>User</td>
              <td>False</td>
              <td>
                <Button>Assign</Button>
              </td>
              <td>
                <Button>Ban</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="course">
        <h2>
          Courses
          <span>
            <img src={Plus} alt="Add Course" />
          </span>
        </h2>
        <table>
          <th>
            <td>Title</td>
          </th>
          <th>
            <td>Description</td>
          </th>
          <th>
            <td>Code</td>
          </th>
          <tbody>
            <tr>
              <td>User</td>
              <td>False</td>
              <td>Code</td>
              <td>
                <Button>Edit</Button>
              </td>
              <td>
                <Button>Delete</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2>Add Instructors</h2>
        <br />
        <Input text={"Username"} />
        <Input text={"Password"} />
        <Button>Add Instructor</Button>
      </div>
    </div>
  );
};

export default Admin;
