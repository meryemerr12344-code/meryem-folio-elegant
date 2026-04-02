import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const jobs = [
  
  {
    company: "EBELE DENTALE",
    role: "Gestion de stock",
    period: "Jan 2025 – Oct 2025",
    current: false,
  },
  {
    company: "ECONOCOM",
    role: "Service Desk / IT Support",
    period: "Avr 2024 – Sep 2024",
    current: false,
  },
  {
    company: "Dunkin' Donuts",
    role: "Superviseure",
    period: "Mar 2023 – Sep 2023",
    current: false,
  },
];

const Experience = () => (
  <section id="experience" className="section-padding ">
    <div className="container mx-auto max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
          Expérience Professionnelle
        </h2>
         <div className="w-12 h-1 bg-accent mx-auto rounded-full" />
      </motion.div>

      <div className="grid gap-6">
        {jobs.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`relative rounded-lg border p-6 transition-shadow hover:shadow-md ${
              job.current
                ? "border-accent bg-teal-light/30 shadow-sm"
                : "border-border bg-card"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-start gap-3">
                <Briefcase size={20} className="text-accent mt-1 shrink-0" />
                <div>
                  <h3 className="text-base font-semibold text-primary">
                    {job.company}
                  </h3>
                  <p className="text-sm text-muted-foreground">{job.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {job.period}
                </span>
                {job.current && (
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-accent text-accent-foreground whitespace-nowrap">
                    Actuellement en poste
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
