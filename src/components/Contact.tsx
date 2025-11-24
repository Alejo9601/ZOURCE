import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
   });

   const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setStatus("success");
      setTimeout(() => {
         setStatus("idle");
         setFormData({ name: "", email: "", message: "" });
      }, 3000);
   };

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   return (
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Contacto
               </h2>
               <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Estamos aquí para ayudarte. Contáctanos por cualquier medio
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
               <div className="space-y-8">
                  <div>
                     <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Información de Contacto
                     </h3>

                     <div className="space-y-6">
                        <div className="flex items-start gap-4">
                           <div className="bg-blue-100 rounded-lg p-3">
                              <Phone className="h-6 w-6 text-blue-600" />
                           </div>
                           <div>
                              <h4 className="font-semibold text-gray-900 mb-1">
                                 WhatsApp
                              </h4>
                              <a
                                 href="https://wa.me/2902484800"
                                 className="text-blue-600 hover:text-blue-700"
                                 target="_blank"
                                 rel="noopener noreferrer"
                              >
                                 +54 2902 484800
                              </a>
                           </div>
                        </div>

                        <div className="flex items-start gap-4">
                           <div className="bg-blue-100 rounded-lg p-3">
                              <Mail className="h-6 w-6 text-blue-600" />
                           </div>
                           <div>
                              <h4 className="font-semibold text-gray-900 mb-1">
                                 Email
                              </h4>
                              <a
                                 href="mailto:alejandro96laboral@gmail.com"
                                 className="text-blue-600 hover:text-blue-700"
                              >
                                 alejandro96laboral@gmail.com
                              </a>
                           </div>
                        </div>

                        <div className="flex items-start gap-4">
                           <div className="bg-blue-100 rounded-lg p-3">
                              <MapPin className="h-6 w-6 text-blue-600" />
                           </div>
                           <div>
                              <h4 className="font-semibold text-gray-900 mb-1">
                                 Ubicación
                              </h4>
                              <p className="text-gray-600">
                                 28 de Noviembre - Santa Cruz, Argentina
                              </p>
                              {/* <p className="text-sm text-gray-500 mt-1">
                                 Servicio a domicilio disponible
                              </p> */}
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-8 text-white">
                     <h4 className="text-xl font-bold mb-4">
                        Horarios de Atención
                     </h4>
                     <div className="space-y-2 text-white/90">
                        <p>Lunes a Viernes: 9:00 - 20:00</p>
                        <p>Sábados: 10:00 - 18:00</p>
                        <p>Domingos: Consultar</p>
                     </div>
                     <div className="mt-6 pt-6 border-t border-white/20">
                        <p className="text-sm">
                           Respuesta rápida por WhatsApp en cualquier horario
                        </p>
                     </div>
                  </div>
               </div>

               <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                     Envíanos un Mensaje
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                     <div>
                        <label
                           htmlFor="name"
                           className="block text-sm font-medium text-gray-700 mb-2"
                        >
                           Nombre
                        </label>
                        <input
                           type="text"
                           id="name"
                           name="name"
                           value={formData.name}
                           onChange={handleChange}
                           required
                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                           placeholder="Tu nombre"
                        />
                     </div>

                     <div>
                        <label
                           htmlFor="email"
                           className="block text-sm font-medium text-gray-700 mb-2"
                        >
                           Email
                        </label>
                        <input
                           type="email"
                           id="email"
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                           required
                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                           placeholder="tu@email.com"
                        />
                     </div>

                     <div>
                        <label
                           htmlFor="message"
                           className="block text-sm font-medium text-gray-700 mb-2"
                        >
                           Mensaje
                        </label>
                        <textarea
                           id="message"
                           name="message"
                           value={formData.message}
                           onChange={handleChange}
                           required
                           rows={5}
                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                           placeholder="Describe tu consulta o problema..."
                        />
                     </div>

                     <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg"
                     >
                        <Send className="h-5 w-5" />
                        Enviar Mensaje
                     </button>

                     {status === "success" && (
                        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                           Mensaje enviado correctamente. Te contactaremos
                           pronto.
                        </div>
                     )}
                  </form>
               </div>
            </div>

            <div className="mt-12 bg-gray-100 rounded-xl overflow-hidden h-96">
               <iframe
                  src="https://maps.google.com/maps?q=Circ.%2025%20de%20Mayo%20458%2028%20de%20Noviembre%20Santa%20Cruz&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Santa Cruz"
               />
            </div>
         </div>
      </section>
   );
}
