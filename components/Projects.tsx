import React from "react";

import Style from "../styles/Projects.module.scss";

import { motion } from "framer-motion";

const projects = [
  {
    title: "UNIFI COMMANDER",
    href: "https://github.com/niklasjohto/unifi_commander",
    desc: "A tool utilizing the UniFi controller’s local REST API",
    langs: ["TYPESCRIPT"],
  },
];

const Projects = () => {
  return (
    <section data-section="Projects" className={Style.main__projects}>
      <h2 className={Style.projects__title}>PROJECTS</h2>
      <div className={Style.projects__list}>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <motion.div
              className={Style.list__project}
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: [0.62, 0.05, 0.01, 0.99],
              }}
              viewport={{ once: true, amount: "all" }}
            >
              <a
                href={project.href}
                className={Style.project__title}
                target="_blank"
                rel="noreferrer"
              >
                <strong>{project.title}</strong>
              </a>
              <p className={Style.project__desc}>{project.desc}</p>
              <div className={Style.project__langs}>
                {project.langs.map((lang, index) => (
                  <div key={index} className={Style.langs__lang}>
                    {lang}
                  </div>
                ))}
              </div>
            </motion.div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
