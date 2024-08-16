import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import {Link} from "react-router-dom";

export const AdminUsers = () => {
  const { authorizationToken } = useAuth();
  const [users, setUsers] = useState([]);

  const getAllUserData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      const data = await response.json();
      console.log(`get all user : ${data}`);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  // delete the user on delete button

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log(`user after delete:  ${data}`);
      if (response.ok) {
        getAllUserData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUserData();
  }, []);

  return (
    <>
      <section className="admin-user-section">
        <div className="container">
          <h1>Admin User Data</h1>
        </div>
        <div className="container admin-user">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((curEle, index) => {
                return (
                  <tr key={index}>
                    <td>{curEle.username}</td>
                    <td>{curEle.email}</td>
                    <td>{curEle.phone}</td>
                    <td>
                      <Link to={`/admin/users/${curEle._id}/edit`}>Edit</Link>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          deleteUser(curEle._id);
                        }}
                      ></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
