import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setStatus("Please fill all fields.");
      return;
    }

    try {
      setLoading(true);
      setStatus("");

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("✅ Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
  console.log("========== EMAILJS ERROR ==========");
  console.log("Full Error:", error);
  console.log("Status:", error.status);
  console.log("Text:", error.text);
  console.log("==================================");

  setStatus("❌ Failed to send message.");
} finally {
  setLoading(false);
}
  };

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
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-10 border border-cyan-500/20"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-[#1b2234] mb-6 outline-none focus:border focus:border-cyan-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-[#1b2234] mb-6 outline-none focus:border focus:border-cyan-400"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-[#1b2234] mb-6 outline-none focus:border focus:border-cyan-400"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-[#1b2234] mb-6 outline-none resize-none focus:border focus:border-cyan-400"
            />

            {status && (
              <div
                className={`mb-5 rounded-lg p-3 text-center font-medium ${
                  status.includes("successfully")
                    ? "bg-green-500/20 text-green-400 border border-green-500/40"
                    : "bg-red-500/20 text-red-400 border border-red-500/40"
                }`}
              >
                {status}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-700 transition-all duration-300 px-10 py-4 rounded-xl font-bold text-black w-full hover:scale-[1.02]"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </motion.form>

        </div>

      </div>

    </section>
  );
}