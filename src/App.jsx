import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import HomePage from "./pages/HomePage";
import Materipage from "./pages/MateriPage";

import MateriDetailPage from './pages/MateriDetailPage';
import MateriVidPage from './pages/MateriVidPage';
import NotFound from './pages/NotFoundPage'; // Buat halaman 404 jika belum ada

import TentangKami from "./pages/TentangKami";
import ArticleDashboard from "./pages/ArticleDashboard";
import BlogArticle from "./pages/BlogArticle";

import DashboardBerita from "./pages/Berita/DashboardBerita";
import BeritaDetail from "./pages/Berita/BeritaDetail";
import Chatbot from "./component/Chatbot";

import Konsultasi from "./pages/Konsultasi";
import Pakar from "./component/pakar";

import EdukasiPage from "./pages/EdukasiPage";

import ScrollToTop from "./component/ScrollToTop";
import "./App.css";
import "./index.css";
import Ocobot from "./pages/ocobot";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Scroll to Top */}
        <ScrollToTop />

        {/* Navbar */}
        <Navbar />

        <main className="flex-grow">
          <Routes>
            {/* Halaman Utama */}
            <Route path="/" element={<HomePage />} />

            {/* Konsultasi */}
            <Route path="/konsultasi" element={<Konsultasi />} />
            <Route path="/pakar/:pakarId" element={<Pakar />} />{" "}
            <Route path="/chatbot" element={<Ocobot/>} />

            <Route path="/edukasi" element={<EdukasiPage />} />

            {/* Materi Pages */}
            <Route path="/edukasi/materipage" element={<Materipage />} />

            {/* MateriDetail Pages */}
            <Route path="/edukasi/materipage/materi/:id" element={<MateriDetailPage />} />
            
            {/* MateriVid Pages */}
            <Route path="/edukasi/materipage/materivideo/:id" element={<MateriVidPage />} /> 
            
            {/* Route NotFound */}
            <Route path="*" element={<NotFound />} />

            {/* Laman Dashboard Artikel */}
            <Route path="/edukasi/blogartikel" element={<ArticleDashboard />} />
            <Route path="/edukasi/blogartikel/:id" element={<BlogArticle />} />

            {/* Route ke halaman detail berita dengan ID */}
            <Route path="/edukasi/berita/:id" element={<BeritaDetail />} />

            {/* Dashboard Berita */}
            <Route path="/edukasi/berita" element={<DashboardBerita />} />

            {/* Tentang Kami */}
            <Route path="/tentang-kami" element={<TentangKami />} />
          </Routes>
        </main>

        <Chatbot />
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
