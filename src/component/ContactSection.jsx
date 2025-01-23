import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // State untuk menangani pop-up
  const [isLoading, setIsLoading] = useState(false); // State untuk menangani loading state
  const [error, setError] = useState(''); // State untuk menampilkan error message

  // Fungsi untuk menangani perubahan input formulir
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Fungsi untuk menangani validasi formulir
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setError("Semua kolom harus diisi!");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Email tidak valid!");
      return false;
    }

    setError(''); // Reset error jika validasi berhasil
    return true;
  };

// Fungsi untuk mengirim email saat formulir disubmit
const handleSubmit = (e) => {
  e.preventDefault();
  
  if (!validateForm()) return; // Validasi terlebih dahulu sebelum mengirim

  setIsLoading(true); // Set loading saat mengirim formulir
  setIsSubmitted(false); // Reset status pengiriman

  // Kirim data formulir menggunakan EmailJS
  emailjs.sendForm(
    'service_19m3gIL7', // Ganti dengan ID layanan 
    'template_qaj1ufc', // Ganti dengan ID template
    e.target, // Mengirimkan elemen formulir
    'fx95R9h1rBRAe_eGu' // Ganti dengan User ID
  )
  .then((response) => {
    setIsLoading(false); // Set loading selesai
    setIsSubmitted(true); // Menampilkan pop-up sukses

    // Reset form setelah berhasil dikirim
    setFormData({
      name: '',
      email: '',
      message: ''
    });

    // Menyembunyikan pop-up setelah beberapa detik
    setTimeout(() => {
      setIsSubmitted(false); // Menyembunyikan pop-up setelah 3 detik
    }, 3000);
  })
  .catch((error) => {
    setIsLoading(false); // Set loading selesai
    setError("Terjadi kesalahan. Silakan coba lagi.");
    console.log('Terjadi kesalahan:', error);
  });
};

  return (
    <div className="w-full py-16 px-4 flex justify-center">
      <div className="max-w-5xl w-full grid md:grid-cols-2 items-center rounded-lg overflow-hidden">
        
        {/* Kolom Kiri - Pesan Sambutan dengan Lingkaran di Belakang */}
        <div className="relative p-8 text-center flex items-center justify-center bg-opacity-50">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-80 h-80 bg-[#DCE8F3] md:bg-opacity-50 bg-opacity-0 rounded-full"></div>
          </div>

          <div className="relative bg-border bg-opacity-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-border pb-2">
              Jangan Ragu untuk Menghubungi Kami!
            </h3>
            <p className="text-gray-700 border-border border-t-10">
              Kami siap membantu Anda dengan segala kebutuhan dan pertanyaan.
            </p>
          </div>
        </div>

        {/* Kolom Kanan - Formulir Kontak */}
        <div className="bg-white p-8 flex flex-col justify-center">
          <h4 className="text-xl font-bold text-gray-800 mb-4 text-center">Kirim Pesan</h4>
          
          {/* Formulir */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor='name' className="block text-gray-700 font-semibold text-left">Nama</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Masukan Nama Anda"
              />
            </div>
            <div>
              <label htmlFor='email' className="block text-gray-700 font-semibold text-left">Alamat E-mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Masukan email anda"
              />
            </div>
            <div>
              <label htmlFor='message' className="block text-gray-700 font-semibold text-left">Pesan</label>
              <textarea
                 id="message"
                 name="message"
                 value={formData.message}
                 onChange={handleChange}
                className="w-full mt-1 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
                placeholder="Tulis pesan Anda"
              />
            </div>

            {error && <div className="text-red-500 text-sm">{error}</div>}

            <div className="mt-6">
            <button
              type="submit"
              className={`w-full px-4 py-2 text-white font-semibold rounded-md shadow-md ${
                isLoading ? 'bg-customBlue' : 'bg-iconig hover:bg-click'
              }`}
              disabled={isLoading}
            >
              {isLoading ? 'Mengirim...' : 'Kirim Pesan'}
            </button>
          </div>

          </form>

          {/* Pop-up pesan sukses */}
          { isSubmitted && (
            <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-xl font-bold text-iconig">Pesan Anda Berhasil Dikirim!</h2>
                <br />
                <p>Terima kasih telah menghubungi kami. Kami akan segera merespons pesan Anda.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
