import React from "react";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import FixContacts from "./components/FixContacts/FixContacts";

function App() {
  return (
    <>
      <Header />
      <FixContacts />
      <main>
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
