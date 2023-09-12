import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: "",
    username: "",
    email_id: "",
    mobile_number: "",
    password: "",
    referral_id: "",
    country_row_id: "",
  });

  // State for error messages
  const [errors, setErrors] = useState({
    full_name: "",
    username: "",
    email_id: "",
    mobile_number: "",
    password: "",
    referral_id: "",
    country_row_id: "",
  });

  const inputEvent = (event) => {
    const { value, name } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Clear the error message when the user starts typing in a field
    setErrors((prevState) => ({
      ...prevState,
      [name]: "",
    }));
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Check each field for empty value
    for (const field in formData) {
      if (!formData[field]) {
        newErrors[field] = "This field is required";
        valid = false;
      }
    }

    setErrors(newErrors);
    return valid;
  };

  const onsubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const { data } = await axios.post(
        "https://lobster-app-ddwng.ondigitalocean.app/user/register",
        formData,
        {
          headers: {
            api_key: "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH",
          },
        }
      );

    

       if(data.status){
        toast.success("Registered successfully")
        navigate("/")
        
       
      }
      else{
        
            setErrors((prevState) => ({
              ...prevState,
              ...data.message,
            }));
            toast.error("Please fill in all the required fields");
          
      }
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
                <h3 className="text-center mb-3">Sign Up</h3>
                <form className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="text"
                      name="full_name"
                      placeholder="Full Name"
                      className="form-control"
                      value={formData.full_name}
                      onChange={inputEvent}
                      required
                    />
                    <div className="error" style={{ color: "red" }}>
                      {errors.full_name}
                    </div>
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email_id"
                      placeholder="Email ID"
                      className="form-control"
                      value={formData.email_id}
                      onChange={inputEvent}
                      required
                    />
                    <div className="error" style={{ color: "red" }}>
                      {errors.email_id}
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="username"
                      placeholder="Username"
                      className="form-control"
                      value={formData.username}
                      onChange={inputEvent}
                      required
                    />
                    <div className="error" style={{ color: "red" }}>
                      {errors.username}
                    </div>
                  </div>
                  <div>
                    <input
                      type="tel"
                      name="mobile_number"
                      placeholder="Mobile Number"
                      className="form-control"
                      value={formData.mobile_number}
                      onChange={inputEvent}
                      required
                    />
                    <div className="error" style={{ color: "red" }}>
                      {errors.mobile_number}
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="referral_id"
                      placeholder="Referral ID"
                      className="form-control"
                      value={formData.referral_id}
                      onChange={inputEvent}
                    />
                    <div className="error" style={{ color: "red" }}>
                      {errors.referral_id}
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="country_row_id"
                      placeholder="Country"
                      className="form-control"
                      value={formData.country_row_id}
                      onChange={inputEvent}
                      required
                    />
                    <div className="error" style={{ color: "red" }}>
                      {errors.country_row_id}
                    </div>
                  </div>
                  <div className="mt-1">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                      value={formData.password}
                      onChange={inputEvent}
                      required
                    />
                    <div className="error" style={{ color: "red" }}>
                      {errors.password}
                    </div>
                  </div>
                  <div>
                    <div className="mt-3 d-flex justify-content-center align-align-items-center gap-15">
                      <button className="button signup" onClick={onsubmit}>
                        Sign Up
                      </button>
                      <Link
                        to="/"
                        className="button border-0"
                        style={{ color: "white" }}
                      >
                        Login
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

export default SignUp;
