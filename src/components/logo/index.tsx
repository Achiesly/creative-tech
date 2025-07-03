
const CreativeTechLogo = () => {
  return (
    <div className="inline-flex items-center space-x-2 group cursor-pointer">
{/* Logo Icon */}
<div className="relative">
  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-gradient-to-br from-emerald-600 to-green-700 rounded-xl transition-shadow duration-300">
    <div className="absolute inset-[5px] bg-white rounded-lg flex items-center justify-center">
      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-gradient-to-br from-emerald-500 to-green-600 rounded transform rotate-45 transition-transform duration-500"></div>
    </div>
  </div>
</div>
      
{/* Logo Text */}
<div className="flex flex-col">
  <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 leading-tight font-sora">
    <span className="text-gray-800 transition-colors duration-200">Creative</span>
    <span className="text-gray-800 transition-colors duration-200">Tech</span>
  </h1>
</div>


    </div>
  );
};

export default CreativeTechLogo;