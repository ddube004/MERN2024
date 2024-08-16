import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

export const AdminContacts = () => {
  const { authorizationToken } = useAuth();
  const { contactData, setContactData } = useState([]);
  const getContactsData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: { Authorization: authorizationToken },
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {  
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactsData();
  }, []);

  return (
    <>
      <section className="admin-contacts-section">
        <h1>Hello Contact Page</h1>
      </section>
      <div className="container admin-user">
        {contactData.map((currContactData, index) => {
          const { username, email, message } = currContactData;
          return (
            <div key={index}>
              <p>{username}</p>
              <p>{email}</p>
              <p>{message}</p>
              <button className="btn">delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
