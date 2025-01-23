import FAQItem from "./FAQItem";
import waletfaq from "../assets/photo-tk/waletfaq.png";

const FAQSection = () => {
  const faqData = [
    {
      question: "Apa itu aplikasi WISER?",
      answer: "WISER merupakan kependekan dari Walet Integrated Sustainable Ecosystem, yang dalam aplikasi ini menyajikan berbagai fitur untuk mempermudah memulai dan mengelola budidaya sarang burung walet.",
    },
    {
      question: "Apa kegunaan dari aplikasi WISER?",
      answer: "Aplikasi WISER berguna untuk memudahkan manajemen budidaya sarang burung walet, termasuk pencatatan keuangan yang teroraganisir, memungkinkan konsultasi dengan pakar untuk mendapatkan saran profesional, serta menyediakan informasi terkini mengenai burung walet, sarangnya, dan teknik budidaya terbaru ",
    },
    {
      question: "Untuk menghubungi pakar, apakah saya harus mendownload aplikasi WISER?",
      answer: "Ya, aplikasi WISER menyediakan fitur konsultasi dengan pakar untuk memudahkan Anda dalam pengelolaan budidaya walet.",
    },
    {
      question: "Apakah aplikasi WISER menyediakan fitur pengingat atau jadwal untuk pengelolaan budidaya walet?",
      answer: "Ya, aplikasi WISER memiliki fitur pengingat dan pengelolaan jadwal untuk memudahkan pengelolaan usaha Anda.",
    },
  ];

  return (
    <>
    <div className="w-full py-16 px-4  flex justify-center ">
      <div className="max-w-4xl w-full grid md:grid-cols-2 gap-12 md:place-items-start items-center border-b-[5px] border-border pb-32">
        {/* Header FAQ */}
        <h2 className="text-5xl font-bold text-gray-800 mb-8 text-left pb-6 border-b-[5px] border-border">
        Frequently Asked
              <br />
              
              Question (FAQ)

        </h2>

        <div className="flex flex-col md:flex-row items-start md:space-x-8"></div>

        {/* Kolom Kiri - Gambar Bulat */}
        
        <div className="flex justify-center">
            
          <img 
            src={waletfaq}
            alt="FAQ"
            className="md:w-96 md:h-96 w-72 h-72  rounded-full object-cover shadow-lg sticky top-20" // sticky untuk menjaga gambar tetap di tempat saat scroll
          />
        </div>

        {/* Kolom Kanan - Daftar FAQ */}
        <div>
          
          <div className="space-y-6 text-left">
            {faqData.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default FAQSection;
