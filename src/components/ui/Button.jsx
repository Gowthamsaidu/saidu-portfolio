import { motion } from "framer-motion";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-cyan-500 text-white hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]",

    outline:
      "border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-white",
  };

  const className = `${base} ${styles[variant]}`;

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={href}
        className={className}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={className}
    >
      {children}
    </motion.button>
  );
}