import {
  Header,
  Home,
  About,
  Contact,
  FixContacts,
  Portfolio,
  Footer,
} from "./components";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <FixContacts />
      </main>
      <Footer />
    </>
  );
}

export default App;
