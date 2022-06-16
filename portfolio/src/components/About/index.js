import React from 'react'; 
import profilepic from './profilepic.jpg';
// import { Col } from 'react-bootstrap';

function About() {
    return(
        <section className="title">
             <div className="row justify-content-center" id="about-container">       
            <center><img src={profilepic} className="profilepic" alt="erin-profile"/></center>
      <h2 class="aboutme">About ME</h2>
      <p class="aboutme-section">
        I am a client care professional in massage therapy working to
        leverage my existing skills for a new career in web design.
        With over 8 years of experience in assessing clients’ needs and
        designing treatment plans to fit their requirements, 
        I am excited to transition these skills into designing websites 
        for clients. As an enthusiastic communicator and quick learner, 
        I am excited to work on projects’ as a Full Stack Web Developer. 

</p>

</div>

</section>
  );
}

export default About;
    