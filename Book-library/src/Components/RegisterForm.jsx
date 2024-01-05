// Importing necessary dependencies and styles
import React from "react";
import { ToastContainer, toast } from "react-toastify"; // Toast notifications
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form"; // Form handling
import "react-toastify/dist/ReactToastify.css"; // Toastify CSS
import "./../App.css"; // Custom styles
import { storeData } from "../util/redux/Action"; // Redux action
import { Link } from "react-router-dom";

// Functional component for the registration form
export default function FormUse() {
  const FormData = useSelector((res) => {
    return res.formData;
  });
  const dispatch = useDispatch();

  // React Hook Form usage
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  // Function to handle form submission
  const FormSubmitHandler = (data) => {
    console.log("data:", data);
    // Saving form data to localStorage
    localStorage.setItem("form-data", JSON.stringify(data));
    // Displaying success toast notification
    toast.success("Form Submitted");
    // Dispatching action to store form data in Redux
    dispatch(storeData(data));
    reset(); // Resetting the form after submission
  };

  const password = watch("password");

  // Function to remove stored form data
  const removeData = () => {
    dispatch(storeData("")); // Clearing form data in Redux
    localStorage.clear(); // Clearing form data from localStorage
  };

  return (
    <div className="form">
      {/* Toast notification container */}
      <ToastContainer />

      {/* Conditional rendering based on stored form data */}
      {Object.keys(FormData).length !== 0 ? (
        // Displaying a thank you message if form data exists
        <div className="last-div">
          <div className="last-box">
            <div className="tq-div">
              <p>⭐Thanks For Registering⭐</p>
            </div>
            <div className="button-div">
              {/* Button to reset form data */}
              <button className="reset" onClick={removeData}>
                Reset
              </button>
              {/* Link to the Home page */}
              <Link to={"/"}>
                <button className="reset">Home</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        // Form for user registration if no data exists
        <fieldset>
          <legend>Registration Form</legend>

          <form onSubmit={handleSubmit(FormSubmitHandler)}>
            {/* Input fields for name, email, password, and confirm password */}
            {/* Name input */}
            <div className="input-name">
              <label> Name : </label>
              <input
                placeholder="Enter your name"
                className="input-box"
                type="text"
                name="Name"
                {...register("Name", {
                  required: "Please Enter your name",
                  minLength: {
                    value: 3,
                    message: "The Name should be greater then 3 letters",
                  },
                  maxLength: {
                    value: 30,
                    message: "The Name should not be greater than 30 letters",
                  },
                })}
              />
              <p className="err">{errors.Name?.message}</p>
            </div>

            {/* Email input */}
            <div className="input-email">
              <label> Email : </label>
              <input
                placeholder="Enter your email"
                className="input-box"
                type="email"
                name="email"
                {...register("email", {
                  required: "Email Required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid Email",
                  },
                })}
              />
              <p className="err">{errors.email?.message}</p>
            </div>

            {/* Password input */}
            <div className="input-pass">
              <label> Password : </label>
              <input
                placeholder="Enter your password"
                className="input-box"
                type="password"
                name="password"
                {...register("password", {
                  required: "Password Required",
                  minLength: {
                    value: 10,
                    message: "Minimum 10 characters required",
                  },
                  pattern: {
                    value: /^(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]+$/,
                    message: "Password must contain one special character",
                  },
                })}
              />
              <p className="err">{errors.password?.message}</p>
            </div>

            {/* Confirm password input */}
            <div className="input-Cpass">
              <label> Confirm password : </label>
              <input
                placeholder="Confirm password"
                className="input-box"
                type="password"
                name="confirmPassword"
                {...register("confirmPassword", {
                  required: "Retype your password!",
                  validate: (value) =>
                    value === password || "Passwords do not match!",
                })}
              />
              {errors.confirmPassword && (
                <p className="err">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* Button to submit the registration form */}
            <div className="button-div">
              <input className="register-button" type="submit" value="Register" />
            </div>
          </form>
        </fieldset>
      )}
    </div>
  );
}
