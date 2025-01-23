// src/components/VideoCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ image, title, description, duration, link, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick(); // Untuk memilih video utama
    }
    navigate(link);
  };

  return (
    <div
      className="cursor-pointer flex flex-col md:flex-row items-center gap-6 rounded-lg overflow-hidden p-4 "
      onClick={handleClick}
    >
      {/* Gambar di kiri */}
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full md:w-[415px] h-[223px] object-cover rounded-lg"
      />

      {/* Teks di kanan */}
      <div className="flex-1 leading-relaxed">
        <h4 className="text-xl font-bold text-white">{title}</h4>
        <p className="text-base text-white mt-2">{description}</p>
        <p className="mt-5 text-sm text-white">Duration: {duration}</p>
      </div>
    </div>
  );
};
export default VideoCard;
