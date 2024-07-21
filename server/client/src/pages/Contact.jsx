// export const Contact = () => {
//     return <h1>Hello Contact Page</h1>;
//   };

import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';

const URL = "http://localhost:5000/api/form/contact";

export const Contact = () => {
  const defaultContactForm = {
    username: "",
    email: "",
    message: "",
  };

  // const [contact, setContact] = new useState({
  //   username: "",
  //   email: "",
  //   message: "",
  // });

  const [contact, setContact] = new useState(defaultContactForm);

  const [userData, setUserData] = useState(true);
  const { user } = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserData(false);
  }

  //   let tackle handleInput

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      console.log(contact);

      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });

        const res_data = await response.json();
        console.log("contact form",res_data);

      if (response.ok) {
        setContact(defaultContactForm);
       
        //alert("message sent successfully");
        toast.success("message sent successfully");
      }
      else{
        toast.error(res_data.extraDetails? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.log(error);
    }
    console.log(contact);
  };

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">contact us</h1>
        </div>

        {/* contact page main */}

        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img
              src="/images/support.png"
              alt="contact us"
              width="400"
              height="500"
            />
          </div>

          {/* contact form actual content */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="username"
                  required
                  onChange={handleInput}
                  value={contact.username}
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="email"
                  required
                  onChange={handleInput}
                  value={contact.email}
                />
              </div>

              <div>
                <label htmlFor="message">message</label>
                <textarea
                  id="message"
                  name="message"
                  cols="30"
                  rows="6"
                  required
                  onChange={handleInput}
                  value={contact.message}
                ></textarea>
              </div>
              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>
        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.858301327119!2d72.83311007510356!3d19.20139038202916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6c38eaa73eb%3A0x3e75c5ce173735d!2sRanjeet%20Yadav%20Chawl%20Number%201%2C%20Jawaharlal%20Ramsumer%20Yadav%20Marg%2C%20Shastri%20Nagar%2C%20Irani%20Wadi%2C%20Kandivali%20West%2C%20Mumbai%2C%20Maharashtra%20400067!5e0!3m2!1sen!2sin!4v1701581936541!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
};
