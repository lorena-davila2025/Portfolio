import { motion } from "framer-motion";
import { EXPERIENCE, EDUCATION } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, GraduationCap } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              <span className="text-primary">/</span> Experience
            </h2>
            <p className="text-muted-foreground max-w-xl">
              My professional journey in software development, working with diverse teams and technologies across the globe.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-[2fr_1fr] gap-12">
          {/* Work History */}
          <div className="space-y-8">
            <h3 className="text-xl font-mono text-primary mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5" /> Work History
            </h3>
            
            <div className="relative border-l border-primary/20 ml-3 space-y-12">
              {EXPERIENCE.map((job, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8"
                >
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
                  
                  <div className="group hover:bg-white/5 p-6 rounded-lg transition-colors border border-transparent hover:border-white/5">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                      <h4 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {job.role}
                      </h4>
                      <span className="text-sm font-mono text-muted-foreground bg-secondary px-2 py-1 rounded">
                        {job.period}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="font-semibold text-foreground/80">{job.company}</span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {job.location}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {job.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {job.stack.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-primary/20 text-primary/80 text-xs hover:bg-primary/10">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certs */}
          <div>
            <div className="sticky top-24">
              <h3 className="text-xl font-mono text-primary mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5" /> Education
              </h3>
              
              <div className="space-y-6">
                {EDUCATION.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    <Card className="bg-card/50 border-white/5 hover:border-primary/30 transition-colors">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base font-bold">{edu.degree}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-primary/90 font-medium mb-1">{edu.institution}</p>
                        <p className="text-xs text-muted-foreground font-mono flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {edu.year}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
