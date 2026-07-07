import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#050816] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-5xl font-bold text-center gradient-text mb-20"
        >
          Featured Projects
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .2
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8
              }}
              className="glass rounded-3xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400 transition"
            >

              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover hover:scale-110 transition duration-700"
                />

              </div>

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4 text-cyan-400">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-8 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full
                      bg-cyan-500/10
                      border border-cyan-500/20
                      text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="flex gap-5">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 px-5 py-3 rounded-xl transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-cyan-400 px-5 py-3 rounded-xl hover:bg-cyan-500 hover:text-black transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}