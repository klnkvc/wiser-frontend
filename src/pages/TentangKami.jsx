import React from "react";
import walet1 from "../assets/photo-tk/img-tk1.png";
import walet2 from "../assets/photo-tk/img-tk2.png";
import walet3 from "../assets/photo-tk/img-tk3.png";
import TeamCard from "../component/TeamCard";
import TeamSection from "../component/TeamSection";
import ContactSection from "../component/ContactSection";
import FAQSection from "../component/FAQSection";

const TentangKami = () => {
  return (
    <>
      
{/* Main Content Tentang Kami */}
<div className="container mx-auto px-4 pt-40 py-10"> {/* Menambahkan pt-32 untuk mengimbangi tinggi navbar */}
  {/* Title */}
  <h1 className="text-5xl font-bold text-center mb-12">Tentang Kami</h1>

  {/* Images Layout with Double Overlay */}
  <div className="relative max-w-3xl mx-auto grid grid-rows-2 gap-4">
    {/* Large Top Image */}
    <img
      src={walet1}
      alt="Image 1"
      className="w-full h-[500px] object-cover rounded-lg shadow-md row-span-1"
    />

    {/* Bottom Images */}
    <div className="grid grid-cols-2 gap-4">
      <img
        src={walet2}
        alt="Image 2"
        className="w-full h-auto object-cover rounded-lg shadow-md"
      />
      <img
        src={walet3}
        alt="Image 3"
        className="w-full h-auto object-cover rounded-lg shadow-md"
      />
    </div>

    {/* Double Overlay Text positioned in the center of all images */}
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Background Overlay (Slightly Larger and Centered) */}
      <div className="absolute bg-border bg-opacity-30 border-[1px] border-iconig rounded-lg backdrop-blur-sm shadow-lg"
           style={{
             width: "70%",  // Sedikit lebih besar dari overlay utama
             height: "35%",
             transform: "translate(0, 0)"  // Mengatur posisi agar berada di tengah overlay utama
           }}>
      </div>
      
      {/* Main Overlay (Foreground) */}
      <div className="relative bg-[#0B0D0F] p-6 text-center  max-w-md shadow-lg backdrop-blur-sm bg-opacity-25">
        <h2 className="text-6xl font-extrabold mb-1 text-[#D1D0D0] ">WISER</h2>
        <p className="text-[#F3F1F1] font-bold text-[13px]">
          <br />
          WISER adalah aplikasi inovatif yang dirancang untuk memudahkan para peternak dalam memulai dan mengelola budidaya sarang burung walet. WISER merupakan kependekan dari Walet Integrated Sustainable Ecosystem, yang menawarkan berbagai fitur untuk meningkatkan efisiensi dan efektivitas dalam menjalankan usaha budidaya.
        </p>
      </div>
    </div>
  </div>
</div>



{/* Visi dan Misi */}
<div className="w-full bg-gradient-to-b from-[#7DBCE7] from-0% via-[#C2E0F4]/75 via-30% to-[#A3D0EE]/50 to-96% py-10">
  <div className="container mx-auto px-4">
    {/* Visi dan Misi Section */}
    <div className="w-full mx-auto bg-opacity-0 p-10 rounded-lg  text-center">
      {/* Visi */}
      <h2 className="text-3xl font-bold mb-4">Visi</h2>
      <p className="text-black font-medium mb-8">
        Menjadi platform terdepan yang memajukan budidaya sarang burung walet melalui informasi, teknologi, dan konsultasi yang inovatif, guna meningkatkan kualitas dan keberlanjutan usaha bagi petani walet di seluruh Indonesia.
      </p>

      {/* Misi */}
      <h3 className="text-3xl font-bold mb-4">Misi</h3>
      <ol className="text-black font-medium text-left list-decimal list-inside space-y-4">
        <li>
          Memberikan akses informasi yang bermanfaat bagi petani walet pemula hingga berpengalaman, sehingga mereka dapat menjalankan usaha dengan lebih terstruktur dan berdaya saing.
        </li>
        <li>
          Menyediakan platform konsultasi dengan para pakar untuk membantu petani walet mengatasi tantangan operasional dan meningkatkan produktivitas budidaya.
        </li>
        <li>
          Menghadirkan solusi manajemen modern yang mendukung efisiensi dan efektivitas dalam budidaya sarang burung walet, termasuk fitur pengingat dan pencatatan keuangan yang mudah diakses.
        </li>
      </ol>
    </div>
  </div>
</div>

    <div className="bg-gradient-to-b from-white from-70% to-[#BFDDF1] to-85% min-h-screen">
    <TeamSection/>
    <ContactSection/>
    </div> 
    <div className="bg-gradient-to-t from-white from-75%  to-[#BFDDF1] to-100% min-h-screen">
    <FAQSection/>
    </div>
    </>
  );
};

export default TentangKami;
