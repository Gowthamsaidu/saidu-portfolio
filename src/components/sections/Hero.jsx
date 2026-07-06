import { TypeAnimation } from "react-type-animation";
import Button from "../ui/Button";
import personal from "../../data/personal";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#050816] text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-8 w-full">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}

          <div>

            <p className="text-cyan-400 text-lg mb-4">
              Hello 👋 I'm
            </p>

            <h1 className="text-6xl font-bold mb-6">
              {personal.name}
            </h1>

            <TypeAnimation
              sequence={[
                "AI Engineer",
                2000,
                "Python Developer",
                2000,
                "Machine Learning Engineer",
                2000,
                "Full Stack Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-3xl text-cyan-400 font-semibold"
            />

            <p className="text-gray-400 mt-8 leading-8 max-w-xl">

              Passionate about Artificial Intelligence,
              Machine Learning and Full Stack Development.

              I enjoy building real-world applications
              that solve meaningful problems.

            </p>

            <div className="flex gap-5 mt-10">

              <Button href={personal.resume}>
                Download Resume
              </Button>

              <Button
                href={personal.github}
                variant="outline"
              >
                GitHub
              </Button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="flex justify-center">

            <img
              src={personal.profileImage}
              alt="profile"
              className="w-96 rounded-full border-4 border-cyan-400 shadow-[0_0_60px_rgba(34,211,238,0.4)]"
            />

          </div>

        </div>

      </div>
    </section>
  );
}