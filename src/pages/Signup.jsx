import { Link } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';
import './Signup.css'; 

export default function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    username: '',
    password: '',
  });
const styles = {
    buttonHover: {
        backgroundColor: 'black',
      }
}
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Account Created!',
      text: 'Welcome to ARISE Fitness',
      icon: 'success'
    });
  };

  return (
    <div className="about-container2">
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="logo">Create an Account</h1>
        
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
          <input
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            required
          />
          
          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            required
          />
          
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
        </form>

        
      </div>

      <div className="login-redirect">
        Have an account? <Link to="/register">Log in</Link>
      </div>
    </div></div>
  );
}