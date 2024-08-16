import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from 'react-toastify';


const URL = "http://localhost:5000/api/auth/login";

export const Login = () => {
  const [user, setUser] = new useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(user);
      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      console.log("login form", response);

      const res_data = await response.json();
      console.log("res_from_server", res_data); // for validation we kept here

      if (response.ok) {
        1
        // const res_data = await response.json();
        // console.log("res_from_server", res_data); // here we get object of jwt(it has 3 thing msg,token name and userid), this we want to store local storage.
        storeTokenInLS(res_data.token);

        //localStorage. ("token", res_data.token);// can also store this way, But we need to use for every page.
        toast.success("Login successful");
        setUser({
          email: "",
          password: "",
        });
        navigate("/");
      } else {
        // toast.error("Invalid Credential");
        toast.error(res_data.extraDetails? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.log("login form Error", error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="/images/register.png"
                  alt="a nurse with a cute look"
                  width="400"
                  height="500"
                />
              </div>
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
