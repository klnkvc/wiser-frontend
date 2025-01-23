// src/pages/MateriDetailPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../api/axiosConfig";
const defaultMainImage = "/assets/materi/images/materi_1/main.png"; // Gambar default
import VideoCard from "../component/VideoCard"; // Perbaiki path import

const MateriDetailPage = () => {
  const { id } = useParams(); // ID materi dari route
  const navigate = useNavigate();
  const [materi, setMateri] = useState(null); // Detail materi
  const [videos, setVideos] = useState([]); // Daftar video untuk materi ini
  const [relatedMateri, setRelatedMateri] = useState([]); // Materi terkait
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const videosPerPage = 10;
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    const fetchMateriDetail = async () => {
      try {
        const response = await axios.get(`/materi/${id}`); // Fetch ke /materi/:id
        setMateri(response.data.materi);
        setVideos(response.data.videos);
        setFilteredVideos(response.data.videos);
        setRelatedMateri(response.data.related_materi);
        setTotalPages(Math.ceil(response.data.videos.length / videosPerPage));
      } catch (error) {
        console.error("Error fetching materi detail:", error);
        navigate("/404"); // Redirect ke halaman 404 jika gagal
      }
    };

    fetchMateriDetail();
  }, [id, navigate]);

  // Memfilter video berdasarkan searchTerm
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredVideos(videos);
    } else {
      const results = videos.filter((video) =>
        video.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredVideos(results);
      setPage(1);
      setTotalPages(Math.ceil(results.length / videosPerPage));
    }
  }, [searchTerm, videos]);

  // Pagination
  const indexOfLastVideo = page * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = filteredVideos.slice(
    indexOfFirstVideo,
    indexOfLastVideo
  );

  // Handler untuk memilih video utama (opsional)
  const handleVideoClick = (video) => {
    // Implementasikan logika jika diperlukan
    navigate(`/materivideo/${id}?video=${video.id}`);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white pt-16 font-railway">
      {/* Search Bar */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative w-full max-w-[505px] mt-20 mb-6"
      >
        <span className="absolute inset-y-0 left-3 flex items-center text-[#609AC1]">
          {/* Ikon search */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            style={{ stroke: "#246AA4" }}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Cari Materi"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-2 border-2 border-[#246AA4] bg-white text-[#246AA4] rounded-lg 
shadow-sm focus:outline-none focus:border-[#246AA4] placeholder-[#246AA4]"
        />
      </form>

      {/* Teks Materi */}
      <div className="text-center w-full mb-6">
        <h2 className="text-[32px] font-semibold text-black">Materi</h2>
      </div>

      {/* Gambar Utama */}
      <div className="text-center w-full">
        <img
          src={
            materi && materi.main_image_url
              ? materi.main_image_url.startsWith("http")
                ? materi.main_image_url
                : `${import.meta.env.VITE_API_BASE_URL.replace(
                  "/api",
                  ""
                )}${materi.main_image_url}`
              : defaultMainImage
          }
          alt={materi ? materi.title : "Materi"}
          className="w-[1040px] h-[590px] rounded-lg object-cover shadow-lg mt-6 mx-auto"
        />
      </div>

      {/* Teks di bawah gambar */}
      <div className="text-center w-full mt-8 mb-9">
        <h2 className="text-4xl font-bold text-black">
          {materi ? materi.title : "Materi"}
        </h2>
      </div>

      {/* Box 'Materi Video' */}
      <div className="w-[1040px] h-[55px] bg-[#609AC1] flex items-center justify-center mt-8">
        <h2 className="text-[25px] font-bold text-black">
          {filteredVideos.length} Materi Video
        </h2>
      </div>

      {/* Video Cards */}
      <div className="w-[1040px] flex flex-col gap-6 mt-6 mb-[150px]">
        {currentVideos.length > 0 ? (
          currentVideos.map((video) => (
            <VideoCard
              key={video.id}
              image={
                video.image_url?.startsWith("http")
                ? video.image_url
                : import.meta.env.VITE_API_BASE_URL
                ? `${import.meta.env.VITE_API_BASE_URL.replace(
                    "/api",
                    ""
                  )}${video.image_url}`
                : "/assets/materi/images/materi_1/main.png" // Gambar default jika API_BASE_URL tidak terdefinisi
            }
              title={video.title}
              description={video.description}
              duration={video.duration}
              link={`/edukasi/materipage/materivideo/${id}?video=${video.id}`} // Tambahkan query parameter
              onClick={() => handleVideoClick(video)} // Handler untuk memilih video
            />
          ))
        ) : (
          <p className="text-center text-gray-500">
            Tidak ada video yang cocok dengan pencarian.
          </p>
        )}
      </div>

      
    </div>
  );
};

export default MateriDetailPage;
