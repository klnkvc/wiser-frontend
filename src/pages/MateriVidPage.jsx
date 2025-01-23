// src/pages/MateriVidPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "../api/axiosConfig";
import VideoCard from "../component/VideoCardDetail"; 
const defaultVideoImage = "/assets/materi/images/materi_1/main.png"; 

const MateriVidPage = () => {
  const { id } = useParams(); // ID materi
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const videoId = queryParams.get("video"); // Ambil video id dari query parameter
  const [materi, setMateri] = useState(null);
  const [mainVideo, setMainVideo] = useState(null);
  const [otherVideos, setOtherVideos] = useState([]);
  const [relatedMateri, setRelatedMateri] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchMateri = async () => {
      try {
        const response = await axios.get(`/materi/${id}`); // Fetch ke /materi/:id
        console.log("API Response:", response.data); // Debugging

        setMateri(response.data.materi);

        // Jika ada videoId dalam query, pilih video tersebut sebagai mainVideo
        let selectedVideo = null;
        if (videoId) {
          selectedVideo = response.data.videos.find(
            (video) => video.id === parseInt(videoId, 10)
          );
        }

        // Jika tidak ada videoId atau videoId tidak ditemukan, pilih video utama (is_main === 1)
        if (!selectedVideo) {
          selectedVideo = response.data.videos.find(
            (video) => video.is_main === 1
          );
        }

        if (!selectedVideo) {
          setError("Video utama tidak ditemukan");
          setLoading(false);
          return;
        }

        setMainVideo(selectedVideo);
        const otherVids = response.data.videos.filter(
          (video) => video.id !== selectedVideo.id
        );
        setOtherVideos(otherVids);
        setRelatedMateri(response.data.related_materi);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching materi:", error);
        setError("Gagal mengambil data materi");
        setLoading(false);
        navigate("/404");
      }
    };

    fetchMateri();
  }, [id, videoId, navigate]);

  const handleVideoClick = (video) => {
    setMainVideo(video);
    // Update URL dengan query parameter untuk video yang dipilih
    navigate(`/materivideo/${id}?video=${video.id}`);
  };

  // Handle search input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter otherVideos berdasarkan searchTerm
  const filteredOtherVideos = otherVideos.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-20 text-red-500">{error}</div>;
  }

  // Debugging
  console.log("VITE_API_BASE_URL:", import.meta.env.VITE_API_BASE_URL);

  return (
    <div className="container mx-auto px-4 py-8 max-w-full mt-20">
      {/* Search Bar */}
      <div className="flex justify-center items-center w-full sm:w-1/2 mt-5 mx-auto">
        <div
          className="flex items justify-center bg-white h-14 rounded-lg border"
          style={{
            borderColor: "#246AA4",
            width: "60%",
          }}
        >
          {/* Tombol Pencarian */}
          <button className="px-4 flex items-center justify-center">
            <svg
              className="w-7 h-7"
              fill="none"
              style={{ stroke: "#246AA4" }}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Input Pencarian */}
          <input
            type="text"
            placeholder="Cari Materi"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full h-full px-4 placeholder-[#246AA4] focus:outline-none focus:ring-2 focus:ringblue-400 rounded-r-lg"
            style={{
              borderLeft: "none",
              color: "#246AA4",
            }}
          />
        </div>
      </div>

      {/* Main Video Section */}
      <div className="mt-16 mb-8 flex flex-col items-center">
        <h1 className="text-5xl font-bold text-center font-railway mb-20">
          Materi
        </h1>

        <div className="mt-6 w-full max-w-4xl flex justify-center mx-auto">
          <div className="relative transition-all duration-500">
            {mainVideo ? (
              <iframe
                width="1040"
                height="585"
                src={mainVideo.video_url}
                title={mainVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in
picture"
                allowFullScreen
                className="rounded-lg shadow-lg"
              ></iframe>
            ) : (
              <p className="text-center text-gray-500">
                Video utama tidak tersedia.
              </p>
            )}
          </div>
        </div>

        {/* Container for description */}
        {mainVideo && (
          <div
            className="mt-8 w-full p-6 rounded-lg shadow-lg mx-auto"
            style={{ maxWidth: "1040px" }}
          >
            <h2 className="text-xl font-semibold text-left font-railway">
              {mainVideo.title}
            </h2>
            <p className="mt-4 text-black text-left font-railway">
              {mainVideo.description}
            </p>
            <p className="mt-3 text-black text-sm font-railway">
              Oleh {mainVideo.author}
            </p>
            <p className="mt-3 text-black text-sm font-semibold font-railway">
              Duration:
              {mainVideo.duration}
            </p>
          </div>
        )}
      </div>

      {/* Other Videos Section */}
      <div className="mb-8" style={{ marginTop: "80px" }}>
        <div className="bg-[#246AA4] py-8 w-full">
          <h2
            className="text-2xl font-semibold mb-4 font-railway text-center text-white"
          >
            Selanjutnya
          </h2>
          <div className="grid grid-cols-1 gap-5 justify-center max-w-[1040px] mx-auto">
            {filteredOtherVideos.map((video) => (
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
                onClick={() => handleVideoClick(video)} // Pilih video utama
              />
            ))}
          </div>
        </div>
      </div>

      {/* Cards Related Materi */}
      <br />
      <h2 className="text-center text-3xl font-bold mb-8">Materi Lainnya</h2>
      <br />
      <div className="flex flex-wrap justify-center gap-8">
        {relatedMateri.map((item) => (
          <div
            key={item.id}
            className="w-full md:w-[32%] mb-8 p-4 border rounded-lg shadow-lg cursor-pointer bg-[#246AA4]"
            onClick={() => navigate(`${item.page_url}`)} // Pastikan routing sesuai
          >
            <img
              src={
                item.image_url?.startsWith("http")
                  ? item.image_url
                  : `${import.meta.env.VITE_API_BASE_URL.replace("/api", "")}${
                      item.image_url
                    }`
              }
              alt={item.title}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-center font-railway text-white">
              {item.title}
            </h3>
            <p className="text-center text-white">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MateriVidPage;
