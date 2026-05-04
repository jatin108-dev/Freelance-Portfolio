import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReviewForm from "./ReviewForm";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch("https://freelance-portfolio-backend-y07t.onrender.com/api/reviews");
        const data = await res.json();
        setReviews(Array.isArray(data) ? data : []);
      } catch (err) {
        console.log(err);
        setReviews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const handleNewReview = (review) => {
    setReviews((prev) => [review, ...prev]);
  };

  return (
    <div className="px-6 py-20 bg-gradient-to-b from-black to-gray-900">
      
      {/* Heading */}
      <h2 className="text-center text-3xl font-semibold mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        What Clients Say
      </h2>

      {/* Loading */}
      {loading && (
        <p className="text-center text-gray-400">Loading reviews...</p>
      )}

      {/* Empty */}
      {!loading && reviews.length === 0 && (
        <p className="text-center text-gray-500 mb-10">
          No reviews yet. Be the first one 👇
        </p>
      )}

      {/* Reviews Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {reviews.map((r, i) => {
          const rating = r.rating || 5;

          return (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="relative p-[1px] rounded-2xl bg-gradient-to-r from-blue-500/40 to-purple-500/40"
            >
              <div className="bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 h-full">

                {/* Avatar + Info */}
                <div className="flex items-center gap-3 mb-4">
                  {r.image ? (
                    <img
                      src={r.image}
                      alt="avatar"
                      className="w-12 h-12 rounded-full border border-gray-700"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold">
                      {r.name ? r.name[0].toUpperCase() : "U"}
                    </div>
                  )}

                  <div>
                    <h3 className="font-semibold text-white">
                      {r.name || "Anonymous"}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {r.role || "Client"}
                    </p>
                  </div>
                </div>

                {/* Message */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  "{r.message || "Amazing work, highly recommended!"}"
                </p>

                {/* Stars */}
                <div className="mt-4 text-yellow-400 text-lg tracking-wide">
                  {"★".repeat(rating)}
                  {"☆".repeat(5 - rating)}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Form */}
      <ReviewForm onNewReview={handleNewReview} />
    </div>
  );
}