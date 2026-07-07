import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
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
          Let's Build Something Amazing
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left */}

          <motion.div
            initial={{ opacity:0,x:-60 }}
            whileInView={{ opacity:1,x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.6 }}
          >

            <h3 className="text-3xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex gap-5 items-center">

                <div className="bg-cyan-500 p-4 rounded-xl">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-gray-400">Email</p>
                  <h4>saidugowthamssc6@gmail.com</h4>
                </div>

              </div>

              <div className="flex gap-5 items-center">

                <div className="bg-cyan-500 p-4 rounded-xl">
                  <FaPhone />
                </div>

                <div>
                  <p className="text-gray-400">Phone</p>
                  <h4>+91 6302836131</h4>
                </div>

              </div>

              <div className="flex gap-5 items-center">

                <div className="bg-cyan-500 p-4 rounded-xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-gray-400">Location</p>
                  <h4>Eluru, Andhra Pradesh</h4>
                </div>

              </div>

            </div>

            <div className="flex gap-5 mt-10">

              <a
                href="https://github.com/Gowthamsaidu"
                target="_blank"
                rel="noreferrer"
                className="bg-[#1d2235] hover:bg-cyan-500 p-4 rounded-xl transition text-2xl"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/saidu-gowtham-ba4ba4330"
                target="_blank"
                rel="noreferrer"
                className="bg-[#1d2235] hover:bg-cyan-500 p-4 rounded-xl transition text-2xl"
              >
                <FaLinkedin />
              </a>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity:0,x:60 }}
            whileInView={{ opacity:1,x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.6 }}
            className="glass rounded-3xl p-10 border border-cyan-500/20"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-[#1b2234] mb-6 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-[#1b2234] mb-6 outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 rounded-xl bg-[#1b2234] mb-6 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-[#1b2234] mb-6 outline-none"
            />

            <button
              className="bg-cyan-500 hover:bg-cyan-400 transition px-10 py-4 rounded-xl font-bold text-black w-full"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}