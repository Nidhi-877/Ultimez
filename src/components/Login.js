import axios from "axios";
import React, { useState } from "react";
import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { Link } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
  const [fullName, setFullName] = useState({
    login_id: "",
    password: "",
  });
  const inputEvent = (event) => {


    const { value, name } = event.target;

    setFullName((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  const onsubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(
        "https://lobster-app-ddwng.ondigitalocean.app/user/login",
        fullName,
        {
          headers: {
            'api_key': 'Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH'
          }
        }
      );
        
      if(!data.status){
        toast.error(data.message.alert_message)
        
      }else{toast.success("Login successful") 
       const userdata= JSON.stringify(data);
       localStorage.setItem("user",userdata);
       navigate("/home")}
     
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Login</h3>
                <form action="" className="d-flex flex-column gap-15" >
                  <div>
                    <input
                      type="text"
                      name="login_id"
                      placeholder="Email Id"
                      className="form-control"
                      value={fullName.login_id}
                      onChange={inputEvent}
                    />
                  </div>
                  <div className="mt-1">
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="form-control"
                      value={fullName.password}
                      onChange={inputEvent}
                    />
                  </div>
                  <div>
                    <div className="mt-3 d-flex justify-content-center align-align-items-center gap-15">
                      <button className="button border-0" type="submit" onClick={onsubmit}>
                        Login
                      </button>
                      <Link to="/signup" className="button signup">
                        SignUp
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
