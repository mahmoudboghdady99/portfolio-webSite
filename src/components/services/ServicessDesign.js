import React from "react";
import "./services.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

function ServicessDesign() {
  return (
    <Slide direction='left' delay={1000}>

    <Container>
      <div className="home-page ">
        <h1 className="home-page-title mb">Graphic Design Services</h1>
        <p style={{marginBottom: "30px"}}>
          I offer web development services to create personalized websites for
          individuals, company websites, and websites for restaurants, hotels,
          and gyms ... . Using the latest technologies, I ensure that your
          website is built to meet your specific needs and requirements.
        </p>
        I specialize in designing visually stunning and engaging web interfaces
        and mobile With a keen eye for aesthetics and a deep understanding of
        user experience, I create designs that are not only visually appealing
        but also highly functional. Whether you need a captivating website
        interface or a seamless mobile app design, I have the expertise to bring
        your ideas to life. From choosing the right color palettes and
        typography to crafting intuitive user interactions, I ensure that your
        design stands out and delivers an exceptional user experience. Let's
        collaborate to create a captivating design that represents your brand
        and resonates with your target audience.
        <p style={{marginBottom: "30px"}}>
          Whether you need a personal website, a company website, or a website
          for your restaurant, hotel, or gym, I have the expertise and skills to
          deliver a high-quality website that meets your goals. Contact me today
          to discuss your web development needs!
        </p>
        <Link to="/contact" className="btn btn-success">
          Contact Me
        </Link>
      </div>
    </Container>
    </Slide>
  );
}

export default ServicessDesign;
