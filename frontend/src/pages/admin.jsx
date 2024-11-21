import React from "react";
import Navbar from "../components/common/Navbar";
import Input from "../components/base/Input";
import Button from "../components/base/Button";

const Admin = () => {
  return (
    <>
      <Navbar home={"admin"} />
      <div className="users">
        <h2>Users</h2>
        <table>
          <th>
            <td>User Name</td>
          </th>
          <th>
            <td>User Type</td>
          </th>
          <tbody>
            <tr>
              <td>User</td>
              <td>Student</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2>Add Instructors</h2>
        <Input />
        <Input />
        <Button>Add Instructor</Button>
      </div>
    </>
  );
};

export default Admin;
