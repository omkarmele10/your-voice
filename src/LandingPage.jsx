import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Spacer from "./components/Spacer";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import OurMission from "./pages/OurMission";
import FieldOfExperties from "./pages/FieldOfExperties";
import DevotedProfessionals from "./pages/DevotedProfessionals";
import CompanySlider from "./pages/CompanySlider";
import CareerPage from "./pages/CareerPage";
import States from "./pages/States";
const LandingPage = () => {
  return (
    <div className="">
      <Navbar />
      <Spacer />
      <Home />
      <About />
      <OurMission />
      <FieldOfExperties />
     
      <Testimonials />
       <States/>
      <DevotedProfessionals />
      <Contact />
      <CompanySlider />
      <CareerPage />
      <Footer />
    </div>
  );
};
export default LandingPage;