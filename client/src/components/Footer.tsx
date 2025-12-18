import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display mb-6"
          >
            Let's build something <span className="text-primary">extraordinary</span>.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground mb-10"
          >
            Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-8"
          >
            <Button className="h-14 px-8 text-lg rounded-full bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(0,255,157,0.3)] transition-all duration-300" asChild>
              <a href={`mailto:${PERSONAL_INFO.email}`}>
                <Mail className="mr-2 w-5 h-5" /> Say Hello
              </a>
            </Button>

            <div className="flex gap-6 mt-8">
              <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-all">
                <Github className="w-6 h-6" />
              </a>
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 hover:text-primary transition-all">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>

            <div className="text-sm text-muted-foreground font-mono mt-12">
              <p>Based in {PERSONAL_INFO.location}</p>
              <p className="opacity-50 mt-2">© {new Date().getFullYear()} Lorena Dávila Ermus. All rights reserved.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
