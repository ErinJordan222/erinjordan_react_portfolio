import React from 'react'; 
import weather from './weather.png';
import schedular from './schedular.png';
import readmegenerator from './readmegenerator.png';
import github from './github.png'
import global from './global.png'


function ProjectCard() {
    return (
        
      <section className="container"> 
      <section className="card">
      <div className="img-container">
   
            
          <img src={weather}></img>
          <div className="project-icons">
              <a href="https://github.com/ErinJordan222/Weather_Dashboard.git"><img src={github}/></a> 
              <a href="https://erinjordan222.github.io/Weather_Dashboard/"><img src={global}/></a> 
              </div>
              </div>
              </section>
            
            
              <section className="card"> 
              <div className="img-container">
              
          <img src={schedular} class="card-img-top" id="image-height" alt="weather"></img>
          <div className="project-icons">
              <a href="https://github.com/ErinJordan222/ScheduleApp.git"><img src={github}/></a> 
            
              <a href="https://erinjordan222.github.io/ScheduleApp/"><img src={global}/></a>
              </div>
              </div>
              </section>
              
              <section className="card">
              <div className="img-container">
              
          <img src={readmegenerator} class="card-img-top" id="image-height" alt="weather"></img>
          <div className="project-icons">
              <a href="https://github.com/ErinJordan222/README_Generator.git"><img src={github}/></a>
              </div>
              </div>
              </section>
              </section>
              
    );
}

  export default ProjectCard;