import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const items = [
  { year: "2023 – 2024", title: "TOEFL", place: "Centre Privilège" },
  {
    year: "2021 – 2022",
    title: "Licence Universitaire Spécialisée — Ingénierie des Bases de Données",
    place: "ENSA Kénitra",
  },
  {
    year: "2019 – 2021",
    title: "Diplôme de Technicien Spécialisé en Développement Informatique",
    place: "ISTA",
  },
  {
    year: "2018 – 2019",
    title: "Certificat Microsoft Office Excel 2016",
    place: "ISTA",
  },
  {
    year: "2017 – 2018",
    title: "Baccalauréat — Sciences Physiques",
    place: "Lycée Moulay Abdellah",
  },
];

const Education = () => (
  <section id="education" className="section-padding">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
          Formation
        </h2>
        <div className="w-12 h-1 bg-accent mx-auto rounded-full" />
      </motion.div>

      <div className="relative border-l-2 border-accent/30 ml-4 md:ml-0 md:mx-auto">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="mb-10 ml-8 relative"
          >
            <span className="absolute -left-[2.55rem] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-accent text-accent-foreground">
              <GraduationCap size={14} />
            </span>
            <span className="text-xs font-semibold text-accent tracking-wider uppercase">
              {item.year}
            </span>
            <h3 className="text-base font-semibold text-primary mt-1">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground">{item.place}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
