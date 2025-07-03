
import { Code, Layout, Palette, Brush } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-emerald-600 to-teal-600",
      bgColor: "from-emerald-50 to-teal-50",
      skills: [
        { name: "React & TypeScript", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Responsive Design", level: 95 },
      ]
    },
    {
      title: "Frontend & UX",
      icon: <Layout className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-blue-600 to-indigo-600",
      bgColor: "from-blue-50 to-indigo-50",
      skills: [
        { name: "UI/UX Design", level: 85 },
        { name: "User Experience", level: 80 },
        { name: "Wireframing", level: 85 },
        { name: "Prototyping", level: 80 },
      ]
    },
    {
      title: "Graphic Design",
      icon: <Palette className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-purple-600 to-pink-600",
      bgColor: "from-purple-50 to-pink-50",
      skills: [
        { name: "Adobe Photoshop", level: 90 },
        { name: "Adobe Illustrator", level: 85 },
        { name: "Adobe InDesign", level: 80 },
        { name: "Logo Design", level: 90 },
      ]
    },
    {
      title: "Creative Design",
      icon: <Brush className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: "from-orange-600 to-red-600",
      bgColor: "from-orange-50 to-red-50",
      skills: [
        { name: "Brand Identity", level: 85 },
        { name: "Print Design", level: 80 },
        { name: "Digital Illustration", level: 75 },
        { name: "Color Theory", level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Skills & Expertise
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className={`bg-gradient-to-br ${category.bgColor} p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300`}>
              <div className="flex items-center mb-4 sm:mb-6">
                <div className={`text-transparent bg-gradient-to-r ${category.color} bg-clip-text mr-3 sm:mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium text-sm sm:text-base">{skill.name}</span>
                      <span className="text-gray-500 text-sm sm:text-base">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
