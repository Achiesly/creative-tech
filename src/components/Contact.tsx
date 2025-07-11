
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SiFreelancermap } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-slate-900 via-gray-900 to-emerald-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full"></div>
          <p className="text-lg sm:text-xl text-gray-300 mt-4 sm:mt-6 max-w-2xl mx-auto px-4">
            Ready to get started? Tell us about your project, and let’s explore how we can work together to create something truly impactful.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Get In Touch</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              CreativeTech collaborates with businesses, startups, and organizations to deliver tailored digital solutions
              from sleek websites and engaging user interfaces to custom web apps and branding assets. Whether you're
                starting from scratch or refreshing an existing brand, we’re here to turn your vision into reality.
              </p>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <SiFreelancermap className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base"> Remote collaboration</h4>
                  <p className="text-gray-300 text-sm">Accepting freelance and long-term projects</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-3 sm:space-x-4 justify-start lg:justify-start">
                <a
                href="mailto:creativetechdesign12@gmail.com"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Email"
                >
                <HiOutlineMail className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>

                <a
                href="https://wa.me/19297737403"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 bg-green-600 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="WhatsApp"
                >
                <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>

              <a
              href="https://x.com/CreativeTech22"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300"
              aria-label="Twitter"
              >
              
              <RiTwitterXFill className="w-4 h-4 sm:w- sm:h-5" />
              </a>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8">
        <form
          action="https://formspree.io/f/mnnvrbbk"
          method="POST"
          className="space-y-4 sm:space-y-6"
        >

            {/* Redirect input */}
          <input type="hidden" name="_redirect" value="https://creative-tech-xi.vercel.app/thank-you" />

          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            <Input 
              placeholder="Your Name" 
              name="name"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 text-sm sm:text-base"
            />
            <Input 
              placeholder="Your Email" 
              name="email"
              type="email"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 text-sm sm:text-base"
            />
          </div>
          <Input 
            placeholder="Subject" 
            name="subject"
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 text-sm sm:text-base"
          />
          <Textarea 
            placeholder="Your Message" 
            name="message"
            rows={4}
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-gray-300 text-sm sm:text-base resize-none"
          />
          <Button type="submit" className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300">
            Send Message
          </Button>
        </form>

          </div>
        </div>
        
        <div className="text-center mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/20">
          <p className="text-gray-300 text-sm sm:text-base">
             © {new Date().getFullYear()} CreativeTech. All rights reserved </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
