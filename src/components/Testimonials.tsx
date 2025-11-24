import { Star, Quote } from "lucide-react";

const testimonials = [
   {
      name: "Daniel Chavez",
      role: "Vecino de 28",
      content:
         "Mi compu andaba lenta y pensé que ya no servía. La revisó, la optimizó y ahora anda mucho mejor. Buena atención.",
      rating: 5,
      avatar: "MG",
   },
   {
      name: "Silvina Tello",
      role: "Vecina de 28",
      content:
         "Tenía una computadora a la que le hacía falta cambio de batería. Me asesoró sobre el repuesto, lo compré, lo colocó y ahora funciona perfecto.",
      rating: 5,
      avatar: "CR",
   },
   {
      name: "Laura Fernández",
      role: "Usuaria particular",
      content:
         "Me instaló un SSD y la compu quedó rapidísima. Te explica todo, así que muy buena atención.",
      rating: 5,
      avatar: "LF",
   },
];

export default function Testimonials() {
   return (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Lo que dicen nuestros clientes
               </h2>
               <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  La satisfacción de nuestros clientes es nuestra mejor carta de
                  presentación
               </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               {testimonials.map((testimonial, index) => (
                  <div
                     key={index}
                     className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 relative"
                  >
                     <Quote className="absolute top-6 right-6 h-8 w-8 text-blue-100" />

                     {/* <div className="flex items-center gap-4 mb-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div> */}

                     <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                           <Star
                              key={i}
                              className="h-5 w-5 fill-yellow-400 text-yellow-400"
                           />
                        ))}
                     </div>

                     <p className="text-gray-700 leading-relaxed italic">
                        "{testimonial.content}"
                     </p>
                  </div>
               ))}
            </div>

            <div className="mt-12 text-center bg-blue-50 rounded-2xl p-8">
               <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  +200 Clientes Satisfechos
               </h3>
               <p className="text-gray-600 mb-6">
                  Únete a nuestra creciente comunidad de clientes
               </p>
               <div className="flex justify-center gap-2">
                  {[...Array(5)].map((_, i) => (
                     <Star
                        key={i}
                        className="h-8 w-8 fill-yellow-400 text-yellow-400"
                     />
                  ))}
               </div>
               <p className="text-sm text-gray-600 mt-2">
                  Calificación promedio 5/5
               </p>
            </div>
         </div>
      </section>
   );
}
