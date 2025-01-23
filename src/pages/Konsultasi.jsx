import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { Link } from "react-router-dom";

function Konsultasi() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    "Bersama Pakar WISER, Sukses Budidaya Walet Ada di Tangan Anda!",
    "Bawa Budidaya Sarang Walet Mu ke Level Selanjutnya!",
    "Konsultasikan dengan Ahli Walet Terbaik",
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  return (
    <div className="flex min-h-screen w-screen overflow-x-hidden">
      {/* Left Banner Section */}
      <aside className="w-1/4 p-5 flex flex-col items-center min-h-screen">
        <div
          className="w-full h-full bg-cover bg-no-repeat flex flex-col items-center p-5 mr-9 mt-14"
          style={{ backgroundImage: "url('src/assets/banner.png')" }}
        >
          <button className="w-full bg-white font-raleway font-bold text-xl py-5 px-4 mb-4 mt-48 ml-12 rounded-md">
            Konsultasi dengan Pakar
          </button>
          <button className="w-80 bg-bluebtn text-white font-raleway font-bold text-xl py-5 rounded-md">
          <Link
            to="/chatbot"
            className="w-80 bg-bluebtn text-white font-raleway font-bold text-xl py-5 rounded-md text-center"
          >
            ChatBot WALET AI
          </Link>
          </button>
        </div>
      </aside>

      {/* Right Content Section */}
      <main className="flex-1 p-10 min-h-screen mt-20 ml-12">
        <header className="mb-6">
          <h1 className="text-4xl font-extrabold font-raleway">Konsultasi</h1>
          <br />
          <p className="text-lg font-raleway font-semibold">
            Konsultasikan Masalah Mu Dengan Para Pakar WISER
          </p>
        </header>

        {/* Carousel Section */}
        <section className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${currentIndex * 33.33}%)`,
              width: `${items.length * 33.33}%`,
            }}
            {...swipeHandlers}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="w-2/5 bg-gradient-to-b from-conscars1 to-conscars2 p-60 rounded-lg shadow-lg flex-shrink-0 mx-2 text-center relative"
                style={{ height: "200px" }}
              >
                <div className="text-2xl font-bold mb-10 -mt-12">{item}</div>

                {/* Indicator inside each box */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {items.map((_, dotIndex) => (
                    <span
                      key={dotIndex}
                      className={`h-2 w-8 rounded-full transition-colors duration-300 ${
                        dotIndex === currentIndex
                          ? "bg-bluebtn px-11"
                          : "bg-purewhite px-11"
                      }`}
                    ></span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experts Section */}
        <section className="mt-10">
          <h2 className="text-4xl font-extrabold font-raleway mb-6 text-black bg-birulembut py-5 pl-10">
            Pakar Wiser
          </h2>
          <div className="grid grid-cols-2 gap-8">
            {/* Expert Card 1 */}
            <Link
              to="/pakar/fadli-sileuer"
              className="flex flex-col items-center w-60 mx-auto ml-36"
            >
              <img
                src="src/assets/people1.png"
                alt="Pak Fadli Sileuer"
                className="w-full h-80 object-cover"
              />
              <div className="w-full shadow-black bg-gradient-to-br from-[#A3D0EE]/[0.25] via-[#A3D0EE]/[1.0] to-[#A3D0EE]/[1.0] text-center py-20 shadow-md">
                <h3 className="text-lg font-semibold">Pak Fadli Sileuew</h3>
                <p className="text-gray-700">Bandung</p>
              </div>
            </Link>

            {/* Expert Card 2 */}
            <Link
              to="/pakar/muh-rayhan"
              className="flex flex-col items-center w-60 mx-auto -ml-96"
            >
              <img
                src="src/assets/people2.png"
                alt="Pak Muh. Rayhan"
                className="w-full h-80 object-cover"
              />
              <div className="w-full shadow-black bg-gradient-to-br from-[#A3D0EE]/[0.25] via-[#A3D0EE]/[1.0] to-[#A3D0EE]/[1.0] text-center py-20 shadow-md">
                <h3 className="text-lg font-semibold">Pak Muh. Rayhan</h3>
                <p className="text-gray-700">Palopo</p>
              </div>
            </Link>

            {/* Expert Card 3 */}
            <Link
              to="/pakar/rizky-andika"
              className="flex flex-col items-center w-60  mx-auto  ml-36"
            >
              <img
                src="src/assets/people3.png"
                alt="Pak Rizky Andika"
                className="w-full h-80 object-cover"
              />
              <div className="w-full shadow-black bg-gradient-to-br from-[#A3D0EE]/[0.25] via-[#A3D0EE]/[1.0] to-[#A3D0EE]/[1.0] text-center py-20 shadow-md">
                <h3 className="text-lg font-semibold">Pak Rizky Andika</h3>
                <p className="text-gray-700">Jakarta</p>
              </div>
            </Link>

            {/* Expert Card 4 */}
            <Link
              to="/pakar/ahmad-hidayat"
              className="flex flex-col items-center w-60  mx-auto -ml-96"
            >
              <img
                src="src/assets/people4.png"
                alt="Pak Ahmad Hidayat"
                className="w-full h-80 object-cover"
              />
              <div className="w-full shadow-black bg-gradient-to-br from-[#A3D0EE]/[0.25] via-[#A3D0EE]/[1.0] to-[#A3D0EE]/[1.0] text-center py-20 shadow-md">
                <h3 className="text-lg font-semibold">Pak Ahmad Hidayat</h3>
                <p className="text-gray-700">Surabaya</p>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Konsultasi;
