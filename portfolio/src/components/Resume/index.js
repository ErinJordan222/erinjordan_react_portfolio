import React from 'react';

function ResumeForm() {

return (
<div class="resume-container">

    <h2 class="letter">Cover Letter</h2>
      <p>
      Web Designer & Developer based in Denver, Colorado.
      Experience in designing & developing custom websites.
      Completed coursework for HTML, CSS, & Javascript.
      As well as MySQL, Workbench, Insomnia & Mongoose
      through Denver University- Bootcamp Coding.
      </p>
 



        <h2 class="education">My Education</h2>
        
        <ul className="education-list">
      <li>University of Denver Coding Bootcamp: Denver, CO December 2021- June 2022</li>
      <li>Flint School of Theraputic Massage: Flint, MI April 2014- October 2014</li>
      <li>Grand Blanc High School: Grand Blanc, MI 2004-2008</li>
      </ul>
  



    <h2 class="skills">Skills</h2>
      <ul className="skills-list">
            <li>HTML, Bootstrap, CSS Flexbox, Bulma (CSS Framework)</li> 
            <li>Javascript, JSON, Node.js, Express.js, React.js</li> 
            <li>MySQL, Workbench, Insomnia, E-Commerce</li> 
            <li>7+ years of experience managing clients & 
                tailoring treatment plans to fit customer needs.</li> 
            <li>Time management, empathetic listening, personable communications.</li>
        </ul>

        </div>

);
}

export default ResumeForm;