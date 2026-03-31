import React from 'react';
import './App.css';
import fotoProfil from './img_mnh/mnh.png';

export default function ProfilHadi() {
  const nama = "Muhammad Nur Hadi";
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6">
      <div className="max-w-11/12 mx-auto">
        {/* Card Utama */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header Background */}
          <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
          {/* Konten Profil */}
          <div className="px-8 pb-8">
            {/* Foto Profil */}
            <div className="flex justify-center -mt-20 mb-6">
              <div className="w-40 h-40 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200">
                <img 
                  src={fotoProfil} 
                  alt="Foto Profil" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Nama */}
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">{nama}</h1>
            
            {/* Divider */}
            <div className="flex justify-center mb-6">
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"></div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 bg-gray-50 p-6 rounded-xl">
              <div className="space-y-1">
                <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Kampus</p>
                <p className="text-lg text-gray-800 font-medium">Universitas Brawijaya</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Kelas</p>
                <p className="text-lg text-gray-800 font-medium">T2C</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Prodi</p>
                <p className="text-lg text-gray-800 font-medium">Teknologi Informasi</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Domisili</p>
                <p className="text-lg text-gray-800 font-medium">Kota Malang, Jawa Timur</p>
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide">Status</p>
                <p className="text-lg text-gray-800 font-medium">Aktif</p>
              </div>
            </div>

            {/* Tentang Diri */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Tentang Diri
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify">
                Saya adalah seorang mahasiswa Teknologi Informasi yang memiliki semangat tinggi dalam bidang AI, Pengembangan Sistem dan AI.<br/> 
                Saya memiliki minat yang kuat dalam perancangan sistem, menganalisi sistem dalam pengembangan web dan aplikasi mobile dengan memanfaatkan teknologi modern seperti AI dalam proses pembelajaran. <br/>
                Saya yakin bahwa kolaborasi dan kerja sama tim merupakan kunci penting dalam menghadapi berbagai tantangan di dunia teknologi. Selain itu, saya juga aktif mengikuti kegiatan akademik maupun non-akademik untuk memperluas wawasan serta meningkatkan kompetensi di bidang pemrograman dan inovasi digital.
              </p>
            </div>

            {/* Menu Buttons */}
            <div className="flex justify-center gap-4">
              <a 
                href="https://www.instagram.com/mnh.nhadi37/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
              >
                Instagram
              </a>
              <a 
                href="https://www.linkedin.com/in/muhamad-nur-hadi-373087265/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
              >
                Linkedin
              </a>
              <a 
                href="https://mnhmuhammadnurhadi-7.github.io/mnh-portofolio/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
              >
                Portofolio
              </a>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              <a 
                href="/"
                className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition duration-300"
              >
                Kembali
              </a>
            </div>
          </div>
        </div>

        {/* Dekorasi Bottom */}
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          
          <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}