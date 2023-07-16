import React from "react";
import "./projects.css";
import { Container } from "react-bootstrap";
import projects from "../data";
import ProjectsHome from "./ProjectsHome";
import { Zoom } from "react-awesome-reveal";

function Projects() {
  return (
     
      <div className="projects" id="projects">
        <div className="projects-top services-header">
          <Container>
         
            <div className="projects-top1">
              <h4 className="services-title">
                my <span>jobs</span>
              </h4>
              <h2 className=""> recent projects</h2>
            </div>
            <Zoom  > 
            <div className="projects-card">
              {projects.map((project) => (
                <ProjectsHome key={project.id} project={project} />
              ))}
            </div>
            </Zoom>
          </Container>
        </div>
      </div>
 
  );
}

export default Projects;
