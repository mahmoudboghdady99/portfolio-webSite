import React from 'react';
import './services.css'
import {  Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';

const HomePage = () => {
  return (
    <Slide direction='left' delay={1000}>
    <Container>
      <div className="home-page">
        <h1 className='home-page-title mb'>Welcome to My Web Development Services</h1>
        <p className='mb'>
          I offer web development services to create personalized websites for individuals, company websites, and websites for restaurants, hotels, and gyms. Using the latest technologies, I ensure that your website is built to meet your specific needs and requirements.
        </p>
        <ul className='mb'>
          <li>Custom web page development using current technologies and libraries</li>
          <li>User-friendly and attractive interface design</li>
          <li>Integration with external systems and applications, such as CMS, e-commerce, payment systems, and APIs</li>
          <li>Mobile application development for smartphones and tablets</li>
          <li>Search Engine Optimization (SEO) to enhance online visibility</li>
          <li>Website performance analysis and optimization</li>
          <li>Website hosting services and domain management</li>
        </ul>
        <p className='home-page-description '>
          Whether you need a personal website, a company website, or a website for your restaurant, hotel, or gym, I have the expertise and skills to deliver a high-quality website that meets your goals. Contact me today to discuss your web development needs!
        </p>
        <Link to='/contact' className='btn btn-success' >Contact Me</Link>
      </div>

    </Container>
    </Slide>
  );
};

export default HomePage;
