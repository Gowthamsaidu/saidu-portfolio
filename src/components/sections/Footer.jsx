import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#070B16] border-t border-cyan-500/20 py-10 px-6 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        <div>
          <h2 className="text-2xl font-bold gradient-text">Saidu Gowtham</h2>
          <p className="text-gray-400 mt-2">
            AI & Machine Learning Engineer | MERN Stack Developer
          </p>
        </div>

        <div className="flex gap-5 text-2xl">

          <a
            href="https://github.com/Gowthamsaidu"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="YOUR_LINKEDIN_URL"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="#home"
            className="hover:text-cyan-400 transition"
          >
            <FaArrowUp />
          </a>

        </div>

      </div>

      <p className="text-center text-gray-500 mt-8">
        © {year} Saidu Gowtham. Built with React + Vite + Tailwind CSS.
      </p>
    </footer>
  );
}