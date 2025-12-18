import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";

export default function TechStack() {
  return (
    <section id="skills" className="py-24 border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            <span className="text-primary">/</span> Technical Assets
          </h2>
          <p className="text-muted-foreground">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className="px-6 py-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_0_15px_rgba(0,255,157,0.1)] transition-all duration-300 cursor-default">
                <span className="font-mono text-sm md:text-base font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  {skill}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
