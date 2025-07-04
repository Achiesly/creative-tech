import { Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24 sm:pt-32 bg-gray-50 overflow-hidden"
    >
      {/* Blurred gradient background accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 left-1/2 w-[480px] h-[480px] bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-[120px] opacity-30 transform -translate-x-1/2" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10 animate-fade-in">
        {/* Icon Avatar */}
        <div className="mb-6 sm:mb-8">
          <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center shadow-xl">
            <Code className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
          </div>
        </div>

        {/* Hero Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-700 bg-clip-text text-transparent leading-tight">
          Web Development
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
          CreativeTech builds fast, responsive, and visually engaging websites using the latest web technologies tailored for businesses and startups.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button
            onClick={() => scrollToSection("projects")}
            size="lg"
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform w-full sm:w-auto"
          >
            View Projects
          </Button>

          <Button
            onClick={() => scrollToSection("contact")}
            variant="outline"
            size="lg"
            className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300 w-full sm:w-auto"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
