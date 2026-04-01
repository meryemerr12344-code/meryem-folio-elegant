import { motion } from "framer-motion";

const badges = [
  "Esprit d'analyse",
  "Gestion du temps",
  "Sens des responsabilités",
  "Travail en équipe",
];

const About = () => (
  <section id="about" className="section-padding bg-card">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
          À propos
        </h2>
        <div className="w-12 h-1 bg-accent mx-auto mb-8 rounded-full" />
        <p className="text-muted-foreground leading-relaxed mb-8">
          Je maîtrise plusieurs langages de programmation et valorise une gestion
          rigoureuse du temps et du stress. Je possède un esprit d'analyse et
          d'équipe affirmé.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {badges.map((b) => (
            <span
              key={b}
              className="px-4 py-2 rounded-full bg-teal-light text-navy text-sm font-medium"
            >
              {b}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;
