import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bird from "../assets/edukasi/bird.png";
import dots from "../assets/edukasi/dots.png";
import crown from "../assets/edukasi/Crown.png";
import m1 from "../assets/edukasi/m1.png";
import m2 from "../assets/edukasi/m2.png";
import m3 from "../assets/edukasi/m3.png";
import b1 from "../assets/edukasi/b1.png";
import b2 from "../assets/edukasi/b2.png";
import b3 from "../assets/edukasi/b3.png";
import bb1 from "../assets/edukasi/bb1.png";
import bb2 from "../assets/edukasi/bb2.png";
import bb3 from "../assets/edukasi/bb3.png";
import bgg from "../assets/edukasi/bg.png";
import BeritaCarousel from "../component/BeritaCarousel";

const EdukasiPage = () => {
  const materials = [
    { id: 1, title: "Pengenalan Burung Walet dan Habitatnya", image: m1, link: "/edukasi/materipage/materi/1" },
    { id: 2, title: "Pemilihan Lokasi Rumah Walet", image: m2, link: "/edukasi/materipage/materi/2" },
    { id: 3, title: "Desain dan Konstruksi Rumah Walet", image: m3, link: "/edukasi/materipage/materi/3" },
  ];

  const blogArticles = [
    {
      id: 1,
      title: "Potensi Budidaya Sarang Burung Walet di Indonesia",
      image: b1,
      description: "Di tengah tingginya nilai ekspor kebutuhan sarang burung walet di tingkat global sekaligus menjadi pemasok terbesar sarang burung walet ke China, tidak semua masyarakat Indonesia mengetahui cara budidaya dan manfaat dari konsumsi sarang burung walet tersebut. Padahal, budidaya sarang burung walet dapat menjadi primadona andalan di sektor agribisnis dengan keuntungan yang menjanjikan.",
      link: "/edukasi/blogartikel/2",
    },
    {
      id: 2,
      title: "Penghambat Perkembangan Rumah Burung Walet",
      image: b2,
      description: "Dalam usaha budidaya sarang burung walet tidak sedikit peternak walet yang mengeluhkan bahwa gedungnya kurang optimal. Jumlah populasi walet sulit berkembang singga sarang yang ada di dalamnya pun tidak cepat bertambah. Hal ini tentu membuat keresahan bagi peternak walet karena jika dibiarkan terus-menerus maka usaha tersebut dapat dikatakan tidak membuahkan hasil walaupun sebatas balik modal.",
      link: "/edukasi/blogartikel/6",
    },
    {
      id: 3,
      title: "Walet: Burung Kecil dengan Nilai Ekonomi Tinggi",
      image: b3,
      description: "Burung walet hanya bisa hidup di Asia Tenggara karena membutuhkan daerah dengan curah hujan tinggi, seperti Indonesia, Thailand, Filipina, dan Vietnam. Sarang burung walet terbuat dari air liur mereka, yang aktif diproduksi menjelang fase bertelur. Air liur ini membentuk cairan kental yang mengering menjadi keras seperti bihun...",
      link: "/edukasi/blogartikel/4",
    },
  ];

  const berita = [
    {
      id: 1,
      title: "Nilai Ekspor Sarang Burung Walet ke Tiongkok Alami Peningkatan",
      description: "BADAN Karantina Indonesia berkomitmen untuk mendukung dan memfasilitasi ekspor sarang burung walet Indonesia ke Tiongkok. Komitmen itu diwujudkan melalui serangkaian langkah strategis yang diambil dalam kunjungan kerjanya ke Tiongkok dan kunjungan delegasi Barantin ke Yanzhiwu Ecological Industrial Park di Tong'an District, Xiamen, Tiongkok pada 10 Juni 2024 Yanzhiwu adalah perusahaan penjual produk sarang burung walet terbesar di Tiongkok yang terdepan...",
      image: bb1,
      link: "/edukasi/berita",
    },
    {
      id: 2,
      title: "Cuan Menjulang dari Budi Daya Sarang Burung Walet",
      description: "Indonesia dikenal sebagai negara yang kaya akan sumber daya alam, baik dari darat, laut, maupun udara. Nah, salah satu kekayaan alam yang menjadi sorotan dunia adalah sarang burung walet.Indonesia merupakan produsen utama sarang burung walet di dunia. Sarang burung walet punya nilai ekonomi yang cukup tinggi, utamanya di pasar internasional. Negara-negara seperti China, Hong Kong, Singapura, Vietnam dan Malaysia merupakan pembeli utama sarang burung walet dari Indonesia.",
      image: bb2,
      link: "/edukasi/berita",
    },
    {
      id: 3,
      title: "Sarang Burung Walet dalam Pengobatan Tradisional Tiongkok: Bahan Alami dengan Segudang Manfaat",
      description: "Sarang burung walet telah lama dikenal sebagai salah satu bahan paling berharga dalam pengobatan tradisional Tiongkok. Sejak zaman Dinasti Ming, sarang ini digunakan sebagai tonik kesehatan yang diyakini dapat memperpanjang umur, meningkatkan vitalitas, dan memperkuat sistem kekebalan tubuh. Manfaatnya yang kaya membuat sarang burung walet tidak hanya diminati di Tiongkok, tetapi juga di negara-negara Asia lain seperti Hong Kong, Singapura, dan Vietnam.",
      image: bb3,
      link: "/edukasi/berita",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === berita.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Swap setiap  5 detik

    return () => clearInterval(interval);
  }, [berita.length]);

  return (
    <div>
      {/* Section 1 with Background */}
      <section
        className="flex flex-wrap justify-between items-center mt-12 p-12 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgg})` }}
      >
        <div className="flex flex-col space-y-6 mt-[50px] pl-[50px] pr-[50px] w-full sm:w-1/2 items-start">
          <h2 className="text-7xl font-bold">Edukasi</h2>
          <h5 className="text-lg font-semibold">Mari belajar tentang Budidaya sarang Burung Walet yukk!!</h5>
          <div className="flex space-x-[30px]">
            <Link to="/edukasi/materipage">
              <button className="w-[150px] h-[44px] bg-[#246AA4] text-white font-semibold rounded-md flex items-center justify-center">
                <span className="text-base">Materi</span>
              </button>
            </Link>
            <Link to="/edukasi/blogartikel">
              <button className="w-[150px] h-[44px] bg-[#246AA4] text-white font-semibold rounded-md flex items-center justify-center">
                <span className="text-base">Artikel</span>
              </button>
            </Link>
            <Link to="/edukasi/berita">
              <button className="w-[150px] h-[44px] bg-[#246AA4] text-white font-semibold rounded-md flex items-center justify-center">
                <span className="text-base">Berita</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="relative w-full sm:w-1/2 flex justify-center items-center mt-[75px] pr-[50px]">
          <div className="w-[472px] h-[460px] rounded-full bg-white shadow-lg overflow-hidden relative z-10">
            <img
              src={bird}
              alt="Bird mascot"
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{ width: "573px", height: "509px", objectFit: "contain" }}
            />
          </div>
          <img
            src={crown}
            alt="Crown"
            className="absolute top-[-70px] left-1/4 transform -translate-x-1/2"
            style={{ width: "171px", height: "145px" }}
          />
          <img
            src={dots}
            alt="Decorative dots"
            className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
            style={{ width: "479px", height: "180px" }}
          />
        </div>
      </section>

      {/* Section 2: Materi */}
      <section className="mt-12 p-12">
        <div className="text-start pl-[50px] mb-12">
          <h2 className="text-4xl font-bold">Materi</h2>
          <h5 className="text-lg mt-5">
            Temukan materi apa pun tentang Budidaya Sarang Burung Walet
          </h5>
        </div>
        <div className="flex justify-center gap-[40px] pl-[50px]">
          {materials.map((material) => (
            <Link key={material.id} to={material.link}>
              <div className="w-[375px] h-[290px] bg-[#2E85C8] rounded-lg shadow-lg">
                <img
                  src={material.image}
                  alt={material.title}
                  className="w-[375px] h-[190px] object-cover rounded-t-lg"
                />
                <div className="flex justify-center items-center h-[100px] bg-[#2E85C8] rounded-b-lg">
                  <p className="text-white text-[20px] font-semibold">
                    {material.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Section 3: Blog Artikel */}
      <section className="mt-12 p-12">
        <div className="text-start pl-[50px] mb-12">
          <h2 className="text-4xl font-bold">Blog Artikel</h2>
          <h5 className="text-lg font=semibold mt-5">
            Temukan blog artikel apa pun tentang Budidaya Sarang Burung Walet
          </h5>
        </div>
        <div className="flex flex-col space-y-12 pl-[50px] items-center">
          {blogArticles.map((article) => (
            <Link key={article.id} to={article.link}>
              <div className="bg-[#2E85C8] w-[1360px] h-[300px] flex items-center p-4 rounded-md">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-[400px] h-[250px] object-cover"
                />
                <div className="ml-[30px] space-y-4">
                  <h2 className="text-2xl font-bold text-white">{article.title}</h2>
                  <p className="text-white text-sm">{article.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

     {/* Section 4: Berita */}
      <section className="mt-12 p-12">
        <div className="text-start pl-[50px] mb-12">
          <h2 className="text-4xl font-bold">Berita</h2>
          <h5 className="text-lg mt-5">
            Temukan berita apa pun tentang Budidaya Sarang Burung Walet
          </h5>
        </div>
        <BeritaCarousel />
      </section>
    </div>
  );
};

export default EdukasiPage;
