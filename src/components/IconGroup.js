import React from 'react'
import { Button } from 'react-bootstrap'
import '../components/home/home.css';
import { Slide } from 'react-awesome-reveal';

function IconGroup() {
  return (
    <Slide direction='left' delay={1000}>

    <div className='icon-group'>
    <Button href='https://www.linkedin.com/in/mahmoud-gad-7112a115a/' target='_blank' rel='noopener noreferrer' className='iconGroupLink linked-in-icon'>
      <i className='fa-brands fa-linkedin'></i>
    </Button>
    <Button href='https://github.com/mahmoudboghdady99' target='_blank' rel='noopener noreferrer' className='iconGroupLink githup-icon'>
      <i className='fa-brands fa-github'></i>
    </Button>
    <Button href='https://www.facebook.com/profile.php?id=100089004074727' target='_blank' rel='noopener noreferrer' className='iconGroupLink face-book-icon'>
    <i className="fa-brands fa-facebook"></i>
    </Button>
  </div>
  </Slide>
  )
}

export default IconGroup
