export default function WhatsAppFloat() {
  return (
    <button
      onClick={() =>
        window.open(
          "https://wa.me/919015020740?text=Hi, I want a website for my business",
          "_blank"
        )
      }
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition z-50"
    >
      💬
    </button>
  );
}