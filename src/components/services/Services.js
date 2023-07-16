import React from 'react'
import './services.css'
import { Container } from 'react-bootstrap'
import { Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <Slide direction='left' delay={1000}>
        <Container> 
    <div className='services' id='services'>
      <div className='services-contain'>
        <div className='services-header'>
          
            <h4 className='services-title'>my <span>services</span></h4>
            <h2 className=''>what i Do</h2>
          
        </div>
        <div className='services-info'>

            <div className='services-info-content'>
    <Link to={'/services-dev'}>
         <div className='contain'>
               <i className="fa-solid fa-laptop  mb-3"></i>
                   <h2 className='containe-title '>web Developer</h2>
                   <p className='mb services-inf-desc'> 
                       development of custom web pages , 
                       using current technologies and liberaries 
                   </p>
         </div>
    </Link>
            </div>

            <div className='services-info-content'>
    <Link to={'/services-design'}>
       <div className='contain'>
       <i class="fa-brands fa-sketch  mb-3"></i>
                 <h2 className='containe-title '> graphic design</h2>
                 <p className='mb services-inf-desc'> 
                     i offer design of web interface and mobile applications
                 </p>
       </div>
    </Link>
            </div>
            <div className='services-info-content'>
      <Link to={"/services-ui-ux"}>
       <div className='contain'>
       <i class="fa-solid fa-marker mb-3"></i>
                 <h2 className='containe-title '> ui/ux </h2>
                 <p className='mb services-inf-desc'> 
                    i make design at the client's request banner design, posts, digital designs among others
                 </p>
       </div>
       </Link>
            </div>

            

        </div>
      </div>

      <div className='margin'></div>

    </div>
    <div className='margin'></div>
        </Container>
        </Slide>
  )
}

export default Services
