import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-20 bg-black">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <div>
          <p className="text-yellow-400 text-sm mb-4 tracking-wide">
            INDEPENDENT WEB DESIGNER
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            Websites that{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              grow
            </span>{" "}
            your brand.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mt-6 text-lg max-w-md"
          >
            Clean, high-converting websites that turn visitors into customers.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex items-center gap-6"
          >
            <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition">
              Book a Free Call
            </button>

            <a
              href="#work"
              className="text-gray-400 hover:text-white transition"
            >
              See my work ↓
            </a>
          </motion.div>
        </div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-[1px] rounded-2xl">
            <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-800">
              
              <h2 className="text-4xl font-bold text-white">12+</h2>
              <p className="text-gray-400 mt-1">Websites Delivered</p>

              <div className="mt-6 grid grid-cols-3 text-sm text-gray-400 gap-4">
                <div>
                  <p className="text-white font-medium">7 days</p>
                  <p>Turnaround</p>
                </div>
                <div>
                  <p className="text-white font-medium">5.0★</p>
                  <p>Rating</p>
                </div>
                <div>
                  <p className="text-white font-medium">Global</p>
                  <p>Clients</p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}