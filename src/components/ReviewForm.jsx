import { useState } from "react";

export default function ReviewForm({ onNewReview }) {
  const [form, setForm] = useState({
    name: "",
    role: "",
    message: "",
    rating: 5,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const avatar = `https://ui-avatars.com/api/?name=${form.name}`;

    try {
      const res = await fetch("http://localhost:5000/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          image: avatar,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit");

      const data = await res.json();
      console.log("Saved:", data);

      // UI update
      onNewReview({
        ...form,
        image: avatar,
      });

      // reset form
      setForm({ name: "", role: "", message: "", rating: 5 });

      alert("Review submitted!");
    } catch (err) {
      console.log("Submit error:", err);
      alert("Error submitting review");
    }
  };

  return (
    <div className="px-8 py-16">
      <h2 className="text-center text-2xl mb-6">Leave a Review</h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto flex flex-col gap-4"
      >
        <input
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="p-3 bg-gray-900 border border-gray-700 rounded"
          required
        />

        <input
          placeholder="Your Profession"
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="p-3 bg-gray-900 border border-gray-700 rounded"
        />

        <textarea
          placeholder="Your Review"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="p-3 bg-gray-900 border border-gray-700 rounded"
          required
        />

        <select
          value={form.rating}
          onChange={(e) =>
            setForm({ ...form, rating: Number(e.target.value) })
          }
          className="p-3 bg-gray-900 border border-gray-700 rounded"
        >
          <option value={5}>⭐⭐⭐⭐⭐</option>
          <option value={4}>⭐⭐⭐⭐</option>
          <option value={3}>⭐⭐⭐</option>
          <option value={2}>⭐⭐</option>
          <option value={1}>⭐</option>
        </select>

        <button
          type="submit"
          className="bg-white text-black py-3 rounded hover:scale-105 transition"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
}