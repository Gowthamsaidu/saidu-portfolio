import { FaAward, FaBriefcase, FaCode, FaCloud } from "react-icons/fa";

const stats = [
  {
    icon: <FaAward />,
    title: "7+",
    subtitle: "Certifications",
  },
  {
    icon: <FaBriefcase />,
    title: "3",
    subtitle: "Internships",
  },
  {
    icon: <FaCode />,
    title: "3",
    subtitle: "Projects",
  },
  {
    icon: <FaCloud />,
    title: "Oracle",
    subtitle: "AI Certified",
  },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
      {stats.map((item, index) => (
        <div
          key={index}
          className="glass rounded-2xl p-4 border border-cyan-500/20 hover:border-cyan-400 hover:-translate-y-1 transition-all duration-300 text-center"
        >
          <div className="text-cyan-400 text-2xl flex justify-center mb-2">
            {item.icon}
          </div>

          <h3 className="text-xl font-bold">{item.title}</h3>

          <p className="text-gray-400 text-sm">{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
}