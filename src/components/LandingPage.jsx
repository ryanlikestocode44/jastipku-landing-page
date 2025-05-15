import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import NavbarFooter from "./NavbarFooter";

const LandingPage = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.volume = 0.2;
      audio.play().catch((err) => {
        console.error("Autoplay blocked:", err);
      });
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="scroll-smooth font-sans text-gray-800" id="home">
      <Navbar />

      <div
        style={{ position: "fixed", top: "4rem", right: "1rem", zIndex: 999 }}
      >
        <button
          onClick={toggleMusic}
          className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition cursor-pointer"
        >
          {isPlaying ? "Pause Music" : "Play Music"}
        </button>

        <audio ref={audioRef} loop>
          <source src="/audios/bg-music.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>

      {/* Parallax Hero Section */}
      <div
        className="relative h-screen bg-fixed bg-cover bg-center flex items-center justify-center pt-20 text-white text-center px-4"
        style={{
          backgroundImage: "url('/images/banner.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Konten Hero */}
        <div className="relative z-20 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-5xl font-bold drop-shadow-lg"
          >
            <em>Selamat Datang di JastipKu!</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-6 text-lg drop-shadow-md"
          >
            Platform jasa titip terpercaya sejak 2015. Titip barang dari luar
            negeri dengan mudah, cepat, dan aman!
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="bg-white text-gray-950 rounded-2xl w-30 h-10 text-xl mt-5 shadow-md font-bold"
          >
            Pesan
          </motion.button>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-gray-100 py-12" id="tentang">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4 text-blue-600"
          >
            Tentang Kami
          </motion.h2>

          <div className="flex flex-col gap-10">
            <div className="card flex gap-10">
              <motion.img
                src="/images/service1.webp"
                alt="Tentang Kami"
                className="w-80 h-72 max-w-md rounded-xl shadow-lg mb-4 object-cover"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />

              <p className="text-gray-700 leading-relaxed">
                Kami adalah tim <strong>JastipKu</strong> berpengalaman yang
                telah membantu pelanggan sejak tahun <em>2015</em>. Layanan kami
                mencakup titip barang dari Jepang, Korea, hingga Amerika dengan
                proses yang aman dan terpercaya.
              </p>
            </div>
            <div className="card flex gap-10">
              <p className="text-gray-700 leading-relaxed">
                Kami berkomitmen untuk terus meningkatkan kualitas layanan
                dengan menghadirkan fitur-fitur inovatif dan memperluas jaringan
                komunitas jastip. Dukungan dari para pengguna adalah semangat
                kami untuk terus tumbuh dan menjadi platform jastip yang
                terpercaya di Indonesia. Bersama <strong>JastipKu</strong>,
                aktivitas titip-menitip kini menjadi lebih efisien,
                menyenangkan, dan bisa diandalkan.
              </p>

              <motion.img
                src="/images/service2.webp"
                alt="Tentang Kami"
                className="w-80 h-72 max-w-md rounded-xl shadow-lg mb-4 object-cover"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />
            </div>
            <div className="card flex gap-10">
              <motion.img
                loading="lazy"
                src="/images/service3.webp"
                alt="Tentang Kami"
                className="w-full h-72 max-w-md rounded-xl shadow-lg mb-4 object-cover"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              />

              <p className="text-gray-700 leading-relaxed">
                Dengan menghubungkan pembeli dan penitip barang secara langsung,
                <strong>JastipKu</strong> menghadirkan solusi praktis bagi
                mereka yang ingin mendapatkan produk dari berbagai belahan dunia
                tanpa harus bepergian. Kami percaya bahwa jarak seharusnya tidak
                menjadi penghalang untuk mendapatkan barang impian. Melalui
                platform kami, siapa pun bisa menitip barang dari kota atau
                negara tertentu dengan lebih mudah, aman, dan transparan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-16" id="barang">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4 text-blue-600"
        >
          Barang Populer
        </motion.h2>

        <div className="container grid grid-rows-2 grid-cols-2 gap-5">
          <div className="card">
            <motion.img
              loading="lazy"
              src="/images/sneakers.webp"
              alt="Barang Populer"
              className="w-full h-72 max-w-md rounded-xl shadow-lg mb-4 object-cover"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />

            <p className="text-lg">
              Dapatkan sepatu <em>trendy</em> dari luar negeri hanya dengan{" "}
              <strong>Rp 1.200.000</strong>. Pengiriman cepat dan terpercaya!
            </p>
          </div>
          <div className="card">
            <motion.img
              loading="lazy"
              src="/images/sneakers2.webp"
              alt="Barang Populer"
              className="w-full h-72 max-w-md rounded-xl shadow-lg mb-4 object-cover"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />

            <p className="text-lg">
              Lihat sepatu <em>sports</em> dari brand terkenal hanya dengan{" "}
              <strong>Rp 2.500.000</strong>. Barang original dan aman sampai
              tujuan!
            </p>
          </div>
          <div className="card">
            <motion.img
              loading="lazy"
              src="/images/backpack.webp"
              alt="Barang Populer"
              className="w-full h-72 max-w-md rounded-xl shadow-lg mb-4 object-cover"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />

            <p className="text-lg">
              Dapatkan promo<em>tas dan backpack</em> dengan kualitas bahan
              terbaik sampai <strong>Rp 5.000.000</strong>. Proteksi barang
              terjamin dan sesuai pesanan!
            </p>
          </div>
          <div className="card">
            <motion.img
              loading="lazy"
              src="/images/bag.webp"
              alt="Barang Populer"
              className="w-full h-72 max-w-md rounded-xl shadow-lg mb-4 object-cover"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />

            <p className="text-lg">
              Segera dapatkan <em>tas wanita</em> dari brand dan kualitas
              terpercaya dari harga <strong>Rp 2.500.000</strong>. Jasa kami
              menjamin barang terlindungi!
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4" id="kontak">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Form Kontak */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4 text-blue-600"
            >
              Barang Populer
            </motion.h2>
            <p className="mb-6 text-gray-600">
              Punya pertanyaan atau ingin titip barang? Kirim pesanmu sekarang!
            </p>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Nama lengkap"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Alamat email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Tulis pesanmu di sini..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
              >
                Kirim Pesan
              </button>
            </form>
          </div>

          {/* Video */}
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="/videos/courier-video.mp4" // ganti dengan video Jastipmu
              title="Video Jastipku"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 text-gray-600 py-8 px-4 border-t">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-8">
          {/* Navbar Vertikal */}
          <NavbarFooter />

          {/* Lisensi */}
          <div className="text-sm text-center md:text-right text-gray-500 mt-6 md:mt-0">
            &copy; 2025 JastipKu. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
