import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaDownload,
} from "react-icons/fa";
import personal from "../../data/personal";

const navItems = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Experience", to: "experience" },
  { name: "Contact", to: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/80 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold gradient-text cursor-pointer">
          SG
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              spy={true}
              offset={-70}
              duration={500}
              activeClass="text-cyan-400"
              className="cursor-pointer text-gray-300 hover:text-cyan-400 transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            className="text-xl hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-xl hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href={personal.resume}
            className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 px-4 py-2 rounded-xl transition"
          >
            <FaDownload />
            Resume
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#050816]/95 backdrop-blur-xl border-t border-white/10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setMenuOpen(false)}
              className="block px-8 py-4 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 cursor-pointer"
            >
              {item.name}
            </Link>
          ))}

          <div className="flex justify-center gap-8 py-6 text-2xl">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}