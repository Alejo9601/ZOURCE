import { MessageCircle, Wrench } from "lucide-react";
import heroImage from "../assets/img/nieve.jpg";

export default function Hero() {
   const handleWhatsApp = () => {
      window.open(
         "https://wa.me/2902484800?text=Hola, necesito información sobre sus servicios",
         "_blank"
      );
   };

   const scrollToSection = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
         element.scrollIntoView({ behavior: "smooth" });
      }
   };

   return (
      <section
         id="inicio"
         className="relative pt-24 lg:pt-36 pb-14 lg:pb-24 px-4 sm:px-6 lg:px-8"
      >
         {/* Imagen de fondo con blur */}
         <div
            className="absolute inset-0 bg-cover bg-center blur-[1px] brightness-50"
            style={{ backgroundImage: `url(${heroImage})` }}
         ></div>

         {/* Capa oscura suave para mayor legibilidad */}
         <div className="absolute inset-0 bg-black/5"></div>

         <div className="relative max-w-7xl mx-auto">
            <div className="grid my-0 md:my-2 lg:my-5 md:grid-cols-2 gap-12 items-center">
               {/* --- TU CONTENIDO ORIGINAL --- */}
               <div className="space-y-6 animate-fadeIn">
                  <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold text-white leading-none">
                     Servicios Informáticos
                     <span className="text-3xl md:text-5xl lg:text-6xl block text-blue-200 mt-2 leading-none">
                        para toda la cuenca carbonífera
                     </span>
                  </h1>
                  <p className="text-lg md:text-xl text-gray-200">
                     Soporte técnico a medida y soluciones digitales pensadas
                     para simplificar tu día a día.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                     <button
                        onClick={() => scrollToSection("servicios")}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg"
                     >
                        <Wrench className="h-5 w-5" />
                        Nuestros servicios
                     </button>

                     <button
                        onClick={handleWhatsApp}
                        className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg"
                     >
                        <MessageCircle className="h-5 w-5" />
                        Consultar por WhatsApp
                     </button>
                  </div>
               </div>

               {/* Tarjetas de estadísticas */}
               <div className="relative">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform">
                     <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center justify-center">
                           <div className="text-4xl font-bold text-white">
                              3+
                           </div>
                           <div className="text-white/80 text-sm mt-2">
                              Años experiencia
                           </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center justify-center">
                           <div className="text-4xl font-bold text-white">
                              200+
                           </div>
                           <div className="text-white/80 text-sm mt-2">
                              Trabajos realizados
                           </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center justify-center">
                           <div className="text-4xl font-bold text-white">
                              24h
                           </div>
                           <div className="text-white/80 text-sm mt-2">
                              Respuesta rápida
                           </div>
                        </div>
                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center justify-center">
                           <div className="text-4xl font-bold text-white">
                              100%
                           </div>
                           <div className="text-white/80 text-sm mt-2">
                              Garantizado
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-300 rounded-full opacity-30 blur-xl"></div>
               </div>
            </div>
         </div>
      </section>
   );
}
