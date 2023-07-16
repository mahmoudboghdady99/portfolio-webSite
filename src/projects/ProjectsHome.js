import React from 'react'
import { Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Slide } from "react-awesome-reveal";

function ProjectsHome({project}) {
  return (
    <Slide direction='left' delay={1000}>
      <Link to={`/project-details/${project.id}`}>
            <article className='projects-card-image' >
            <Image
              style={{ width: '300px', height: '250px' }} 
              className ='projects-Image' src={project.image} alt='image-project' />
          
            <div className='projects__model'>
              <span className='projects__subtitle'>{project.title}</span>
              <h4 className='projects__title'>{project.category}</h4>
              <div className='projects__button'>
                  View Demo<i className="fa-solid fa-arrow-up-right-from-square"></i>
              </div>
            
            </div>
          </article>
      </Link>
 </Slide>
  )
}

export default ProjectsHome
