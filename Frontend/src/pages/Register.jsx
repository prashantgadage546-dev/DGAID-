import React, { useRef } from "react";
import { useProjects } from "../context/ProjectContext";
import { useNavigate, Link } from "react-router-dom";
import "./styles/RegistrationForm.css";

export default function Register() {
  const { register } = useProjects();
  const navigate = useNavigate();

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const full_name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const role = "user"; // 🔹 Force "user" role for registration
    const password = passwordRef.current.value;
    const confirm_password = confirmPasswordRef.current.value;

    if (!full_name || !email || !password || !confirm_password) {
      return alert("Please fill in all fields.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return alert("Please enter a valid email address.");
    }

    if (password !== confirm_password) {
      return alert("Passwords do not match!");
    }

    const success = await register(full_name, role, email, password, confirm_password);
    if (success) {
      alert("Registration successful! Please log in.");
      navigate("/login");
    } else {
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <form className="register-box" onSubmit={handleSubmit}>
        <h2>Create an Account</h2>

        <label>Full Name</label>
        <input type="text" placeholder="Enter your full name" ref={nameRef} />

        <label>Email Address</label>
        <input type="email" placeholder="Enter your email" ref={emailRef} />

        <label>Password</label>
        <input type="password" placeholder="Create a password" ref={passwordRef} />

        <label>Confirm Password</label>
        <input type="password" placeholder="Re-enter your password" ref={confirmPasswordRef} />

        <div className="register-actions">
          <button type="submit" className="btn-primary">Sign Up</button>
          <Link to="/login" className="btn-secondary">Login</Link>
        </div>
      </form>
    </div>
  );
}
