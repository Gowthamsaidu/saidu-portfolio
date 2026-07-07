import { motion } from "framer-motion";
import certificates from "../../data/certificates";
import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="bg-[#0B1020] py-24 px-6 text-white"
    >
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-5xl font-bold text-center gradient-text mb-16"
        >
          Achievements & Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {certificates.map((certificate, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .1
              }}
              whileHover={{
                y: -10,
                scale: 1.02
              }}
              className="glass rounded-3xl overflow-hidden border border-cyan-500/20 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_35px_rgba(34,211,238,.25)]"
            >

              <img
                src={certificate.image}
                alt={certificate.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">

                <span className="inline-block bg-cyan-500/20 text-cyan-300 text-sm px-4 py-1 rounded-full mb-4">
                  {certificate.type}
                </span>

                <h3 className="text-2xl font-bold text-cyan-400">
                  {certificate.title}
                </h3>

                <p className="text-gray-400 mt-3">
                  {certificate.organization}
                </p>

                <p className="text-sm text-gray-500 mt-2">
                  {certificate.year}
                </p>

                <div className="flex gap-3 mt-6">

                  <a
                    href={certificate.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold py-3 rounded-xl flex justify-center items-center gap-2 transition"
                  >
                    <FaExternalLinkAlt />
                    View
                  </a>

                  <a
                    href={certificate.pdf}
                    download
                    className="bg-[#1d2235] hover:bg-cyan-500 hover:text-black p-3 rounded-xl transition"
                  >
                    <FaAward />
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