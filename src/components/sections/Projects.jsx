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

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
                scale: 1.01,
              }}
              className="glass rounded-3xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,.25)] transition-all duration-300"
            >

              {/* Image */}
              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 object-cover hover:scale-110 transition duration-700"
                />

              </div>

              {/* Content */}

              <div className="p-8">

                {/* Featured Badge */}

                <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-5">
                  ⭐ {project.featured}
                </span>

                {/* Title */}

                <h3 className="text-3xl font-bold text-cyan-400 mb-4">
                  {project.title}
                </h3>

                {/* Description */}

                <p className="text-gray-400 leading-8">
                  {project.description}
                </p>

                {/* Divider */}

                <div className="w-full h-px bg-cyan-500/20 my-8"></div>

                {/* Key Features */}

                <h4 className="text-xl font-semibold mb-5">
                  Key Features
                </h4>

                <div className="grid grid-cols-2 gap-4">

                  {project.features.map((feature) => (

                    <div
                      key={feature}
                      className="flex items-center gap-2 text-gray-300"
                    >
                      <span className="text-cyan-400 text-lg">
                        ✔
                      </span>

                      <span>{feature}</span>

                    </div>

                  ))}

                </div>

                {/* Divider */}

                <div className="w-full h-px bg-cyan-500/20 my-8"></div>

                {/* Tech Stack */}

                <h4 className="text-xl font-semibold mb-5">
                  Tech Stack
                </h4>

                <div className="flex flex-wrap gap-3">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm hover:bg-cyan-500 hover:text-black transition-all duration-300"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                {/* Buttons */}

                <div className="flex gap-4 mt-10">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 border border-cyan-400 hover:bg-cyan-500 hover:text-black py-3 rounded-xl transition-all duration-300 hover:scale-105"
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