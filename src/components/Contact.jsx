import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch(
        "https://freelance-portfolio-backend-y07t.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed");
      }

      alert("Message sent successfully 🚀");

      setForm({
        name: "",
        email: "",
        message: "",
      });

    } catch (err) {
      console.error("Error:", err);
      alert("Failed to send message ❌");
    }

    setLoading(false);
  };

  return (
    <div id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-black to-gray-900">
      
      <div className="w-full max-w-xl bg-gray-900/60 backdrop-blur-xl border border-gray-800 rounded-2xl p-8 shadow-2xl">
        
        <h2 className="text-3xl font-semibold text-center mb-2 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
          Let’s Work Together
        </h2>

        <p className="text-center text-gray-400 mb-8 text-sm">
          Got an idea? Let’s turn it into something amazing.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="p-3 rounded-lg bg-black/60 border border-gray-700 focus:border-green-400 outline-none"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="p-3 rounded-lg bg-black/60 border border-gray-700 focus:border-green-400 outline-none"
            required
          />

          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="p-3 rounded-lg bg-black/60 border border-gray-700 focus:border-green-400 outline-none h-32 resize-none"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-2 py-3 rounded-lg bg-green-400 text-black font-medium hover:scale-[1.03] transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message 🚀"}
          </button>
        </form>
      </div>
    </div>
  );
}