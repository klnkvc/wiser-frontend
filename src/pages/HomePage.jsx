// src/component/Home.jsx
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpeg";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.jpg";
import sectionImg1 from "../assets/sectionImage1.png";
import sectionImg2 from "../assets/Wallet1.jpg";
import appScreenshot from "../assets/appScreenshot.png";
import screenshot1 from "../assets/screenshot1.png";
import screenshot2 from "../assets/screenshot2.png";
import screenshot3 from "../assets/screenshot3.png";
import screenshot4 from "../assets/screenshot4.png";

import { Autoplay, Pagination } from "swiper/modules";

const Home = () => {
  const [selectedFeature, setSelectedFeature] = useState("");

  const featureContent = {
    "Wallet AI":
      "Walet AI adalah fitur chatbot cerdas yang dirancang untuk memberikan konsultasi praktis dan cepat terkait budidaya sarang burung walet. Dengan teknologi kecerdasan buatan, Walet AI siap membantu Anda menjawab pertanyaan, memberikan saran, serta solusi berdasarkan data dan pengalaman dalam manajemen budidaya sarang burung walet. Baik Anda seorang pemula atau profesional, Walet AI memudahkan Anda mengakses informasi, tips, dan panduan kapan saja, di mana saja.",
    Consultation:
      "Get expert consultation and personalized advice for effective wallet farming.",
    Education:
      "Access a wide range of educational resources on wallet farming best practices.",
    Management:
      "Manage your wallet bird farm with tools for environment monitoring, production tracking, and analytics.",
  };
  const slides = [
    {
      img: img1,
      title: "WISER",
      description: "Walet Integrated Sustainable Ecosystem",
    },
    {
      img: img2,
      title: "WISER",
      description: "Bersama Wiser, Wujudukan Impian Anda Di Dunia Walet",
    },
    {
      img: img3,
      title: "WISER",
      description: "Mulai Perjalanan Budidaya Walet Anda Bersama Wiser",
    },
    {
      img: img4,
      title: "WISER",
      description: "Teknologi Modern Untuk Budidaya Yang Lebih Baik",
    },
    {
      img: img5,
      title: "WISER",
      description: "Daftar Sekarang Dan Raih Kesuksesan Dalam Budidaya Walet",
    },
  ];

  return (
    <div>
      <style global jsx>{`
        .swiper-pagination-bullet {
          width: 100px !important;
          height: 8px !important;
          background-color: rgba(255, 255, 255, 0.5) !important;
          border-radius: 0 !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #246aa4 !important;
          opacity: 1 !important;
        }
      `}</style>

      {/* Image Slider */}
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        effect="fade"
        className="mySwiper relative"
        modules={[Autoplay, Pagination]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[100vh]">
              <img
                src={slide.img}
                alt={`Slide Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-[50%] bg-black bg-opacity-50 flex items-center justify-center text-white text-center">
                <div>
                  <h2 className="text-9xl font-raleway font-bold">
                    {slide.title}
                  </h2>
                  <p className="mt-4 text-4xl font-extrabold font-raleway">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Information Sections */}
      <div className="py-20 px-8 space-y-20 flex flex-col items-center">
        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row-reverse items-center lg:space-x-16 space-y-10 lg:space-y-0 max-w-6xl">
          <img
            src={sectionImg1}
            alt="Feature 1"
            className="w-full max-w-xl lg:w-1/2 object-cover rounded-lg shadow-lg ml-20"
          />
          <div className="text-center lg:text-left max-w-2xl mx-auto">
            <h3 className="text-8xl font-extrabold mb-6 font-raleway text-black">
              WISER
            </h3>
            <p className="text-xl text-black leading-relaxed font-raleway">
              WISER adalah aplikasi inovatif yang dirancang untuk memudahkan
              para peternak dalam memulai dan mengelola budidaya sarang burung
              walet. WISER merupakan kependekan dari Walet Integrated
              Sustainable Ecosystem, yang menawarkan berbagai fitur untuk
              meningkatkan efisiensi dan efektivitas dalam menjalankan usaha
              budidaya.
            </p>

            {/* Buttons */}
            <div className="mt-8 space-x-4">
              <button className="px-12 py-5 bg-bluebtn text-white font-bold rounded-lg text-lg transition duration-300"
               onClick={() => window.location.href = '/tentang-kami'}
               >
                Hubungi Kami
              </button>
              <button className="px-12 py-5 bg-bluebtn text-white font-bold rounded-lg text-lg transition duration-300">
                Daftar Aplikasi
              </button>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="relative flex flex-col lg:flex-row items-center lg:space-x-16 space-y-10 lg:space-y-0 max-w-5xl">
          {/* Bundar Kanan Atas */}
          <div
            className="absolute top-[10%] right-[94%] w-[600px] h-[600px] rounded-full bg-cover bg-no-repeat z-0"
            style={{ backgroundImage: `url('/src/assets/bundarburung.png')` }} // Pastikan path sesuai
          ></div>

          {/* Gambar */}
          <img
            src={sectionImg2}
            alt="Feature 2"
            className="w-full max-w-xl lg:w-1/2 object-cover rounded-lg shadow-lg relative z-10"
          />

          {/* Konten Teks */}
          <div className="text-center lg:text-left max-w-2xl mx-auto relative z-10">
            <h3 className="text-4xl font-bold mb-6 font-raleway">
              Apa itu budidaya sarang burung walet?
            </h3>
            <p className="text-xl text-black leading-relaxed font-raleway">
              Budidaya sarang burung walet adalah praktik pemeliharaan burung
              walet, khususnya dari jenis Collocalia atau Aerodramus, untuk
              menghasilkan sarangnya yang terbuat dari air liur dan memiliki
              nilai ekonomi tinggi di Asia. Lokasi ideal untuk budidaya ini
              adalah daerah beriklim hangat dan lembab. Sarang walet bernilai
              tinggi di pasar internasional, tetapi budidaya ini juga menghadapi
              tantangan seperti penyakit, predator, dan fluktuasi harga.
              Keberhasilan budidaya memerlukan pengetahuan dan keterampilan
              khusus.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col lg:flex-row-reverse items-center lg:space-x-16 space-y-10 lg:space-y-0 max-w-6xl relative">
          {/* Background Gambar di Luar Frame */}
          <div
            className="absolute top-0 right-[-15%] w-[65%] h-[110%] rounded-[30px] bg-cover bg-center bg-no-repeat z-0 -mt-10"
            style={{ backgroundImage: `url('/src/assets/bghp.png')` }}
          ></div>

          <div
            className="absolute top-[-30%] right-[-40%] w-[800px] h-[800px] rounded-full bg-cover bg-center bg-no-repeat z-0"
            style={{ backgroundImage: `url('/src/assets/bundaratas.png')` }}
          ></div>

          {/* Background Bundar Kiri Bawah */}
          <div
            className="absolute bottom-[-10%] left-[-50%] w-[600px] h-[600px] rounded-full bg-cover bg-center bg-no-repeat z-0"
            style={{ backgroundImage: `url('/src/assets/bundarbawah.png')` }}
          ></div>

          {/* Frame Handphone */}
          <div className="relative w-full max-w-xl lg:w-1/2 rounded-[30px] bg-black p-4 shadow-lg z-10">
            <img
              src={appScreenshot}
              alt="App Screenshot"
              className="w-full h-full object-cover rounded-[25px] border-[5px] border-gray-300"
            />
          </div>

          {/* Teks dan Tombol */}
          <div className="text-center lg:text-left max-w-xl mx-auto z-10">
            <h3 className="text-4xl font-bold mb-6 font-raleway">
              Kelola Hasil Produksi Waletmu dengan Aplikasi WISER
            </h3>
            <p className="text-xl text-black leading-relaxed font-raleway">
              Wiser adalah aplikasi digital yang dirancang khusus untuk membantu
              petani burung walet dalam mengelola, belajar, dan berkonsultasi
              terkait budidaya sarang burung walet. Aplikasi ini menawarkan
              berbagai fitur yang memudahkan pengguna untuk memantau lingkungan
              rumah waletnya sehingga mendukung kondisi ideal bagi burung walet
              untuk bersarang.
            </p>
            <div className="mt-8 space-x-4">
              <button className="px-12 py-5 bg-bluebtn text-white font-bold rounded-lg text-xl">
                Daftar Aplikasi
              </button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="flex flex-col w-[95vw] lg:w-[90vw] min-h-screen bg-gradient-to-b from-bluebox to-purewhite rounded-t-custom-150 shadow-lg p-16 mb-20 space-x-10 overflow-hidden">
          <h1 className="text-7xl font-extrabold text-center ml-6 mb-8 font-raleway text-fontblu">
            Fitur
          </h1>
          <h1 className="text-7xl font-extrabold text-center mb-8 font-raleway text-fontblu">
            W I S E R
          </h1>
          {/* Bagian Gambar dan Tombol */}
          <div className="flex flex-col lg:flex-row w-full space-y-6 lg:space-y-0 lg:space-x-10 mt-24">
            {/* 4 Gambar (Grid 2x2) */}
            <div className="grid grid-cols-2 gap-8 w-full lg:w-1/2">
              {[screenshot1, screenshot2, screenshot3, screenshot4].map(
                (screenshot, index) => (
                  <img
                    key={index}
                    src={screenshot}
                    alt={`App Screenshot ${index + 1}`}
                    className="object-cover w-full h-[350px] rounded-lg shadow"
                  />
                )
              )}
            </div>

            {/* 4 Tombol dan Deskripsi */}
            <div className="flex flex-col w-full lg:w-1/2 space-y-6 ml-auto lg:ml-16">
              {/* Button 1 - Left */}
              <div className="flex flex-col items-start space-y-4 pt-32">
                <button
                  onClick={() => setSelectedFeature("Wallet AI")}
                  className={`px-10 py-6 text-xl font-extrabold rounded-lg transition duration-300 w-[30%] ${
                    selectedFeature === "Wallet AI"
                      ? "bg-bluebtn text-white"
                      : "bg-bluebtn text-white font-raleway"
                  }`}
                >
                  WALET AI
                </button>
                {selectedFeature === "Wallet AI" && (
                  <div className="p-4 rounded-lg w-full text-left">
                    <p className="text-base leading-relaxed">
                      {featureContent["Wallet AI"]}
                    </p>
                  </div>
                )}
              </div>

              {/* Button 2 - Right */}
              <div className="flex flex-col items-end space-y-4">
                <button
                  onClick={() => setSelectedFeature("Consultation")}
                  className={`px-10 py-6 text-xl font-extrabold rounded-lg transition duration-300 w-[30%] mr-20 ${
                    selectedFeature === "Consultation"
                      ? "bg-bluebtn text-white"
                      : "bg-bluebtn text-white font-raleway"
                  }`}
                >
                  Edukasi
                </button>
                {selectedFeature === "Consultation" && (
                  <div className="p-4 rounded-lg w-full text-left">
                    <p className="text-base leading-relaxed">
                      {featureContent["Consultation"]}
                    </p>
                  </div>
                )}
              </div>

              {/* Button 3 - Left */}
              <div className="flex flex-col items-start space-y-4 pt-8">
                <button
                  onClick={() => setSelectedFeature("Education")}
                  className={`px-10 py-6 text-xl font-extrabold rounded-lg transition duration-300 w-[30%] ${
                    selectedFeature === "Education"
                      ? "bg-bluebtn text-white"
                      : "bg-bluebtn text-white font-raleway"
                  }`}
                >
                  Konsultasi
                </button>
                {selectedFeature === "Education" && (
                  <div className="p-4 rounded-lg w-full text-left">
                    <p className="text-base leading-relaxed">
                      {featureContent["Education"]}
                    </p>
                  </div>
                )}
              </div>

              {/* Button 4 - Right */}
              <div className="flex flex-col items-end space-y-4 pt-8">
                <button
                  onClick={() => setSelectedFeature("Management")}
                  className={`px-10 py-6 text-xl font-extrabold rounded-lg transition duration-300 w-[30%] mr-20 ${
                    selectedFeature === "Management"
                      ? "bg-bluebtn text-white"
                      : "bg-bluebtn text-white font-raleway"
                  }`}
                >
                  Manajemen
                </button>
                {selectedFeature === "Management" && (
                  <div className="p-4 rounded-lg w-full text-left">
                    <p className="text-base leading-relaxed">
                      {featureContent["Management"]}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bagian Berita */}
          <div className="flex flex-col items-center w-full space-y-8 mt-20">
            <h2 className="text-6xl font-extrabold text-center font-raleway">
              Berita Terbaru
            </h2>

            {/* Berita Pertama */}
            <div className="flex lg:flex-row items-center p-12 w-full mb-10 mr-10">
              <img
                src={img1} // replace img1 with the desired news image or add more images as needed
                alt="Berita Image"
                className="w-full lg:w-1/2 h-full object-cover rounded-lg shadow-lg mb-8 lg:mb-0"
              />
              <div className="lg:ml-12 text-center lg:text-left max-w-4xl">
                <h3 className="text-4xl font-extrabold mb-12 font-raleway text-fontblu">
                  Nilai Ekspor Sarang Burung Walet ke Tiongkok Alami Peningkatan
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed font-raleway">
                  BADAN Karantina Indonesia berkomitmen untuk mendukung dan
                  memfasilitasi ekspor sarang burung walet Indonesia ke
                  Tiongkok. Komitmen itu diwujudkan melalui serangkaian langkah
                  strategis yang diambil dalam kunjungan kerjanya ke Tiongkok
                  dan kunjungan delegasi Barantin ke Yanzhiwu Ecological
                  Industrial Park di Tong'an District, Xiamen, Tiongkok pada 10
                  Juni 2024. Yanzhiwu adalah perusahaan penjual produk sarang
                  burung walet terbesar di Tiongkok yang terdepan...
                </p>
              </div>
            </div>

            {/* News Grid - 3 Per Column */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mr-11">
              {/* Card 1 */}
              <div className="bg-bluebox rounded-lg flex flex-col items-center overflow-hidden w-[95%] mx-auto md:w-[80%] lg:w-[70%] h-[550px]">
                <img
                  src={img2}
                  alt="Berita Image 1"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 flex flex-col justify-between h-full">
                  <h3 className="text-xl text-fontblu font-bold font-raleway mb-4">
                    Menuju Sukses dengan Budidaya Sarang Burung Walet
                  </h3>
                  <p className="text-fontblu text-base flex-1">
                    Burung walet hanya bisa hidup di Asia Tenggara karena
                    membutuhkan daerah dengan curah hujan tinggi, seperti
                    Indonesia, Thailand, Filipina, dan Vietnam.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-bluebox rounded-lg flex flex-col items-center overflow-hidden w-[95%] mx-auto md:w-[80%] lg:w-[70%] h-[550px]">
                <img
                  src={img2}
                  alt="Berita Image 1"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 flex flex-col justify-between h-full">
                  <h3 className="text-xl text-fontblu font-bold font-raleway mb-4">
                    Menuju Sukses dengan Budidaya Sarang Burung Walet
                  </h3>
                  <p className="text-fontblu text-base flex-1">
                    Burung walet hanya bisa hidup di Asia Tenggara karena
                    membutuhkan daerah dengan curah hujan tinggi, seperti
                    Indonesia, Thailand, Filipina, dan Vietnam.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-bluebox rounded-lg flex flex-col items-center overflow-hidden w-[95%] mx-auto md:w-[80%] lg:w-[70%] h-[550px]">
                <img
                  src={img2}
                  alt="Berita Image 1"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 flex flex-col justify-between h-full">
                  <h3 className="text-xl text-fontblu font-bold font-raleway mb-4">
                    Menuju Sukses dengan Budidaya Sarang Burung Walet
                  </h3>
                  <p className="text-fontblu text-base flex-1">
                    Burung walet hanya bisa hidup di Asia Tenggara karena
                    membutuhkan daerah dengan curah hujan tinggi, seperti
                    Indonesia, Thailand, Filipina, dan Vietnam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
