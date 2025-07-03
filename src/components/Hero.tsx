
import { Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 -mt-1">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-6 sm:mb-8">
          <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center shadow-xl">
            <Code className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
          </div>
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-800 bg-clip-text text-transparent leading-tight">
          Web Developer
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
          Crafting beautiful, responsive websites and web applications with modern technologies. 
          Passionate about creating exceptional digital experiences.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <Button 
            onClick={() => scrollToSection("projects")}
            size="lg" 
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 sm:px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            View My Work
          </Button>
          <Button 
            onClick={() => scrollToSection("contact")}
            variant="outline" 
            size="lg"
            className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-6 sm:px-8 py-3 rounded-full transition-all duration-300 w-full sm:w-auto"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
