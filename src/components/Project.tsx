import React from "react";
const projects = [
  {
    title: "WasteTrack — Waste Intelligence Platform",
    description:
      "WasteTrack est une plateforme intelligente de gestion des déchets urbains développée lors d’un hackathon ESSEC × ECC. L’application permet aux citoyens de scanner un QR code sur une poubelle, prendre une photo de leurs déchets, et gagner des points convertibles en argent. Le projet utilise l’intelligence artificielle (Google Vision API) pour vérifier les déchets, ainsi qu’un dashboard en temps réel permettant aux municipalités de visualiser la distribution des déchets par quartier via Google Maps. Stack utilisée : React.js, React Native, Firebase, Google Maps API, TailwindCSS.",
    tech: ["React", "React Native", "Firebase", "Google Maps API", "TailwindCSS"],
    link: "#",
  },
   {
    title: "WasteTrack — Waste Intelligence Platform",
    description:
      "WasteTrack est une plateforme intelligente de gestion des déchets urbains développée lors d’un hackathon ESSEC × ECC. L’application permet aux citoyens de scanner un QR code sur une poubelle, prendre une photo de leurs déchets, et gagner des points convertibles en argent. Le projet utilise l’intelligence artificielle (Google Vision API) pour vérifier les déchets, ainsi qu’un dashboard en temps réel permettant aux municipalités de visualiser la distribution des déchets par quartier via Google Maps. Stack utilisée : React.js, React Native, Firebase, Google Maps API, TailwindCSS.",
    tech: ["React", "React Native", "Firebase", "Google Maps API", "TailwindCSS"],
    link: "#",
  },
  {
    title: "WasteTrack — Waste Intelligence Platform",
    description:
      "WasteTrack est une plateforme intelligente de gestion des déchets urbains développée lors d’un hackathon ESSEC × ECC. L’application permet aux citoyens de scanner un QR code sur une poubelle, prendre une photo de leurs déchets, et gagner des points convertibles en argent. Le projet utilise l’intelligence artificielle (Google Vision API) pour vérifier les déchets, ainsi qu’un dashboard en temps réel permettant aux municipalités de visualiser la distribution des déchets par quartier via Google Maps. Stack utilisée : React.js, React Native, Firebase, Google Maps API, TailwindCSS.",
    tech: ["React", "React Native", "Firebase", "Google Maps API", "TailwindCSS"],
    link: "#",
  },
 
];

import { useState } from "react";

function Project() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="project" className="section-padding bg-card">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2 text-center ">
        My Projects
      </h2>
      <div className="w-12 h-1 bg-accent mx-auto rounded-full mb-12" />

      <div className="grid md:grid-cols-3 gap-6 ">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition ">
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

            <p className="text-gray-600 mb-1 line-clamp-3">
              {project.description}
            </p>

            <button
              onClick={() => setSelected(project)}
              className="text-blue-500 text-sm mb-4 hover:underline"
            >
              ... voir plus
            </button>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>

            <a href={project.link} className="text-blue-500 font-medium hover:underline">
              Voir le projet →
            </a>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl p-6 max-w-lg w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold mb-3">{selected.title}</h3>
            <p className="text-gray-600 mb-4">{selected.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selected.tech.map((tech, i) => (
                <span key={i} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a href={selected.link} className="text-blue-500 font-medium hover:underline">
                Voir le projet →
              </a>
              <button onClick={() => setSelected(null)} className="text-gray-400 hover:text-gray-600 text-sm">
                ✕ Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Project;