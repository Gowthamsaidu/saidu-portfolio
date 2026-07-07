import { motion } from "framer-motion";
import skills from "../../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#0B1020] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center gradient-text mb-16"
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((category, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="glass rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400 transition duration-300"
            >

              <h3 className="text-2xl font-bold mb-6 text-cyan-400">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.items.map((skill, i) => (

                  <span
                    key={i}
                    className="px-4 py-2 rounded-full
                    bg-cyan-500/10
                    border border-cyan-500/20
                    hover:bg-cyan-500
                    hover:text-black
                    transition
                    duration-300
                    cursor-default
                    text-sm
                    font-medium"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}