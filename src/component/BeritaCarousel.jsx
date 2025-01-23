import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Untuk navigasi
import "../App.css"; // Untuk CSS custom transition

const BeritaCarousel = () => {
  const [articles, setArticles] = useState([]); // State untuk menyimpan artikel
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Untuk navigasi

  // Fungsi untuk membersihkan tag HTML
  const stripHTML = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  // Fetch data dari berita.json
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/data/berita.json"); // Lokasi berita.json di folder public
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();

        // Filter data hanya untuk ID 13, 5, dan 10
        const filteredData = data
          .filter((item) => [13, 5, 10].includes(item.id))
          .map((item) => ({
            id: item.id,
            title: item.title,
            content: stripHTML(item.content.substring(0, 478)) + "...", // Ambil 478 karakter pertama tanpa tag HTML
            image: item.mainPhoto, // Gambar utama dari JSON
            link: `/edukasi/berita/${item.id}`, // Link ke halaman berita
          }));

        setArticles(filteredData); // Simpan ke state
      } catch (error) {
        console.error(error);
      }
    };

    fetchArticles();
  }, []);

  // Auto-scroll carousel setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        articles.length > 0 ? (prevIndex + 1) % articles.length : 0
      );
    }, 3000); // Durasi 3 detik

    return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
  }, [articles]);

  // Fungsi untuk menangani klik artikel dan navigasi ke halaman yang sesuai
  const handleClick = (link) => {
    navigate(link);
  };

  // Jika artikel masih loading, tampilkan loader
  if (articles.length === 0) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-6 py-8 mb-12">
      <div className="relative flex justify-center items-center overflow-hidden w-auto mx-auto leading-relaxed">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {articles.map((article) => (
            <div
              key={article.id}
              className="min-w-full flex flex-col md:flex-row items-center justify-center p-4 bg-white rounded-lg cursor-pointer"
              onClick={() => handleClick(article.link)} // Navigasi ke halaman artikel
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-auto max-w-[50%] h-full max-h-96 object-cover rounded-lg"
              />
              <div className="md:ml-6 mt-4 md:mt-0 flex-1 text-center md:text-left">
                <h3 className="text-2xl font-extrabold text-fontblu text-justify">
                  {article.title}
                </h3>
                <br />
                <p className="text-fontblu font-medium mt-2 text-[18px] leading-relaxed text-justify">
                  {article.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeritaCarousel;
