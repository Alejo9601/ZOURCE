import { useState } from "react";
import { Menu, X, Cpu } from "lucide-react";

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);

   const scrollToSection = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
         element.scrollIntoView({ behavior: "smooth" });
         setIsOpen(false);
      }
   };

   const handleWhatsApp = () => {
      window.open(
         "https://wa.me/542902484800?text=Hola, quisiera preguntar sobre sus servicios.",
         "_blank"
      );
   };

   return (
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50">
         <div className="max-w-7xl mx-auto px-4 md:px-4 lg:px-0">
            <div className="flex justify-between items-center h-16">
               <div
                  className="flex items-center space-x-2 cursor-pointer"
                  onClick={() => scrollToSection("inicio")}
               >
                  <Cpu className="h-9 w-9 text-black" />
                  <span className="text-3xl font-bold text-gray-800">
                     ZOURCE
                  </span>
               </div>

               <div className="hidden md:flex items-center space-x-8">
                  <button
                     onClick={() => scrollToSection("inicio")}
                     className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                     Inicio
                  </button>
                  <button
                     onClick={() => scrollToSection("servicios")}
                     className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                     Servicios
                  </button>
                  <button
                     onClick={() => scrollToSection("precios")}
                     className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                     Precios
                  </button>
                  <button
                     onClick={() => scrollToSection("sobre-mi")}
                     className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                     Sobre nosotros
                  </button>
                  <button
                     onClick={() => scrollToSection("contacto")}
                     className="text-gray-700 hover:text-blue-600 transition-colors"
                  >
                     Contacto
                  </button>
                  <button
                     onClick={handleWhatsApp}
                     className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition-all transform hover:scale-105"
                  >
                     WhatsApp
                  </button>
               </div>

               <div className="md:hidden">
                  <button
                     onClick={() => setIsOpen(!isOpen)}
                     className="text-gray-700"
                  >
                     {isOpen ? (
                        <X className="h-6 w-6" />
                     ) : (
                        <Menu className="h-6 w-6" />
                     )}
                  </button>
               </div>
            </div>
         </div>

         {isOpen && (
            <div className="md:hidden bg-white border-t">
               <div className="px-4 pt-2 pb-4 space-y-2">
                  <button
                     onClick={() => scrollToSection("inicio")}
                     className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
                  >
                     Inicio
                  </button>
                  <button
                     onClick={() => scrollToSection("servicios")}
                     className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
                  >
                     Servicios
                  </button>
                  <button
                     onClick={() => scrollToSection("precios")}
                     className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
                  >
                     Precios
                  </button>
                  <button
                     onClick={() => scrollToSection("sobre-mi")}
                     className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
                  >
                     Sobre mí
                  </button>
                  <button
                     onClick={() => scrollToSection("contacto")}
                     className="block w-full text-left py-2 text-gray-700 hover:text-blue-600"
                  >
                     Contacto
                  </button>
                  <button
                     onClick={handleWhatsApp}
                     className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full mt-2"
                  >
                     WhatsApp
                  </button>
               </div>
            </div>
         )}
      </nav>
   );
}
