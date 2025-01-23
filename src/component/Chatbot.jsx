import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import ChatbotIcon from "../assets/Chatbot/ChatbotIcon.png";
import ChatbotIcon2 from "../assets/Chatbot/ChatbotIcon2.png";
import ToChatbot from "../assets/Chatbot/ToChatbot.png";
import CloseIcon from "../assets/Chatbot/CloseIcon.png";
import UserIcon from "../assets/Chatbot/UserIcon.png";

import "../assets/Chatbot/Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const API_URL =
    "https://chatbot-model-1.1ozzm7icgpkj.us-south.codeengine.appdomain.cloud/ask";

  const toggleChatbot = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return; // Jangan kirim jika input kosong

    const userMessage = {
      sender: "user",
      text: input,
    };

    // Tambahkan pesan pengguna ke daftar pesan
    setMessages((prev) => [...prev, userMessage]);
    setInput(""); // Bersihkan input

    try {
      // Kirim permintaan ke API
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: input }),
      });

      if (!response.ok) {
        throw new Error("Gagal mendapatkan respons dari API");
      }

      const data = await response.json();
      const botMessage = {
        sender: "bot",
        text: data.answer, // Sesuaikan dengan format respons API Anda
      };

      // Tambahkan pesan bot ke daftar pesan
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage = {
        sender: "bot",
        text: "Maaf, terjadi kesalahan. Coba lagi nanti.",
      };

      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chatbotPopup"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="relative w-[400px] h-[530px] bg-border shadow-lg rounded-lg mb-4 flex flex-col"
            style={{ maxWidth: "90vw", maxHeight: "90vh" }}
          >
            <div className="text-center bg-transparent p-4 rounded-t-lg relative flex flex-col items-center justify-center">
              <img
                src={ChatbotIcon2}
                alt="Chatbot Logo"
                className="w-10 h-10 mb-2"
              />
              <div className="bg-white text-black font-bold px-4 py-1 rounded-full shadow-md mb-1">
                WALET AI
              </div>
              <p className="text-white">Ada Pertanyaan? Yuk cari tahu!</p>
              <div className="absolute top-2 right-2 cursor-pointer">
                <button>
                  <Link to="/chatbot">
                  <img
                  src={ToChatbot}
                  alt="menuju chatbot"
                  onClick={toggleChatbot}
                  className="w-5 h-5"
                />
                  </Link>
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-scroll hide-scrollbar p-8 space-y-4 bg-white rounded-t-[100px] text-xs leading-relaxed">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-3 ${
                    message.sender === "user" ? "justify-end" : ""
                  }`}
                >
                  {message.sender === "bot" && (
                    <img
                      src={ChatbotIcon2}
                      alt="Chatbot Logo"
                      className="w-8 h-8"
                    />
                  )}
                  <div
                    className={`p-3 max-w-[70%] rounded-b-xl ${
                      message.sender === "user"
                        ? "rounded-l-xl bg-[#DCE8F3] text-right"
                        : "rounded-r-xl bg-customBlu"
                    }`}
                  >
                    <p className="text-black font-medium">{message.text}</p>
                  </div>
                  {message.sender === "user" && (
                    <img src={UserIcon} alt="User Icon" className="w-7 h-7" />
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center p-4 bg-[#D6E1EE]">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Tulis pertanyaanmu ke sini..."
                className="flex-1 p-5 ml-5 bg-transparent text-iconig placeholder-iconig outline-none font-medium"
              />
              <button className="mr-5" onClick={handleSendMessage}>
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.1353 1.58402L10.1353 12.584M21.1353 1.58402L14.1353 21.584L10.1353 12.584M21.1353 1.58402L1.13525 8.58402L10.1353 12.584"
                    stroke="#246AA4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="rounded-full overflow-hidden cursor-pointer transition-transform transform hover:scale-110"
        style={{ width: "60px", height: "60px" }}
        onClick={toggleChatbot}
      >
        <AnimatePresence>
          {!isOpen ? (
            <motion.img
              key="chatbotIcon"
              src={ChatbotIcon}
              alt="Chatbot Icon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="w-full h-full"
            />
          ) : (
            <motion.img
              key="closeIcon"
              src={CloseIcon}
              alt="Close Icon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              className="w-full h-full"
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Chatbot;
