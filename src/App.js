import About from "./components/about/About";
import Home from "./components/home/Home";
import NabBar from "./components/NabBar";
import Projects from "./projects/Projects";
import Services from "./components/services/Services";
import Skills from "./skills/Skills";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectDetails from "./projects/ProjectDetails";
import ProjectsHome from "./projects/ProjectsHome";
import Contact from "./components/contact/Contact";
import ServicesPage from "./components/services/ServicesPage";
import FooterComp from "./components/footer/Footer";
import ServicessDesign from "./components/services/ServicessDesign";
import UiuxPage from "./components/services/UiuxPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NabBar />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services-dev" element={<ServicesPage />} />
          <Route path="/services-design" element={<ServicessDesign />} />
          <Route path="/services-ui-ux" element={<UiuxPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects-home" element={<ProjectsHome />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project-details/:id" element={<ProjectDetails />} />
        
        </Routes>

        <FooterComp />
      </BrowserRouter>
    </div>
  );
}

export default App;
