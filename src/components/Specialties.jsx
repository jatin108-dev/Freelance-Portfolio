import { motion } from "framer-motion";

const data = [
  {
    title: "Gym & Fitness Influencers",
    desc: "High-converting coaching websites that turn followers into clients.",
    accent: "from-blue-500 to-cyan-400",
    icon: "💪",
  },
  {
    title: "Artisan Bakeries",
    desc: "Elegant websites that showcase your brand and increase walk-ins.",
    accent: "from-pink-500 to-orange-400",
    icon: "🍰",
  },
];

export default function Specialties() {
  return (
    <section id="specialities" className="px-6 py-24 bg-black">
   <h2 className="text-center text-4xl md:text-5xl font-semibold mb-16 text-white tracking-tight">
  Two niches.{" "}
  <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
    Done right.
  </span>
</h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {data.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/70 backdrop-blur-xl p-8"
          >
            {/* glow background */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r ${item.accent} transition`} />

            {/* content */}
            <div className="relative z-10">
              <div className="text-2xl mb-4">{item.icon}</div>

              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}