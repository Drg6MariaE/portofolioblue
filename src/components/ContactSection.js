import React from 'react';

function ContactSection() {
  return (
    <>
<><section style={{ background: 'rgba(2, 16, 36, 1)', marginTop: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5%' }}>
      <div>
        <h2 style={{ fontSize: '2rem', textAlign: 'center' }}>Let’s Build Something Together</h2>
        <p style={{ fontSize: '1.5rem', lineHeight: '1.4', textAlign: 'center', fontWeight: '600', letterSpacing: '1.5px', padding: '0 8%', maxWidth: '800px' }}>I’d love to hear from you!
          Whether you’re reaching out about a project, a job opportunity, or just want to say hi, feel free to drop a message. I check my inbox regularly and always try to respond within a day or two.</p>
      </div>
    </section>
    <section style={{ background: 'rgba(2, 16, 36, 1)', marginTop: '5%', padding: '2rem 1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem', maxWidth: '1100px', margin: '0 auto', width: '100%' }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: '2rem' }}>Direct Contact Details</h2>
          <nav className="contact">
            <p style={{ fontSize: '1rem', fontWeight: '600', letterSpacing: '1.5px' }}>Email: <a href="mailto:mariadragutu6@gmail.com" style={{color:'#C1E8FF', transition: 'color 0.3s ease',cursor: 'pointer' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = '#C1E8FF'}>mariadragutu6@gmail.com</a></p>
            <p style={{ fontSize: '1rem', fontWeight: '600', letterSpacing: '1.5px' }}>Git: <a href="https://github.com/Drg6MariaE" style={{color:'#C1E8FF', transition: 'color 0.3s ease',cursor: 'pointer' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = '#C1E8FF'}>Drg6MariaE</a></p>
            <p style={{ fontSize: '1rem', fontWeight: '600', letterSpacing: '1.5px' }}>Resume: <a href="/resume copy.pdf" style={{color:'#C1E8FF', transition: 'color 0.3s ease',cursor: 'pointer' }} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = '#C1E8FF'}>resume</a></p>
          </nav>
        </div>
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: '1.5rem', lineHeight: '1.4', fontWeight: '600', letterSpacing: '1.5px' }}>PS: I’m currently open to internships, freelance work, or just making cool stuff with cool people.</p>
        </div>
      </div>
    </section></>
    </>
  );
}

export default ContactSection;