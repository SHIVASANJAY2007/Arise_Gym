import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

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

  // Inline styles
  const styles = {
    mainContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#fafafa',
      padding: '20px'
    },
    formBox: {
      width: '100%',
      maxWidth: '350px',
      padding: '20px 40px',
      backgroundColor: 'white',
      border: '1px solid #dbdbdb',
      borderRadius: '1px',
      marginBottom: '10px',
      textAlign: 'center'
    },
    heading: {
      color: '#333',
      marginBottom: '1.5rem'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    input: {
      padding: '9px 8px',
      border: '1px solid #dbdbdb',
      borderRadius: '3px',
      backgroundColor: '#fafafa',
      fontSize: '0.9rem'
    },
    button: {
      backgroundColor: '#0095f6',
      color: 'white',
      padding: '8px',
      border: 'none',
      borderRadius: '4px',
      fontSize: '0.9rem',
      cursor: 'pointer',
      marginTop: '1rem',
      fontWeight: '600'
    },
    redirectBox: {
      width: '100%',
      maxWidth: '350px',
      padding: '20px',
      backgroundColor: 'white',
      border: '1px solid #dbdbdb',
      borderRadius: '1px',
      textAlign: 'center'
    },
    redirectText: {
      color: '#262626',
      fontSize: '0.9rem',
      margin: 0
    },
    redirectLink: {
      color: '#0095f6',
      textDecoration: 'none',
      fontWeight: '600'
    }
  };

  return (
    <div style={styles.mainContainer}>
      {/* Registration Form Box */}
      <div style={styles.formBox}>
        <h1 style={styles.heading}>Join Our Gym</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input 
            type="text" 
            placeholder="Full Name" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            style={styles.input}
            required
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            style={styles.input}
            required
          />
          <input 
            type="tel" 
            placeholder="Phone Number" 
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            style={styles.input}
            required
          />
          
          <button 
            type="submit" 
            style={styles.button}
            onMouseOver={(e) => e.target.style.opacity = '0.9'}
            onMouseOut={(e) => e.target.style.opacity = '1'}
          >
            Register Now
          </button>
        </form>
      </div>

      {/* Separate Box for Account Creation Link */}
      <div style={styles.redirectBox}>
      <p style={styles.redirectText}>
        Create an account {' '}
        <Link to="/signup" style={styles.redirectLink}>
        Sign up
        </Link>
      </p>
      </div>
    </div>
  );
}