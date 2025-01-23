import wallet1 from '../assets/Wallet1.png';

const Artikel = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end">
        <input type="text" placeholder="Search" className="p-2 border rounded-md" />
      </div>
      <h1 className="text-3xl font-bold text-center mt-4">Blog Artikel</h1>

      <div className="mt-4">
        <a href="#" className="block relative w-full">
        <img  src={wallet1} alt="Deskripsi Gambar" className="w-full max-w-md h-auto rounded-md shadow-md"/>
          <div className="absolute bottom-4 right-4 rounded-full bg-gray-800 text-white p-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Artikel;