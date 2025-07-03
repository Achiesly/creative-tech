import { Code, Link } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [

    {
      title: "Mordern web app",
      description: "A developer-friendly identity verification and compliance platform offering phone-based ID checks, document and selfie verification.",
      tech: ["React", "Tailwind CSS", "Python", "Stripe", "Javascript"],
      image: "/images/web-app.webp",
      live: "https://cognitohq.com"
    },
    {
      title: "Xmoney App",
      description: "A unified payments platform offering global card and crypto support, subscription billing, invoicing, and embedded payment links.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "API"],
      image: "/images/task-app.jpg",
      live: "https://www.xmoney.com"
    },
   {
      title: "E-Commerce Platform",
      description: "A visually rich coffee ecommerce experience combining storytelling, modern design, and smooth navigation to showcase premium products and a refined brand identity.",
      tech: ["WordPress", "Shopify", " Woocommerce", "Stripe"],
      image: "/images/platform.jpg",
      live: "https://ceremonycoffee.com"
    },
    {
      title: "ForcusNest App",
      description: "A modern web timer built on the Pomodoro technique—offering customizable work and break sessions, real-time tracking, and visual focus cues to boost productivity and surpass distractions.",
      tech: ["Typescript", "Tailwind CSS", "Next.js"],
      image: "/images/modern-app.jpg",
      live: "https://www.forcusnest.online"
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Featured Projects
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-100 to-purple-100 text-blue-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-2">



                  {project.live && (
                    <a href={project.live} className="w-full sm:w-auto">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white w-full sm:w-auto"
                      >
                        <Link className="w-4 h-4 mr-2" />
                        Visit Site
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
