import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
   const [darkMode] = useState(false);

   return (
      <div className={darkMode ? "dark" : ""}>
         <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <Navbar />
            <Hero />
            <Services />
            <Pricing />
            <About />
            <Testimonials />
            <Contact />
            <Footer />
         </div>
      </div>
   );
}

export default App;
