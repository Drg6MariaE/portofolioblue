import React from 'react';
import { useNavigate } from 'react-router-dom';
import meImage from '../assets/me.png';

function IntroSection() {
  const navigate = useNavigate();

  return (
    <section style={{ display: 'flex', alignItems: 'center', maxWidth: '1200px', margin: '10% auto' }}>
      <div style={{ flex: '1 1 50%', paddingRight: '8rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Hi, I'm Dragutu Maria Elisa</h1>
        <p style={{ fontSize: '1.5rem', lineHeight: '1.4' }}>
        I’m a passionate web developer, dedicated to growing my skills and reaching my full potential. In this portfolio, you’ll find a selection of projects that showcase my creativity, dedication, and technical abilities.
        </p>
        <button
          onClick={() => navigate('/work')}
          style={{
            marginTop: '2rem',
            padding: '0.8rem 1.5rem',
            fontSize: '1.5rem',
            backgroundColor: 'rgba(2, 16, 36, 1)',
            color: '#C1E8FF',
            border: 'none',
            borderRadius: '55px',
            cursor: 'pointer'
          }}
        >
          View My Work
        </button>
      </div>
      <div style={{ flex: '1 1 50%', textAlign: 'center' }}>
        <img src={meImage} alt="Portrait of Dragutu Maria Elisa" style={{ width: '100%', marginBottom: '-20rem' }} />
      </div>
    </section>
  );
}

export default IntroSection;