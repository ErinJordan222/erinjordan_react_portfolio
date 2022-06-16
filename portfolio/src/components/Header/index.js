import React, { useState } from 'react';
import Navigation from '../Navigation';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';
import Resume from '../Resume';
// import Resume from '../Resume';

function Portfolio() {
    const [currentPage, handlePageChange] = useState('About');

    const renderPage = () => {
        switch(currentPage) {
            case "about": 
            return <About></About>
            case "contact": 
            return <Contact></Contact>
            case "portfolio":
            return  <Projects></Projects>
            case "resume": 
            return <Resume></Resume>
            default:
              return <About></About>
          }
         
      };
  

return (
    <div>
      <div className="container">
    <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
    <h1 id="about">Erin Jordan</h1>
    <h1 id="about">Full Stack Web Developer</h1>
    </div>
    <div>
      {
        renderPage()
      }
      </div>
      </div>
);
    }
    export default Portfolio;