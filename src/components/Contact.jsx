import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      alert("Message sent 🚀");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  return (
    <div id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-black to-gray-900">
      
      <div className="w-full max-w-xl bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 shadow-2xl">
        
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-center mb-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Let’s Work Together
        </h2>

        <p className="text-center text-gray-400 mb-8 text-sm">
          Got an idea? Let’s turn it into something amazing.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="p-3 rounded-lg bg-black/60 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 outline-none transition"
            required
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="p-3 rounded-lg bg-black/60 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 outline-none transition"
            required
          />

          {/* Message */}
          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="p-3 rounded-lg bg-black/60 border border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 outline-none transition h-32 resize-none"
            required
          />

          {/* Button */}
          <button
            type="submit"
            className="mt-2 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </div>
  );
}