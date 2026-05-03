import { motion } from "framer-motion";

const projects = [
  {
    title: "Fitness Landing",
    tag: "Coach Website",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    link: "https://fitness-coach-page-ui.vercel.app/", // 🔥 added
  },
  {
    title: "Maison Bakery",
    tag: "Bakery Brand",
    img: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec",
  },
  {
    title: "CleanPro",
    tag: "Service Website",
    img: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="px-6 py-24 bg-gradient-to-b from-black to-gray-900">
      
      <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 text-white leading-tight">
        Work that <br />
        <span className="text-gray-400">speaks for itself.</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((p, i) => {
          const Card = (
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 cursor-pointer"
            >
              {/* Image */}
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-56 object-cover transition duration-500 group-hover:scale-110"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition" />

              {/* content */}
              <div className="absolute bottom-0 p-5 w-full">
                <p className="text-xs text-gray-400 mb-1">{p.tag}</p>
                <h3 className="text-white text-lg font-semibold">
                  {p.title}
                </h3>

                {/* 🔥 show only for fitness */}
                {p.link && (
                  <p className="text-green-400 text-sm mt-1">
                    Live Demo →
                  </p>
                )}
              </div>

              {/* hover border */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-green-400/40 transition" />
            </motion.div>
          );

          // 🔥 If link exists → wrap in anchor
          return p.link ? (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {Card}
            </a>
          ) : (
            <div key={i}>{Card}</div>
          );
        })}
      </div>
    </section>
  );
}