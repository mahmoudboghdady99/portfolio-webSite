import React from "react";
import "./services.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Slide } from "react-awesome-reveal";

function UiuxPage() {
  return (
    <Slide direction="left" delay={1000}>
      <Container>
        <div className="home-page ">
          <h1 className="home-page-title mb">UI/UX Design Services</h1>
          <p style={{ marginBottom: "30px" }}>
            I offer web development services to create personalized websites for
            individuals, company websites, and websites for restaurants, hotels,
            and gyms... Using the latest technologies, I ensure that your
            website is built to meet your specific needs and requirements.
          </p>
          I am a Front-End Developer specialized in transforming designs into
          flexible and responsive user experiences across different browsers and
          devices. I work on developing front-end code using technologies such
          as HTML, CSS, and JavaScript to achieve interactive and seamless user
          experiences. I efficiently collaborate with UI/UX designs to create
          stunning and engaging user interfaces. I handle visual and interactive
          elements like buttons, menus, and input fields, ensuring their
          consistency and compatibility with the overall website or application
          design. I prioritize applying good UI design principles and delivering
          a satisfying user experience by organizing the structure, optimizing
          page performance, improving accessibility, and implementing dynamic
          interactions. I am proficient in using front-end tools and frameworks
          such as React, Angular, or Vue.js to develop powerful and advanced
          user interfaces. I also pay attention to user experience, conduct
          interface testing, and refine it based on user feedback. With my
          skills as a Front-End Developer, I strive to achieve a perfect balance
          between aesthetic design, powerful functionality, and a fantastic user
          experience to develop exceptional web applications and websites."
          <p style={{ marginBottom: "30px" }}>
            Whether you need a personal website, a company website, or a website
            for your restaurant, hotel, or gym, I have the expertise and skills
            to deliver a high-quality website that meets your goals. Contact me
            today to discuss your web development needs!
          </p>
          <Link to="/contact" className="btn btn-success">
            Contact Me
          </Link>
        </div>
      </Container>
    </Slide>
  );
}

export default UiuxPage;
