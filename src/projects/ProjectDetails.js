import React from 'react';
import {  Col, Container, Image, ListGroup, Row } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import '../projects/projects.css';
import projects from '../data';
import { Slide  } from 'react-awesome-reveal';

function ProjectDetails() {
  const { id } = useParams();
  console.log(id);

  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  const { title, category, description, image, Link_Url, Used_Tools, features_in_website } = project;

  const usedToolsArray = Used_Tools.split('\n').filter((tool) => tool.trim() !== '');
  const featuresArray = features_in_website.split('\n').filter((feature) => feature.trim() !== '');

  return (
   <div className='project_details'>
    <Slide direction={'left'} delay={1000}>
       <Container>
         <Link className="btn btn-success my-3" to="/projects">
           Go Back
         </Link>
         <Row>
           <Col md={6}>
             <Image src={image} alt="image-project" fluid />
           </Col>
           <Col md={6}>
             <ListGroup variant="flush">
               <ListGroup.Item>
                 <h4>project-title: {title}</h4>
               </ListGroup.Item>
               <ListGroup.Item>
                 <h5>Technology used: {category}</h5>
               </ListGroup.Item>
               <ListGroup.Item id="main-item">
                 <Row>
                   <Col>
                     <strong>Used Tools:</strong>
                   </Col>
                   <Col>
                     <ul>
                       {usedToolsArray.map((tool, index) => (
                         <li key={index}>{tool}</li>
                       ))}
                     </ul>
                   </Col>
                 </Row>
               </ListGroup.Item>
               <ListGroup.Item id="main-item">
                 <Row>
                   <Col>
                     <strong>Features in Website:</strong>
                   </Col>
                   <Col>
                     <ul>
                       {featuresArray.map((feature, index) => (
                         <li key={index}>{feature}</li>
                       ))}
                     </ul>
                   </Col>
                 </Row>
               </ListGroup.Item>
               <ListGroup.Item>Description: {description}</ListGroup.Item>
               <ListGroup.Item>
                 Live Demo: <a href={Link_Url} target="_blank" rel="noopener noreferrer">{Link_Url}</a>
               </ListGroup.Item>
             </ListGroup>
           </Col>
         </Row>
         <Row className="mt-3">
           <Col>
             <div className="group-buttons">
               <Link className="btn btn-success m-3" to="/" variant="success">
                 Go to Main Page
               </Link>
               <Link className="btn btn-success" to="/projects" variant="success">
                 Go to Projects Page
               </Link>
             </div>
           </Col>
         </Row>
       </Container>
    </Slide>
   </div>
  );
}

export default ProjectDetails;
