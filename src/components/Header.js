import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


function Header() {
  const navButtonStyle = {
    background: 'none',
    border: 'none',
    color: '#cfe8ff',
    fontSize: '1.4rem',
    fontWeight: '600',
    letterSpacing: '1.5px',
    fontFamily: 'Poppins, sans-serif',
    cursor: 'pointer',
    padding: '0.5rem 1rem'
  };

  const navigate = useNavigate();

  const goToAbout = () => {
    navigate('/', { state: { scrollTo: 'about' } });
  };

  return (
    <header
      style={{
            background: 'rgba(2, 16, 36, 1)',
            padding: '2.5rem 5rem',
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingTop: '7rem',
            margin:'-5% 12%',
            display: 'flex',
            borderRadius: '90px',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.4)',
      }}
    >
<nav style={{ display: 'flex', gap: '8rem' }}>
  <Link to="/" style={{ textDecoration: 'none' }}><button style={navButtonStyle}>HOME</button></Link>
  <Link to="/work" style={{ textDecoration: 'none' }}><button style={navButtonStyle}>MY WORK</button></Link>
  <Link to='/contact' style={{ textDecoration: 'none' }}><button style={navButtonStyle}>CONTACT</button></Link>
  <button onClick={goToAbout} style={navButtonStyle}>ABOUT</button>
  </nav>
    </header>
  );
}

export default Header;