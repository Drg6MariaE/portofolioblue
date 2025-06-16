import React from 'react';

function IntroSection() {
  return (
    <section id="about" style={{background: 'linear-gradient(to bottom,#5483b3a9 5%, #052659 60%,#021024 100%)', paddingTop: '3rem', paddingBottom:'3rem'}}>
    <div style={{lineHeight: '1.4', maxWidth: '1200px', margin: 'auto'}}>
      <h2 style={{fontSize:'3rem', paddingLeft:'1%', fontWeight: '600', letterSpacing: '1.5px' }}>ABOUT ME</h2>
      <p style={{textShadow: '1px 1px 3px rgba(0, 0, 0, 15)',fontSize:'1.5rem', padding:'0 1%', letterSpacing: '1.5px'}}>I’m a self-taught web developer with a passion for building clean, responsive websites. I love turning ideas into interactive, user-friendly web experiences.<br></br><br></br>
      To grow my skills, I completed the <strong>Meta Front-End Developer</strong> and <strong>IBM Web Development</strong> courses on <strong>Coursera</strong>. These programs gave me hands-on experience with <strong>HTML, CSS, JavaScript, React, Git,</strong> and <strong>responsive design—all</strong> focused on front-end development.<br></br><br></br>
      As a <strong>wheelchair user</strong>, I haven’t had the opportunity to pursue a traditional degree—but what I do have is genuine <strong>passion, persistence</strong>, and a deep commitment to building something meaningful with my life. I’ve worked hard to teach myself these skills because I want to create a better future.<br></br><br></br>
      This portfolio, built with <strong>React</strong>, is part of that journey.
      I’m currently looking for <strong>junior front-end roles</strong> or <strong>internships</strong>, where I can keep learning, grow as a developer, and contribute to real-world projects that make a difference.</p>
    </div>
  </section>
  );
}

export default IntroSection;