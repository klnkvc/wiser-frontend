import React, { useState, useEffect, useRef } from "react";
import ArticleCard from "../component/ArticleCard";

const ArticleDashboard = () => {
  const [articles, setArticles] = useState([]); // Data semua artikel
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);
  const articlesPerPage = 6;
  const articlesRef = useRef(null);

  // Memuat data dari JSON
  useEffect(() => {
    const fetchArticles = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/articles`); // Ambil data dari backend
            if (!response.ok) {
                throw new Error("Gagal memuat data artikel");
            }
            const data = await response.json();
            setArticles(data);
            setFilteredArticles(data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    fetchArticles();
}, []);

  // Fungsi scroll ke bagian artikel
  const scrollToArticles = () => {
    if (articlesRef.current) {
      window.scrollTo({
        top: articlesRef.current.offsetTop - 150, // Sesuaikan jarak offset
        behavior: "smooth",
      });
    }
  };

  // Fungsi menangani Enter pada input pencarian
  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      scrollToArticles();
    }
  };

  // Update filteredArticles berdasarkan searchTerm
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredArticles(articles);
    } else {
      const results = articles.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredArticles(results);
    }
  }, [searchTerm, articles]);

  // Pagination logic
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);

  return (
    <div className="w-full">
      {/* Section untuk background gambar yang memenuhi layar */}
      <div
        className="relative flex flex-col items-center justify-center w-screen min-h-screen mb-32"
        style={{
          backgroundImage: `url(/assets/blog-article/main2.png)`, // Ganti sesuai path gambar
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="absolute inset-0"></div>

        <div className="relative z-10 flex flex-col right-64 top-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-4">
            Blog Artikel
          </h1>

          {/* Search Bar */}
          <div className="relative w-full max-w-md mt-4">
            <span className="absolute inset-y-0 left-3 flex items-center text-white">
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
              placeholder="Cari Blog Artikel"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearchKeyPress}
              className="w-full pl-10 pr-4 py-2 rounded-[7px] border-2 border-iconig bg-white bg-opacity-75 text-iconig focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder:text-iconig"
            />
          </div>
        </div>
      </div>

      {/* Section untuk kartu artikel yang berada di bawah background */}
<div ref={articlesRef} className="px-4 mt-10">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto justify-items-center">
    {
  currentArticles.length > 0 ? (
    currentArticles.map((article) => {
      // Menghapus tag HTML
      const removeHtmlTags = (html) => {
        const div = document.createElement("div");
        div.innerHTML = html;
        return div.textContent || div.innerText || "";
      };

      return (
        <ArticleCard
          key={article.id}
          image={article.image}
          title={
            article.title.length > 50
              ? `${article.title.substring(0, 52)}...`
              : article.title
          }
          description={
            removeHtmlTags(article.content).length > 100
              ? `${removeHtmlTags(article.content).substring(0, 110)}...`
              : removeHtmlTags(article.content)
          }
          link={`/edukasi/blogartikel/${article.id}`}
        />
      );
    })
  ) : (
    <p className="text-center text-gray-500 col-span-3">
      Tidak ada artikel yang cocok dengan pencarian.
    </p>
  )
}
    </div>
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
                currentPage === page + 1
                  ? "bg-customBlue text-click"
                  : " text-gray-700"
              } font-semibold hover:bg-blue-400`}
            >
              {page + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 my-6 rounded-full text-gray-700 font-semibold hover:bg-gray-300"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleDashboard;
