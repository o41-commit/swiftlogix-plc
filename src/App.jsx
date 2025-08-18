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
      <Hero />
      <Service />
      <Highlight />
      <Prove />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
