import React from 'react'
import './skills.css'
import cssImage from '../images/skills/css.jpg'
import { Container, Image } from 'react-bootstrap'
import AxiosImage  from '../images/skills/axios.jpg'
import bootsImage  from '../images/skills/bootstrap.jpg'
import htmlImage  from '../images/skills/html.png'
import jsImage  from '../images/skills/js.png'
import reactImage  from '../images/skills/react.png'
import reactRedux  from '../images/skills/react-redux.png'
import reactBootsImage  from '../images/skills/react-bootstrap.jpg'
import responsiveImage  from '../images/skills/responsive.jpg'
import oopImg  from '../images/skills/oop.png'
import GitImg  from '../images/skills/git_githup.png'
import ecm6  from '../images/skills/Ecm6.png'
import { Slide} from 'react-awesome-reveal'

function Skills() {
  return (
<Slide direction='left' delay={1000}> 
<Container>
<div className='skills ' id='skills'>
      <div className='mySkills'>
        <h2 className='mySkills-title'>My <span>Skills</span></h2>
        <h4 className='mySkills-title-info'>My Knowledge</h4>
      </div>

<div className='skills-card'>
         
      <div className='skill-card-Image'>
          <Image src={htmlImage} alt='image' />
          <h3 className='title-Image'>HTML</h3>
      </div>

      <div className='skill-card-Image'>
          <Image src={cssImage} alt='image' />
          <h3 className='title-Image'>Css</h3>
      </div>

      <div className='skill-card-Image'>
          <Image src={jsImage} alt='image' />
          <h3 className='title-Image'>JavaScripte</h3>
      </div>

      <div className='skill-card-Image'>
          <Image src={reactImage} alt='image' />
          <h3 className='title-Image'>React Js</h3>
      </div>

      <div className='skill-card-Image'>
          <Image src={reactRedux} alt='image' />
          <h3 className='title-Image'>Redux js</h3>
      </div>

      <div className='skill-card-Image'>
          <Image src={reactBootsImage} alt='image' />
          <h3 className='title-Image'>React Bootstrap</h3>
      </div>

      <div className='skill-card-Image'>
          <Image src={bootsImage} alt='image' />
          <h3 className='title-Image'>Bootstrap</h3>
      </div>

      <div className='skill-card-Image'>
          <Image src={AxiosImage} alt='image' />
          <h3 className='title-Image'>Axios</h3>
      </div>

      <div className='skill-card-Image'>
          <Image src={responsiveImage} alt='image' />
          <h3 className='title-Image'>Responsive Design</h3>
      </div>

      <div className='skill-card-Image'>
          <Image src={oopImg} alt='image' />
          <h3 className='title-Image'>Oop</h3>
      </div>

      <div className='skill-card-Image'>
          <Image src={GitImg} alt='image' />
          <h3 className='title-Image'>Git & GitHup</h3>
      </div>

      <div className='skill-card-Image'>
          <Image src={ecm6} alt='image' />
          <h3 className='title-Image'>Ecm6</h3>
      </div>
        
</div>
</div>
<div className='margin'></div>

</Container>
</Slide>
  )
}

export default Skills
