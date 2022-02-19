import React, { useEffect } from "react";
// import About from "./Components/About";
import Card from "./Components/Card";
import About from "./Components/About";
import { Fragment } from "react";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
import Contactus from "./Components/Contactus";
import Aos from "aos";
import 'aos/dist/aos.css'



function App() {



  useEffect(() => {
    Aos.init({
      once: true
    })
  })

  return (
    <div>
        <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
          <div data-aos="fade-down" data-aos-duration="3000">
            <Card />
          </div>
          <div data-aos="fade-up" data-aos-duration='2000'>
            <About />
          </div>
        </div>
        <div className="min-h-screen py-10 px-3 sm:px-5 bg-gray-100">
            <Skills />
            <Contactus />
            <Footer />
        </div>
    </div>

  );
}

export default App;
