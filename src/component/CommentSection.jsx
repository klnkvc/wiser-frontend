import React, { useState } from "react";

const CommentSection = ({ comments }) => {
  const [showComments, setShowComments] = useState(false);

  // Fungsi untuk memformat tanggal
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <>
      <div className="text-center mt-6">
        <button
          onClick={toggleComments}
          className="text-iconig font-semibold hover:underline flex items-center justify-center"
        >
          {showComments ? "Sembunyikan Komentar" : "Lihat Komentar"}
          <span className="ml-2">
            {showComments ? (
              <svg
                width="15"
                height="8"
                viewBox="0 0 15 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform rotate-0 duration-300"
              >
                <path
                  d="M0.330173 7.69408C0.541647 7.88996 0.828428 8 1.12745 8C1.42648 8 1.71326 7.88996 1.92473 7.69408L7.50681 2.52205L13.0889 7.69408C13.3016 7.88441 13.5864 7.98973 13.8821 7.98734C14.1778 7.98496 14.4606 7.87508 14.6697 7.68135C14.8788 7.48763 14.9974 7.22557 15 6.95161C15.0025 6.67765 14.8889 6.41372 14.6834 6.21666L8.30409 0.305919C8.09261 0.110039 7.80583 0 7.50681 0C7.20779 0 6.921 0.110039 6.70953 0.305919L0.330173 6.21666C0.118763 6.4126 0 6.67831 0 6.95537C0 7.23243 0.118763 7.49814 0.330173 7.69408Z"
                  fill="#17466E"
                />
              </svg>
            ) : (
              <svg
                width="15"
                height="8"
                viewBox="0 0 15 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 transition-transform rotate-10 duration-300"
              >
                <path
                  d="M14.6752 0.30592C14.4637 0.11004 14.1769 0 13.8779 0C13.5789 0 13.2921 0.11004 13.0806 0.30592L7.49856 5.47795L1.91648 0.30592C1.7038 0.115591 1.41894 0.0102749 1.12326 0.0126557C0.827585 0.0150366 0.544745 0.124923 0.335662 0.318647C0.126578 0.512371 0.0079813 0.774434 0.0054121 1.04839C0.0028429 1.32235 0.116508 1.58628 0.321926 1.78334L6.70128 7.69408C6.91276 7.88996 7.19954 8 7.49856 8C7.79759 8 8.08437 7.88996 8.29584 7.69408L14.6752 1.78334C14.8866 1.5874 15.0054 1.32169 15.0054 1.04463C15.0054 0.767573 14.8866 0.501859 14.6752 0.30592Z"
                  fill="#17466E"
                />
              </svg>
            )}
          </span>
        </button>
      </div>

      <div className={`comment-section mt-6 space-y-6 ${showComments ? "show" : ""}`}>
      {comments.map((comment, index) => (
  <div key={index} className="border-b border-gray-300 pb-4">
    <h4 className="font-semibold">{comment.user}</h4>
    {/* Format tanggal sebelum ditampilkan */}
    <span className="text-sm text-gray-500">
      {formatDate(comment.date)}
    </span>
    <p className="text-gray-700">{comment.content}</p>
  </div>
))}
      </div>
    </>
  );
};

export default CommentSection;
