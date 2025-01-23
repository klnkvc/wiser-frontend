// src/pages/NotFoundPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-9xl font-bold text-black">404</h1>
      <p className="text-4xl mt-4 text-black">Halaman Tidak Ditemukan</p>
      <button
        onClick={handleGoHome}
        className="mt-16 px-4 py-2 text-2xl bg-customBlue text-white rounded-lg hover:bg-click"
      >
        Kembali ke Beranda
      </button>
    </div>
  );
};

export default NotFoundPage;
