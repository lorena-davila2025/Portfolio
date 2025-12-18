import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Footer from "@/components/Footer";
import { PERSONAL_INFO } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* About Section (Brief) */}
        <section id="about" className="py-20 container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center md:text-left bg-card/30 p-8 md:p-12 rounded-2xl border border-white/5 backdrop-blur-sm">
            <h2 className="text-2xl font-bold font-display mb-4 text-primary">About Me</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>
        </section>

        <TechStack />
        <Experience />
        
        {/* Projects Placeholder - using Github links from PDF as generic projects since PDF didn't list specific project names other than companies */}
        <section id="projects" className="py-24 container mx-auto px-4 md:px-6">
           {/* Can add if user provides specific project details later */}
        </section>
      </main>

      <Footer />
    </div>
  );
}
