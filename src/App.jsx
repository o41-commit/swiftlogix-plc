import React from "react";
import Menu from "./component/Menu";
import Hero from "./component/Hero";
import Service from "./component/Service";
import Highlight from "./component/Highlight";
import Prove from "./component/Prove";
import CTA from "./component/CTA";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div>
      <Menu />
      
      {/* Added pt-20 (padding-top) to prevent the fixed navbar from covering the hero text */}
      <section id="home" className="pt-16 md:pt-20">
        <Hero />
      </section>

      <section id="services">
        <Service />
      </section>

      <section id="features">
        <Highlight />
      </section>

      <section id="why-us">
        <Prove />
      </section>

      <section id="cta">
        <CTA />
      </section>

      <Footer />
    </div>
  );
};

export default App;