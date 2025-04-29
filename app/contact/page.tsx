import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="container py-10 flex flex-col items-center justify-center min-h-[60vh]">
      <div className="max-w-xl w-full bg-white dark:bg-muted rounded-xl shadow-lg p-8 flex flex-col items-center gap-6 border border-border">
        <h1 className="text-3xl font-bold mb-2 artistic-title text-center">Contact & Booking</h1>
        <p className="text-lg text-muted-foreground text-center">
          Thank you for your interest in our tours! To book a trip, ask questions, or join our travel community, simply click the WhatsApp group link below. Our team will respond promptly and help you with all your needs.
        </p>
        <Link
          href="https://chat.whatsapp.com/K5X2VEMZHGAFg8Ubvvkt3T"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-full bg-green-500 text-white font-semibold text-lg shadow hover:bg-green-600 transition"
        >
          Join WhatsApp Group
        </Link>
      </div>
    </div>
  );
}
