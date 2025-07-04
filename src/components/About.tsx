import AnimatedCharacter from "@/components/Animate/AnimatedCharacter";

const About = () => {
  return (
    <section id="about" className="relative py-16 sm:py-20 px-4 sm:px-6 overflow-hidden bg-gray-50 -mt-12">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            About Us
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* 🟢 LEFT SIDE: Text */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
              Delivering Modern Web Solutions
            </h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            CreativeTech is a modern web design and development studio focused on building fast, responsive,
             and user-centered websites. With expertise in the latest web technologies, we create digital experiences
              that are not only visually compelling but also functional across all devices.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Our approach combines clean code, creative design, and user-focused thinking ensuring every project delivers
             both performance and impact.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-4 mt-4 sm:mt-6">
              {["Problem Solving", "Creative Design", "Clean Code", "User Experience"].map((trait) => (
                <span key={trait} className="px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-900 rounded-full text-xs sm:text-sm font-medium">
                  {trait}
                </span>
              ))}
            </div>
          </div>

          {/*RIGHT SIDE: Animated Character */}
          <div className="relative order-1 lg:order-2 w-full h-[320px] sm:h-[400px] overflow-hidden max-w-6xl rounded-xl">
            <AnimatedCharacter />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
