import React from 'react';

function ProjectsSection() {
  return (
    <>
      <section style={{ maxWidth: '1200px', margin: '9% auto' }}>
        <div>
          <p style={{ fontSize: '1.5rem', lineHeight: '1.4', textAlign: 'center', fontWeight: '600', letterSpacing: '1.5px', padding: '6%' }}>
            Welcome to the part of my portfolio where ideas turn into code!
            Here, you’ll find a collection of projects that showcase my journey as a front-end developer — from responsive layouts and interactive components to hands-on use of React, APIs, and modern web tools.
          </p>
        </div>
      </section>
      <section style={{ background: 'rgba(2, 16, 36, 1)', overflow:'hidden'}}>
        <div style={{display:'flex', margin:'6%'}}>
          <div>
            <img src={require('../assets/firstproject.png')} alt="Savora homepage screenshot" style={{maxWidth:'100%', marginTop:'10%'}}/>
          </div>
          <div style={{marginTop:'5%'}}>
            <h2 style={{ fontSize: '2rem', letterSpacing: '1px', transition: 'color 0.3s ease'}} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = '#C1E8FF'}><a href='https://quiet-pudding-37693d.netlify.app'>Savora – Fine Dining Restaurant</a></h2>
            <p style={{ fontSize: '1.5rem', lineHeight: '1.4',letterSpacing: '1px'}}>
              Savora is a fully custom restaurant website designed to deliver a luxurious and inviting online presence for a high-end dining experience.
              This project demonstrates my ability to build a complete website from scratch, featuring multiple pages, custom styling, smooth navigation, and a consistent brand identity. The site is fully responsive, accessible, and includes interactive elements to enhance user engagement.
            </p>
          </div>
        </div>
        <div style={{display: 'flex',}}>
        <div style={{margin:'-1% 6%'}}>
        <h3 style={{fontWeight:'700', fontSize:'3rem'}}>Project Highlights:</h3>
              <ul>
                <li style={{marginBottom:'0.75rem'}}>
                  <span style={{fontWeight:'bold', fontSize:'1.2rem'}}>Multi-Page Structure: Home, Menu, Gallery, Events, and Contact pages for complete site navigation.</span>
                </li>
                <li style={{marginBottom:'0.75rem'}}>
                  <span style={{fontWeight:'bold', fontSize:'1.2rem'}}>Custom Visuals: Unique logo and imagery for a cohesive, branded look.</span>
                </li>
                <li style={{marginBottom:'0.75rem'}}>
                  <span style={{fontWeight:'bold', fontSize:'1.2rem'}}>Responsive Design: Optimized for both desktop and mobile devices.</span>
                </li>
                <li style={{marginBottom:'0.75rem'}}>
                  <span style={{fontWeight:'bold', fontSize:'1.2rem'}}>Modern UI: Elegant color palette, smooth hover effects, and easy-to-use navigation.</span>
                  
                </li>
                <li style={{marginBottom:'0.75rem'}}>
                  <span style={{fontWeight:'bold', fontSize:'1.2rem'}}>Accessibility: Semantic HTML and meaningful alt text for better usability.</span>
                
                </li>
                <li style={{marginBottom:'0.75rem'}}>
                  <span style={{fontWeight:'bold', fontSize:'1.2rem'}}>Interactivity: JavaScript enhancements for improved user experience.</span>
                </li>
                <li style={{marginBottom:'0.75rem'}}>
                  <span style={{fontWeight:'bold', fontSize:'1.2rem'}}>Clean, Maintainable Code: Organized HTML, CSS variables, and external scripts.</span>
                </li>
              </ul>
              <h3 style={{fontSize:'2rem', marginBottom:'1%'}}>Technologies Used:</h3>
              <ul style={{marginBottom:'5%'}}>
                <li style={{marginBottom:'0.75rem'}}>
                  <span style={{fontWeight:'bold', fontSize:'1.2rem'}}>HTML5</span>
                </li>
                <li style={{marginBottom:'0.75rem'}}>
                  <span style={{fontWeight:'bold', fontSize:'1.2rem'}}>CSS3 (including CSS variables and transitions)</span>
                </li>
                <li style={{marginBottom:'0.75rem'}}>
                  <span style={{fontWeight:'bold', fontSize:'1.2rem'}}>JavaScript</span>
                </li>
                <li style={{marginBottom:'0.75rem'}}>
                  <span style={{fontWeight:'bold', fontSize:'1.2rem'}}>Image optimization & basic accessibility</span>
                  
                </li>
              </ul>
          </div>
          <div style={{ flex: 1}}>
            <img src={require('../assets/sav.png')} alt="Savora screenshot" style={{maxWidth:'75%'}}/>
          </div>
        </div>
      </section>
      <p style={{ fontSize: '1.5rem', fontWeight: '600', letterSpacing: '1.5px', padding: '3% 10%'  }}>
 Not only does this portfolio showcase my best work, but it is itself a fully custom project, designed and coded from scratch using React and modern CSS. 
  Here, you’ll find a collection of projects that highlight my journey as a front-end developer — from responsive layouts and interactive components to hands-on use of React, APIs, and web tools.</p>
 
    </>
  );
}
export default ProjectsSection;