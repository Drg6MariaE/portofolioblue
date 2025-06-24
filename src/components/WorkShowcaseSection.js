import React from 'react';

function WorkShowcaseSection() {
  return (
    <section style={{ background: 'rgba(2, 16, 36, 1)', padding: '4rem 0' }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto'}}>
      <h2 style={{ fontSize: '3rem', marginBottom: '5rem', fontWeight: '600', letterSpacing: '1.5px' }}>A Glimpse Into My Work</h2>
      <div>
        <div style={{display: 'flex', gap:'5rem'}}>
          <img src={require('../assets/2.jpeg')} alt="Coffee Shop Design" style={{ width: '100%', maxWidth: '500px', borderRadius: '10px', marginBottom: '1rem',  boxShadow: '0px 4px 150px rgba(125, 172, 202, 1)' }} />
          <p style={{ fontSize: '1.9rem', alignContent:'center', lineHeight: '1.4', fontWeight: '600', letterSpacing: '1.5px' }}>
            This is a Figma-based design concept for a coffee shop website, showcasing my skills in layout
            planning, visual hierarchy, and user-centered design.
          </p>
        </div>
      </div>
      <div style={{display: 'flex', gap:'5rem'}}>
      <p style={{ fontSize: '1.9rem', alignContent:'center', lineHeight: '1.4', fontWeight: '600', letterSpacing: '1.5px'}}>
            It’s part of my ongoing journey to transform design mockups into fully functional, responsive web applications.
          </p>
          <img src={require('../assets/1.jpeg')} alt="CupEscape Project" style={{ width: '100%', maxWidth: '600px', borderRadius: '10px', marginBottom: '2.5rem',  boxShadow: '0px 4px 100px rgba(125, 172, 202, 1)' }} />
        </div>
    </div>
  </section>
  );
}

export default WorkShowcaseSection;