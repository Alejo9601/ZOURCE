import { Award, Clock, Shield, Users } from "lucide-react";
import profileImage from "../assets/img/zourceLogo.jpg";

export default function About() {
   return (
      <section id="sobre-mi" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
         <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
               <div className="relative">
                  <div className="bg-gradient-to-br from-blue-700 to-blue-500 rounded-2xl shadow-2xl">
                     <div className=" backdrop-blur-sm rounded-xl flex p-5 items-center justify-center">
                        {/* <Users className="h-48 w-48 text-white opacity-80" /> */}
                        <img
                           src={profileImage}
                           className="rounded-xl shadow-2xl"
                        />
                     </div>
                  </div>
                  <div className="absolute -bottom-6 -right-0 lg:-right-6 bg-blue-100 rounded-xl p-6 shadow-lg">
                     <div className="flex items-center gap-3">
                        <Award className="h-8 w-8 text-blue-600" />
                        <div>
                           <div className="text-2xl font-bold text-gray-900">
                              3+
                           </div>
                           <div className="text-sm text-gray-600">
                              Años de experiencia
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="space-y-6">
                  <h2 className="text-4xl font-bold text-gray-900">
                     Sobre nosotros
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                     En ZOURCE aseguramos el funcionamiento óptimo de
                     computadoras y dispositivos con diagnósticos precisos y
                     mantenimiento preventivo. Llevamos mas de tres años
                     trabajando en 28 de Noviembre y ahora damos un nombre a
                     nuestro servicio para hacerlo más visible a la comunidad.
                     Como profesionales en la informática, ofrecemos soluciones
                     confiables y un trato cercano para que puedas trabajar sin
                     interrupciones.
                     {/* <span className="font-semibold text-blue-600">
                        {" "}
                        atención personalizada
                     </span>
                     ,
                     <span className="font-semibold text-blue-600">
                        {" "}
                        precios accesibles
                     </span>{" "}
                     y
                     <span className="font-semibold text-blue-600">
                        {" "}
                        compromiso total
                     </span>{" "}
                     con cada cliente. */}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                     <div className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-lg">
                        <Clock className="h-10 w-10 text-blue-600 mb-2" />
                        <h3 className="font-semibold text-gray-900">Rapidez</h3>
                        <p className="text-sm text-gray-600">
                           Respuesta en 24h
                        </p>
                     </div>

                     <div className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-lg">
                        <Shield className="h-10 w-10 text-blue-600 mb-2" />
                        <h3 className="font-semibold text-gray-900">
                           Confianza
                        </h3>
                        <p className="text-sm text-gray-600">
                           Trabajo garantizado
                        </p>
                     </div>

                     <div className="flex flex-col items-center text-center p-4 bg-blue-50 rounded-lg">
                        <Users className="h-10 w-10 text-blue-600 mb-2" />
                        <h3 className="font-semibold text-gray-900">
                           Experiencia
                        </h3>
                        <p className="text-sm text-gray-600">
                           200+ trabajos realizados
                        </p>
                     </div>
                  </div>

                  <div className="pt-6">
                     <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        ¿Por qué elegirnos?
                     </h3>
                     <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                           <div className="bg-blue-600 rounded-full p-1 mt-0.5">
                              <svg
                                 className="h-3 w-3 text-white"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M5 13l4 4L19 7"
                                 />
                              </svg>
                           </div>
                           <span className="text-gray-700">
                              Atención personalizada y profesional
                           </span>
                        </li>
                        <li className="flex items-start gap-2">
                           <div className="bg-blue-600 rounded-full p-1 mt-0.5">
                              <svg
                                 className="h-3 w-3 text-white"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M5 13l4 4L19 7"
                                 />
                              </svg>
                           </div>
                           <span className="text-gray-700">
                              Precios transparentes y competitivos
                           </span>
                        </li>
                        {/* <li className="flex items-start gap-2">
                           <div className="bg-blue-600 rounded-full p-1 mt-0.5">
                              <svg
                                 className="h-3 w-3 text-white"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M5 13l4 4L19 7"
                                 />
                              </svg>
                           </div>
                           <span className="text-gray-700">
                              Servicio a domicilio en Santa Cruz
                           </span>
                        </li> */}
                        <li className="flex items-start gap-2">
                           <div className="bg-blue-600 rounded-full p-1 mt-0.5">
                              <svg
                                 className="h-3 w-3 text-white"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor"
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M5 13l4 4L19 7"
                                 />
                              </svg>
                           </div>
                           <span className="text-gray-700">
                              Garantía en todos nuestros trabajos
                           </span>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
