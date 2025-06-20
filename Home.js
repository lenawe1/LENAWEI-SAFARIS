import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative z-50">
      <button className="lg:hidden text-white text-3xl p-2" onClick={toggleMenu}>
        &#9776;
      </button>
      {isOpen && (
        <div className="absolute top-0 left-0 w-full bg-blue-600 text-white p-6 shadow-lg">
          <Link href="#gallery" className="block py-3 text-lg">Gallery</Link>
          <Link href="#faq" className="block py-3 text-lg">FAQs</Link>
          <Link href="#testimonials" className="block py-3 text-lg">Testimonials</Link>
          <Link href="#booking" className="block py-3 text-lg">Book Now</Link>
          <Link href="#contact" className="block py-3 text-lg">Contact</Link>
        </div>
      )}
    </div>
  );
};

export default function Home() {
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const eventDate = new Date("2025-02-28T09:00:00").getTime();
    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeLeft = eventDate - now;
      setCountdown(timeLeft > 0 ? timeLeft : 0);
    };
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-400 via-yellow-300 to-blue-500 text-white font-sans">
      <header className="text-center py-12">
        <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-lg">Lenawei Safaris</h1>
        <p className="text-xl mt-4 italic">Adventures That Teach, Memories That Last!</p>
      </header>

      <nav className="flex justify-center items-center gap-6 flex-wrap mb-8 px-4">
        <MobileNav />
        <div className="hidden lg:flex gap-6">
          <Link href="#gallery" className="hover:underline">Gallery</Link>
          <Link href="#faq" className="hover:underline">FAQs</Link>
          <Link href="#testimonials" className="hover:underline">Testimonials</Link>
          <Link href="#booking" className="hover:underline">Book Now</Link>
          <Link href="#contact" className="hover:underline">Contact</Link>
        </div>
      </nav>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center py-10 px-4"
      >
        <h2 className="text-3xl font-semibold">Next Safari Starts In:</h2>
        <p className="text-4xl mt-4 font-bold text-shadow-lg">{formatTime(countdown)}</p>
      </motion.section>

      <section id="requirements" className="max-w-3xl mx-auto px-4 py-12 bg-white bg-opacity-10 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Student Safari Essentials 🌿🎒</h2>
        <ul className="space-y-3 text-lg leading-relaxed">
          <li>👕 Comfortable clothing & sturdy shoes for adventure.</li>
          <li>🎒 Backpack for water, snacks, and discoveries.</li>
          <li>📖 Notebook & pen – record the wild wonders!</li>
          <li>🔭 Binoculars for spotting animals up close.</li>
          <li>💧 Reusable water bottle – hydration is key!</li>
          <li>🦟 Sunscreen & bug repellent – nature loves you, but bugs do too!</li>
          <li>🌍 Respect & enthusiasm – bring your best safari spirit!</li>
          <li>❤️ Medical alert bracelet (if needed) – stay safe while having fun!</li>
          <li>📜 Permission slip – adventure approved by parents/guardians!</li>
          <li>🚑 Health insurance details – be covered for any emergencies!</li>
        </ul>
        <div className="text-center mt-6">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full shadow-lg">Download Full Checklist</Button>
        </div>
      </section>

      <footer className="bg-blue-800 py-8 text-center text-white mt-12">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Image src="/facebook-icon.png" alt="Facebook" width={24} height={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Image src="/twitter-icon.png" alt="Twitter" width={24} height={24} />
          </a>
        </div>
        <div className="space-x-4">
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="hover:underline">Terms of Service</Link>
        </div>
        <p className="mt-4 text-sm">© 2025 Lenawei Safaris. All rights reserved.</p>
      </footer>
    </div>
  );
}
