import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-lg border-b border-gray-800"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <h1 className="text-white font-semibold text-lg tracking-wide">
        JD NexStudio<span className="text-blue-500">.</span>
      </h1>

      {/* Links */}
      <div className="hidden md:flex gap-8 text-gray-400 text-sm">
        {["Specialties", "Work", "Process", "Contact"].map((item, i) => (
          <a
            key={i}
            href={`#${item.toLowerCase()}`}
            className="relative hover:text-white transition"
          >
            {item}
            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-blue-500 transition-all group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* CTA */}
      <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition">
        Book a Call
      </button>
    </div>
  );
}