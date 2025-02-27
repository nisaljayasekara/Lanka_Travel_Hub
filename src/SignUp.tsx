import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
//import { signUpUser } from '../api/api'; // Adjust the path as necessary
import './css/Auth.css'; // Import CSS for styling

const SignUp = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
    
    try {
        localStorage.setItem("username", formData.username)
        localStorage.setItem("email", formData.email)
        localStorage.setItem("password",formData.password)

        navigate("/signin")
      console.log('Sign Up Successful:');
     

    } catch (error) {
      console.error('Sign Up Error:', error);
     
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/signin">Sign In</Link></p>
    </div>
  );
};

export default SignUp;
