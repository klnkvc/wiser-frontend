import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CommentSection from "../component/CommentSection";

const BlogArticle = () => {
  const { id } = useParams(); // Mengambil parameter id dari URL
  const [article, setArticle] = useState(null);
  const [allArticles, setAllArticles] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: "", text: "" });
  const navigate = useNavigate();

    // Fungsi untuk memformat tanggal
    const formatDate = (isoDate) => {
      const date = new Date(isoDate);
      return date.toLocaleDateString("id-ID", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    };

  // Memuat data artikel dari backend
  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(import.meta.env.VITE_APP_URL+`/api/articles/${id}`); // Ambil data artikel spesifik
        if (!response.ok) {
          throw new Error("Gagal memuat data artikel");
        }
        const data = await response.json();
        // Format tanggal artikel sebelum disimpan
        setArticle({
          ...data.article,
          date: formatDate(data.article.date), // Format tanggal menjadi "22 Oktober 2024"
          references: data.references || [],
        });
        setComments(data.comments || []);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchArticle();
  }, [id]);

    // Fetch semua artikel untuk navigasi
    useEffect(() => {
      const fetchAllArticles = async () => {
        try {
          const response = await fetch(import.meta.env.VITE_APP_URL+"/api/articles");
          if (!response.ok) {
            throw new Error("Gagal memuat semua artikel");
          }
          const data = await response.json();
          setAllArticles(data);
        } catch (error) {
          console.error("Error:", error);
        }
      };
  
      fetchAllArticles();
    }, []);

  // Menangani perubahan input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment({ ...newComment, [name]: value });
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
  
    if (!newComment.name || !newComment.text) {
      alert("Nama dan komentar tidak boleh kosong!");
      return;
    }
  
    const commentPayload = {
      user: newComment.name,
      content: newComment.text,
    };
  
    try {
      // Kirim komentar ke backend
      const response = await fetch(import.meta.env.VITE_APP_URL+`/api/articles/${id}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(commentPayload),
      });
  
      if (!response.ok) {
        throw new Error("Gagal menyimpan komentar");
      }
  
      // Tambahkan komentar baru ke state lokal
      const newCommentWithTime = {
        user: newComment.name,
        content: newComment.text,
        date: new Date().toISOString(),
      };
      setComments((prevComments) => [...prevComments, newCommentWithTime]);
  
      // Reset form komentar
      setNewComment({ name: "", text: "" });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  


  if (!article) {
    return <p className="text-center">Memuat artikel...</p>;
  }

  // Mendapatkan artikel sebelumnya dan selanjutnya
  const currentIndex = allArticles.findIndex((item) => item.id === parseInt(id));
  const previousArticle = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Bar */}
      <div className="mb-16 flex justify-center mt-24">
        <div className="relative w-full max-w-md">
          <span className="absolute inset-y-0 left-3 flex items-center text-border">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.2239 10.1538C17.2239 8.375 16.584 6.85337 15.3044 5.58894C14.0248 4.32452 12.4849 3.69231 10.6846 3.69231C8.88439 3.69231 7.34446 4.32452 6.06484 5.58894C4.78521 6.85337 4.1454 8.375 4.1454 10.1538C4.1454 11.9327 4.78521 13.4543 6.06484 14.7188C7.34446 15.9832 8.88439 16.6154 10.6846 16.6154C12.4849 16.6154 14.0248 15.9832 15.3044 14.7188C16.584 13.4543 17.2239 11.9327 17.2239 10.1538ZM24.6973 22.1538C24.6973 22.6538 24.5124 23.0865 24.1426 23.4519C23.7728 23.8173 23.3349 24 22.8289 24C22.3034 24 21.8655 23.8173 21.5152 23.4519L16.5086 18.5192C14.7668 19.7115 12.8254 20.3077 10.6846 20.3077C9.2931 20.3077 7.96238 20.0409 6.69249 19.5072C5.42259 18.9736 4.32785 18.2524 3.40827 17.3438C2.48869 16.4351 1.75887 15.3534 1.2188 14.0986C0.678727 12.8438 0.408691 11.5288 0.408691 10.1538C0.408691 8.77885 0.678727 7.46394 1.2188 6.20913C1.75887 4.95433 2.48869 3.8726 3.40827 2.96394C4.32785 2.05529 5.42259 1.33413 6.69249 0.800481C7.96238 0.266827 9.2931 0 10.6846 0C12.0762 0 13.4069 0.266827 14.6768 0.800481C15.9467 1.33413 17.0414 2.05529 17.961 2.96394C18.8806 3.8726 19.6104 4.95433 20.1505 6.20913C20.6905 7.46394 20.9606 8.77885 20.9606 10.1538C20.9606 12.2692 20.3572 14.1875 19.1506 15.9087L24.1572 20.8558C24.5172 21.2115 24.6973 21.6442 24.6973 22.1538Z"
                fill="#246AA4"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Cari Blog Artikel"
            className="w-full pl-10 pr-4 py-2 rounded-md border-2 text-border border-border focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder:text-border"
          />
        </div>
      </div>
      
      {/* Title */}
      <h1 className="text-[70px] font-extrabold text-center mb-8">Blog Artikel</h1>
      <h2 className="text-[40px] font-semibold text-center text-black mb-8">
        {article.title}
      </h2>
      <p className="text-center text-2xl text-[#999494] font-light mb-20">
        oleh {article.author} / {article.date}
      </p>

      {/* Main Image */}
      <div className="flex justify-center mb-10">
        <img
          src={article.image}
          alt={article.title}
          className="rounded-lg shadow-md w-full h-auto object-cover"
        />
      </div>

      {/* Article Content */}
      <div
        className="prose prose-lg max-w-fit text-xl text-justify mb-16 mt-20 text-black leading-relaxed"
        dangerouslySetInnerHTML={{ __html: article.content }}
      ></div>

{/* References */}
      {article.references?.length > 0 && (
        <div className="text-black text-xl font-bold mt-6">
          <p>Referensi:</p>
          <ul>
            {article.references.map((ref, index) => (
              <li key={index}>
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-iconig font-normal ml-1 hover:text-blue-900"
                >
                  {ref.description}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center my-16">
        {/* Previous Article */}
        {previousArticle ? (
          <div className="relative">
            <div
              className="absolute top-0 left-0 w-full h-full bg-customBlue rounded-lg"
              style={{ transform: "translateY(-50%)", height: "10px" }}
            ></div>
            <button
              onClick={() => navigate(`/blogartikel/${previousArticle.id}`)}
              className="relative flex items-center px-4 py-2 bg-white text-blue-500 rounded-lg shadow-md hover:bg-gray-100 border border-gray-200"
            >
              <span className="mr-4">
                <svg
                  width="16"
                  height="25"
                  viewBox="0 0 16 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.3882 23.6748C15.7799 23.3365 16 22.8776 16 22.3992C16 21.9208 15.7799 21.4619 15.3882 21.1236L5.04411 12.1922L15.3882 3.2609C15.7688 2.92061 15.9794 2.46484 15.9747 1.99175C15.9699 1.51867 15.7502 1.06613 15.3627 0.731592C14.9753 0.397059 14.4511 0.207305 13.9032 0.203194C13.3553 0.199083 12.8274 0.380946 12.4333 0.709616L0.611838 10.9166C0.220078 11.2549 0 11.7138 0 12.1922C0 12.6707 0.220078 13.1295 0.611838 13.4679L12.4333 23.6748C12.8252 24.0131 13.3566 24.2031 13.9107 24.2031C14.4649 24.2031 14.9963 24.0131 15.3882 23.6748Z"
                    fill="#246AA4"
                  />
                </svg>
              </span>
              <div className="flex flex-col text-right gap-1.5">
                <span className="font-semibold text-sm text-black">
                  Artikel Sebelumnya
                </span>
                <span className="text-xs font-bold text-black">
                  {previousArticle.title.length > 32
                    ? `${previousArticle.title.substring(0, 32)}...`
                    : previousArticle.title}
                </span>
              </div>
            </button>
          </div>
        ) : (
          <div></div>
        )}

        {/* Next Article */}
        {nextArticle ? (
          <div className="relative">
            <div
              className="absolute top-0 right-0 w-full h-full bg-customBlue rounded-lg"
              style={{ transform: "translateY(-50%)", height: "10px" }}
            ></div>
            <button
              onClick={() => navigate(`/edukasi/blogartikel/${nextArticle.id}`)}
              className="relative flex items-center px-4 py-2 bg-white text-blue-500 rounded-lg shadow-md hover:bg-gray-100 border border-gray-200"
            >
              <div className="flex flex-col text-left gap-1.5">
                <span className="font-semibold text-sm text-black">
                  Artikel Selanjutnya
                </span>
                <span className="text-xs font-bold text-black">
                  {nextArticle.title.length > 32
                    ? `${nextArticle.title.substring(0, 32)}...`
                    : nextArticle.title}
                </span>
              </div>
              <span className="ml-4">
                <svg
                  width="16"
                  height="25"
                  viewBox="0 0 16 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.611837 0.551714C0.220078 0.890072 0 1.34892 0 1.82736C0 2.3058 0.220078 2.76465 0.611837 3.10301L10.9559 12.0343L0.611837 20.9657C0.23118 21.306 0.0205498 21.7617 0.0253115 22.2348C0.0300732 22.7079 0.249846 23.1604 0.637295 23.495C1.02474 23.8295 1.54887 24.0193 2.09678 24.0234C2.6447 24.0275 3.17256 23.8456 3.56668 23.5169L15.3882 13.31C15.7799 12.9716 16 12.5128 16 12.0343C16 11.5559 15.7799 11.097 15.3882 10.7587L3.56668 0.551714C3.17481 0.213459 2.64338 0.0234375 2.08926 0.0234375C1.53515 0.0234375 1.00372 0.213459 0.611837 0.551714Z"
                    fill="#246AA4"
                  />
                </svg>
              </span>
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>

      
      {/* Komentar */}
      <div className="container my-20 p-6 bg-bgdropdown rounded-lg shadow-md lg:w-[1200px] mx-auto">
        <h3 className="text-4xl font-semibold mb-4 text-center text-black">Komentar yuk!</h3>
        <form onSubmit={handleSubmitComment} className="space-y-4">
          <div>
            <label className="block text-black font-semibold mb-1">Nama :</label>
            <input
              type="text"
              name="name"
              value={newComment.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-border"
              placeholder="Nama"
            />
          </div>
          <div>
            <textarea
              name="text"
              rows="4"
              value={newComment.text}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-border"
              placeholder="Tulis disini..."
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="px-11 py-2 bg-iconig text-white rounded-md shadow font-bold hover:bg-border"
            >
              Kirim
            </button>
          </div>
        </form>
        <CommentSection comments={comments} />
      </div>
      
    </div>
  );
};

export default BlogArticle;
