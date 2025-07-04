import {
  Code,
  MonitorSmartphone,
  PenTool,
  ShoppingCart,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Design & UI/UX",
    icon: <PenTool className="w-6 h-6 text-purple-600" />,
    description:
      "Modern, user-focused designs that align with your brand and offer intuitive digital experiences across all platforms.",
  },
  {
    title: "Web Development",
    icon: <Code className="w-6 h-6 text-purple-600" />,
    description:
      "Robust, scalable websites built with modern technologies like React, Next.js, and Tailwind CSS.",
  },
  {
    title: "Responsive Web Solutions",
    icon: <MonitorSmartphone className="w-6 h-6 text-purple-600" />,
    description:
      "Seamless experiences across devices with mobile-first design principles and fully responsive layouts.",
  },
  {
    title: "E-Commerce Solutions",
    icon: <ShoppingCart className="w-6 h-6 text-purple-600" />,
    description:
      "Custom e-commerce development and Shopify integration to help businesses grow online and convert visitors into customers.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 bg-white/90">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Services We Offer
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg">
            End-to-end web design, development, and strategy crafted to drive real results for businesses and brands.
          </p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid gap-8 sm:gap-10 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white border border-gray-200 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-100 p-2 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
