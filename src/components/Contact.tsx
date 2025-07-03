
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Twitter, User } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'd love to hear about your project and discuss how we can create something amazing together.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
              <p className="text-gray-300 leading-relaxed">
                Whether you have a project in mind, need technical consultation, or just want to say hello, 
                I'm always excited to connect with fellow creators and innovators.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Professional</h4>
                  <p className="text-gray-300">Available for freelance projects</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input 
                  placeholder="Your Name" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
                <Input 
                  placeholder="Your Email" 
                  type="email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
                />
              </div>
              <Input 
                placeholder="Subject" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
              />
              <Textarea 
                placeholder="Your Message" 
                rows={4}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
              />
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300">
                Send Message
              </Button>
            </form>
          </div>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-gray-400">
            © 2024 Portfolio. Designed & Built with ❤️ using React & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
