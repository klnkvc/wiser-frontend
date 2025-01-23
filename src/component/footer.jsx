// src/component/Footer.jsx
import React from 'react';
import logo from '../assets/logo.png'; // Replace with the path to your logo
import instagramIcon from '../assets/ig.png'; // Path to your Instagram icon
import tiktokIcon from '../assets/tiktok.png'; // Path to your TikTok icon
import emailIcon from '../assets/email.png'; // Path to your Email icon

const Footer = () => {
  return (
    <footer className="bg-customBlue text-putih py-8">
      <div className="container mx-auto pl-0 md:pl-0 flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
        
        {/* Logo and Company Info */}
        <div className="flex flex-col items-start space-y-3 -ml-8 md:-ml-64"> 
          <img src={logo} alt="Wiser Logo" className="h-40 w-40 mb-10 -ml-5" />
          <h2 className="text-3xl font-bold text-putih font-raleway">Wiser</h2> 
          <p className="text-lg text-putih font-raleway">
            WISER membantu para Pembudidaya Sarang Burung Walet untuk
          </p>
          <p className="text-lg text-putih font-raleway">
            meningkatkan produksi dan efisiensi budidayanya
          </p>

        
          <div className="text-base space-y-1 mt-6 text-left"> 
            <h3 className="text-xl font-bold text-putih font-raleway mt-4">Alamat:</h3>
            <p className="font-raleway text-putih">Jl. Pegangsaan Timur No. 56, Jakarta Barat</p>
          </div>
          <div className="text-base space-y-1 mt-6 text-left">
            <h3 className="text-xl font-bold text-putih font-raleway mt-4">Kontak:</h3>
            <p className="font-raleway text-putih">+62 83896078430</p>
          </div>
        </div>

        <div className="flex items-center space-x-12 py-36"> 
          <a href="#" className="text-raleway font-bold text-fontblue text-xl">Beranda</a>
          <a href="#" className="text-raleway font-bold text-fontblue text-xl">Konsultasi</a>
          <a href="#" className="text-raleway font-bold text-fontblue text-xl">Edukasi</a>
          <a href="#" className="text-raleway font-bold text-fontblue text-xl">Tentang Kami</a>
        </div>
        
      </div>

      <div className=" px-96 ml-128 -mt-40">
        <div className="flex flex-col space-y-3 text-right">
          <a href="https://www.instagram.com" className="flex items-center space-x-2 text-fontblue text-lg">
            <img src={instagramIcon} alt="Instagram" className="h-8 w-8" />
            <span className="font-raleway font-bold">Instagram</span>
          </a>
          <a href="https://www.tiktok.com" className="flex items-center space-x-2 text-fontblue text-lg">
            <img src={tiktokIcon} alt="TikTok" className="h-8 w-8" />
            <span className="font-raleway font-bold">TikTok</span>
          </a>
          <a href="mailto:contact@wiser.com" className="flex items-center space-x-2 text-fontblue text-lg">
            <img src={emailIcon} alt="Email" className="h-8 w-8" />
            <span className="font-raleway font-bold">Email</span>
          </a>
        </div>
      </div>
      
      {/* Copyright Notice */}
      <div className="font-raleway text-fontblue font-semibold text-center mt-40">
        © {new Date().getFullYear()} Wiser. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
