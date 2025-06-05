import React, { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Oops! something went wrong, please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 flex items-center justify-center py-20 px-4"
    >
      <RevealOnScroll>
        <div className="w-full max-w-md sm:max-w-lg md:max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              required
              placeholder="Name..."
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              required
              placeholder="Email..."
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              placeholder="Your Message..."
              className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Contact;
