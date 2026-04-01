import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";
import { useState, FormEvent } from "react";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
            Contact
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-teal-light flex items-center justify-center">
                <Mail size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <a
                  href="mailto:Meryem.err12344@gmail.com"
                  className="text-sm font-medium text-primary hover:text-accent transition-colors"
                >
                  Meryem.err12344@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-teal-light flex items-center justify-center">
                <Phone size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Téléphone</p>
                <a
                  href="tel:0693619036"
                  className="text-sm font-medium text-primary hover:text-accent transition-colors"
                >
                  06 93 61 90 36
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-teal-light flex items-center justify-center">
                <Linkedin size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">LinkedIn</p>
                <span className="text-sm font-medium text-primary">
                  Erraddad Meryem
                </span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {sent ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-accent font-medium">
                  Merci ! Votre message a été envoyé. ✓
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Nom"
                  required
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  required
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
                <button
                  type="submit"
                  className="w-full rounded-md bg-accent text-accent-foreground py-3 font-medium hover:opacity-90 transition-opacity"
                >
                  Envoyer
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
