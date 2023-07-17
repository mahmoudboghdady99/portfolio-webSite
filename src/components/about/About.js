import React from 'react'
import './about.css'
import { Button, Col, Container, Row } from 'react-bootstrap'

import homeImage from '../../images/home-image2.png'
import {Slide} from "react-awesome-reveal";

function About() {

  return (
    <Slide direction='left' delay={1000}>
    <Row className='marginTop'>
      <Container>
      
  <Col>
        <div id='about' className='home-about'>
         <div className='home-content-page-about'>
           {/* contain: home-info + home image */}
           
           <div className='home-image'>
             <svg className='home__blob' viewBox='0 0 550 591' xmlns='http://www.w3.org/2000/svg'>
               <mask id='maskBlob' mask-type='alpha'>
                 <path d='M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z' />
               </mask>
               <g mask='url(#maskBlob)'>
                 <path d='M263 47.1782C270.426 42.891 279.574 42.891 287 47.1782L501.157 170.822C508.583 175.109 513.157 183.032 513.157 191.606V438.894C513.157 447.468 508.583 455.391 501.157 459.678L287 583.322C279.574 587.609 270.426 587.609 263 583.322L48.843 459.678C41.4174 455.391 36.843 447.468 36.843 438.894V191.606C36.843 183.032 41.4174 175.109 48.843 170.822L263 47.1782Z' />
                 <rect x='37' width='476' height='630' fill='url(#pattern0)' />
               </g>
               <rect x='37' width='476' height='300' fill='url(#pattern1)' />
               <defs>
                 <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
                   <use href='#imageBlob' transform='matrix(0.00143057 0 0 0.00108108 0.0404062 0)' />
                 </pattern>
                 <pattern id='pattern1' patternContentUnits='objectBoundingBox' width='1' height='1'>
                   <use href='#imageBlob' transform='matrix(0.00143057 0 0 0.00226984 0.0404062 0)' />
                 </pattern>
                 {/* Insert your profile (recommended size: 640 x 940) */}
                 <image className='home__image' id='imageBlob' width='640' height='925' xlinkHref={homeImage} />
               </defs>
             </svg>
           </div>
    
           <div className='home-info'>
          
          <h3 className='home-info-1'>My <span>intro</span></h3>
          <h1 className='home-info-name'>About Me</h1>
        
          <p className='home-info-desc'>
          
       I am a frontend developer with expertise in creating responsive and user-friendly web interfaces.<br />
       I have a strong command of HTML, CSS, and JavaScript,React js and Redux <br />
         and I'm passionate about implementing modern design principles and best practices.<br />
         With a keen eye for detail, I strive to deliver high-quality code and exceptional user experiences.<br />
           I enjoy collaborating with cross-functional teams and leveraging my problem-solving skills to overcome challenges.<br />
       Continuous learning and staying up-to-date with the latest web technologies are <br /> 
       integral parts of my professional journey.
    
       </p>
 

       <Button
        variant="success"
        className="mt-1"
     
        href='/assets/New%20folder/mahmoudBoghdady-Front-End.pdf`'
        download="my-cv.pdf"
      >
        Download My CV
      </Button>


      

       

        </div>
    
         </div>
       </div>
      
  </Col>

      </Container>
    </Row>
    {/* <div className='margin'></div> */}
    </Slide>
  )
}

export default About
