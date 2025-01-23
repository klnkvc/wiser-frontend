import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

// Import images
import bannerImage from "../assets/banner.png";
import people1Image from "../assets/people1.png";
import people2Image from "../assets/people2.png";
import people3Image from "../assets/people3.png";
import people4Image from "../assets/people4.png";

function Pakar() {
  const { pakarId } = useParams(); // Get parameter from URL

  // Data about the experts (pakar)
  const pakarData = {
    "fadli-sileuer": {
      name: "Pak Fadli Sileuw",
      location: "Bandung",
      rating: 4.3,
      experience: "15 tahun+",
      clients: "100+",
      expertise:
        "Budidaya Sarang Burung Walet, maintenance peralatan yang dibutuhkan, dan Pemasaran",
      services: [
        "Konsultasi pengelolaan gedung walet (online/offline)",
        "Rekomendasi strategi pemasaran sarang burung walet",
        "Bimbingan teknis budidaya walet",
        "Evaluasi kondisi gedung walet",
      ],
      testimonial:
        "Pak Fadli memberikan solusi tepat untuk kendala yang saya alami dalam budidaya walet. Berkat bantuannya, usaha saya berkembang pesat! – Zizi, Peternak Walet, Sumatra",
      packages: [
        {
          name: "Paket 1",
          price: "Rp150.000",
          details:
            "Detail layanan paket 1 termasuk sesi konsultasi dan evaluasi gedung walet.",
        },
        {
          name: "Paket 2",
          price: "Rp120.000",
          details:
            "Detail layanan paket 2 mencakup bimbingan pemasaran dan teknis.",
        },
      ],
      image: people1Image,
    },
    "muh-rayhan": {
      name: "Pak Muh. Rayhan",
      location: "Palopo",
      rating: 4.5,
      experience: "12 tahun+",
      clients: "80+",
      expertise:
        "Teknologi dan inovasi budidaya walet modern dengan metode terbaru.",
      services: [
        "Optimasi gedung walet menggunakan teknologi modern",
        "Pelatihan teknologi suara walet terbaru",
        "Panduan pemasangan alat otomatisasi gedung",
      ],
      testimonial:
        "Sangat membantu dan profesional! Berkat bimbingan Pak Rayhan, hasil panen walet saya meningkat signifikan. – Rani, Jawa Timur",
      packages: [
        {
          name: "Paket 1",
          price: "Rp200.000",
          details:
            "Konsultasi teknologi suara dan evaluasi gedung walet berbasis teknologi.",
        },
        {
          name: "Paket 2",
          price: "Rp170.000",
          details:
            "Panduan lengkap pemasangan alat otomatisasi dan strategi pemasaran.",
        },
      ],
      image: people2Image,
    },
    // Add other experts here if needed
  };

  const pakar = pakarData[pakarId];

  if (!pakar) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-3xl font-bold">Pakar Tidak Ditemukan</h1>
        <p>
          Silakan kembali ke halaman konsultasi untuk memilih pakar yang
          tersedia.
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-screen">
      {/* Left Banner Section */}
      <aside className="w-1/4 p-5 flex flex-col items-center min-h-screen">
        <div
          className="w-full h-full bg-cover bg-no-repeat flex flex-col items-center p-5 mr-11"
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          <button className="w-full bg-white font-raleway font-bold text-xl py-5 px-4 mb-4 mt-48 rounded-md ml-16">
            Konsultasi dengan Pakar
          </button>
          <button className="w-80 bg-bluebtn text-white font-raleway font-bold text-xl py-5 rounded-md">
            ChatBot WALET AI
          </button>
        </div>
      </aside>

      {/* Right Content Section */}
      <div className="flex-1 mr-48 mt-36">
        {/* Konsultasi Header - Outside Main */}
        <header className="py-8 text-center mr-60">
          <h1 className="text-4xl font-extrabold font-raleway mr-96 -ml-44">
            Konsultasi
          </h1>
          <p className="text-lg font-raleway font-semibold mt-4 mr-72">
            Konsultasikan Masalah Mu Dengan Para Pakar WISER
          </p>
        </header>

        {/* Main Content Section */}
        <main className="p-10 min-h-screen bg-bluepakar rounded-md ml-32">
          {/* Header for Pakar Profile */}
          <header className="flex items-center justify-between mb-">
            <Link to="/konsultasi">
              <button className="text-blue-600 text-xl font-bold">
                &#8592;
              </button>
            </Link>
            <h1 className="text-4xl font-extrabold font-raleway text-center"></h1>
            <div />
          </header>

          {/* Profile Section */}
          <section className="rounded-lg p-8 text-center">
            {/* Pakar Image and Info Box */}
            <div className="w-60 mx-auto rounded-md">
              <img
                src={pakar.image}
                alt={pakar.name}
                className="w-full h-64 object-cover"
              />
              <div className="rounded-md shadow-md shadow-black px-6 py-20 bg-gradient-to-br from-[#A3D0EE]/[0.25] via-[#A3D0EE]/[1.0] to-[#A3D0EE]/[1.0]">
                <h2 className="text-lg font-bold font-raleway">{pakar.name}</h2>
                <p className="text-gray-600 font-raleway mt-3">{pakar.location}</p>
              </div>
            </div>

            {/* Stats Box (Rating, Experience, Clients) */}
            <div className="mt-20 flex justify-center gap-20">
              <div className="bg-bluebox rounded-lg shadow-md w-56 p-4 text-center">
                <p className="text-blackhuruf font-raleway text-lg">Rating</p>
                <p className="text-blackhuruf font-raleway font-medium text-xl">
                  &#9733; {pakar.rating}
                </p>
              </div>
              <div className="bg-bluebox rounded-lg shadow-md w-56 p-4 text-center">
                <p className="text-blackhuruf font-raleway text-lg">
                  Pengalaman
                </p>
                <p className="text-blackhuruf font-raleway font-medium text-xl">
                  {pakar.experience}
                </p>
              </div>
              <div className="bg-bluebox rounded-lg shadow-md w-56 p-4 text-center">
                <p className="text-blackhuruf font-raleway text-lg">Klien</p>
                <p className="text-blackhuruf font-raleway font-medium text-xl">
                  {pakar.clients}
                </p>
              </div>
            </div>
          </section>

          {/* Expertise Section */}
          <section className="mt-10 ml-20">
            <h3 className="text-xl mb-4 font-raleway">Bidang Keahlian:</h3>
            <p className="text-black font-raleway">{pakar.expertise}</p>
          </section>

          {/* Services Section */}
          <section className="mt-10 ml-20">
            <h3 className="text-xl mb-4 font-raleway">Layanan:</h3>
            <ul className="text-black list-disc ml-4 list-inside font-raleway">
              {pakar.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </section>

          {/* Testimonial Section */}
          <section className="mt-10 ml-20">
            <h3 className="text-xl mb-4 font-raleway">Testimoni Pengguna:</h3>
            <p className="text-black font-raleway">{pakar.testimonial}</p>
          </section>

          <section className="mt-10">
            <div className="flex justify-center gap-20">
              {pakar.packages.map((pkg, index) => (
                <div
                key={index}
                className="bg-[#A3D0EE] rounded-lg shadow-lg p-6 w-80 flex flex-col justify-between"
              >
                {/* Judul Paket */}
                <h4 className="text-lg font-semibold text-center font-raleway">
                  {pkg.name}
                </h4>
              
                {/* Border Horizontal */}
                <div className="-mx-6">
                  <hr className="border-t-4 border-white my-4 w-full" />
                </div>
              
                {/* Detail Paket */}
                <p className="text-gray-700 text-sm text-center font-raleway">
                  {pkg.details}
                </p>
              
                {/* Rating dan Harga */}
                <div className="flex justify-between items-center mt-6">
                  <div className="flex items-center gap-2 text-blue-800">
                    <span className="text-xl font-raleway">&#9733;{pakar.rating}</span>
                  </div>
                  <p className="text-black font-bold font-raleway text-lg">
                    {pkg.price}
                  </p>
                </div>
              </div>
              
              ))}
            </div>
          </section>

          {/* CTA Button */}
          <div className="mt-10 text-center">
            <button className="bg-blue-600 text-white py-3 px-8 rounded-md font-bold">
              Daftar Aplikasi
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Pakar;
