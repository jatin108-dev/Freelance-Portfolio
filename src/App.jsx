import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Specialties from "./components/Specialties";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <Specialties />
      <Portfolio />
      <Process />
      <Reviews />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}