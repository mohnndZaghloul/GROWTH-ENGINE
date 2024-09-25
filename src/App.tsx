import About from "./components/About";
import ApartSection from "./components/ApartSection";
import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Services from "./components/Services";

function App() {
  return (
    <main dir="rtl" className="text-light text-justify bg-secondary-400">
      <Nav />
      <Hero />
      <About />
      <Services />
      <ApartSection />
      <Contacts />
    </main>
  );
}

export default App;
