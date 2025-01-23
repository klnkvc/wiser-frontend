import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";

const DashboardBerita = () => {
  const [beritaData, setBeritaData] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Untuk menangkap input pencarian
  const [filteredGridData, setFilteredGridData] = useState([]); // Data untuk grid yang terfilter
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const articlesRef = useRef(null); // Referensi untuk Grid Berita
  const navigate = useNavigate();

  // Fungsi untuk memformat tanggal
  const formatDate = (isoString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(isoString);
    return date.toLocaleDateString('id-ID', options);
  };

  // Fetch data dari JSON
  useEffect(() => {
    const fetchBerita = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_APP_URL+"/api/berita");
        if (!response.ok) {
          throw new Error("Gagal memuat data berita");
        }
        const data = await response.json();
        setBeritaData(data);
        setFilteredGridData(data); // Menampilkan Default grid 
      } catch (error) {
        console.error("Error:", error);
      }
    };
    fetchBerita();
  }, []);

  // Filter data untuk Grid Berita berdasarkan search term
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredGridData(beritaData);
    } else {
      const filteredData = beritaData.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredGridData(filteredData);
    }
    setCurrentPage(1); // Reset ke halaman pertama saat melakukan pencarian
  }, [searchTerm, beritaData]);

  const totalPages = Math.ceil(filteredGridData.length / itemsPerPage);
  const currentItems = filteredGridData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const beritaMain = beritaData.find((berita) => berita.id === 1);
  const sideBeritaData = beritaData.filter((berita) =>
    [2, 3].includes(berita.id)
  );
  const largeArticles = beritaData.filter((berita) =>
    [4, 5].includes(berita.id)
  );
  const smallArticles = beritaData.filter((berita) =>
    [6, 7, 8].includes(berita.id)
  );

  const handleNavigate = (link) => {
    navigate(link);
  };

  const scrollToArticles = () => {
    if (articlesRef.current) {
      window.scrollTo({
        top: articlesRef.current.offsetTop - 150, // Sesuaikan offset jika diperlukan
        behavior: "smooth",
      });
    }
  };

  // Fungsi untuk menangkap tombol Enter pada search bar
  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      scrollToArticles();
    }
  };

  if (!beritaData.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Bar */}
      <div className="mb-16 flex justify-center mt-24">
        <div className="relative w-full max-w-md">
          <span className="absolute inset-y-0 left-3 flex items-center text-white">
            {/* SVG Icon */}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6154 10.1538C16.6154 8.375 15.9832 6.85337 14.7188 5.58894C13.4543 4.32452 11.9327 3.69231 10.1538 3.69231C8.375 3.69231 6.85337 4.32452 5.58894 5.58894C4.32452 6.85337 3.69231 8.375 3.69231 10.1538C3.69231 11.9327 4.32452 13.4543 5.58894 14.7188C6.85337 15.9832 8.375 16.6154 10.1538 16.6154C11.9327 16.6154 13.4543 15.9832 14.7188 14.7188C15.9832 13.4543 16.6154 11.9327 16.6154 10.1538ZM24 22.1538C24 22.6538 23.8173 23.0865 23.4519 23.4519C23.0865 23.8173 22.6538 24 22.1538 24C21.6346 24 21.2019 23.8173 20.8558 23.4519L15.9087 18.5192C14.1875 19.7115 12.2692 20.3077 10.1538 20.3077C8.77885 20.3077 7.46394 20.0409 6.20913 19.5072C4.95433 18.9736 3.8726 18.2524 2.96394 17.3438C2.05529 16.4351 1.33413 15.3534 0.800481 14.0986C0.266827 12.8438 0 11.5288 0 10.1538C0 8.77885 0.266827 7.46394 0.800481 6.20913C1.33413 4.95433 2.05529 3.8726 2.96394 2.96394C3.8726 2.05529 4.95433 1.33413 6.20913 0.800481C7.46394 0.266827 8.77885 0 10.1538 0C11.5288 0 12.8438 0.266827 14.0986 0.800481C15.3534 1.33413 16.4351 2.05529 17.3438 2.96394C18.2524 3.8726 18.9736 4.95433 19.5072 6.20913C20.0409 7.46394 20.3077 8.77885 20.3077 10.1538C20.3077 12.2692 19.7115 14.1875 18.5192 15.9087L23.4663 20.8558C23.8221 21.2115 24 21.6442 24 22.1538Z"
                fill="#246AA4"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Cari Berita"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update pencarian
            onKeyDown={handleSearchKeyPress} // Tangkap tombol Enter
            className="w-full pl-10 pr-4 py-2 rounded-[7px] border-2 border-iconig bg-white bg-opacity-75 text-iconig focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder:text-iconig"
          />
        </div>
      </div>

      <h1 className="text-[70px] font-extrabold text-center mb-16">Berita</h1>

      {/* Main Image dan Side Images */}
      <div className="flex flex-col lg:flex-row gap-12 mb-16">
        {/* Main Image */}
        {beritaMain && (
          <div
            className="relative w-full lg:w-2/3 cursor-pointer"
            onClick={() => handleNavigate(`/edukasi/berita/${beritaMain.id}`)}
          >
            <img
              src={beritaMain.mainPhoto}
              alt={beritaMain.title}
              className="rounded-lg shadow-md w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#D9D9D9]/[0.04] via-[#5F5F5F]/[0.52] to-[#323131]/[1.0] rounded-lg"></div>
            <div className="absolute bottom-4 left-4 right-4 p-4 z-20">
              <h2 className="text-white text-2xl font-semibold">
                {beritaMain.title}
              </h2>
            </div>
          </div>
        )}

        {/* Side Image */}
        <div className="flex flex-col w-full lg:w-1/3 gap-4">
          {sideBeritaData.map((item) => (
            <div
              key={item.id}
              className="relative cursor-pointer"
              onClick={() => handleNavigate(`/edukasi/berita/${item.id}`)}
            >
              <img
                src={item.mainPhoto}
                alt={item.title}
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#D9D9D9]/[0.04] from-11% via-[#5F5F5F]/[0.52] via-30% to-[#323131]/[1.0] to-96% rounded-lg"></div>
              <div className="absolute bottom-2 left-2 right-2 p-2 z-20">
                <h3 className="text-white text-lg font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Left Side - Two Large Articles */}
      <div className="flex flex-row gap-7 items-center mb-20">
        <div className="col-span-2 space-y-6">
          {largeArticles.map((item) => (
            <div
              key={item.id}
              className="relative w-[540px] h-[302px] cursor-pointer"
              onClick={() => handleNavigate(`/edukasi/berita/${item.id}`)}
            >
              <img
                src={item.mainPhoto}
                alt={item.title}
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#D9D9D9]/[0.04] via-[#5F5F5F]/[0.52] to-[#323131]/[1.0] rounded-lg"></div>
              <div className="absolute bottom-3 left-3 p-4">
                <h3 className="text-white text-lg font-semibold">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - List of Smaller Articles */}
        <div className="space-y-14">
          {smallArticles.map((item) => (
            <div
              key={item.id}
              className="flex gap-6 items-center cursor-pointer"
              onClick={() => handleNavigate(`/edukasi/berita/${item.id}`)}
            >
              <img
                src={item.mainPhoto}
                alt={item.title}
                className="w-[253px] h-[163px] object-cover rounded-lg shadow-md"
              />
              <div className="text-balance">
                {/* Title dengan batas karakter */}
                <h4 className="text-xl font-semibold">
                  {item.title.length > 50 ? `${item.title.substring(0, 52)}...` : item.title}
                </h4>
                {/* Informasi Penulis dan Tanggal */}
                <p className="text-xl text-black mt-3">
                  oleh {item.author} / {formatDate(item.date)}
                </p>
                {/* Konten/Deskripsi dengan batas karakter */}
                <p
                  className="text-[16px] text-black mt-2 text-justify"
                  dangerouslySetInnerHTML={{
                    __html: item.content.length > 100
                      ? `${item.content.substring(0, 110)}...`
                      : item.content,
                  }}
                ></p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid Berita */}
      <div
        ref={articlesRef} // Referensi untuk scroll
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
      >
        {currentItems.length > 0 ? (
          currentItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleNavigate(`/edukasi/berita/${item.id}`)}
              className="relative w-auto h-[350px] rounded-lg shadow-md overflow-hidden cursor-pointer"
            >
              <img
                src={item.mainPhoto}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#D9D9D9]/[0.04] via-[#5F5F5F]/[0.52] to-[#323131]/[1.0] rounded-lg"></div>
              <div className="absolute bottom-1 left-0 p-6">
                <h3 className="text-white font-semibold text-[20px]">
                  {item.title}
                </h3>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-xl text-gray-700 mt-10">
            Tidak ada berita yang cocok dengan pencarian.
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-10 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-full text-gray-700 font-semibold hover:bg-gray-300"
        >
          {"<"}
        </button>
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page + 1)}
            className={`px-3 py-1 rounded-full ${
              currentPage === page + 1 ? "bg-customBlue" : "text-gray-700"
            } font-semibold hover:bg-blue-400`}
          >
            {page + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded-full text-gray-700 font-semibold hover:bg-gray-300"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default DashboardBerita;
