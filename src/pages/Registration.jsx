import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Registration.css';

export default function Registration() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Success!',
      text: 'Registration submitted successfully',
      icon: 'success'
    });
    setFormData({ name: '', email: '', phone: '' });
  };

  return (
    <div className="about-container3">
    <div className="registration-container">
      {/* Registration Form Box */}
      <div className="registration-form-box">
        <h1 className="registration-heading">ARISE AGAIN</h1>
        <form onSubmit={handleSubmit} className="registration-form">
          <input 
            type="text" 
            placeholder="Full Name" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="registration-input"
            required
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="registration-input"
            required
          />
          <input 
            type="tel" 
            placeholder="Phone Number" 
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="registration-input"
            required
          />
          
          <button 
            type="submit" 
            className="registration-button"
          >
            Login
          </button>
        </form>
      </div>

      {/* Separate Box for Account Creation Link */}
      <div className="redirect-box">
        <p className="redirect-text">
          Create an account {' '}
          <Link to="/signup" className="redirect-link">
            Sign up
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
}