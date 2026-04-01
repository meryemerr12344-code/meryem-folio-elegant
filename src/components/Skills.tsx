import { motion } from "framer-motion";

interface SkillBarProps {
  label: string;
  value: number;
}

const SkillBar = ({ label, value }: SkillBarProps) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-primary">{label}</span>
      <span className="text-xs text-muted-foreground">{value}%</span>
    </div>
    <div className="h-2 rounded-full bg-secondary overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-accent"
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  </div>
);

const technical = [
  { label: "SQL / Databases", value: 90 },
  { label: "IT Support / Service Desk", value: 85 },
  { label: "Microsoft Office (Excel certified)", value: 95 },
  { label: "Stock Management Software", value: 80 },
];

const soft = [
  { label: "Analytical Thinking", value: 90 },
  { label: "Time Management", value: 88 },
  { label: "Responsibility", value: 92 },
  { label: "Teamwork", value: 85 },
];

const languages = [
  { label: "Français (courant)", value: 95 },
  { label: "Arabe (natif)", value: 100 },
  { label: "Anglais (TOEFL certifié)", value: 80 },
];

const Skills = () => (
  <section id="skills" className="section-padding">
    <div className="container mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
          Compétences
        </h2>
        <div className="w-12 h-1 bg-accent mx-auto rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
            Techniques
          </h3>
          {technical.map((s) => (
            <SkillBar key={s.label} {...s} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
            Soft Skills
          </h3>
          {soft.map((s) => (
            <SkillBar key={s.label} {...s} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-4">
            Langues
          </h3>
          {languages.map((s) => (
            <SkillBar key={s.label} {...s} />
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default Skills;
