
import { Code, Palette } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            About Me
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-emerald-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Creative Developer & Visual Designer
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              I'm a passionate creative professional who bridges the gap between design and development. 
              With expertise in both coding and visual design, I create cohesive digital experiences 
              that are not only functional but also visually compelling.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              My dual expertise allows me to understand both the technical constraints and creative 
              possibilities, resulting in projects that are beautifully designed, perfectly executed, 
              and optimized for performance across all devices.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 sm:mt-6">
              {["Web Development", "Graphic Design", "UI/UX Design", "Brand Identity", "Creative Problem Solving", "Visual Communication"].map((trait) => (
                <span key={trait} className="px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-emerald-100 to-purple-100 text-gray-800 rounded-full text-xs sm:text-sm font-medium">
                  {trait}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto bg-gradient-to-br from-emerald-100 via-purple-100 to-teal-100 rounded-3xl flex items-center justify-center shadow-xl relative">
              <Code className="w-16 h-16 sm:w-20 sm:h-20 text-emerald-600 absolute top-8 left-8" />
              <Palette className="w-16 h-16 sm:w-20 sm:h-20 text-purple-600 absolute bottom-8 right-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
