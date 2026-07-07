import { motion } from "framer-motion";
import timeline from "../../data/timeline";

export default function Timeline() {
  return (
    <section
      id="experience"
      className="bg-[#0B1020] text-white py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-5xl font-bold text-center gradient-text mb-20"
        >
          Education & Journey
        </motion.h2>

        <div className="relative">

          <div className="absolute left-6 top-0 bottom-0 w-1 bg-cyan-500 rounded-full"></div>

          {timeline.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .15
              }}
              className="relative pl-20 mb-20"
            >

              <div className="absolute left-0 w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center font-bold">
                {item.year}
              </div>

              <div className="glass rounded-3xl p-8 border border-cyan-500/20 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(34,211,238,.3)] transition-all duration-300">
                <h3 className="text-2xl font-bold text-cyan-400">
                  {item.title}
                </h3>

                <p className="text-gray-300 mt-2 font-medium">
                  {item.subtitle}
                </p>

                <p className="text-gray-400 mt-4 leading-8">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}