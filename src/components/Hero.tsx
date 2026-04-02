import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import ProfileImg from "../assets/profile.png";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden">
    {/* Subtle background decoration */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 right-10 w-72 h-72 bg-teal-light rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-50" />
    </div>

    <div className="container mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-accent font-medium tracking-widest uppercase text-sm mb-4">
          Portfolio
        </p>
           <div className="flex flex-col items-center justify-center mt-10">
      <img
        src={ProfileImg}
        alt="Meryem Erraddad"
        className="w-48 h-48 rounded-full shadow-lg object-cover"
      />
      
    </div>
        <h1 className="font-display text-5xl md:text-7xl font-bold text-primary mb-4">
          Meryem Erraddad
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-2">
          Développeuse Informatique | IT Support &amp; Database Engineer
        </p>
        <p className="text-muted-foreground italic max-w-xl mx-auto mb-10">
          "Rigoureuse, analytique et passionnée par les technologies de
          l'information."
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-md bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Contact Me
          </a>
          <a
            href= "/cv.pdf" download
            className="inline-flex items-center gap-2 px-8 py-3 rounded-md border border-primary text-primary font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
      </motion.div>

      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <a href="#about" className="inline-block text-muted-foreground animate-bounce">
          <ArrowDown size={24} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default Hero;
