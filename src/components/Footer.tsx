import { Cpu, Facebook, Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
   const scrollToSection = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
         element.scrollIntoView({ behavior: "smooth" });
      }
   };

   return (
      <footer className="bg-gray-900 text-white text-center md:text-left">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid md:grid-cols-4 gap-8">
               <div className="space-y-4">
                  <div className="flex justify-center md:justify-start space-x-2">
                     <Cpu className="h-8 w-8 text-blue-500" />
                     <span className="text-xl font-bold">ZOURCE</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                     Soluciones informáticas profesionales en Santa Cruz,
                     Argentina. Tu solución tecnológica de confianza.
                  </p>
               </div>

               <div>
                  <h3 className="text-lg font-semibold mb-4">
                     Enlaces Rápidos
                  </h3>
                  <ul className="space-y-2 text-gray-400">
                     <li>
                        <button
                           onClick={() => scrollToSection("inicio")}
                           className="hover:text-blue-400 transition-colors"
                        >
                           Inicio
                        </button>
                     </li>
                     <li>
                        <button
                           onClick={() => scrollToSection("servicios")}
                           className="hover:text-blue-400 transition-colors"
                        >
                           Servicios
                        </button>
                     </li>
                     <li>
                        <button
                           onClick={() => scrollToSection("precios")}
                           className="hover:text-blue-400 transition-colors"
                        >
                           Precios
                        </button>
                     </li>
                     <li>
                        <button
                           onClick={() => scrollToSection("sobre-mi")}
                           className="hover:text-blue-400 transition-colors"
                        >
                           Sobre nosotros
                        </button>
                     </li>
                     <li>
                        <button
                           onClick={() => scrollToSection("contacto")}
                           className="hover:text-blue-400 transition-colors"
                        >
                           Contacto
                        </button>
                     </li>
                  </ul>
               </div>

               <div>
                  <h3 className="text-lg font-semibold mb-4">
                     Servicios Destacados
                  </h3>
                  <ul className="space-y-2 text-gray-400 text-sm">
                     <li>Mantenimiento de PC</li>
                     <li>Instalación de Windows</li>
                     <li>Optimización de rendimiento</li>
                     <li>Eliminación de virus</li>
                     <li>Instalación de hardware</li>
                  </ul>
               </div>

               <div>
                  <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
                  <div className="flex gap-4 justify-center md:justify-start">
                     <a
                        href="https://wa.me/542902484800"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-green-600 p-3 rounded-full transition-colors"
                     >
                        <MessageCircle className="h-5 w-5" />
                     </a>
                     <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-colors"
                     >
                        <Facebook className="h-5 w-5" />
                     </a>
                     <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-pink-600 p-3 rounded-full transition-colors"
                     >
                        <Instagram className="h-5 w-5" />
                     </a>
                  </div>
                  <div className="mt-6">
                     <p className="text-sm text-gray-400 mb-2">
                        Contacto rápido:
                     </p>
                     <a
                        href="https://wa.me/542902484800"
                        className="text-green-400 hover:text-green-300 text-sm"
                     >
                        +54 2902 484800
                     </a>
                  </div>
               </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
               <p>
                  &copy; {new Date().getFullYear()} ZOURCE Santa Cruz. Todos los
                  derechos reservados.
               </p>
               <p className="mt-2">
                  Servicios Informáticos en Santa Cruz, Argentina
               </p>
            </div>
         </div>
      </footer>
   );
}
