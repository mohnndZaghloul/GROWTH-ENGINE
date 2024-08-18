import About from "./components/About";
import ApartSection from "./components/ApartSection";
import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
// import Nav from "./components/Nav";
import Services from "./components/Services";

function App() {
  return (
    <main dir="rtl" className="space-y-24 text-light bg-secondary-400">
      <Hero />
      {/* <Nav /> */}
      <Services />
      <About />
      <ApartSection />
      <Contacts />
    </main>
  );
}

export default App;
