import React, { useState } from "react";
import { Link } from "react-router-dom";
// Komponen MessageList untuk menampilkan daftar pesan
function MessageList({ messages }) {
  return (
    <div
      className="flex flex-col space-y-4 overflow-y-auto flex-grow p-4"
      style={{ maxHeight: "60vh" }}
    >
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex items-start ${
            msg.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          {msg.sender === "bot" && (
            <img
              src="src/assets/iconai.png"
              alt="Bot Icon"
              className="w-8 h-8 mr-3"
            />
          )}
          <div
            className={`${
              msg.sender === "user"
                ? "bg-bluebtn text-white"
                : "bg-gray-200 text-gray-800"
            } px-4 py-2 rounded-lg max-w-md`}
          >
            {msg.text}
          </div>
          {msg.sender === "user" && (
            <img
              src="src/assets/user.png"
              alt="User Icon"
              className="w-8 h-8 ml-3"
            />
          )}
        </div>
      ))}
    </div>
  );
}

// Komponen QuestionTemplates untuk menampilkan dan mengelola template pertanyaan
function QuestionTemplates({
  currentQuestions,
  handleTemplateClick,
  handleShuffle,
}) {
  return (
    <div className="mt-10 mb-4 flex space-x-4 overflow-x-auto">
      {currentQuestions.map((template, index) => (
        <div key={index} className="flex items-center space-x-2">
          <button
            onClick={() => handleTemplateClick(template)}
            className="text-black font-semibold py-2 px-4 text-lg rounded-md border border-bluebtn"
          >
            {template}
          </button>
          {index === 1 && (
            <button
              onClick={handleShuffle}
              className="text-gray-700 p-2 rounded-full"
            >
              <img
                src="src/assets/refresh.png"
                alt="Restart Icon"
                className="w-6 h-6"
              />
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

// Komponen ChatInput untuk area input pengguna
function ChatInput({ input, setInput, handleSend }) {
  return (
    <form
      onSubmit={handleSend}
      className="mt-4 flex items-center space-x-4 relative"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Tulis di sini..."
        className="flex-grow p-3 bg-fontblue rounded-lg shadow focus:outline-none pr-12"
      />
      <button
        type="submit"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
      >
        <img src="src/assets/send.png" alt="Send Icon" className="w-6 h-6" />
      </button>
    </form>
  );
}

// Komponen utama Ocobot
function Ocobot() {
  const [messages, setMessages] = useState([
    
  ]);
  const [input, setInput] = useState("");

  const questionTemplates = [
    "Bagaimana cara memilih lokasi yang ideal untuk membangun rumah burung walet?",
    "Apa jenis makanan yang terbaik untuk burung walet?",
    "Bagaimana cara merawat burung walet agar tetap sehat?",
    "Berapa banyak burung walet yang ideal dalam satu rumah?",
    "Apa saja tantangan dalam beternak burung walet?",
  ];

  const [currentQuestions, setCurrentQuestions] = useState([
    questionTemplates[0],
    questionTemplates[1],
  ]);

  const apiUrl =
    "https://chatbot-model-1.1ozzm7icgpkj.us-south.codeengine.appdomain.cloud/ask";

  const handleSend = async (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages((prev) => [...prev, { sender: "user", text: input }]);

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: input }),
        });

        if (response.ok) {
          const data = await response.json();
          const botReply =
            data.answer || "Maaf, saya tidak dapat memahami pertanyaan Anda.";
          setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
        } else {
          setMessages((prev) => [
            ...prev,
            {
              sender: "bot",
              text: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
            },
          ]);
        }
      } catch (error) {
        console.error("Error:", error);
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Tidak dapat terhubung ke server. Periksa koneksi internet Anda.",
          },
        ]);
      }

      setInput("");
    }
  };

  const handleTemplateClick = async (template) => {
    setMessages((prev) => [...prev, { sender: "user", text: template }]);

    try {
      // Panggil API untuk mendapatkan jawaban
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: template }),
      });

      if (response.ok) {
        const data = await response.json();
        const botReply =
          data.answer || "Maaf, saya tidak dapat memahami pertanyaan Anda.";
        setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            text: "Terjadi kesalahan pada server. Silakan coba lagi nanti.",
          },
        ]);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Tidak dapat terhubung ke server. Periksa koneksi internet Anda.",
        },
      ]);
    }
  };

  const handleShuffle = () => {
    const shuffled = [...questionTemplates].sort(() => Math.random() - 0.5);
    setCurrentQuestions([shuffled[0], shuffled[1]]);
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex-grow flex overflow-hidden">
        {/* Left Banner Section */}
        <aside className="w-1/4 p-5 flex flex-col items-center h-full">
          <div
            className="w-full h-full bg-cover bg-no-repeat flex flex-col items-center p-5 mr-9 mt-14"
            style={{ backgroundImage: "url('src/assets/chatbotbanner.png')" }}
          >
            <button>
              <Link
                to="/konsultasi"
                className="w-80 bg-bluebtn text-white font-raleway font-bold text-xl py-5 mt-48 mr-6 rounded-md flex items-center justify-center"
              >
                Konsultasi dengan Pakar
              </Link>
            </button>
            <button className="w-full bg-white font-raleway font-bold text-xl py-5 px-4 mb-4 mt-2 ml-12 rounded-md">
              ChatBot WALET AI
            </button>
          </div>
        </aside>

        {/* Right Chatbot Section */}
        <main className="flex-1 p-10 bg-white mt-14">
          <section className="flex flex-col bg-white rounded-lg p-6 min-h-full">
            <MessageList messages={messages} />
            <QuestionTemplates
              currentQuestions={currentQuestions}
              handleTemplateClick={handleTemplateClick}
              handleShuffle={handleShuffle}
            />
            <ChatInput
              input={input}
              setInput={setInput}
              handleSend={handleSend}
            />
          </section>
        </main>
      </div>
    </div>
  );
}

export default Ocobot;
