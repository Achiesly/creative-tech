
import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Passionate Web Developer & Designer
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              I'm a dedicated web developer with expertise in modern web technologies. 
              I love creating clean, efficient, and user-friendly websites that deliver 
              exceptional experiences across all devices.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              My approach combines technical excellence with creative design thinking, 
              ensuring every project not only functions flawlessly but also captivates users 
              with its visual appeal and intuitive interface.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              {["Problem Solving", "Creative Design", "Clean Code", "User Experience"].map((trait) => (
                <span key={trait} className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  {trait}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl flex items-center justify-center shadow-xl">
              <User className="w-32 h-32 text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
