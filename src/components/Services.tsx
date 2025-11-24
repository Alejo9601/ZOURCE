import {
   Stethoscope,
   Wind,
   Zap,
   Shield,
   HardDrive,
   Cpu,
   Wifi,
   Printer,
   Database,
   CheckCircle,
   Settings,
   Sparkles,
   Monitor,
   Lightbulb,
   Globe,
} from "lucide-react";

// const services = [
//    {
//       icon: Stethoscope,
//       title: "Diagnóstico y Mantenimiento Preventivo",
//       description:
//          "Revisión completa de tu equipo para detectar y solucionar problemas.",
//    },
//    {
//       icon: Wind,
//       title: "Limpieza Interna",
//       description:
//          "Limpieza profunda y cambio de pasta térmica para mejor rendimiento.",
//    },
//    {
//       icon: Zap,
//       title: "Optimización de Rendimiento",
//       description: "Mejora la velocidad y eficiencia de tu computadora.",
//    },
//    {
//       icon: Shield,
//       title: "Eliminación de Virus",
//       description: "Protección y limpieza de malware, virus y amenazas.",
//    },
//    {
//       icon: HardDrive,
//       title: "Instalación de Sistema Operativo",
//       description: "Windows o Linux, drivers y programas.",
//    },
//    {
//       icon: Cpu,
//       title: "Instalación de Hardware",
//       description: "Instalación de SSD, RAM, tarjetas gráficas y más.",
//    },
//    // {
//    //   icon: Wifi,
//    //   title: 'Configuración de WiFi',
//    //   description: 'Configuración de routers, redes y conexiones.'
//    // },
//    {
//       icon: Printer,
//       title: "Instalación de Impresoras",
//       description: "Configuración e instalación de impresoras y escáneres.",
//    },
//    {
//       icon: Database,
//       title: "Backup y Migración",
//       description: "Respaldo y transferencia segura de tus datos importantes.",
//    },
//    {
//       icon: CheckCircle,
//       title: "PC Lista para Usar",
//       description: "Tu PC completamente configurada y optimizada.",
//    },
//    // {
//    //   icon: Settings,
//    //   title: 'Formateo Completo',
//    //   description: 'Formateo profesional con instalación de todo lo necesario.'
//    // },
//    // {
//    //   icon: Sparkles,
//    //   title: 'Puesta a Punto Premium',
//    //   description: 'Servicio integral para dejar tu PC como nueva.'
//    // }
// ];

const services = [
   {
      icon: Stethoscope,
      title: "Mantenimiento y Optimización",
      description:
         "Mantenimiento preventivo, limpieza interna y optimización completa para mejorar el rendimiento de tu PC.",
   },
   {
      icon: Shield,
      title: "Seguridad y Eliminación de Amenazas",
      description:
         "Limpieza de virus, malware y protección para mantener tu equipo seguro.",
   },
   {
      icon: HardDrive,
      title: "Instalación de Sistema Operativo",
      description:
         "Instalación de Windows o Linux, configuración de drivers y programas esenciales.",
   },
   {
      icon: Cpu,
      title: "Actualización, Instalación y Asesoría en Hardware",
      description:
         "Instalación de SSD, RAM, placas de video y periféricos, junto con asesoría para armado de PC y elección de componentes.",
   },
   {
      icon: Database,
      title: "Backup y Migración de Datos",
      description:
         "Respaldo seguro, migración y recuperación de información importante.",
   },
   {
      icon: Globe,
      title: "Desarrollo de sitios Web",
      description:
         "Diseño de sitios web para marcar presencia online de tu negocio.",
   },
];

export default function Services() {
   return (
      <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Nuestros Servicios
               </h2>
               <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Soluciones completas para todas tus necesidades informáticas
               </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                     <div
                        key={index}
                        className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 hover:shadow-xl transition-all  border border-gray-100"
                     >
                        <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                           <Icon className="h-7 w-7 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                           {service.title}
                        </h3>
                        <p className="text-gray-600">{service.description}</p>
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
}
