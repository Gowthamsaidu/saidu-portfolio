import personal from "../../data/personal";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#0B1120] text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-14">
          About Me
        </h2>

        <div className="rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 p-10">

          <h3 className="text-3xl font-bold text-cyan-400 mb-5">
            {personal.name}
          </h3>

          <p className="text-gray-300 leading-8 text-lg">
            {personal.about}
          </p>

          <div className="grid md:grid-cols-2 gap-10 mt-10">

            <div className="flex items-center gap-4">
              <FaGraduationCap className="text-cyan-400 text-2xl" />
              <div>
                <h4 className="font-semibold">
                  {personal.degree}
                </h4>
                <p className="text-gray-400">
                  {personal.college}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
              <div>
                <h4 className="font-semibold">
                  {personal.location}
                </h4>
                <p className="text-gray-400">
                  CGPA : {personal.cgpa}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}