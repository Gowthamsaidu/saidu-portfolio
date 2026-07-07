import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Button from "../ui/Button";
import personal from "../../data/personal";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#050816] text-white flex items-center relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cyan-400 text-lg font-medium mb-4">
              👋 Hello, I'm
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl font-extrabold mb-6 gradient-text"
            >
              {personal.name}
            </motion.h1>

            <TypeAnimation
              sequence={[
                ...personal.roles.flatMap((role) => [role, 2000]),
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-2xl md:text-4xl font-bold text-cyan-400"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-8 text-gray-400 leading-8 text-lg max-w-xl"
            >
              {personal.about}
            </motion.p>

            <div className="flex flex-wrap gap-5 mt-10">

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button href={personal.resume}>
                  📄 Download Resume
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  href={personal.github}
                  variant="outline"
                >
                  💻 GitHub
                </Button>
              </motion.div>

            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >

            <motion.div
              className="relative"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30 animate-pulse"></div>

              <motion.img
                src={personal.profileImage}
                alt={personal.name}
                whileHover={{
                  scale: 1.06,
                  rotate: 2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                }}
                className="relative w-72 md:w-96 rounded-full border-4 border-cyan-400 glow cursor-pointer"
              />
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}