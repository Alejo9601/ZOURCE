import { Check } from "lucide-react";

// const pricingPlans = [
//    {
//       title: "Mantenimiento Básico",
//       price: "20.000 - 35.000",
//       description: "Limpieza y mantenimiento preventivo",
//       features: [
//          "Limpieza interna completa",
//          "Cambio de pasta térmica",
//          "Revisión de componentes",
//          "Diagnóstico básico",
//       ],
//       popular: false,
//    },
//    {
//       title: "Optimización",
//       price: "15.000 - 30.000",
//       description: "Mejora el rendimiento de tu PC",
//       features: [
//          "Optimización del sistema",
//          "Limpieza de archivos temporales",
//          "Configuración de inicio",
//          "Actualización de drivers",
//       ],
//       popular: false,
//    },
//    {
//       title: "Instalación de SO",
//       price: "35.000 - 60.000",
//       description: "Sistema operativo completo",
//       features: [
//          "Instalación de Windows",
//          "Drivers actualizados",
//          "Programas esenciales",
//          "Configuración personalizada",
//       ],
//       popular: true,
//    },
//    //  {
//    //     title: "Limpieza Interna",
//    //     price: "20.000 - 35.000",
//    //     description: "Limpieza profunda de hardware",
//    //     features: [
//    //        "Desmontaje completo",
//    //        "Limpieza de componentes",
//    //        "Cambio de pasta térmica",
//    //        "Verificación térmica",
//    //     ],
//    //     popular: false,
//    //  },
//    //  {
//    //     title: "Eliminación de Virus",
//    //     price: "20.000 - 40.000",
//    //     description: "Protección y limpieza total",
//    //     features: [
//    //        "Análisis completo",
//    //        "Eliminación de malware",
//    //        "Instalación de antivirus",
//    //        "Configuración de seguridad",
//    //     ],
//    //     popular: false,
//    //  },
//    // {
//    //   title: 'Servicios Varios',
//    //   price: '10.000 - 75.000',
//    //   description: 'Soluciones personalizadas',
//    //   features: [
//    //     'Instalación de hardware',
//    //     'Configuración de redes',
//    //     'Backup de datos',
//    //     'Consultoría técnica'
//    //   ],
//    //   popular: false
//    // }
// ];

const pricingPlans = [
   {
      title: "Mantenimiento físico",
      price: "25.000 - 45.000",
      description:
         "Mantenimiento preventivo para mejorar la vida útil de tu equipo.",
      features: [
         "Limpieza interna completa",
         "Cambio de pasta térmica",
         "Revisión general de componentes",
         "Diagnóstico básico",
      ],
      popular: false,
   },

   {
      title: "Optimización de rendimiento",
      price: "20.000 - 35.000",
      description: "Mejora notable del rendimiento y velocidad del sistema.",
      features: [
         "Optimización del sistema",
         "Limpieza de archivos temporales",
         "Configuración de inicio",
         "Actualización de drivers",
      ],
      popular: true,
   },

   {
      title: "Formateo y Configuración",
      price: "35.000 - 60.000",
      description:
         "Reinstalación y configuración completa del sistema operativo.",
      features: [
         "Instalación de Windows o Linux",
         "Drivers actualizados",
         "Programas esenciales",
         "Configuración personalizada",
      ],
      popular: false,
   },
];

export default function Pricing() {
   const handleWhatsApp = () => {
      window.open(
         "https://wa.me/2902484800?text=Hola, quiero consultar sobre los precios",
         "_blank"
      );
   };

   return (
      <section
         id="precios"
         className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white"
      >
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Precios Accesibles
               </h2>
               <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Tarifas transparentes y competitivas para todos nuestros
                  servicios
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {pricingPlans.map((plan, index) => (
                  <div
                     key={index}
                     className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all  ${
                        plan.popular
                           ? "border-2 border-blue-600 relative"
                           : "border border-gray-200"
                     }`}
                  >
                     {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                           <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                              Más Popular
                           </span>
                        </div>
                     )}

                     <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {plan.title}
                     </h3>
                     <div className="text-3xl font-bold text-blue-600 mb-2">
                        ${plan.price}
                     </div>
                     <p className="text-gray-600 mb-6">{plan.description}</p>

                     <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, idx) => (
                           <li key={idx} className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{feature}</span>
                           </li>
                        ))}
                     </ul>

                     <button
                        onClick={handleWhatsApp}
                        className={`w-full py-3 rounded-lg font-semibold transition-all ${
                           plan.popular
                              ? "bg-blue-600 hover:bg-blue-700 text-white"
                              : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                        }`}
                     >
                        Consultar
                     </button>
                  </div>
               ))}
            </div>

            <div className="mt-12 text-center">
               <p className="text-gray-600 mb-4">
                  Los precios varían según la complejidad del trabajo. Solicita
                  un presupuesto personalizado.
               </p>
               <button
                  onClick={handleWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
               >
                  Solicitar Presupuesto
               </button>
            </div>
         </div>
      </section>
   );
}
