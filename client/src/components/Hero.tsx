import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PERSONAL_INFO } from "@/lib/data";
import heroBg from "@assets/generated_images/dark_abstract_grid_background_with_neon_accents.png";

const profileImg = "https://avatars.githubusercontent.com/u/194307591?v=4";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/90 z-10" />
        <img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/50 to-background z-20" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-30">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="inline-block">
              <span className="px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono mb-4 inline-block">
                Available for work
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display leading-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
                {PERSONAL_INFO.name.split(' ')[0]}
              </span>
              <span className="text-primary">.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-lg">
              {PERSONAL_INFO.headline}
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/20 hover:bg-white/5" asChild>
                <a href="#experience">View Work</a>
              </Button>
            </div>

            <div className="flex gap-4 mt-8">
              <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-muted-foreground hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute -inset-4 rounded-full border border-primary/10 animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Profile Image */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_30px_rgba(0,255,157,0.2)]">
                <img 
                  src={profileImg} 
                  alt={PERSONAL_INFO.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border p-4 rounded-xl shadow-xl animate-[float_6s_ease-in-out_infinite]">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground font-mono">Status</span>
                    <span className="text-sm font-bold">Open to Offers</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block"
        >
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
