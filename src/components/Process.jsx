import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery Call",
    desc: "We understand your brand, goals, and what success looks like.",
  },
  {
    title: "Design Concept",
    desc: "You get a modern, high-converting design within 48 hours.",
  },
  {
    title: "Build & Polish",
    desc: "Clean, fast, mobile-first website with revisions included.",
  },
  {
    title: "Launch & Support",
    desc: "Go live smoothly with ongoing support and guidance.",
  },
];

export default function Process() {
  return (
    <section id="process" className="px-6 py-24 bg-black">
      
      {/* Heading */}
      <h2 className="text-center text-4xl md:text-5xl font-semibold mb-20 text-white tracking-tight">
        Simple. Fast.{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          No surprises.
        </span>
      </h2>

      <div className="max-w-6xl mx-auto relative">
        
        {/* Vertical line */}
        <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gray-800 hidden md:block"></div>

        <div className="space-y-16">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              
              {/* Content */}
              <div className="w-full md:w-1/2">
                <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 hover:scale-[1.02] transition">
                  
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Center circle */}
              <div className="relative flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg">
                  {i + 1}
                </div>
              </div>

              {/* Empty space for alignment */}
              <div className="hidden md:block w-1/2"></div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}