import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import "keen-slider/keen-slider.min.css";

const testimonials = [
  {
    name: "Alex N.",
    title: "Startup Founder",
    quote:
      "CreativeTech delivered beyond our expectations. The site is fast, clean, and truly elevates our brand.",
    image: "https://i.pravatar.cc/100?img=3",
    rating: 5,
  },
  {
    name: "Sophia K.",
    title: "Marketing Consultant",
    quote:
      "Great experience working with the team! Their design sense and communication were spot on.",
    image: "https://i.pravatar.cc/100?img=5",
    rating: 5,
  },
  {
    name: "James M.",
    title: "E-commerce Owner",
    quote:
      "They rebuilt our online store and it looks amazing. Sales have gone up since launch.",
    image: "https://i.pravatar.cc/100?img=7",
    rating: 4,
  },
  {
    name: "Linda R.",
    title: "Agency Creative Director",
    quote:
      "CreativeTech’s attention to detail and design instincts are exceptional. Loved working with them.",
    image: "https://i.pravatar.cc/100?img=12",
    rating: 5,
  },
  {
    name: "Michael B.",
    title: "Freelancer & Tech Blogger",
    quote:
      "Their dev team is sharp, responsive, and professional. The site runs fast and looks premium.",
    image: "https://i.pravatar.cc/100?img=14",
    rating: 5,
  },
  {
    name: "Sarah W.",
    title: "Nonprofit Coordinator",
    quote:
      "They made our nonprofit site accessible and beautiful. Volunteers and donors love it.",
    image: "/avatar3.png",
    rating: 4,
  },
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 32 },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const perView =
  typeof instanceRef.current?.options.slides === "object" &&
  instanceRef.current?.options.slides !== null &&
  "perView" in instanceRef.current.options.slides
    ? typeof instanceRef.current.options.slides.perView === "number"
      ? instanceRef.current.options.slides.perView
      : 1
    : 1;


  return (
    <section
      id="testimonials"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg">
            What clients say about working with CreativeTech.
          </p>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Navigation arrows */}
        <div className="flex justify-between items-center mb-6 px-2">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slider */}
        <div ref={sliderRef} className="keen-slider -mx-2 md:-mx-4">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="keen-slider__slide bg-gray-50 border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-md font-semibold text-gray-900">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-500">{t.title}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
                “{t.quote}”
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < t.rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill={i < t.rating ? "#facc15" : "none"}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-6">
        {Array.from({
          length: Math.ceil(testimonials.length / perView),
        }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === idx
                ? "bg-purple-600"
                : "bg-gray-300 hover:bg-purple-300"
            }`}
          ></button>
        ))}


        </div>
      </div>
    </section>
  );
};

export default Testimonials;
